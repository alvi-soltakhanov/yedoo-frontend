import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import OrderRegist from './OrderRegist/OrderRegist';

const OrderRegistPage = () => {
    return (
        <div style={{background: 'linear-gradient(360deg, #211F20 0%, #44403F 100%)'}}>
            <Header />
            <OrderRegist />
            <Footer />
        </div>
    );
};

export default OrderRegistPage;