import React from 'react';

import "./SidebarOption.css";


const SidebarOption = ({ text, Icon }) => {
    return (
        <div className='sidebarOption'>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
