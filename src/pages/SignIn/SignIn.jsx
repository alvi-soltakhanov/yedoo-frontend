import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signin } from "../../redux/features/application";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);

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
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className={styles.genSin}>
      <div className={styles.signinContainer}>
        <div className={styles.signinBox}>
          <h2>Войти</h2>
          <p>Электронная почта</p>
          <input type="text" value={mail} onChange={(e) => handleMail(e)} />
          <p>Пароль</p>
          <input
            type="password"
            value={password}
            onChange={(e) => handlePassword(e)}
          />{" "}
          <button className={styles.signInBtn} onClick={() => submit()}>
            Войти
          </button>
        </div>

        <div className={styles.link}>
          <span>Нет аккаунта?</span>
          <Link to={"/signup"}>
            <p>Зарегистрироваться</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
