import React, { useState, useEffect } from "react";
import { useInput } from "react-hookedup";
import { useDispatch, useAPILogin } from "../hooks";

function useLoginEffect(user, dispatch, setLoginFailed) {
  useEffect(() => {
    if (user && user.data) {
      if (user.data.length > 0) {
        setLoginFailed(false)
        dispatch({
          type: 'LOGIN', username: user.data[0].username
        })
      }
      else {
        setLoginFailed(true);
      }
    }
  }, [user, dispatch, setLoginFailed])
}

const Login = () => {

  const { value: username, bindToInput: bindUsername } = useInput('');
  const { value: password, bindToInput: bindPassword } = useInput('');
  // Since we are using two Input Hooks, in order to avoid name collisions,
  // we are using the rename syntax ({ from: to }) in object destructuring 
  // to rename the value key to username, and bindToInput key to bindUsername.

  const dispatch = useDispatch();
  const [user, login] = useAPILogin();
  const [loginFailed, setLoginFailed] = useState(false);

  useLoginEffect(user, dispatch, setLoginFailed);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
        }}
      >
        <label htmlFor="login-username">Username: </label>
        <input
          type="text"
          {...bindUsername}
          name="login-username"
          value={username}
          id="login-username"
        />

        <label htmlFor="login-password">Password: </label>
        <input type="password" value={password} {...bindPassword} name="login-password" id="login-password" />

        <input type="submit" value="Login" disabled={username.length === 0} />

        {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
      </form>
    </>
  );
};

export default Login;
