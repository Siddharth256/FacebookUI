import React from 'react'
import Feed from '../../components/Feed/Feed'
import Navbar from '../../components/Navbar/Navbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home_Page.css'
export default function Home_Page() {
  return (
    <div>
     <Navbar/>
     <div className="HomeContainer">
     <Sidebar></Sidebar>
     <Feed/>
     <Rightbar/>
     </div>
     
    </div>
  )
}
