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
        {/* sidebarOprion */}

        {/* ツイートボタン */}
    </div>
    )
}

export default sidebar