import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FooterBar = () => {

    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <div>
            <Link to={pathname}>{pathname}</Link>
        </div>
    )
}

export default FooterBar