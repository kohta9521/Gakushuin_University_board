import React from 'react'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

import { Button } from "@mui/material";

const sidebar = () => {
    return (
    <div className='sidebar'>
        {/* ツイッターアイコン */}
        <TwitterIcon className='sidebar__twitterIcon' />

        {/* sidebarOprion */}
        <SidebarOption text="ホーム" Icon={HomeIcon}/>
        <SidebarOption text="話題を検索" Icon={SearchIcon}/>
        <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
        <SidebarOption text="メッセージ" Icon={MailOutlineIcon}/>
        <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="リスト" Icon={ListAltIcon}/>
        <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>
        <SidebarOption text="もっと見る" Icon={MoreHorizIcon}/>

        {/* ツイートボタン */}
        <Button className='sidebar__tweet' variant="outlined">ツイートする</Button>
    </div>
    )
}

export default sidebar