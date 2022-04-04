import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "../../redux/features/application";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const signingUp = useSelector((state) => state.application.signingUp);
  const error = useSelector((state) => state.application.error);
  const done = useSelector((state) => state.application.done);

  const [select, setSelect] = useState("client");
  const [clearInput, setClearInput] = useState({ name: false, phone: false });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const handleClick = (info) => {
    setSelect(info);
  };

  // console.log(clearInput);
  // const handleBlur = (key) => {
  //   if (name) {
  //     setClearInput({ name: true });
  //   } else {
  //     setClearInput({ name: false });
  //   }
  // };

  const handleInput = (e, key) => {
    if (key === "name") setName(e.target.value);
    if (key === "phone") setPhone(e.target.value);
    if (key === "city") setCity(e.target.value);
    if (key === "address") setAddress(e.target.value);
    if (key === "mail") setMail(e.target.value);
    if (key === "password") setPassword(e.target.value);

    // setClearInput(false);
    // if (!e.target.value) {
    //   setClearInput(true);
    // }
  };

  const signUpClient = () => {
    dispatch(createClient(name, phone, city, address, mail, password));
  };

  return (
    <div className={styles.signUpContainer}>
      {error && <div>signup error</div>}
      <div>
        <button onClick={() => handleClick("client")}>Cтать клиентом</button>
        <button onClick={() => handleClick("courier")}>Стать курьером</button>
        <button onClick={() => handleClick("cafe")}>Для ресторана</button>
      </div>
      {select === "client" && (
        <div className={styles.form}>
          <h2>Зарегистрироваться</h2>
          <p>Имя</p>
          <input
            className={clearInput.name ? styles.nameError : styles.name}
            // onBlur={() => handleBlur("name")}
            type="text"
            value={name}
            onChange={(e) => handleInput(e, "name")}
          />
          <p>Номер телефона</p>
          <input
            className={clearInput.phone ? styles.phoneError : styles.phone}
            // onBlur={(e) => handleBlur("phone")}
            type="text"
            value={phone}
            onChange={(e) => handleInput(e, "phone")}
          />
          <p>Город</p>
          <input
            className={clearInput.city ? styles.cityError : styles.city}
            // onBlur={(e) => handleBlur("city")}
            type="text"
            value={city}
            onChange={(e) => handleInput(e, "city")}
          />
          <p>Адрес</p>
          <input
            // className={clearInput ? styles.inputAddrError : styles.inputAddr}
            // onBlur={(e) => handleBlur(e)}
            type="text"
            value={address}
            onChange={(e) => handleInput(e, "address")}
          />
          <p>email</p>
          <input
            // className={clearInput ? styles.mailError : styles.mail}
            // onBlur={(e) => handleBlur(e)}
            type="text"
            value={mail}
            onChange={(e) => handleInput(e, "mail")}
          />
          <p>password</p>
          <input
            // className={clearInput ? styles.inputPassError : styles.inputPass}
            // onBlur={(e) => handleBlur(e)}
            type="text"
            value={password}
            onChange={(e) => handleInput(e, "password")}
          />
          <button onClick={() => signUpClient()}>Регистрация</button>
        </div>
      )}
      {select === "cafe" && (
        <div>
          <h2>Стать партнером</h2>
          <p>name</p>
          <input type="text" />
          <p>phone</p>
          <input type="text" />
          <p>address</p>
          <input type="text" />
          <p>email</p>
          <input type="text" />
          <p>password</p>
          <input type="text" />
          <button>Отправить</button>
        </div>
      )}
      {select === "courier" && (
        <div>
          {" "}
          <h2>Начать работу курьером</h2>
          <p>name</p>
          <input type="text" />
          <p>phone</p>
          <input type="text" />
          <p>city</p>
          <input type="text" />
          <p>email</p>
          <input type="text" />
          <p>password</p>
          <input type="text" />
          <button>Отправить</button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
