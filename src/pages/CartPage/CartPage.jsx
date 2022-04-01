import React from 'react';
import Footer from '../../components/Footer/Footer';
import OneStoreFilter from '../../components/OneStoreFilter/OneStoreFilter';
import styles from './CartPage.module.css'
import Total from './TotalBlock/Total';
import Header from '../../components/Header/Header'
import CartBlock from './CartBlock/CartBlock';

const CartPage = () => {
    return (
        <div className={styles.CartPage}>
            <Header />
            <OneStoreFilter/>
            <CartBlock />
            <Total />
            <Footer />         
        </div>
    );
};

export default CartPage;