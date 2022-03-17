
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>}
        {sessionUser && 
        <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>}
        {sessionUser && 
        <div>
          <AddPostModal />
        </div>}
        {sessionUser && 
        <div>
          <LogoutButton />
        </div>}
      </div>
    </nav>
  );
}

export default NavBar;
