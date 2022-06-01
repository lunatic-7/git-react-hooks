import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../contexts";
import { useResource } from "react-request-hook";
import { useInput } from "react-hookedup";

const Login = () => {

  const { value: username, bindToInput: bindUsername } = useInput('');
  const { value: password, bindToInput: bindPassword } = useInput('');
  // Since we are using two Input Hooks, in order to avoid name collisions,
  // we are using the rename syntax ({ from: to }) in object destructuring 
  // to rename the value key to username, and bindToInput key to bindUsername.

  const { dispatch } = useContext(StateContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const [user, login] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: 'get'
    // Please note that it is not secure to send the password in cleartext via a GET
    // request. We only do this for the sake of simplicity when configuring our
    // dummy server. In a real world application, use a POST request for login
    // instead and send the password as part of the POST data. Also make sure
    // to use Hypertext Transfer Protocol Secure (HTTPS) so that the POST
    // data will be encrypted.
  }))

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
  }, [user, dispatch])

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
