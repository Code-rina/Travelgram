import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm'
// import SignUpForm from './components/auth/SignUpFormModal/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/User';
import ErrorPage from './components/ErrorPage/ErrorPage'
import { authenticate } from './store/session';
import Home from './components/Home/Home'
import AllPosts from './components/AllPosts/AllPosts'
import SinglePost from './components/SinglePost/SinglePost'
import Footer from './components/Footer/Footer'
import { getAllCommentsThunk } from './store/comment'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllCommentsThunk())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    // <BrowserRouter>
    <>
      <NavBar />
      <Switch>
        {/* <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <ProtectedRoute path='/' exact={true} >
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path='/posts' exact={true} >
          <AllPosts />
        </ProtectedRoute>
        <ProtectedRoute path='/posts/:id' exact={true} >
          <SinglePost />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <User />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </>
    // </BrowserRouter>
  );
}

export default App;
