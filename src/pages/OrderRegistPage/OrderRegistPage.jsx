import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import OrderRegist from './OrderRegist/OrderRegist';

const OrderRegistPage = () => {
    return (
        <>
            <Header />
            <OrderRegist />
            <Footer />
        </>
    );
};

export default OrderRegistPage;