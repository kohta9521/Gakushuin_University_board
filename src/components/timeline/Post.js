import React from 'react'
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat } from '@mui/icons-material';

function Post() {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h2>Kohta</h2>
                        <span className='post__headerSpecial'>
                            <VerifiedUserIcon className='post__badge' />
                            @kohta
                        </span>
                    </div>
                    <div className='post__headerDescription'>
                        <p>Reactなう</p>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random" alt='サンプル画像'/>
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

export default Post