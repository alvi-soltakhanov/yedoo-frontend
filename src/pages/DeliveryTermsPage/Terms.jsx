import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import OneStoreFilter from '../../components/OneStoreFilter/OneStoreFilter';
import styles from './Terms.module.css'
import TermsBlock from './termsBlock/TermsBlock';

const Terms = () => {
    return (
        <div className={styles.Terms}>
            <Header />
            <OneStoreFilter />
            <TermsBlock />
            <Footer />
            
        </div>
    );
};

export default Terms;