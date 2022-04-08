import React from 'react';
import styles from './OrderCard.module.css'

const OrderCard = ({base}) => {

    const handleCreateAndOpenChat = () => {
        
    }

    return (
        <div className={styles.OrderCard}>
            <img src={base.image} alt="" />
            <div>{base.title}</div>
            <button onClick={handleCreateAndOpenChat}>Написать курьеру</button>
        </div>
    );
};

export default OrderCard;