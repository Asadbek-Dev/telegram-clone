import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Sidebar.css'
import { BorderColorOutlined, PhoneOutlined, QuestionAnswerOutlined, Settings } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core'
import SidebarThread from './SidebarThread'
import db, { auth } from '../firebase';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__search'>
                    <SearchIcon className='sidebar__searchIcon' />
                    <input placeholder='Search' className='sidebar__input' />
                </div>
                <IconButton variant='outlined' id='sidebar__button'>
                    <BorderColorOutlined />
                </IconButton>
            </div>
            <div className='sidebar__threads'>
                <SidebarThread />
                <SidebarThread />
            </div>
            <div className='sidebar__bottom'>
                <Avatar className='sidebar__bottom__avatar' onClick={() => auth.signOut()} />
                <IconButton>
                    <PhoneOutlined />
                </IconButton>
                <IconButton>
                    <QuestionAnswerOutlined />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar
