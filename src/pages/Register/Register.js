import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='Login'>
        <div className="LoginWrapper">
            <div className="LoginLeft">
                <h3 className="LoginLogo">Facebook</h3>
                <span className="LoginDesc">Connect with friends and world around you on Facebook</span>
            </div>
            <div className="LoginRight">
                <div className="LoginBox">
                    <input placeholder="User Name" className="LoginInput" />
                    <input placeholder="Email/Phone Number" className="LoginInput" />
                    <input placeholder="Password" className="LoginInput" />
                    <button className="LoginButton">Sign Up</button>
                   
                    <button className="LoginRegisterButton">Log Into Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
