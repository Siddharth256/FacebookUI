import React from 'react'
import './LogIn.css'

export default function LogIn() {
  return (
    <div className='Login'>
        <div className="LoginWrapper">
            <div className="LoginLeft">
                <h3 className="LoginLogo">Facebook</h3>
                <span className="LoginDesc">Connect with friends and world around you on Facebook</span>
            </div>
            <div className="LoginRight">
                <div className="LoginBox">
                    <input placeholder="Email/Phone Number" className="LoginInput" />
                    <input placeholder="Password" className="LoginInput" />
                    <button className="LoginButton">Log In</button>
                    <span className="LoginForgot">Forgot Password?</span>
                    <button className="LoginRegisterButton">Create New Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
