import React from "react";
import styles from './HotsInfoSection.module.scss';
import LinkRoomsCityMainPage from '../LinkRoomsCityMainPage';
import SlidsMainPage from '../SlidsMainPage';
import SlidsMainPageHotHome from '../SlidsMainPageHotHome';
import SlidsMainPageAvto from '../SlidsMainPageAvto';
import chevronDown from '../../image/mainPage/chevron-down (5).svg'
function HotsInfoSection (){
    return (
        <section className={styles.section}>
            <div className={styles.wrapper__div}>
                <div className={styles.left__div}>
                    <div className={styles.linkTop__div}>
                        <LinkRoomsCityMainPage/>
                        <SlidsMainPage/>
            
                    </div>
                    <div className={styles.linkBot__div}>
                    <SlidsMainPageHotHome/>
                    <SlidsMainPageAvto/>

            
                    </div>
                </div>
                <div className={styles.right__div}>
                    <div className={styles.top__div}>
                        <p>Квартиры</p>
                        <ul className={styles.rooms__ul}>
                            <li><a href='#'>Квартиры в Минске</a><span>3567</span></li>
                            <li><a href='#'>Квартиры в Гомеле</a><span>2032</span></li>
                            <li><a href='#'>Квартиры в Гродно</a><span>2302</span></li>
                            <li><a href='#'>Квартиры в Могилеве</a><span>110</span></li>
                            <li><a href='#'>Квартиры в Бресте</a><span>110</span></li>
                            <li><a href='#'>Квартиры в Витебск</a><span>110</span></li>
                        </ul>

                    </div>
                    <div className={styles.middle__div}>
                    <p>Коттеджи и усадьбы</p>
                        <ul className={styles.middle__ul}>
                            <li><a href='#'>Аггроусадьбы</a><span>110</span></li>
                            <li><a href='#'>Коттеджи</a><span>110</span></li>
                            <li><a href='#'>Загородный комплекс</a><span>110</span></li>
                            <li><a href='#'>Базы отдыха</a><span>110</span></li>
                            <li><a href='#'>Еще</a><img src={chevronDown} alt='Стрелка вниз' className={styles.chevron__img}/></li>
                        
                        </ul>

                    </div>
                    <div className={styles.bottom__div}>
                    <p>Популярные направления</p>
                    <ul className={styles.bottom__ul}>
                            <li><a href='#'>Коттеджи и усадьбы на о. Брасласких </a></li>
                            <li><a href='#'>Коттеджи и усадьбы (жилье) на Нарочи</a></li>
                            <li><a href='#'>Коттеджи и усадьбы (жилье) у воды,<br/> на берегу, на озере</a></li>
                        </ul>



                    </div>

                </div>
            </div>

        </section>
    )
}

export default HotsInfoSection;