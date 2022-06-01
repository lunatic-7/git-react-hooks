import React, { useState } from 'react'
import { useInterval } from 'react-hookedup'

const UseIntervalHooks = () => {

    const [count, setCount] = useState(0)

    useInterval(() => setCount(count + 1), 1000);
    // If we use usual setInterval method we need to write something like this:
    // useEffect(() => {
    //     const interval = setInterval(() => setCount(count + 1), 1000)
    //     return () => clearInterval(interval)
    // })

    return (
        <div>{count} seconds passed!</div>
    )
}

export default UseIntervalHooks