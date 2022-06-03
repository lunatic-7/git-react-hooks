import { useWindowSize } from 'usehooks-ts'
import React, { useContext } from 'react'
import CreatePost from '../post/CreatePost'
import UserBar from '../user/UserBar'
import Header from '../Header'
import ChangeTheme from '../ChangeTheme'
import { ThemeContext, StateContext } from '../contexts'

const HeaderBar = ({ setTheme }) => {

    // console.log(innerWidth);

    const theme = useContext(ThemeContext);
    const { state } = useContext(StateContext);
    const { user } = state
    const { width } = useWindowSize();
    const mobilePhone = width < 640;
    return (
        <div>
            <Header text="React Hooks Blog" />
            {!mobilePhone && <ChangeTheme theme={theme} setTheme={setTheme} />}
            {!mobilePhone && <br />}
            {!mobilePhone && <React.Suspense fallback={"Loading..."}>
                <UserBar />
            </React.Suspense>}
            {!mobilePhone && <br />}
            {user && <CreatePost />}
        </div>
    )
}

export default HeaderBar