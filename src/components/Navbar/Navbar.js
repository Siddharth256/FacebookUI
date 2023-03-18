import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Navbar() {
  return (
    <div className='NavbarContainer'>
      <div className="NavbarLeft">
        <span className="logo">Facebook</span>

      </div>
      <div className="NavbarCenter">
        <div className="SearchBar">
            <SearchIcon className='SearchIcon'/>
            <input placeholder='Search Facebook' className='SearchInput'/>
        </div>
      </div>
      <div className="NavbarRight">
        <div className="NavbarLinks">
            <span className="NavbarLink">Homepage</span>
            <span className="NavbarLink">Timeline</span>
        </div>
        <div className="NavbarIcons">
            <div className="NavbarIconItem">
                <PersonIcon></PersonIcon>
                <span className="NavbarIconBadge">1</span>
            </div>
            <div className="NavbarIconItem">
                <ChatIcon/>
                <span className="NavbarIconBadge">2</span>
            </div>
            <div className="NavbarIconItem">
                <NotificationsIcon></NotificationsIcon>
                <span className="NavbarIconBadge">1</span>
            </div>
        </div>
        <img src="/assets/Profile_Pictures/1.jpg" alt="" className="NavbarImage" />
      </div>
    </div>
  )
}
