import React from 'react';
import styles from './OrderRegist.module.css'

const OrderRegist = () => {
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
                            <div className={`${styles.activeBtn} ${styles.delieveryItem}`}>Доставка</div>
                            <div className={styles.verticalLine}></div>
                            <div className={`${styles.delieveryItem}`}>Самовывоз</div>
                        </div>
                        <div className={styles.delieveryTime}>
                            ⌚ Ожидание заказа 1 час 30 минут
                        </div>
                    </div>
                    <p>Адрес доставки</p>
                    <div className={styles.delieveryAdress}>
                        <input style={{ width: '70%' }} placeholder='Укажите улицу*' />
                        <input style={{ width: '29%' }} placeholder='Номер дома*' />
                        <input style={{ width: '35%' }} placeholder='№ квартиры/офиса' />
                        <input style={{ width: '34%' }} placeholder='Подъезд' />
                        <input style={{ width: '29%' }} placeholder='Этаж*' />
                        <input style={{ width: '100%' }} placeholder='Комментарий' />
                    </div>
                </div>
                <div className={styles.contactInfo}>
                    <p>3. Оплатить</p>
                    <div className={styles.payBtn}>
                        <div className={`${styles.activeBtn} ${styles.payItem}`}>Оплата онлайн</div>
                        <div className={styles.verticalLine}></div>
                        <div className={`${styles.payItem}`}>Курьеру картой</div>
                        <div className={styles.verticalLine}></div>
                        <div className={`${styles.payItem}`}>Наличными</div>
                    </div>
                    <div className={styles.payAdress}>
                        <input style={{ width: '180px' }} placeholder='Сдача с' />
                    </div>
                </div>
                <div className={styles.contactInfo}>
                    <p>4. Когда доставить</p>
                    <div className={styles.payTimeBlock}>
                        <div className={styles.payTimeBtn}>
                            <div className={`${styles.activeBtn} ${styles.payItem}`}>Оплата онлайн</div>
                            <div className={styles.verticalLine}></div>
                            <div className={`${styles.payItem}`}>Курьеру картой</div>
                        </div>
                        <div className={styles.payTime}>
                            <input style={{ width: '185px' }} placeholder='Укажите время' />
                        </div>
                    </div>
                    <div className={styles.counterBlock}>
                        <div className={styles.counter}>
                            <div className={styles.counterText}>Кол-во персон</div>
                            <div style={{width:'30%'}}>
                                <div className={styles.counterBtn}>-</div>
                                <div className={styles.counterBtn}>0</div>
                                <div className={styles.counterBtn}>+</div>
                            </div>
                        </div>
                    </div>
                    <p>Хотите мы позвоним?</p>
                    <div className={styles.radioBlock}>
                        <div className={styles.radioLine}>
                            <div className={`${styles.radioBtn}`}><div className={styles.radioActive}></div></div>
                            <p>Не перезванивать</p>
                        </div>
                        <div className={styles.radioLine}>
                            <div className={`${styles.radioBtn}`}> <div className={styles.radioActiveNo}></div></div>
                            <p>Потребуется звонок оператора</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contactInfo} style={{marginBottom:'90px'}}>
                    <div className={styles.contractLine}>
                        <div className={styles.checkBox}>
                            <input type={'checkbox'} />
                            <p>Я согласен на обработку моих перс. данных в соответствии с <span>Условиями</span></p>
                        </div>
                        <div className={styles.orderBtn}>
                            Оформить заказ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderRegist;