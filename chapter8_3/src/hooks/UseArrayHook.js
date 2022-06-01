import React from 'react'
import { useArray } from 'react-hookedup'

const UseArrayHook = () => {

    // The Array Hook returns an object with the following:
    // value: The current array
    // setValue: Sets a new array as the value
    // add: Adds a given element to the array
    // clear: Removes all elements from the array
    // removeIndex: Removes an element from the array by its index
    // removeById: Removes an element from the array by its id (assuming that the
    // elements in the array are objects with an id key)

    const { value, add, clear, removeIndex } = useArray(['one', 'two', 'three']);

    return (
        <div>
            <p>current array: {JSON.stringify(value)}</p>
            <button onClick={() => add('test')}>add element</button>
            <button onClick={() => removeIndex(0)}>remove first element</button>
            <button onClick={() => clear()}>clear elements</button>
        </div>
    )
}

export default UseArrayHook