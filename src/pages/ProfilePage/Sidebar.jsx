import styles from "./Sidebar.module.css";
import avatar from "../../assets/Profile/avatar.jpg";
import { NavLink } from "react-router-dom";

const Sidebar = ({ currentUser, role }) => {
    console.log(role)
    return (
        <div className={styles.sidebar}>
            <div className={styles.avatar}>
                <img
                    src={
                        currentUser?.image
                            ? `http://localhost:4000/${currentUser.image}`
                            : avatar
                    }
                    alt="avatar"
                />
            </div>
            <div className={styles.name}>{currentUser?.name
                            ? currentUser.name
                            : 'Anonym'}</div>
            {role === 'cafe' && (
                <div className={styles.menuContainer}>
                    <div className={styles.menuElement}>Заказы</div>
                    <NavLink to="/menu"> <div className={styles.menuElement}>Меню</div></NavLink>
                    <div className={styles.menuElement}>Акции</div>
                    <div className={styles.menuElement}>
                        Информация о ресторане
                    </div>
                </div>
            )}
            {role === 'courier' && (
                <div className={styles.menuContainer}>
                    <div className={styles.menuElement}>Доступные заказы</div>
                    <div className={styles.menuElement}>Выполненные заказы</div>
                    <div className={styles.menuElement}>Мои данные</div>
                    <div className={styles.menuElement}>
                        Мои адреса
                    </div>
                </div>
            )}
             {role === 'client' && (
                <div className={styles.menuContainer}>
                    <div className={styles.menuElement}>Мои заказы</div>
                    <div className={styles.menuElement}>Избранные рестораны</div>
                    <div className={styles.menuElement}>Активные заказы</div>
                    {/* <div className={styles.menuElement}>
                        Мои адреса
                    </div> */}
              </div>
            )}
        </div>
    );
};

export default Sidebar;
