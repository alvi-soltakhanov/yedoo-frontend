import styles from "./CafeInfo.module.css";

const CafeInfo = () => {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <div className={styles.infoblock}>
                    <label>1. Название организации</label>
                    <input placeholder="Введите имя" />
                </div>
                <div className={styles.infoblock}>
                    <label>2. Контактные данные</label>
                    <input placeholder="" />
                </div>
                <div className={styles.infoblock}>
                    <label>3. Телефон</label>
                    <input placeholder="" />
                </div>
                <div className={styles.infoblock}>
                    <label>4. Email</label>
                    <input placeholder="" />
                </div>
                <div className={styles.infoblock}>
                    <label>5. Адрес организации</label>
                    <input placeholder="" />
                </div>
                <div className={styles.infoblock}>
                    <label>6. Доп. информация</label>
                    <input placeholder="" />
                </div>
                <div className={styles.btnSave}><button>Сохранить изменения</button></div>
            </div>
        </div>
    );
};

export default CafeInfo;
