import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import FullCard from './FullCard/FullCard';
import SameCategory from './SameCategory/SameCategory';

const FullCardPage = () => {
    return (
        <>
            <Header />
            <FullCard />
            <SameCategory />
            <Footer />
        </>
    );
};

export default FullCardPage;