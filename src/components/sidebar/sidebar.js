import React from 'react'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
// 学習院のロゴに置き換えているため本来使用のttwitterアイコンのimportをコメントアウトしています
// import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

import { Button } from "@mui/material";
import "./Sidebar.css";

const sidebar = () => {
    return (
    <div className='sidebar'>
        {/* ツイッターアイコン */}
        {/* <TwitterIcon className='sidebar__twitterIcon' /> */}
        <img className='sidebar__twitterIcon'   src=" http://localhost:3000/images/sakura.jpeg" alt="ロゴ画像" />
        {/* <p>学習院大学　掲示板</p> */}

        {/* sidebarOprion */}
        <SidebarOption text="ホーム" Icon={HomeIcon} active />
        <SidebarOption text="話題を検索" Icon={SearchIcon}/>
        <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
        <SidebarOption text="G-port" Icon={MailOutlineIcon}/>
        <SidebarOption text="WebClass" Icon={BookmarkBorderIcon}/>
        <SidebarOption text="Manaba" Icon={ListAltIcon}/>
        <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>
        <SidebarOption text="もっと見る" Icon={MoreHorizIcon}/>

        {/* ツイートボタン */}
        <Button className='sidebar__tweet' variant="outlined" fullWidth>ツイートする</Button>
    </div>
    )
}

export default sidebar