import styles from "./MenuItem.module.css";
import gamburger from "../../../../assets/burger.jpg";
import { useState } from "react";
import ModalChangeCard from "./Modals/ModalChangeCard";

const MenuItem = () => {
    const [modalChangeActive, setModalChangeActive] = useState(false);
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                        <img src={gamburger} alt="food" />
                        <h3>Гамбургер</h3>
                        <div>Томат, лук, соленые огурцы, говядина</div>
                        <div>Цена: 90 руб</div>
                        <div className={styles.btnContainer}>
                        <button onClick={() => setModalChangeActive(true)}>Редактировать</button>
                        </div>
                    </div>
                    <ModalChangeCard active={modalChangeActive} setActive={setModalChangeActive} />
        </div>
    )
}

export default MenuItem