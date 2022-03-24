
import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import AddPostModal from '../CreatePost/index'
import User from '../User'
import './NavBar.css'
// import DemoUser from './auth/DemoUser'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session?.user)
  // console.log("sessionUser::::::::", sessionUser) 
  //null before login, obj with user data after login

  return (
    <nav className="navbar-main-container">
      <div className="navbar-sub-container">
        {sessionUser && 
        <div className="nav-logo-div">
          <div className="navbar-left-div">
            <NavLink className="nav-logo" to='/' exact={true} activeClassName='active'>
              Travelgram
            </NavLink>
          </div>
          <div className="navbar-right-div">
          <div className="nav-li">
            <AddPostModal />
          </div>
          <div className="nav-li">
            <NavLink className="nav-user" to={`/users/${sessionUser?.id}`} exact={true} activeClassName='active'>
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </div>
          <div className="nav-li">
            <LogoutButton />
          </div>
          </div>
        </div>
        }
      </div>
    </nav>
  );
}

export default NavBar;
