import { useState } from "react";
import styles from "./ModalAddCard.module.css";
import {useDispatch, useSelector} from "react-redux"
import { addFood } from "../../../redux/features/food";

const ModalAddCard = ({ active, setActive }) => {
    const [food, setFoodName] = useState("");
    const [composition, setComposition] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState("");
    const loading = useSelector(state => state.food.loading);
    const error = useSelector(state => state.food.error);
    console.log(`loading: ${loading}`);
    console.log(`error: ${error}`);


    const handleChangeName = (e) => {
        setFoodName(e.target.value);
        setErrorMessage("")
    }

    const handleChangeComposition = (e) => {
        setComposition(e.target.value);
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
        setErrorMessage("");
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleChangeImage = (e) => {
        setImage(e.target.files[0]);
    }

    const handleAddFood = (food, composition, price, image) => {
        if (!food || !price) {
            setErrorMessage("Не заполнены обязательные поля")
        } else {
        dispatch(addFood(food, composition,  price, image));
        console.log(food, composition, price, image);

        }
    }

    return (

        <div
            className={
                active ? `${styles.modal} ${styles.modalActive}` : styles.modal
            }
            onClick={() => setActive(false)}
        >
            <div
                className={
                    active
                        ? `${styles.modalContent} ${styles.modalContentActive}`
                        : styles.modalContent
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.addFood}>
                    <div className={styles.title}>
                        <h3>Добавление блюда</h3>
                        <span onClick={() => setActive(false)}>×</span>
                    </div>
                    <hr />
                    <div className={styles.addFoodContainer}>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Выберите изображение блюда</label>
                            </div>
                            <div className={styles.inputFile}>
                                <input type="file" onChange={(e) => handleChangeImage(e)} />
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Название</label>
                            </div>
                            <div className={styles.inputFile}>
                                <input value={food} onChange={(e) => handleChangeName(e)} />
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Состав</label>
                            </div>
                            <div className={styles.inputFile}>
                                <textarea value={composition} onChange={(e) => handleChangeComposition(e)} />
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Цена</label>
                            </div>
                            <div className={styles.inputFile}>
                                <input type="number" value={price} onChange={(e) => handleChangePrice(e)} />
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Категория</label>
                            </div>
                            <div className={styles.inputFile}>
                                <select value={category} onChange={(e) => handleChangeCategory(e)}>
                                    <option>Пиццы</option>
                                    <option>Бургеры</option>
                                    <option>Европейская кухня</option>
                                    <option>Национальные блюда</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.errorMessage}>{errorMessage}</div>
                    <div className={styles.loading}>{loading && "Идет добавление карточки"}</div>
                    <div className={styles.errorMessage}>{error && "Ошибка при добавлении"}</div>
                    <div className={styles.btnAddNew}><button onClick={() => handleAddFood(food, composition, price, image)}>Добавить новое блюдо</button></div>
                </div>
            </div>
        </div>
    );
};

export default ModalAddCard;
