import React from 'react'
import "./timeline.css";
import TweetBox from "./TweetBox";

function timeline() {
  return (
    <div className='timeline'>
        {/* header */}
        <div className='timeline__header'>
            <h2>ホーム</h2>
        </div>
        {/* tweetbox */}
        <TweetBox />
        {/* post */}
    </div>
  )
}

export default timeline