import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../contexts";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const { dispatch } = useContext(StateContext);

  const [user, register] = useResource((username, password) => ({
    url: '/users',
    method: 'post',
    data: { username, password }
  }))

  useEffect(() => {
    if (user && user.data) {
      dispatch({
        type: 'REGISTER', username: user.data.username
      })
    }
  }, [user, dispatch])

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register(username, password);
        }}
      >
        <label htmlFor="register-username">Username: </label>
        <input
          type="text"
          onChange={handleUsername}
          name="register-username"
          value={username}
          id="register-username"
        />

        <label htmlFor="register-password">Password: </label>
        <input
          type="password"
          onChange={handlePassword}
          name="register-password"
          value={password}
          id="register-password"
        />

        <label htmlFor="register-password-repeat">Repeat password: </label>
        <input
          type="password"
          onChange={handlePasswordRepeat}
          name="register-password-repeat"
          value={passwordRepeat}
          id="register-password-repeat"
        />

        <input
          type="submit"
          value="Register"
          disabled={
            username.length === 0 ||
            password.length === 0 ||
            password !== passwordRepeat
          }
        />
      </form>
    </>
  );
};

export default Register;
