import React from 'react'
import "./timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore"; 

function timeline() {

  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    console.log(querySnapshot);
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
        <Post 
          displayName = "Kohta"
          username = "piano_kohta"
          varified={true}
          text = "民法は諦め"
          avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
          image = "https://source.unsplash.com/random"
        />
    </div>
  )
}

export default timeline;