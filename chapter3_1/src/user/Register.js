import React, { useState } from "react";

const Register = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

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
          setUser(username);
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
