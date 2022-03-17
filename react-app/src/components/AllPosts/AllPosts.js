import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getAllPostsThunk } from '../../store/post'

import './AllPosts.css';


function AllPosts(){
    const dispatch = useDispatch()
    const history = useHistory()
    const allPosts = useSelector((state) => state?.post?.posts)
    console.log("allPosts::::::", allPosts)
 
    const user = useSelector((state) => state.session.user.username);
    
    // const { id } = useParams()

   const allPostsArray = Object.values(allPosts)
   console.log("allPostsArray::::::", allPostsArray)
    useEffect(() => {
        dispatch(getAllPostsThunk())
    }, [dispatch]);

    if (!user) {
        history.push(`/login`)
    }

    return (
        <div className="posts-feed-container">
            {allPostsArray?.map((post) => ( 
                <div className="posts-all-container">
                    <div className="posts-user">{post?.username}</div>
                        <Link id="single-post-link" to={`/posts/${post?.id}`}>
                                <img className='posts-feed-image'
                                    alt={post?.id}
                                    src={
                                    post?.image_url ? 
                                    post?.image_url : 
                                    "https://orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg"    
                                    }
                                />
                        </Link>
                    <div className='post-caption'>{post?.caption}</div>
                    
                </div>
            ))}
        </div>
    )
}    

export default AllPosts;