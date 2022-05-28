import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'

// const THEMES = [
//     { primaryColor: 'deepskyblue', secondaryColor: 'coral' },
//     { primaryColor: 'orchid', secondaryColor: 'mediumseagreen' }
// ]

const ThemeItem = ({ theme, active, onClick }) => {
    return (
        <span onClick={onClick} style={{
            cursor: 'pointer',
            paddingLeft: 8, fontWeight: active ? 'bold' : 'normal'
        }}>
            <span style={{
                color: theme.primaryColor
            }}>Primary</span> / <span style={{
                color: theme.secondaryColor
            }}>Secondary</span>
        </span>
    )
}

const ChangeTheme = ({ theme, setTheme }) => {

    const [themes, getThemes] = useResource(() => ({
        url: '/themes',
        method: 'get'
    }))
    // Here, we are using the shorthand syntax for () => { return { } },
    // which is () => ({ }). Using this shorthand syntax allows us to
    // concisely write functions that only return an object.

    // The Resource Hook returns an object with a data value, an isLoading boolean,
    // an error object, and a cancel function to cancel the pending request. Now, we
    // pull out the data value and the isLoading boolean from the themes object:
    const { data, isLoading } = themes

    useEffect(() => getThemes, [getThemes])


    
    const isActive = (t) => {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
    }
    
    return (
        <div>
            { isLoading && "Loading themes..." }
            Change theme:
            {data && data.map((t, i) =>
                <ThemeItem key={'theme-' + i} theme={t}
                    active={isActive(t)} onClick={() => setTheme(t)} />
            )}
        </div>
    )
}

export default ChangeTheme