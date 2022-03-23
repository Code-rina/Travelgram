import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './ErrorPage.css'

function ErrorPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <div className="error-main-container">
        <div className="error-sub-container">
            <h1 className="error-404">Page not found</h1>
            <h2 className="error-not-found">Looks like you got lost on your way to your future destination.</h2>
            <h3 className="error-go-back-text">Click on the image below to take you back.</h3>
            <div className="error-image-div">
                <NavLink className="error-img-nav" to="/" exact={true} activeClassName='active'>
                    <img className="error-jpg" src="https://miro.medium.com/max/500/1*4c3zLTpjmQgT1r_cBwHjBg.jpeg" alt="error_jpg"></img>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage;