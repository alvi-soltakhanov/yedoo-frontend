import styles from "./Sidebar.module.css";
// import avatarCafe from "../../assets/Profile/avatar.jpg";
import avatarCourier from "../../assets/Profile/courier-avatar.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = ({ candidates, role }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(candidates.find((candidate) => candidate?.role === role));
  }, [role, candidates]);

  // console.log(role, candidates, currentUser)
  return (
    <div className={styles.sidebar}>
      <div className={styles.avatar}>
        <img
          src={
            currentUser?.image
              ? `http://localhost:4000/${currentUser.image}`
              : avatarCourier
          }
          alt="avatar"
        />
      </div>
      <div className={styles.name}>
        {currentUser?.name ? currentUser.name : "Anonym"}
      </div>
      {role === "cafe" && (
        <div className={styles.menuContainer}>
          <NavLink
            to="/profile/cafe/orders"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            {" "}
            <div className={styles.menuElement}>Заказы</div>
          </NavLink>
          <NavLink
            to="/profile/cafe/menu"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            {" "}
            <div className={styles.menuElement}>Меню</div>
          </NavLink>
          <NavLink
            to="/profile/cafe/promotions"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            {" "}
            <div className={styles.menuElement}>Акции</div>
          </NavLink>
          <NavLink
            to="/profile/cafe/info"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            {" "}
            <div className={styles.menuElement}>Информация о ресторане</div>
          </NavLink>
        </div>
      )}
      {role === "courier" && (
        <div className={styles.menuContainer}>
          <NavLink
            to="/profile/courier/orders"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <div className={styles.menuElement}>Доступные заказы</div>
          </NavLink>
          <NavLink
            to="/profile/courier/completed"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <div className={styles.menuElement}>Выполненные заказы</div>
          </NavLink>
          <NavLink
            to="/profile/courier/info"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <div className={styles.menuElement}>Мои данные</div>
          </NavLink>
          <NavLink
            to="/profile/courier/addresses"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            <div className={styles.menuElement}>Мои адреса</div>
          </NavLink>
        </div>
      )}
      {role === "client" && (
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
