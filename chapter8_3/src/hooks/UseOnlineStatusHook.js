import React from 'react'
import { useOnlineStatus } from 'react-hookedup'

const UseOnlineStatusHook = () => {

    const { online } = useOnlineStatus(); // online return boolean.
    return (
        <div>You are {online ? 'online' : 'offline'}!</div>
    )
}

export default UseOnlineStatusHook