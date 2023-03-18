import React from 'react'
import './CloseFriends.css'
export default function CloseFriends({user}) {
    return (
        <li className="SidebarFriend">
            <img className='SidebarFriendImg' src={user.profilePicture} alt="" />
            <span className="SidebarFriendName">{user.username}</span>
        </li>
    )
}
