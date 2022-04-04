import React from 'react';
import Header from '../../components/Header/Header'
import MainBanner from '../../components/MainBanner/MainBanner'
import Footer from '../../components/Footer/Footer'
import styles from './MainPage.module.css'
import OboutUs from './OboutUs.jsx/OboutUs';

const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <Header />
            <MainBanner />
            <OboutUs />
            <Footer />
        </div>
    );
};

export default MainPage;