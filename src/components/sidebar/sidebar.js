import React from 'react'


import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

const sidebar = () => {
    return (
    <div className='sidebar'>
        {/* ツイッターアイコン */}
        <TwitterIcon className='sidebar--twitterIcon' />

        {/* sidebarOprion */}
        <SidebarOption />
        {/* sidebarOprion */}

        {/* ツイートボタン */}
    </div>
    )
}

export default sidebar