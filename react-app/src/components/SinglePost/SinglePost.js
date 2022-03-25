import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getOnePostThunk } from '../../store/post';
import { deleteOnePostThunk } from '../../store/post';
import EditPostModal from '../EditPost/index';
import GetAllComments from '../GetAllComments/GetAllComments';
import AddCommentModal from '../CreateComment/index';
import EditCommentModal from '../EditComment/index';
// import { deleteOneCommentThunk } from '../../store/comment';
import ErrorPage from '../ErrorPage/ErrorPage';

import './SinglePost.css';



function SinglePost({post_id}){
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.session.user);
    const { id } = useParams()
    // postId above
    // console.log("id::::::", id)
    const post = useSelector((state) => state?.post[id])
    // console.log("post::::::", post)
    // TO DO: clean up code - multiple variables do tha same thing!!!
    const sessionUser = useSelector((state) => state.session?.user)
    // console.log("sessionUser:::::::", sessionUser)
    const onePost = useSelector((state) => state.post[id])
    // const usersComment = useSelector((state) => state.comment?.comments) 
    // console.log("usersComment:::::", usersComment)
    // console.log("post_id::::::", post_id)
    // const allPosts = useSelector((state) => state?.post?.posts)
    // const allPostsArray = Object.values(allPosts)
    // console.log("allPosts.id::::", allPosts)
    const usersComment = useSelector((state) => state.comment?.coments?.user_id)
    const [none, setNone] = useState(false)
    const [load, setLoad] = useState(false)
    
    // console.log("usersComment::::::", usersComment)

    // const comment = useSelector((state) => state.comment?.coments)



    useEffect(() => {
        dispatch(getOnePostThunk(id)).then(data => {
            if(data === undefined) {
                history.push('/404-page-not-found')
            }
        })
    }, [dispatch, id]);

    if (!post) {
        return null
    }

    if (none) {
        return <ErrorPage/>
    }


    if (!user) {
        history.push(`/login`)
    }
    // console.log("posts:::::", post)
    const handleDeletePost = async(e) => {
        e.preventDefault();
        await dispatch(deleteOnePostThunk(post?.id))
        history.push('/')
        
    }

    // if(allPosts.id === undefined) {
    //     history.push('/page-not-found')
    //     }
    
    

    return (
        <div className="single-post-main-container">
            <div className="single-post-sub-container">
          <p className="single-post-username">{post.username}</p>
            <div className="edit-delete-icon">
                {(sessionUser?.id === onePost?.user_id) ? 
                    <div>
                        <EditPostModal />
                    </div>
                : null}
                {(sessionUser?.id === onePost?.user_id) ? 
                    <div>
                        <button className='delete-post-button' onClick={handleDeletePost}>Delete Post</button>
                    </div>
                : null}
            </div>
            <img className='single-post-feed-img'
                alt={post?.image_url}
                src={post?.image_url}
                onError={(e) =>
                (e.target.src =
                    "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
                }
            />
            <div className="single-post-caption">{post?.caption}</div>
            <div>
                <AddCommentModal id={post.id} />
                
                <GetAllComments id={post.id} />

            </div>
            </div>
    </div>
    )
}    

export default SinglePost;