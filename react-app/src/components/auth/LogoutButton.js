import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { FiLogOut } from 'react-icons/fi'
import '../NavBar/NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className="logout-button" onClick={onLogout}><FiLogOut /></button>;
};

export default LogoutButton;
