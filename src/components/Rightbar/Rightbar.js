import React from 'react'
import './Rightbar.css'
import { Users } from '../../dummyData'
import Online from '../Online/Online'
import Home_Page from '../../pages/Home/Home_Page';
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="BirthdayContainer">
          <img src="/assets/gift.png" alt="" className="BirthdayImg" />
          <span className="BirthdayText"><b>Vijay Yadav </b>and <b>2 other freinds</b> have a birthday today</span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="RightbarAd" />
        <h4 className="RightbarTitle">Online Friends</h4>
        <ul className="RightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u}></Online>
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar=()=>{
    return(
      <>
       <h4 className='RightbarTitle'>User Information</h4>
       <div className="RightbarInfo">
        <div className="RightbarInfoItem">
          <span className="RightbarInfoKey">City</span>
          <span className="RightbarInfoValue">New York</span>
        </div>
        <div className="RightbarInfoItem">
          <span className="RightbarInfoKey">From</span>
          <span className="RightbarInfoValue">Tokyo</span>
        </div>
        <div className="RightbarInfoItem">
          <span className="RightbarInfoKey">Relationship</span>
          <span className="RightbarInfoValue">Single</span>
        </div>
        <h4 className='RightbarTitle'>User Friends</h4>
        <div className="RightbarFollowings">
          <div className="RightbarFollowing">
          <img src="assets/Profile_Pictures/1.jpg" alt="" className="RightbarFollowingImg" />
          <span className="RightbarFollowingName">Chang</span>
          </div>
          <div className="RightbarFollowing">
          <img src="assets/Profile_Pictures/1.jpg" alt="" className="RightbarFollowingImg" />
          <span className="RightbarFollowingName">Chang</span>
          </div>
          <div className="RightbarFollowing">
          <img src="assets/Profile_Pictures/1.jpg" alt="" className="RightbarFollowingImg" />
          <span className="RightbarFollowingName">Chang</span>
          </div>
          <div className="RightbarFollowing">
          <img src="assets/Profile_Pictures/1.jpg" alt="" className="RightbarFollowingImg" />
          <span className="RightbarFollowingName">Chang</span>
          </div>
          <div className="RightbarFollowing">
          <img src="assets/Profile_Pictures/1.jpg" alt="" className="RightbarFollowingImg" />
          <span className="RightbarFollowingName">Chang</span>
          </div>
          <div className="RightbarFollowing">
          <img src="assets/Profile_Pictures/1.jpg" alt="" className="RightbarFollowingImg" />
          <span className="RightbarFollowingName">Chang</span>
          </div>
          <div className="RightbarFollowing">
          <img src="assets/Profile_Pictures/1.jpg" alt="" className="RightbarFollowingImg" />
          <span className="RightbarFollowingName">Chang</span>
          </div>
          <div className="RightbarFollowing">
          <img src="assets/Profile_Pictures/1.jpg" alt="" className="RightbarFollowingImg" />
          <span className="RightbarFollowingName">Chang</span>
          </div>
        </div>
       </div>
      </>
    )
  }
  return (
    <div className='Rightbar'>
      <div className="RightbarWrapper">
   {profile?<ProfileRightbar></ProfileRightbar>:<HomeRightbar/>}
      </div>
    </div>
  )
}

