import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

const sidebar = () => {
    return (
    <div className='sidebar'>
        {/* ツイッターアイコン */}
        <TwitterIcon className='sidebar--twitterIcon' />

        {/* sidebarOprion */}
        <SidebarOption text="ホーム" Icon={HomeIcon}/>
        <SidebarOption text="話題を検索" Icon={HomeIcon}/>
        <SidebarOption text="通知" Icon={HomeIcon}/>
        <SidebarOption text="メッセージ" Icon={HomeIcon}/>
        <SidebarOption text="ブックマーク" Icon={HomeIcon}/>
        <SidebarOption text="リスト" Icon={HomeIcon}/>
        <SidebarOption text="プロフィール" Icon={HomeIcon}/>
        <SidebarOption text="もっと見る" Icon={HomeIcon}/>

        {/* ツイートボタン */}
    </div>
    )
}

export default sidebar