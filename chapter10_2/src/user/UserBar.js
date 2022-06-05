import React from "react";

import Login from "./Login";
import Register from "./Register";
import { useUserState } from "../hooks";

const Logout = React.lazy(() => import('./Logout'))
// The import() function dynamically loads the Logout component from
// the Logout.js file. In contrast to the static import statement, this
// function only gets called when React.lazy triggers it, which means it
// will only be imported when the component is needed.

const UserBar = () => {

  const user = useUserState();
  if (user) {
    return <Logout />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
};

export default UserBar;
