import styles from "./CafeProfile.module.css";
import avatar from "../../assets/Profile/avatar.jpg";
import CafeMenu from "./CafeMenu";
import CafeInfo from "./CafeInfo";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCafeById, fetchCafeByToken } from "../../redux/features/cafe";

const CafeProfile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCafeByToken());
    }, [dispatch]);

    const currentUser = useSelector(state => state.cafe.cafeById);
    console.log(currentUser)
    return (
        <div>
             <Header />
            <div className={styles.profileContainer}>
               
                <div className={styles.mainContent}>
                    <CafeMenu />
                    <CafeInfo />
                </div>
                <div className={styles.sidebar}>
                    <div className={styles.avatarContainer}>
                        <img src={currentUser ? `http://localhost:4000/${currentUser.image}` : avatar} alt="avatar" />
                    </div>
                    <ul>
                        <span>{currentUser ? currentUser.name : "Anonym"}</span>
                        <li>Данные о магазине</li>
                        <li>Меню</li>
                        <li>Акции</li>
                        <li>Заказы</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CafeProfile;
