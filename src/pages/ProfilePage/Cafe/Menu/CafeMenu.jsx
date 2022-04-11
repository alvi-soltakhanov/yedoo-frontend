import styles from "./CafeMenu.module.css";
import { useEffect, useState } from "react";
import ModalAddCard from "./Modals/ModalAddCard";
import ModalChangeCard from "./Modals/ModalChangeCard";
import MenuItem from "./MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { getFoodByCafeToken } from "../../../../redux/features/food";

const CafeMenu = () => {
    const [modalAddActive, setModalAddActive] = useState(false);
    const [modalChangeActive, setModalChangeActive] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFoodByCafeToken());
    }, [dispatch]);

    const foodByCafe = useSelector((state) => state.food.foodByCafe);
    console.log(foodByCafe);
    return (
        <div className={styles.menuContainer}>
            <div className={styles.addCard}>
                <button onClick={() => setModalAddActive(true)}>
                    Добавить карточку еды
                </button>
            </div>
            <div className={styles.cardsContainer}>
                {foodByCafe?.map((food) => {
                    return <MenuItem key={food._id} food={food} />;
                })}
            </div>
            <ModalAddCard
                active={modalAddActive}
                setActive={setModalAddActive}
            />
            <ModalChangeCard
                active={modalChangeActive}
                setActive={setModalChangeActive}
            />
        </div>
    );
};

export default CafeMenu;
