import { Avatar, IconButton } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import React, { useState } from 'react'
import './Thread.css'

const Thread = () => {
    const [input, setInput] = useState('')
    const sendMessage = (event) => {
        event.preventDefault();

        setInput('')
    }
    console.log(input)
    return (
        <div className='thread'>
            <div className='thread__header'>
                <div className='thread__header__contents'>
                    <Avatar />
                    <div className='thread__header__contents__info'>
                        <h4>ThreadName</h4>
                        <h5>Last seen </h5>
                    </div>
                </div>
                <IconButton>
                    <MoreHoriz className='thread__header__details' />
                </IconButton>
            </div>
            <div className='thread__messages'></div>
            <div className='thread__input'>
                <input placeholder='Write a message...' value={input} type='text' onChange={(e) => setInput(e.target.value)} />
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Thread
