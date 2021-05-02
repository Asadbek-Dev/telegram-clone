import { Avatar } from '@material-ui/core';
import './SiderbarThread.css'
import React from 'react'

const SidebarThread = () => {
    return (
        <div className='sidebarThread'>
            <Avatar />
            <div className='sidebarThread__details'>
                <h3>Thread name</h3>
                <p>This is the info</p>
                <small className='sidebarThread__timestamp'>timestap</small>
            </div>
        </div>
    )
}

export default SidebarThread
