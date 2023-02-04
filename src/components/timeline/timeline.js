import React, { useEffect } from 'react'
// import react, {useState} from 'react';
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore"; 
import react, { useState } from 'react';
import { effect } from '@chakra-ui/react';

function Timeline() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const postData = collection(db, "posts");
      const q = query(postData, orderBy("timestamp", "desc"));
      getDocs(q).then((querySnapshot) => {
        setPosts(querySnapshot.docs.map((doc) => doc.data()));
      });
    }, []);

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
          key={post.text}
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