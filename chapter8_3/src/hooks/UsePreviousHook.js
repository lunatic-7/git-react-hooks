import React, { useState } from 'react'
import { usePrevious } from 'react-hookedup'

const UsePreviousHook = () => {

    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            count was {prevCount} and is {count} now.
            <button type='button' onClick={handleClick}>+1</button>
        </div>
    )
}

export default UsePreviousHook