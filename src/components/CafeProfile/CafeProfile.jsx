import styles from "./CafeProfile.module.css";
import avatar from "../../assets/avatar.jpg";
import CafeMenu from "./CafeMenu";
import CafeInfo from "./CafeInfo";
import { Route, Routes } from "react-router-dom";

const CafeProfile = () => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.mainContent}>
                {/* <Routes>
                    <Route path="menu" element={<CafeMenu />} />
                    <Route path="info" element={<CafeInfo />} />
                </Routes> */}
                <CafeMenu />
                <CafeInfo />
            </div>
            <div className={styles.sidebar}>
                <div className={styles.avatarContainer}>
                    <img src={avatar} alt="avatar" />
                </div>
                <ul>
                    <li>Данные о магазине</li>
                    <li>Меню</li>
                    <li>Акции</li>
                    <li>Заказы</li>
                </ul>
            </div>
        </div>
    );
};

export default CafeProfile;
