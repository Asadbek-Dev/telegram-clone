import { Avatar } from '@material-ui/core';
import './SiderbarThread.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import db from '../firebase';
import { setThread } from '../features/threadSlice'

const SidebarThread = ({ id, threadName }) => {
    const dispatch = useDispatch();
    const [threadInfo, setThreadInfo] = useState([]);

    useEffect(() => {
        db.collection('threads')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setThreadInfo(snapshot.docs.map((doc) => doc.data()))
            )
    }, [id]);



    return (
        <div className='sidebarThread'
            onClick={() => dispatch(setThread({
                thread: id,
                threadName: threadName
            }))}
        >
            <Avatar src={threadInfo[0]?.photo} />
            <div className='sidebarThread__details'>
                <h3>{threadName}</h3>
                {/* <p>{threadInfo[0]?.message}</p> */}
                <p>Hello</p>
                <small className='sidebarThread__timestamp'>
                    {new Date(threadInfo[0]?.timestamp?.toDate()).toLocaleString()}
                </small>
            </div>
        </div>
    )
}

export default SidebarThread
