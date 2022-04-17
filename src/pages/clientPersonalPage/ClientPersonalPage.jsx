import styles from './ClientPersonalPage.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Content from './ClientContent/ClientContent'
import Messanger from '../Messenger/Messenger'
import { useState } from 'react';

const ClientPersonalPage = () => {

    const [chatWindow, setChatWindow ] = useState()

    const handleCloseChatWindow = () => {
        setChatWindow(!chatWindow)
      }
    
    return (
        <>
        <div className={ chatWindow ? styles.overlay : styles.overlayOpen}>
            <div className={ chatWindow ? styles.drawer : styles.drawerOpen}>
                     <div className={ chatWindow ? styles.currentChatHeader : styles.currentChatOpen}>
                         <div className={styles.nameOfChat}>ЗАКАЗ: 5155138153</div>
                         <button className={styles.closeChatButton} onClick={handleCloseChatWindow}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Œ</button>
                     </div>
                <Messanger />
            </div> 
        </div>

        <Header />
        <div className={styles.clientPersonalPage}>
            <div  className={styles.wrapper}>
                <Content />
                <div className="sidebar"></div>
            </div>  
        </div>
        <Footer />

        </>
        
    );
};

export default ClientPersonalPage;