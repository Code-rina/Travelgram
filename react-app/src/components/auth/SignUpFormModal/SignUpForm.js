import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import DemoUser from '../DemoUser'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  // const [profileImg, setProfileImg] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  

  const onSignUp = async (e) => {
    e.preventDefault();
    // if (password === confirmPassword) {
    //   setErrors([]);
      const data = await dispatch(signUp(username, fullname, email, password));
      if (data) {
        setErrors(data)
      }
    //   return null;
    // }
    // return setErrors(['Passwords Must Match'])
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

  // useEffect(() => {
  //   const errors = []
  //   if(username?.length > 35) errors.push("Username must be less than 35 characters.")
  //   // if(username?.length === 0) errors.push("Please provide a username.")
  //   if(fullname?.length > 255) errors.push("Full name must be less than 255 characters.")
  //   // if(fullname?.length === 0) errors.push("Please provide a fullname.")
  //   if(email?.length > 255) errors.push("Email must be less than 255 characters.")
  //   // if(email?.length === 0) errors.push("Please provide an email.")
  //   // if(!email?.includes("www" || "." || "@")) errors.push("Please provide a valid email address.")
  //   // if(password?.length === 0) errors.push("Please provide a password.")
  //   // if(confirmPassword?.length === 0) errors.push("Please confirm your password.")
  //   if(password !== confirmPassword) errors.push("Both passwords must match.")
  //   setErrors(errors)
  // }, [username, fullname, email, password, confirmPassword])

  // const updateProfileImg = (e) => {
  //   setProfileImg(e.target.value);
  // };

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
              <label htmlFor='fullname'>Full name</label>
              <input
                className='form-input-field'
                type='text'
                placeholder='Full name'
                name='fullname'
                onChange={updateFullname}
                value={fullname}
              />
              <label htmlFor='username'>Username</label>
              <input
              type='text'
              className='form-input-field'
              placeholder='Username'
              name='username'
              onChange={updateUsername}
              value={username}
              />
              <label htmlFor='email'>Email</label>
              <input
              type='text'
              className='form-input-field'
              placeholder='Email'
              name='email'
              onChange={updateEmail}
              value={email}
              />
              <label htmlFor='password'>Password</label>
              <input
              type='password'
              className='form-input-field'
              placeholder='Password'
              name='password'
              onChange={updatePassword}
              value={password}
              />
              <label htmlFor='confirm_password'>Confirm Password</label>
              <input
                type='password'
                className='form-input-field'
                placeholder='Confirm password'
                name='confirm_password'
                onChange={updateConfirmPassword}
                value={confirmPassword}
                // required={true}
              />
              {/* <input
                type="text"
                className='form-input-field'
                placeholder="Url here ..."
                name='profile_img'
                onChange={updateProfileImg}
                value={profileImg}
                required={true}
              /> */}
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
