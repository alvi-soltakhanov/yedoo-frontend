import React from 'react';
import styles from './TermsBlock.module.css';
import LineHeight from '../../../assets/heigthLine.png'
import ListTerms from '../ListBlocks/ListTerms';
import InfoBlock from '../InfoBlcok/InfoBlock';

const TermsBlock = () => {
    return (
        <>
            <div className={styles.TermsBlock}>
                <div className={styles.Content}>
                    <div className={styles.TermsHeader}>
                    <div className={styles.Title}><img src={LineHeight} alt="" />Условия доставки</div>
                    </div>
                    <ListTerms />
                    <InfoBlock />
                </div>

            </div>
        </>
        
    );
};

export default TermsBlock;