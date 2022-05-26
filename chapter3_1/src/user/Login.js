import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUser(username);
        }}
      >
        <label htmlFor="login-username">Username: </label>
        <input
          type="text"
          onChange={handleUsername}
          name="login-username"
          value={username}
          id="login-username"
        />

        <label htmlFor="login-password">Password: </label>
        <input type="password" name="login-password" id="login-password" />

        <input type="submit" value="Login" disabled={username.length === 0} />
      </form>
    </>
  );
};

export default Login;
