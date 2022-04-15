import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CafeCards from './CafeCards/CafeCards';
import CategoryCards from './CategoryCards/CategoryCards';
import { fetchCategories } from '../../redux/features/categories';
import { useDispatch } from 'react-redux';
import { fetchCafe } from '../../redux/features/cafe';
import { getCurrentCart } from '../../redux/features/cart';
import styles from './HomePage.module.css'


const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // {localStorage.getItem('cartId') ? dispatch(getCurrentCart(localStorage.getItem('cartId'))) : console.log('Нет id корзины')}
        dispatch(fetchCafe())
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <div style={{ background: 'linear-gradient(360deg, #211F20 0%, #44403F 100%)' }}>
            <Header />
            <div className={styles.homePageContent}>
                <CafeCards />
                <CategoryCards />
            </div>
            <Footer />
        </div>
    )
};

export default HomePage;