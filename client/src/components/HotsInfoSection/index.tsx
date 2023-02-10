import React from "react";
import styles from './HotsInfoSection.module.scss';
import LinkRoomsCityMainPage from '../LinkRoomsCityMainPage';
import SlidsMainPage from '../SlidsMainPage';
import SlidsMainPageHotHome from '../SlidsMainPageHotHome';
import SlidsMainPageAvto from '../SlidsMainPageAvto';
import chevronDown from '../../image/mainPage/chevron-down (5).svg'
import {Link} from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import {getTitleCity} from '../../redux/features/TitleCity/titleCitySlice'
function HotsInfoSection (){
    const dispatch=useAppDispatch();

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
                            <li onClick={()=>dispatch(getTitleCity('в Минске'))}><Link to='/Каталог квартир'>Квартиры в Минске</Link><span>3567</span></li>
                            <li onClick={()=>dispatch(getTitleCity('в Гомеле'))}><Link to='/Каталог квартир'>Квартиры в Гомеле</Link><span>2032</span></li>
                            <li onClick={()=>dispatch(getTitleCity('в Гродно'))}><Link to='/Каталог квартир'>Квартиры в Гродно</Link><span>2302</span></li>
                            <li onClick={()=>dispatch(getTitleCity('в Могилеве'))}><Link to='/Каталог квартир'>Квартиры в Могилеве</Link><span>110</span></li>
                            <li onClick={()=>dispatch(getTitleCity('в Бресте'))}><Link to='/Каталог квартир'> Квартиры в Бресте</Link><span>110</span></li>
                            <li onClick={()=>dispatch(getTitleCity('в Витебск'))}><Link to='/Каталог квартир'>Квартиры в Витебск</Link><span>110</span></li>
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