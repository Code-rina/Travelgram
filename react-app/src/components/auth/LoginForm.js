import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import DemoUser from './DemoUser'
import SignUpFormModal from './SignUpFormModal/index';

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
        <img className="home-logo-img" src="https://img-cdn.tnwcdn.com/image?fit=1200%2C675&height=675&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2017%2F01%2FInstagram.jpg&signature=c115cb5317ac745a2f281d71764bc27c" alt="ig_phone_pic_logo"/>
      </div>
      <div className="home-login-container">
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <button type='submit'>Log in</button>
          </div>
        </form>
        <div className="home-demo-div">
          <DemoUser />
        </div>
        <div className="home-signup-from-login">
          <h3>Don't have an account?</h3>
              <div className="home-signup-from-login-button">
                <SignUpFormModal />
              </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
