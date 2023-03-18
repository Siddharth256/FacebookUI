import React from 'react'
import './Online.css'

export default function Online({user}) {
  return (
    <li className="RightbarFriend">
    <div className="RightbarProfileImgContainer">
      <img src={user.profilePicture} alt="" className="RightbarProfileImg" />
      <span className="RightbarOnline"></span>
    </div>
    <span className="RightbarUserName">{user.username}</span>
  </li>
 
  )
}
