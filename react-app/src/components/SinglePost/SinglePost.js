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
 
    const post = useSelector((state) => state?.post[id])

    const sessionUser = useSelector((state) => state.session?.user)

    const onePost = useSelector((state) => state.post[id])

    const usersComment = useSelector((state) => state.comment?.coments?.user_id)
    const [none, setNone] = useState(false)
    const [load, setLoad] = useState(false)
    


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
    const handleDeletePost = async(e) => {
        e.preventDefault();
        await dispatch(deleteOnePostThunk(post?.id))
        history.push('/')
        
    }

    

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