
import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import AddPostModal from '../CreatePost/index'
import { BiUser } from 'react-icons/bi'
import User from '../User'
import './NavBar.css'


const NavBar = () => {
  const sessionUser = useSelector((state) => state.session?.user)

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
              <button className="user-btn"><BiUser /></button>
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
