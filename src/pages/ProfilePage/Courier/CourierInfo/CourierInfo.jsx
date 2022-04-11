import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CourierInfo.module.css";

const CourierInfo = () => {
    const dispatch = useDispatch();

    const courier = useSelector((state) => state.courier.courier);
    console.log((courier));
    const [courierName, setCourierName] = useState("");
    const [courierLastname, setcourierLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [city, setCity] = useState("");
    const [info, setInfo] = useState("");

    useEffect(() => {
        setCourierName(courier?.name);
        setPhone(courier?.phone);
        setMail(courier?.mail);
        setCity(courier?.city);
    }, [courier])

    const handleChangeName = (e) => {
        setCourierName(e.target.value);
    }
    const handleChangeLastname = (e) => {
        setcourierLastname(e.target.value);
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }

    const handleChangeInfo = (e) => {
        setInfo(e.target.value);
    }

    const handleSave = (courierName, courierLogo, phone, mail, city, info) => {
        console.log(courierName, courierLogo, phone, mail, city, info);
        // dispatch(editcourier(courierName, courierLogo, phone, mail, address, info));

    }

    return (
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <div className={styles.infoblock}>
                    <label>1. Имя</label>
                    <input placeholder="Введите имя" value={courierName} onChange={(e) => handleChangeName(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>2. Фамилия</label>
                    <input placeholder="Введите фамилию" value={courierLastname} onChange={(e) => handleChangeLastname(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>3. Телефон</label>
                    <input placeholder="Введите номер телефона" value={phone} onChange={(e) => handleChangePhone(e)} />
                </div>
               
                <div className={styles.infoblock}>
                    <label>4. Email</label>
                    <input placeholder="Введите адрес электронной почты" value={mail} onChange={(e) => handleChangeMail(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>5. Город</label>
                    <input placeholder="Введите ваш город" value={city} onChange={(e) => handleChangeCity(e)} />
                </div>
                <div className={styles.infoblock}>
                    <label>6. Доп. информация</label>
                    <input placeholder="" onChange={(e) => handleChangeInfo(e)} />
                </div>
                <div className={styles.btnSave}><button onClick={() => handleSave(courierName, phone, mail, city, info)}>Сохранить изменения</button></div>
            </div>
        </div>
    );
};

export default CourierInfo;
