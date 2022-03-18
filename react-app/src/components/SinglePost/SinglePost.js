import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getOnePostThunk } from '../../store/post';
import { deleteOnePostThunk } from '../../store/post';
import EditPostModal from '../EditPost/index';
import GetAllComments from '../GetAllComments/GetAllComments';

import './SinglePost.css';


function SinglePost(){
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.session.user);
    const { id } = useParams()
    const post = useSelector((state) => state?.post[id])
    const sessionUser = useSelector((state) => state.session?.user)
    // console.log("sessionUser:::::::", sessionUser)
    const onePost = useSelector((state) => state.post[id])
    // console.log("onePost:::::", onePost)

    useEffect(() => {
        dispatch(getOnePostThunk(id))
    }, [dispatch, id]);

    if (!post) {
        return null
    }

    if (!user) {
        history.push(`/login`)
    }
    console.log("posts:::::", post)
    const handleDeletePost = async(e) => {
        e.preventDefault();
        await dispatch(deleteOnePostThunk(post?.id))
        history.push('/')
    }

    return (
        <div className="singlepost-main-container">
          <p>{post.username}</p>
            <div className="edit-delete-icon">
                {(sessionUser?.id === onePost?.user_id) ? 
                    <div>
                        <EditPostModal />
                    </div>
                : null}
                {(sessionUser?.id === onePost?.user_id) ? 
                    <div>
                        <button className='delete-post-button' onClick={handleDeletePost}>Delete</button>
                    </div>
                : null}
            </div>
            <img className='single-post-feed-img'
                alt={post?.image_url}
                src={post?.image_url}
                onError={(e) =>
                (e.target.src =
                    "https://orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg")
                }
            />
            <div className="post-description">{post?.caption}</div>
            <div>
                <GetAllComments />
            </div>
    </div>
    )
}    

export default SinglePost;