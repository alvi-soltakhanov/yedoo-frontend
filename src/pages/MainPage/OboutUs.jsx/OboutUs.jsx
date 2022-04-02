import React from 'react';
import styles from './OboutUs.module.css'

const OboutUs = () => {
    return (
        <div className={styles.OboutUs}>
            <div className={styles.Content}>
                
                <div className={styles.ContentInfo}>

                    <div className={styles.Title}>НАШ СЕРВИС</div>

                    <div className={styles.Text}>
                    Мы расположены в одном из самых живописных мест города 
                    — на берегу реки, это ваш оазис в черте города, куда 
                    можно сбежать от шумного и пыльного мегаполиса. Мы, 
                    действительно уникальные, ведь все продумано до мелочей:
                    проект построен из дикого закарпатского сруба, камин в 
                    основном зале ресторана и панорамные окна с видом на реку,
                    уютные беседки на берегу реки и лучшая видовая террасса, 
                    шатер с посадкой на 200 человек, сказочный детский домик 
                    и бассейн.
                    </div>

                    <div className={styles.Button}>Посмотреть меню</div>
               
                </div>

                <div className={styles.ContentBlocks}>
                    
                    <div>

                        <div className={styles.blockOne}>1</div>
                        <div className={styles.blockTwo}>2</div>
                    </div>

                    <div>
                        <div className={styles.blockTree}>3</div>
                        <div className={styles.blockFour}>4</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OboutUs;