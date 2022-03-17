import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import DemoUser from '../DemoUser'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      const data = await dispatch(signUp(username, fullname, email, profileImg, password, confirmPassword));
      if (data) {
        setErrors(data)
      }
      return null;
    }
    return setErrors(['Passwords Must Match'])
  }

  const updateFullname = (e) => {
    setFullname(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const updateProfileImg = (e) => {
    setProfileImg(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-main-box'>
      <div className='signup-elements'>
        <div>
        </div>
        <form className='signup-form-modal' onSubmit={onSignUp}>
          <div className='errors'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label>
              <input
                className='form-input-field'
                type='text'
                placeholder='Full name'
                name='firstName'
                onChange={updateFullname}
                value={fullname}
              />
              <input
              type='text'
              className='form-input-field'
              placeholder='Username'
              name='username'
              onChange={updateUsername}
              value={username}
              />
              <input
                type='text'
                className='form-input-field'
                placeholder='Email'
                name='email'
                onChange={updateEmail}
                value={email}
              />
              <input
              type='password'
              className='form-input-field'
              placeholder='Password'
              name='password'
              onChange={updatePassword}
              value={password}
              />
              <input
                type='password'
                className='form-input-field'
                placeholder='Confirm password'
                name='confirm_password'
                onChange={updateConfirmPassword}
                value={confirmPassword}
                required={true}
              />
              <input
                type="text"
                className='form-input-field'
                placeholder="Url here ..."
                name='profile_img'
                onChange={updateProfileImg}
                value={profileImg}
                required={true}
              />
            </label>
          </div>
          <div>
            <button type='submit' className='signUp-button-form'>Submit</button>
          </div>
        </form>
        <div className='demo-user-button'>
          <DemoUser />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
