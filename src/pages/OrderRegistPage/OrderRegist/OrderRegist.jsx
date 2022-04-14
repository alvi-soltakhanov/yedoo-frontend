import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../../redux/features/order';
import styles from './OrderRegist.module.css'

const OrderRegist = () => {

    const dispatch = useDispatch()

    const foods = useSelector(state => state.cart.foods)
    const allCafe = useSelector(state => state.cafe.cafe)
    const currentCafeId = useSelector(state => state.cart.cafeId)
    const total = useSelector(state => state.cart.total)

    //Выбор доставки 
    const [delievery, setDelievery] = useState(0)

    const handleDelievery = () => {
        setDelievery(0)
    }

    const handleSelf = () => {
        setDelievery(1)
        setPayType(2)
    }
    //------------------------------------------
    //Адрес доставки 
    const [street, setStreet] = useState()
    const [house, setHouse] = useState()

    const handleStreet = (e) => {
        setStreet(e.target.value)
    }
    const handleHouse = (e) => {
        setHouse(e.target.value)
    }

    const [building, setBuilding] = useState()
    const [area, setArea] = useState()
    const [level, setLevel] = useState()

    const handleBuild = (e) => {
        setBuilding(e.target.value)
    }
    const handleArea = (e) => {
        setArea(e.target.value)
    }
    const handleLevel = (e) => {
        setLevel(e.target.value)
    }

    const [comment, setComment] = useState()

    const handleComment = (e) => {
        setComment(e.target.value)
    }
    //-------------------------------------------
    //Оплата
    const [payType, setPayType] = useState(2)

    const handleOne = () => {
        setPayType(0)
        setDelievery(0)
    }
    const handleTwo = () => {
        setPayType(1)
        setDelievery(0)

    }
    const handleThree = () => {
        setPayType(2)
    }
    //-------------------------------------------
    //Время доставки
    const [time, setTime] = useState(0)


    const handleNow = () => {
        setTime(0)
    }
    const handleLater = () => {
        setTime(1)
    }

    const [call, setCall] = useState(0)

    const handleNo = () => {
        setCall(0)
    }
    const handleYes = () => {
        setCall(1)
    }
    //-------------------------------------------
    //Создание заказа
    const handleOrder = () => {
        const to = `ул. ${street}, ${house}${building ? `, кв. ${building}, п. ${area}, эт. ${level}` : `.`}`
        const from = allCafe?.find(item => item._id === currentCafeId).address
        console.log(from)
        console.log(to)
        dispatch(createOrder(foods, currentCafeId, total, from, to))
    }
    //--------------------------------------------
    //CheckBox в конце
    const [check, setCheck] = useState(true)

    const handleCheck = () => {
        setCheck(!check)
    }
    return (
        <div className={styles.orderRegistPage}>
            <div className={styles.turnBack}>
                <p>&#8249; в корзину</p>
            </div>
            <div className={styles.orderRegistTitle}>
                <p>ОФОРМЛЕНИЕ ЗАКАЗА</p>
            </div>
            <div className={styles.orderRegistBlock}>
                <div className={styles.contactInfo}>
                    <p>1. Контактная информация</p>
                    <div className={styles.contactInputs}>
                        <input placeholder='Имя*' />
                        <input placeholder='Телефон*' />
                    </div>
                </div>
                <div className={styles.contactInfo}>
                    <p>2. Доставка</p>
                    <div className={styles.delieveryBlock}>
                        <div className={styles.delieveryBtn}>
                            <div style={{ transform: `translate(${100 * delievery}%)`, transition: '1s' }} className={`${styles.activeBtn}`}></div>
                            <div onClick={handleDelievery} className={`${styles.delieveryItem}`}>Доставка</div>
                            {/* <div className={styles.verticalLine}></div> */}
                            <div onClick={handleSelf} className={`${styles.delieveryItem}`}>Самовывоз</div>
                        </div>
                        <div className={styles.delieveryTime}>
                            ⌚ Ожидание заказа 1 час 30 минут
                        </div>
                    </div>
                    <div className={`${delievery === 0 ? styles.showTop : styles.hideTop}`}>
                        <p>Адрес доставки</p>
                        <div className={styles.delieveryAdress}>
                            <input onChange={handleStreet} value={street} style={{ width: '70%' }} placeholder='Укажите улицу*' />
                            <input onChange={handleHouse} value={house} style={{ width: '29%' }} placeholder='Номер дома*' />
                            <input onChange={handleBuild} value={building} style={{ width: '35%' }} placeholder='№ квартиры/офиса' />
                            <input onChange={handleArea} value={area} style={{ width: '34%' }} placeholder='Подъезд' />
                            <input onChange={handleLevel} value={level} style={{ width: '29%' }} placeholder='Этаж*' />
                            <input onChange={handleComment} value={comment} style={{ width: '100%' }} placeholder='Комментарий' />
                        </div>
                    </div>

                </div>
                <div className={styles.contactInfo}>
                    <p>3. Оплатить</p>
                    <div className={styles.payBtn}>
                        <div style={{ transform: `translate(${100 * payType}%)`, transition: '1s' }} className={`${styles.payActive}`}></div>
                        <div onClick={handleOne} className={`${styles.payItem}`}>Оплата онлайн</div>
                        {/* <div className={styles.verticalLine}></div> */}
                        <div onClick={handleTwo} className={`${styles.payItem}`}>Курьеру картой</div>
                        {/* <div className={styles.verticalLine}></div> */}
                        <div onClick={handleThree} className={`${styles.payItem}`}>Наличными</div>
                    </div>
                    {payType === 2 ?
                        <div className={styles.payAdress}>
                            <input style={{ width: '180px' }} placeholder='Сдача с' />
                        </div>
                        :
                        ''}
                </div>
                <div className={`${!delievery ? styles.showBlock : styles.hideTop}`}>
                    <div className={styles.contactInfo}>
                        <p>4. Когда доставить</p>
                        <div className={styles.payTimeBlock}>
                            <div className={styles.payTimeBtn}>
                                <div style={{ transform: `translate(${100 * time}%)`, transition: '1s' }} className={`${styles.activeBtn}`}></div>
                                <div onClick={handleNow} className={`${styles.payItem}`}>Доставить сразу</div>
                                {/* <div className={styles.verticalLine}></div> */}
                                <div onClick={handleLater} className={`${styles.payItem}`}>Назначить время</div>
                            </div>
                            {time !== 0 ?
                                <div className={styles.payTime}>
                                    <input style={{ width: '185px' }} placeholder='Укажите время' />
                                </div>
                                :
                                ''}
                        </div>
                        {/* <div className={styles.counterBlock}>
                        <div className={styles.counter}>
                            <div className={styles.counterText}>Кол-во персон</div>
                            <div style={{ width: '30%' }}>
                                <div className={styles.counterBtn}>-</div>
                                <div className={styles.counterBtn}>0</div>
                                <div className={styles.counterBtn}>+</div>
                            </div>
                        </div>
                    </div> */}
                        <p>Хотите мы позвоним?</p>
                        <div className={styles.radioBlock}>
                            <div onClick={handleNo} className={styles.radioLine}>
                                <div className={`${styles.radioBtn}`}><div style={{ transform: `translateY(${261 * call}%)`, transition: '1s' }} className={styles.radioActive}></div></div>
                                <p>Не перезванивать</p>
                            </div>
                            <div onClick={handleYes} className={styles.radioLine}>
                                <div className={`${styles.radioBtn}`}></div>
                                <p>Потребуется звонок оператора</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contactInfo} style={{ marginBottom: '90px' }}>
                    <div className={styles.contractLine}>
                        <div className={styles.checkBox}>
                            <input checked={check} onClick={handleCheck} type={'checkbox'} />
                            <p>Я согласен на обработку моих перс. данных в соответствии с <span>Условиями</span></p>
                        </div>
                        <button onClick={handleOrder} className={`${styles.orderBtn}`} disabled={!check || ((!street || !house) && !delievery) } >
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderRegist;