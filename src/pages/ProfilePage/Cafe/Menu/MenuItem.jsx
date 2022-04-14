import styles from "./MenuItem.module.css";
import noFood from "../../../../assets/Profile/noImageFood2.jpg";
import { useState } from "react";
import ModalChangeCard from "./Modals/ModalChangeCard";

const MenuItem = ({food}) => {
    const [modalChangeActive, setModalChangeActive] = useState(false);
    const [currentFood, setCurrentFood] = useState("")
    const handleChange = (active, food) => {
        setModalChangeActive(active);
        setCurrentFood(food);
    }
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                        <div className={styles.image}><img src={food?.image ? `http://localhost:4000/${food.image}` : noFood} alt="food" /></div>
                        <h3>{food.name}</h3>
                        <div>{food.info}</div>
                        <div>Цена: {food.price} руб</div>
                        <div className={styles.btnContainer}>
                        <button onClick={() => handleChange(true, food)}>Редактировать</button>
                        </div>
                    </div>
                    <ModalChangeCard thisFood={currentFood} active={modalChangeActive} setActive={setModalChangeActive} />
        </div>
    )
}

export default MenuItem