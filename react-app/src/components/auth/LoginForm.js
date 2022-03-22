import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import DemoUser from './DemoUser'
import SignUpFormModal from './SignUpFormModal/index';
import './LoginPage.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="home-main-container">
      <div className="home-logo-div">
        <img className="home-logo-img" src="https://thecybersafetylady.com.au/wp-content/uploads/2018/10/Screen-Shot-2018-10-05-at-2.09.37-pm-600x900.png" alt="ig_phone_pic_logo"/>
      </div>
      <div className="home-login-container">
        <div className="logo-login-form">Travelgram</div>
        <form onSubmit={onLogin}>
          <div className="errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="home-email-password-div">
            <label className="home-form-label" 
            htmlFor='email'>Email</label>
            <input className="home-form-input"
              name='email'
              type='text'
              placeholder='Your email here...'
              value={email}
              onChange={updateEmail}
            />
            <label className="home-form-label" 
            htmlFor='password'>Password</label>
            <input className="home-form-input"
              name='password'
              type='password'
              placeholder='Your password here...'
              value={password}
              onChange={updatePassword}
            />
            <div className="login-button-div">
            <button className="login-button"type='submit'>Log in</button>
            </div>
            <div className="home-demo-div">
                <DemoUser />
            </div>
          </div>
        </form>
        <div className="home-signup-div">
        <div className="home-signup-from-login">
          <h3 className="home-dont-have-an-acct-txt">Don't have an account?</h3>
        </div>
        <div className="home-signup-from-login-button">
          <SignUpFormModal />
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
