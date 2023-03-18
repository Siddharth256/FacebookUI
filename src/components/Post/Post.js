import React, { useState } from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
export default function Post({post}) {
  const[like,setLike]=useState(post.like)
  const[isLiked,setIsLiked]=useState(false)
  const likeHandler=()=>{
    setLike(isLiked?like-1:like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='Post'>
      <div className="PostWrapper">
        <div className="PostTop">
            <div className="PostTopLeft">
                <img  className='PostProfileImg' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
                <span className="PostUserName">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                <span className="PostDate">{post.date}</span>
            </div>
            <div className="PostTopRight">
            <MoreVertIcon></MoreVertIcon>
            </div>
        </div>
        <div className="PostCenter">
            <span className="PostText">{post?.desc}</span>
            <img className='PostImg' src={post.photo} alt="" />
        </div>
        <div className="PostBottom">
            <div className="PostBottomLeft">
                <img className='LikeIcon' src="assets/thumb.png" onClick={likeHandler} alt="" />
                <img className='LikeIcon' src="assets/heart.png" onClick={likeHandler}  alt="" />
                <span className="PostLikeCounter">{like} people liked it</span>
            </div>
            <div className="PostBottomRight">
                <span className="PostCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
