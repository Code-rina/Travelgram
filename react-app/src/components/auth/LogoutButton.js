import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import { FiLogOut } from 'react-icons/fi'
import '../NavBar/NavBar.css'

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/login')
  };

  return <button className="logout-button" onClick={onLogout}><FiLogOut /></button>;
};

export default LogoutButton;
