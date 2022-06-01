import React from 'react'
import { useHover } from 'react-hookedup'

const UseHoverHook = () => {
    
    const { hovered, bind } = useHover()

    return (
        <div {...bind}>Hover me {hovered && 'T.H.A.N.K.S'}</div>
    )
}

export default UseHoverHook