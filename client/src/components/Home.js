import React, { useState } from 'react'
import Login from '../components/Login.js';
import Signup from '../components/Signup.js';
import image from "../images/tma.jpg"


export default function Home() {

  const [selectedAcc, setSelectedAcc] = useState("login");

  const ondisplayAccType = (type) => {
    if (type === "login") {
      setSelectedAcc("login");
    } else {
      setSelectedAcc("signUp");
    }
  };

  return (
    <div className='main1'>
      <h1 className='h1'>Task Management App</h1>
      <div className='mainContainer'>
        {selectedAcc === "login" ? (
          <div>
            <Login />
            <p>or</p>
            <p onClick={() => ondisplayAccType("signUp")} className="accText">
              Create account
            </p>
          </div>
        ) : (
          <div>
            <Signup/>
            <p>or</p>
            <p onClick={() => ondisplayAccType("login")} className="accText">
              Already have account login
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
