import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCafe,
  createClient,
  createCourier
} from "../../redux/features/application";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const signingUp = useSelector((state) => state.application.signingUp);
  const error = useSelector((state) => state.application.error);
  // (error);
  // const done = useSelector((state) => state.application.done);

  const [select, setSelect] = useState("client");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  // const [passRepeat, setPassRepeat] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [addressErr, setAddressErr] = useState(false);
  const [mailErr, setMailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [generalErr, setGeneralErr] = useState(true);

  const handleClick = (info) => {
    setAllClear();
    setSelect(info);
  };

  const handleInput = (e, key) => {
    if (key === "name") {
      setName(e.target.value);
      e.target.value ? setNameErr(false) : setNameErr(true);
    }
    if (key === "phone") {
      const reg = /^\d[\d\(\)\ -]{4,14}\d$/;
      setPhone(e.target.value);
      e.target.value ? setPhoneErr(false) : setPhoneErr(true);
      if (!reg.test(e.target.value)) {
        setPhoneErr(true);
      }
    }
    if (key === "city") {
      setCity(e.target.value);
      e.target.value ? setCityErr(false) : setCityErr(true);
    }
    if (key === "address") {
      setAddress(e.target.value);
      e.target.value ? setAddressErr(false) : setAddressErr(true);
    }
    if (key === "mail") {
      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      setMail(e.target.value);
      e.target.value ? setMailErr(false) : setMailErr(true);
      if (!reg.test(e.target.value)) {
        setMailErr(true);
      }
    }
    if (key === "password") {
      setPassword(e.target.value);
      e.target.value ? setPasswordErr(false) : setPasswordErr(true);
    }
    if (name && phone && address && mail && password) {
      setGeneralErr(false);
    } else {
      setGeneralErr(true);
    }
    // if (key === "passwordRepeat") {
    //   setPassRepeat(e.target.value);
    //   e.target.value ? setPasswordErr(false) : setPasswordErr(true);
    // }
    // if (password !== passRepeat) {
    //   (password);
    //   (passRepeat);
    //   setPasswordErr(true);
    // } else {
    //   setPasswordErr(false);
    // }
  };
  const setAllClear = () => {
    setName("");
    setPhone("");
    setAddress("");
    setMail("");
    setPassword("");
    setCity("");
    setNameErr("");
    setPhoneErr("");
    setAddressErr("");
    setMailErr("");
    setPasswordErr("");
    setCityErr("");
    setGeneralErr(true);
  };
  const checkError = () => {
    if (!error) {
      navigate("/signin");
    }
  };

  const signUpClient = () => {
    if (
      !nameErr &&
      !phoneErr &&
      !cityErr &&
      !addressErr &&
      !mailErr &&
      !passwordErr
    ) {
      dispatch(createClient(name, phone, city, address, mail, password));
      checkError();
      setAllClear();
    } else {
      console.log("Не удалось зарегистрироваться как клиент");
    }
  };

  setTimeout(error, 3000);

  const signUpCafe = () => {
    if (
      !nameErr &&
      !phoneErr &&
      !cityErr &&
      !addressErr &&
      !mailErr &&
      !passwordErr
    ) {
      dispatch(createCafe(name, phone, city, address, mail, password));
    } else {
      console.log("Не удалось зарегистрироваться как партнер");
    }
  };
  const signUpCourier = () => {
    if (!nameErr && !phoneErr && !cityErr && !mailErr && !passwordErr) {
      dispatch(createCourier(name, phone, city, mail, password));
    } else {
      console.log("Не удалось зарегистрироваться как курьер");
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.btnsConainer}>
        <button
          className={
            select === "client" ? styles.selectClient : styles.clientBtn
          }
          onClick={() => handleClick("client")}
        >
          Cтать клиентом
        </button>
        <button
          className={
            select === "courier" ? styles.selectCourier : styles.courierBtn
          }
          onClick={() => handleClick("courier")}
        >
          Стать курьером
        </button>
        <button
          className={select === "cafe" ? styles.selectCafe : styles.cafeBtn}
          onClick={() => handleClick("cafe")}
        >
          Для ресторана
        </button>
      </div>
      <div className={styles.link}>
        <span>Уже есть аккаунт?</span>
        <Link to={"/signin"}>
          <p>Войти</p>{" "}
        </Link>
      </div>
      {select === "client" && (
        <div className={styles.form}>
          <h2>Зарегистрироваться</h2>

          <p>Имя</p>
          <input
            className={nameErr ? styles.error : styles.notErr}
            type="text"
            value={name}
            onChange={(e) => handleInput(e, "name")}
          />

          <p>Номер телефона</p>
          <input
            className={phoneErr ? styles.error : styles.notErr}
            type="tel"
            value={phone}
            onChange={(e) => handleInput(e, "phone")}
          />

          <p>Город</p>
          <input
            className={cityErr ? styles.error : styles.notErr}
            type="text"
            value={city}
            onChange={(e) => handleInput(e, "city")}
          />

          <p>Адрес</p>
          <input
            className={addressErr ? styles.error : styles.notErr}
            type="text"
            value={address}
            onChange={(e) => handleInput(e, "address")}
          />

          <p>Электронная почта</p>
          <input
            className={mailErr ? styles.error : styles.notErr}
            type="text"
            value={mail}
            onChange={(e) => handleInput(e, "mail")}
          />

          <p>Пароль</p>
          <input
            className={passwordErr ? styles.error : styles.notErr}
            type="password"
            value={password}
            onChange={(e) => handleInput(e, "password")}
          />

          {/* <p>Повторите пароль</p>
          <input
            className={passwordErr ? styles.error : styles.notErr}
            type="password"
            value={passRepeat}
            onChange={(e) => handleInput(e, "passwordRepeat")}
          /> */}

          <div>
            <button
              disabled={generalErr}
              className={
                generalErr ? styles.signUpBtnDisabled : styles.signUpBtn
              }
              onClick={() => signUpClient()}
            >
              Регистрация
            </button>
          </div>

          {error && (
            <div className={styles.errorInfo}>Поля заполнены некорректно</div>
          )}
        </div>
      )}
      {select === "cafe" && (
        <div className={styles.form}>
          <h2>Стать партнером</h2>
          <p>Название ресторана</p>
          <input
            className={nameErr ? styles.error : styles.notErr}
            type="text"
            value={name}
            onChange={(e) => handleInput(e, "name")}
          />

          <p>Номер телефона</p>
          <input
            className={phoneErr ? styles.error : styles.notErr}
            type="tel"
            value={phone}
            onChange={(e) => handleInput(e, "phone")}
          />

          <p>Город</p>
          <input
            className={cityErr ? styles.error : styles.notErr}
            type="text"
            value={city}
            onChange={(e) => handleInput(e, "city")}
          />

          <p>Адрес</p>
          <input
            className={addressErr ? styles.error : styles.notErr}
            type="text"
            value={address}
            onChange={(e) => handleInput(e, "address")}
          />

          <p>Электронная почта</p>
          <input
            className={mailErr ? styles.error : styles.notErr}
            type="text"
            value={mail}
            onChange={(e) => handleInput(e, "mail")}
          />

          <p>Пароль</p>
          <input
            className={passwordErr ? styles.error : styles.notErr}
            type="password"
            value={password}
            onChange={(e) => handleInput(e, "password")}
          />

          {/* <p>Повторите пароль</p>
          <input
            className={passwordErr ? styles.error : styles.notErr}
            type="password"
            value={passRepeat}
            onChange={(e) => handleInput(e, "passwordRepeat")}
          /> */}

          <div>
            <button
              disabled={generalErr}
              className={
                generalErr ? styles.signUpBtnDisabled : styles.signUpBtn
              }
              onClick={() => signUpCafe()}
            >
              Отправить заявку
            </button>
            {error && (
              <div className={styles.errorInfo}>Поля заполнены некорректно</div>
            )}
          </div>
        </div>
      )}
      {select === "courier" && (
        <div className={styles.form}>
          <h2>Начать работу курьером</h2>
          <p>Имя</p>
          <input
            className={nameErr ? styles.error : styles.notErr}
            type="text"
            value={name}
            onChange={(e) => handleInput(e, "name")}
          />

          <p>Номер телефона</p>
          <input
            className={phoneErr ? styles.error : styles.notErr}
            type="tel"
            value={phone}
            onChange={(e) => handleInput(e, "phone")}
          />

          <p>Город</p>
          <input
            className={cityErr ? styles.error : styles.notErr}
            type="text"
            value={city}
            onChange={(e) => handleInput(e, "city")}
          />

          <p>Электронная почта</p>
          <input
            className={mailErr ? styles.error : styles.notErr}
            type="text"
            value={mail}
            onChange={(e) => handleInput(e, "mail")}
          />

          <p>Пароль</p>
          <input
            className={passwordErr ? styles.error : styles.notErr}
            type="password"
            value={password}
            onChange={(e) => handleInput(e, "password")}
          />

          {/* <p>Повторите пароль</p>
          <input
            className={passwordErr ? styles.error : styles.notErr}
            type="password"
            value={passRepeat}
            onChange={(e) => handleInput(e, "passwordRepeat")}
          /> */}

          <div>
            <button
              disabled={generalErr}
              className={
                generalErr ? styles.signUpBtnDisabled : styles.signUpBtn
              }
              onClick={() => signUpCourier()}
            >
              Отправить
            </button>
          </div>

          {error && (
            <div className={styles.errorInfo}>Поля заполнены некорректно</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignUp;
