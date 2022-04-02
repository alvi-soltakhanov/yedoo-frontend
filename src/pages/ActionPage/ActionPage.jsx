import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Actions from './Actions/Actions';

const ActionPage = () => {
    return (
        <div style={{background: 'linear-gradient(360deg, #211F20 0%, #44403F 100%)'}}>
            <Header />
            <Actions />
            <Footer />
        </div>
    );
};

export default ActionPage;