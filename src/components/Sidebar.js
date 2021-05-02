import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__search'>
                    <SearchIcon className='slidebar__searchIcon' />
                    <input placeholder='Search' className='sidebar__input' />
                </div>
            </div>
            <div className='slidebar__threads'></div>
            <div className='slidebar__bottom'></div>
        </div>
    )
}

export default Sidebar
