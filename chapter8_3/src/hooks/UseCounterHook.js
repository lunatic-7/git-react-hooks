import React from 'react'
import { useCounter } from 'react-hookedup'

const UseCounterHook = () => {

    // It accepts the following configuration options:
    // upperLimit: Defines the upper limit (maximum value) of our counter
    // lowerLimit: Defines the lower limit (minimum value) of our counter
    // loop: Specifies whether the counter should loop (for example, when the
    // maximum value is reached, we go back to the minimum value)
    // step: Sets the default step amount for the increase and decrease functions

    // It returns the following object:
    // value: The current value of our counter.
    // setValue: Sets the current value of our counter.
    // increase: Increases the value by a given step amount. If no amount is specified,
    // then the default step amount is used.
    // decrease: Decreases the value by a given step amount. If no amount is specified,
    // then the default step amount is used.

    const { value, increase, decrease } = useCounter(0, { upperLimit: 3, lowerLimit: 0, loop: true });
    return (
        <div>
            <b>{value}</b>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default UseCounterHook