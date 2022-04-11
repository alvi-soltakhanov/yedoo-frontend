import styles from "./MenuItem.module.css";
import gamburger from "../../../../assets/burger.jpg";
import { useState } from "react";
import ModalChangeCard from "./Modals/ModalChangeCard";

const MenuItem = ({food}) => {
    const [modalChangeActive, setModalChangeActive] = useState(false);
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                        <img src={`http://localhost:4000/${food.image}`} alt="food" />
                        <h3>{food.name}</h3>
                        <div>{food.info}</div>
                        <div>Цена: {food.price} руб</div>
                        <div className={styles.btnContainer}>
                        <button onClick={() => setModalChangeActive(true)}>Редактировать</button>
                        </div>
                    </div>
                    <ModalChangeCard active={modalChangeActive} setActive={setModalChangeActive} />
        </div>
    )
}

export default MenuItem