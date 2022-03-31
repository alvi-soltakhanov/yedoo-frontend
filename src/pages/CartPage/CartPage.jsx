import React from 'react';
import Footer from '../../components/Footer/Footer';
import OneStoreFilter from '../../components/OneStoreFilter/OneStoreFilter';
import styles from './CartPage.module.css'
import Total from './TotalBlock/Total';

const CartPage = () => {
    return (
        <div className={styles.CartPage}>
            <OneStoreFilter/>   
            <Total />
            <Footer />         
        </div>
    );
};

export default CartPage;