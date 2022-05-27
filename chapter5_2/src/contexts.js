import React from "react"

export const StateContext = React.createContext({
    // Default values
    state: {},
    dispatch: () => {}
})

export const ThemeContext = React.createContext({
    // Default values
    primaryColor: "deepskyblue",
    secondaryColor: "coral"
})