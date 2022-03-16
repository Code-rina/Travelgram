
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
// import DemoUser from './auth/DemoUser'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session?.user)
  // console.log("sessionUser::::::::", sessionUser) 
  //null before login, obj with user data after login

  return (
    <nav className="navbar-main-container">
      <ul>
      {sessionUser && 
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>}
        {/* {sessionUser && 
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>}
        {sessionUser && 
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>} */}
        <div className="navbar-demo-container">
          {/* <div className='navbar-demo-button'>
            <DemoUser />
          </div> */}
        </div>
        {sessionUser && 
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>}
        {sessionUser && 
        <li>
          <LogoutButton />
        </li>}
      </ul>
    </nav>
  );
}

export default NavBar;
