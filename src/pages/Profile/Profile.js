import React from 'react'
import Feed from '../../components/Feed/Feed'
import Navbar from '../../components/Navbar/Navbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Profile.css'

export default function Profile() {
    return (
        <div>
            <Navbar />
            <div className="Profile">
                <Sidebar></Sidebar>
                <div className="ProfileRight">
                    <div className="ProfileRightTop">
                        <div className="ProfileCover">
                        <img src="assets/Posts/3.jpg" className='ProfileCoverImg' alt="" />
                        <img src="assets/Profile_Pictures/3.jpg" className='ProfileUserImg' alt="" />
                        </div>
                        <div className="ProfileInfo">
                            <h4 className='ProfileInfoName'></h4>
                            <span className='ProfileInfoDesc'>Hello My Friends</span>
                        </div>
                    </div>
                    <div className="ProfileRightBottom">
                    <Feed />
                    <Rightbar profile />
                    </div>
                </div>
            </div>

        </div>
    )
}
