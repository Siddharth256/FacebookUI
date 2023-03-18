import React from 'react'
import './Sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import { Users } from '../../dummyData';
import CloseFriends from '../CloseFriends/CloseFriends';
export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className="SidebarWrapper">
        <ul className='SidebarList'>
          <li className="SidebarListItem">
            <RssFeedIcon className='SidebarIcon'></RssFeedIcon>
            <span className="SidebarListItemText">Feed</span>
          </li>
          <li className="SidebarListItem">
            <ChatIcon className='SidebarIcon'></ChatIcon>
            <span className="SidebarListItemText">Chat</span>
          </li>
          <li className="SidebarListItem">
            <PlayCircleIcon className='SidebarIcon'></PlayCircleIcon>
            <span className="SidebarListItemText">Videos</span>
          </li>
          <li className="SidebarListItem">
            <GroupsIcon className='SidebarIcon'></GroupsIcon>
            <span className="SidebarListItemText">Groups</span>
          </li>
          <li className="SidebarListItem">
            <BookmarkIcon className='SidebarIcon'></BookmarkIcon>
            <span className="SidebarListItemText">Bookmarks</span>
          </li>
          <li className="SidebarListItem">
            <HelpOutlineIcon className='SidebarIcon'></HelpOutlineIcon>
            <span className="SidebarListItemText">Help</span>
          </li>
          <li className="SidebarListItem">
            <WorkIcon className='SidebarIcon'></WorkIcon>
            <span className="SidebarListItemText">Work</span>
          </li>
          <li className="SidebarListItem">
            <EventIcon className='SidebarIcon'></EventIcon>
            <span className="SidebarListItemText">Events</span>
          </li>
        </ul>
        <button className='SidebarButton'>Show More</button>
        <hr className='SidebarHr' />
        <ul className="SidebarFriendList">
          {Users.map(u=>(
            <CloseFriends key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
