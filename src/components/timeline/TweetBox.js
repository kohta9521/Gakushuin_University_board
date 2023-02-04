import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css";
import react, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from "../../firebase"


const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        // forebaseのデータベースにデータを追加する
        // ボタンが押された際にリロードされるのを防ぐ記述
        e.preventDefault();
        
        addDoc(collection(db, "posts"), {
            displayName: "kohta",
            username: "piano_kohta",
            varified: true,
            text: tweetMessage,
            avatar: "",
            // http://shincode.info/wp-content/uploads/2021/12/icon.png
            image: tweetImage,
            timestamp: serverTimestamp(),
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar />
                <input
                    value={tweetMessage}
                    placeholder='いまどうしてる?'
                    type='text'
                    onChange={(e) => setTweetMessage(e.target.value)}
                    >
                </input>
            </div>
            <input
                value={tweetImage}
                className='tweetBox__imageInput'
                placeholder='画像のURlを入力してください'
                type='text'
                onChange={(e) => setTweetImage(e.target.value)}
            >
            </input>
            <Button className='tweetBox__tweetButton' type='submit'
                onClick={sendTweet}>
                ツイートする
            </Button>
        </form>
    </div>
  )
}

export default TweetBox
