import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import FullCard from './FullCard/FullCard';
import SameCategory from './SameCategory/SameCategory';

const FullCardPage = () => {
    return (
        <div style={{background: 'linear-gradient(360deg, #211F20 0%, #44403F 100%)'}}>
            <Header />
            <FullCard />
            <SameCategory />
            <Footer />
        </div>
    );
};

export default FullCardPage;