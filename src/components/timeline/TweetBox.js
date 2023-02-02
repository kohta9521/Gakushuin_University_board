import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar />
                <input
                    placeholder='いまどうしてる?'
                    type='text'
                    >
                </input>
            </div>
            <input
                className='tweetBox__imageInput'
                placeholder='画像のURlを入力してください'
                type='text'
            >
            </input>
            <Button className='tweetBox__tweetButton' type='submit'>
                ツイートする
            </Button>
        </form>
    </div>
  )
}

export default TweetBox
