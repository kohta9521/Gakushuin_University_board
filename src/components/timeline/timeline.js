import React from 'react'
// import react, {useState} from 'react';
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore"; 
import react, { useState } from 'react';

function Timeline() {

  const [posts, setPosts] = useState([]);

  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    setPosts(querySnapshot.docs.map((doc) => doc.data()));
  });

  return (
    <div className='timeline'>
        {/* header */}
        <div className='timeline__header'>
            <h2>ホーム</h2>
        </div>
        {/* tweetbox */}
        <TweetBox />

        {/* post */}
        {posts.map((post) => (
        <Post 
          displayName = {post.displayName}
          username = {post.username}
          varified={post.varified}
          text = {post.text}
          avatar={post.avatar}
          image = {post.image}
        />
        ))}
    </div>
  );
}

export default Timeline;