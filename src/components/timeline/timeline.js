import React, { useEffect } from 'react'
// import react, {useState} from 'react';
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore"; 
import react, { useState } from 'react';
import { effect } from '@chakra-ui/react';
import FlipMove from 'react-flip-move';

function Timeline() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const postData = collection(db, "posts");
      const q = query(postData, orderBy("timestamp", "desc"));
      // getDocs(q).then((querySnapshot) => {
      //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
      // });
      // リアルタイムでデータを取得 onsnapshot
      onSnapshot(q, (querySnapshot) => {
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
        <FlipMove>
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
        </FlipMove>

    </div>
  );
}

export default Timeline;