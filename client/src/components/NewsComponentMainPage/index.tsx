import React from "react";
import { Link } from "react-router-dom";
import styles from './NewsComponentMainPage.module.scss';
import chevron from '../../image/mainPage/chevron-down (12).svg';
function NewsComponentMainPage (){
    return(
        <div className={styles.wrapper}>
            <div className={styles.container__div}>
                <p className={styles.title__p}>Новости</p>
                <div className={styles.block1__div}>
                    <p><Link to="/Новость">Линия Сталина: суровый отдых в усадьбах  на сутки</Link></p>
                    <p>14 Январь</p>
                </div>
                <div className={styles.block2__div}>
                    <p><a href="#">Аренда квартиры посуточно</a></p>
                    <p>14 Январь</p>
                </div>
                <div className={styles.block3__div}>
                    <p><a href="#">Дворцово-парковый комплекс Чапских</a></p>
                    <p>14 Январь</p>
                </div>
                <div className={styles.blockOther__div}>
                    <p><a href="#">Дворцово-парковый комплекс Чапских</a></p>
                    <p>14 Январь</p>
                </div>
                <div className={styles.blockLast__div}>
                    <p><a href="#">Дворцово-парковый комплекс Чапских</a></p>
                    <p>14 Январь</p>
                </div>
                <div className={styles.bottom__div}>
                    <p><a href='#'> Посмотреть все</a></p>
                    <img src={chevron} alt='Изображение сьрелки'/>
                </div>

            </div>
        </div>
    )
}
export default NewsComponentMainPage;