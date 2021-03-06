import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './LoginPage.css'
// import "./navbar.css";

const DemoButton = () => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDemo = async (e) => {
    e.preventDefault();
    const email = "demo@a.a.io";
    const password = "password";
    await dispatch(sessionActions.login(email, password));
    history.push("/");
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <button className="home-demo-button" onClick={handleDemo}>
      Demo
    </button>
  );
};

export default DemoButton;
