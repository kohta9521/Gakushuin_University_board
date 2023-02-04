import React, { forwardRef } from 'react'
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat } from '@mui/icons-material';

import "./Post.css";

const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar}, ref) =>  {
    return (
        <div className='post' ref={ref}>
            <div className='post__avatar'>
                <Avatar 
                src={avatar}
                />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            {displayName}
                        <span className='post__headerSpecial'>
                            <VerifiedUserIcon className='post__badge' />
                            @{username}
                        </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image}/>
                <div className='post__footer'>
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize='small' />
                    <PublishOutlined fontSize="small" />
                </div>
            </div>
        </div>
    )
}
)

export default Post