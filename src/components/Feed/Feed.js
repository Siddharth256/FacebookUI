import React from 'react'
import './Feed.css'
import Share from '../Share/Share.js'
import Post from '../Post/Post.js'
import { Posts } from '../../dummyData'
export default function Feed() {
  return (
    <div className='Feed'>
      <div className="FeedWrapper">
        <Share></Share>
        {Posts.map((p)=>(
        <Post key={p.id} post={p}></Post>
        ))}
      </div>
    </div>
  )
}
