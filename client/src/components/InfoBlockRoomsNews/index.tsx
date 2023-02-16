import { title } from "process";
import React from "react";
import styles from './InfoBlockRoomsNews.module.scss';
import decor2 from '../../image/mainPage/Group 662.svg';
import room from './../../image/mainPage/Mask Group (9).png';
import NewsComponentMainPage from '../NewsComponentMainPage';
function InfoBlockRoomsNews (){
    return(
<section className={styles.news__section}>
    <div className={styles.wrapper__div}>
        <div className={styles.left__div}>
            <div className={styles.title__div}>
                <p>ЧТО ТАКОЕ SDAEM.BY</p>
                <p>Квартира на сутки в Минске</p>
            </div>
            <div className={styles.middle__div}>
            <img src={decor2} alt='Векторное изображение' className={styles.decor__img}/>
            <img src={room} alt='Фото комнаты' className={styles.room__img}/>
            <div className={styles.blockText__div}>
            <p>Нужна квартира на сутки в Минске?<br/> 
                На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <span>более 500 квартир.</span> Благодаря удобной навигации вы быстро найдете подходящий вариант.</p>
<p>В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP с джакузи.</p>
</div>
            </div>
            <p className={styles.bottom__p}>Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на<br/> сутки.</p>
        </div>
       <NewsComponentMainPage/>
    </div>
</section>
    )
}

export default InfoBlockRoomsNews;