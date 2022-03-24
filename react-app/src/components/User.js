import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPostsThunk } from '../store/post';
import { NavLink } from 'react-router-dom';
import './User.css'

function User() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const oneUser = useSelector((state) => state.session.user)
  const allPosts = useSelector((state) => state?.post?.posts)
  const allPostsArray = Object.values(allPosts)
  const { userId }  = useParams();
  const userPosts = allPostsArray.filter((post) => post?.user_id === +oneUser.id)

  useEffect(() => {
    (async () => {
      await dispatch(getAllPostsThunk())
    })();
  }, [dispatch])



  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="profile-main-div">
      <div className="profile-upper-div">
        <div className="profile-user-icon">
      <div className="profile-icon">
        <i className="fa-solid fa-user"></i>
        </div>
      <h3 className="profile-welcome">Welcome {oneUser.username}!</h3>
      
      <div className="profile-above-ul-div">
            <div className="profile-fullname">Full Name: {oneUser.fullname}</div>
            <div className="profile-username">Email: {oneUser.email}</div>
        </div>
        </div>
        <div className="profile-lower-div">
        <div className="profile-posts-div">
          {userPosts.map((post) => (
            <div className="profile-user-posts">
              <div key={`profile-user-post ${post.id}`}>
                <NavLink key={`profile-user-post ${post.id}`} to={`/posts/${post?.id}`}>

                <div className="profile-post-img-div">
                  <img className="profile-post-img"
                  alt={post?.id}
                  src={post?.image_url}
                  onError={(e) =>
                    (e.target.src = "https://i.gyazo.com/953eaecab771a2f8f4e514e5750531cb.jpg")} 
                    />
                </div>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
        </div>
  );
}
export default User;
