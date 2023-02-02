import React from 'react';


const SidebarOption = ({ text, Icon }) => {
    return (
        <div>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
