import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../redux/features/application";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.application.token)

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

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token, navigate])

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
