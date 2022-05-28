import React, { useState, useEffect } from 'react'

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

    const [themes, setThemes] = useState([])

    useEffect(() => {
        fetch('/api/themes')
            .then(result => result.json())
            .then(themes => setThemes(themes))
        // We can also shorten the preceding function to .then(setThemes), as we
        // are only passing down the themes argument from .then().

    }, [])

    const isActive = (t) => {
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
    }

    return (
        <div>
            Change theme:
            {themes.map((t, i) =>
                <ThemeItem key={'theme-' + i} theme={t}
                    active={isActive(t)} onClick={() => setTheme(t)} />
            )}
        </div>
    )
}

export default ChangeTheme