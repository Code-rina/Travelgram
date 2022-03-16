import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllPostsThunk } from '../../store/post'

import './Home.css';


function Home(){
    const dispatch = useDispatch()
    const allPosts = useSelector((state) => state?.post?.posts)
    // const postsImage = allPosts?.user_id?.image_url;
    // console.log("allPosts::::::", allPosts)
    // const user = useSelector((state) => state.session.user)
    // console.log("user:::::", user)

   const allPostsArray = Object.values(allPosts)
//    console.log("allPostsArray::::::", allPostsArray)
    useEffect(() => {
        dispatch(getAllPostsThunk())
    }, []) 

    return (
        <div className="home-main-container">
            {allPostsArray?.map(post => ( 
                <div className="home-all-posts-container">
                    <div className="home-posts-user">{post?.username}</div>
                        {/* <NavLink key={`single-post-link ${post?.id}`} to{`/${post?.id}`}> */}
                            <div className="home-posts-user">
                                <img
                                    height={500}
                                    width={500}
                                    alt={post?.id}
                                    src={
                                    post?.image_url
                                    ? post?.image_url
                                    : "https://orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg"
                                }
                                />
                            </div>
                        {/* </NavLink> */}
                    
                </div>
            ))}
        </div>
    )
}

export default Home;