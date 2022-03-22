
import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import AddPostModal from '../CreatePost/index'
import './NavBar.css'
// import DemoUser from './auth/DemoUser'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session?.user)
  // console.log("sessionUser::::::::", sessionUser) 
  //null before login, obj with user data after login

  return (
    <nav className="navbar-main-container">
      <div>
      {sessionUser && 
        <ul className="nav-logo-div">
          <NavLink className="nav-logo" to='/' exact={true} activeClassName='active'>
            Travelgram
          </NavLink>
        {/* <li className="nav-li">
          <NavLink className="nav-user" to='/users' exact={true} activeClassName='active'>
            User
          </NavLink>
        </li> */}
        <li className="nav-li">
          <AddPostModal />
        </li>
        <li className="nav-li">
          <LogoutButton />
        </li>
        </ul>}
      </div>
    </nav>
  );
}

export default NavBar;
