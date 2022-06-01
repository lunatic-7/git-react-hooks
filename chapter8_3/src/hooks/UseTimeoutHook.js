import React, { useState } from 'react'
import { useTimeout } from 'react-hookedup'

const UseTimeoutHook = () => {

    const [ready, setReady] = useState(false)

    useTimeout(() => setReady(true), 10000);
    // If we use usual setTimeout method we need to write something like this:
    // useEffect(() => {
    //     const timeout = setTimeout(() => setReady(true), 10000)
    //     return () => clearTimeout(timeout)
    // })
    return (
        <div>
            {ready ? 'Ready!' : 'waiting...'}
        </div>
    )
}

export default UseTimeoutHook