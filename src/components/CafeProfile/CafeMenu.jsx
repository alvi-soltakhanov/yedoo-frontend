import styles from "./CafeMenu.module.css";
import gamburger from "../../assets/burger.jpg";
import { useState } from "react";
import ModalAddCard from "./Modals/ModalAddCard";
import ModalChangeCard from "./Modals/ModalChangeCard";

const CafeMenu = () => {
    const [modalAddActive, setModalAddActive] = useState(false);
    const [modalChangeActive, setModalChangeActive] = useState(false);
    return (
        <div className={styles.menuContainer}>
            <div className={styles.addCard}><button onClick={() => setModalAddActive(true)}>Добавить карточку еды</button></div>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <img src={gamburger} alt="food" />
                        <h3>Гамбургер</h3>
                        <div>Томат, лук, соленые огурцы, говядина</div>
                        <div>Цена: 90 руб</div>
                        <div className={styles.btnContainer}>
                            <button onClick={() => setModalChangeActive(true)}>Редактировать</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={gamburger} alt="food" />
                        <h3>Гамбургер</h3>
                        <div>Томат, лук, соленые огурцы, говядина</div>
                        <div>Цена: 90 руб</div>
                        <div className={styles.btnContainer}>
                            <button>Редактировать</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={gamburger} alt="food" />
                        <h3>Гамбургер</h3>
                        <div>Томат, лук, соленые огурцы, говядина</div>
                        <div>Цена: 90 руб</div>
                        <div className={styles.btnContainer}>
                            <button>Редактировать</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={gamburger} alt="food" />
                        <h3>Гамбургер</h3>
                        <div>Томат, лук, соленые огурцы, говядина</div>
                        <div>Цена: 90 руб</div>
                        <div className={styles.btnContainer}>
                            <button>Редактировать</button>
                        </div>
                    </div>
                    
                </div>
                <ModalAddCard active={modalAddActive} setActive={setModalAddActive} />
                <ModalChangeCard active={modalChangeActive} setActive={setModalChangeActive} />
        </div>
    )
}

export default CafeMenu;