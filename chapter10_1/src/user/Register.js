import React, { useEffect } from "react";
import { useInput } from "react-hookedup";
import { useDispatch, useAPIRegister } from "../hooks";

const Register = () => {
  const { value: username, bindToInput: bindUsername } = useInput('');
  const { value: password, bindToInput: bindPassword } = useInput('');
  const { value: passwordRepeat, bindToInput: bindPasswordRepeat } = useInput('');
  const dispatch = useDispatch();

  const [user, register] = useAPIRegister();

  useEffect(() => {
    if (user && user.data) {
      dispatch({
        type: 'REGISTER', username: user.data.username
      })
    }
  }, [user, dispatch])


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
          {...bindUsername}
          name="register-username"
          value={username}
          id="register-username"
        />

        <label htmlFor="register-password">Password: </label>
        <input
          type="password"
          {...bindPassword}
          name="register-password"
          value={password}
          id="register-password"
        />

        <label htmlFor="register-password-repeat">Repeat password: </label>
        <input
          type="password"
          {...bindPasswordRepeat}
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
