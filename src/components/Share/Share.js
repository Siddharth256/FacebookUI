import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './Share.css'
export default function Share() {
  return (
    <div className='Share'>
      <div className="ShareWrapper">
        <div className="ShareTop">
            <img className='ShareProfileImg' src="/assets/Profile_Pictures/1.jpg" alt="" />
            <input placeholder="What's in your mind " className='ShareInput' />
        </div>
        <hr className='ShareHr'/>
        <div className="ShareBottom">
            <div className="ShareOptions">
                <div className="ShareOption">
                    <PermMediaIcon htmlColor='tomato' className='ShareIcon'></PermMediaIcon>
                    <span className='ShareOptionText'>Photo or Video</span>
                </div>
                <div className="ShareOption">
                    <LabelIcon htmlColor='blue' className='ShareIcon'></LabelIcon>
                    <span className='ShareOptionText'>Tag</span>
                </div>
                <div className="ShareOption">
                    <LocationOnIcon htmlColor='green' className='ShareIcon'></LocationOnIcon>
                    <span className='ShareOptionText'>Location</span>
                </div>
                <div className="ShareOption">
                    <EmojiEmotionsIcon htmlColor='goldenrod' className='ShareIcon'></EmojiEmotionsIcon>
                    <span className='ShareOptionText'>Fellings</span>
                </div>
            </div>
            <button className='ShareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
