import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/features/application";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const dispatch = useDispatch();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    dispatch(signin(mail, password));
  };

  return (
    <div className={styles.signinContainer}>
      <p>email</p>
      <input type="text" value={mail} onChange={(e) => handleMail(e)} />
      <p>password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => handlePassword(e)}
      />
      <button onClick={() => submit()}>Войти</button>
    </div>
  );
};

export default SignIn;
