import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css";
import react, { useState } from 'react';

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        // forebaseのデータベースにデータを追加する
        // ボタンが押された際にリロードされるのを防ぐ記述
        e.preventDefault();
        
    };

    return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar />
                <input
                    placeholder='いまどうしてる?'
                    type='text'
                    onChange={(e) => setTweetMessage(e.target.value)}
                    >
                </input>
            </div>
            <input
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
