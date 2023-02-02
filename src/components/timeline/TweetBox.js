import { Bento } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'

const TweetBox = () => {
  return (
    <div className='TweetBox'>
        <form>
            <Avatar />
            <input
                placeholder='いまどうしてる?'
                type='text'
                >
            </input>
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
