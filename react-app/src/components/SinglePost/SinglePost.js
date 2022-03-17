import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getOnePostThunk } from '../../store/post';

import './SinglePost.css';


function SinglePost(){
   const dispatch = useDispatch()
   const history = useHistory()
   const user = useSelector((state) => state.session.user);
   const { id } = useParams()
   const post = useSelector((state) => state?.post[id])
    // console.log("post:::::::",post)
    
    useEffect(() => {
        dispatch(getOnePostThunk(id))
    }, [dispatch, id]);

    if (!post) {
        return null
    }

    if (!user) {
        history.push(`/login`)
    }
    return (
        <div className="singlepost-main-container">
          <p>{post.username}</p>
            <img className='single-post-feed-img'
                alt={post?.image_url}
                src={post?.image_url}
                onError={(e) =>
                (e.target.src =
                    "https://orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg")
                }
            />
            <div className="post-description">{post?.caption}</div>
            {/* <EditPostModal postId={post?.id} /> */}
            {/* <button className="delete-button" onClick={handleDelete}>
                Delete Your Post
            </button> */}
    </div>
    )
}    

export default SinglePost;