import React from 'react'
import "./timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default timeline