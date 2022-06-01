import React from 'react'
import { useBoolean } from 'react-hookedup'

const UseBooleanHook = () => {

    const { toggle, value } = useBoolean(false);
    return (
        <div>
            Click to toggle:
            <button type='button' onClick={toggle}>{value ? "On" : "Off"}</button>
        </div>
    )
}

export default UseBooleanHook