import React from "react";
import styles from './SectionMainPageCardsSlids.module.scss';
import ellipsis from '../../image/mainPage/Group 654 (1).svg';
import  chevronDown from './../../image/panelNavigation/chevron-down.svg';
import SlidersMainPageCardsGold from '../SlidersMainPageCardsGold';
import chevron10 from '../../image/mainPage/chevron-down (10).svg';
import textImg from '../../image/mainPage/341.svg';

function SectionMainPageCardsSlids (){
    return (
<section className={styles.section}>
    <div className={styles.position__div}><img src={ellipsis}  alt='Векторное изображение'/></div>
    <div className={styles.title__div}>
        <p>КВАРТИРЫ НА СУТКИ</p>
        <p>Аренда квартир в Минске</p>
    </div>
    <div className={styles.positRelat__div}>
    <div className={styles.positRight__div}> 
    <form className={styles.form} >
    <div className={styles.rowPanel1__div}>
    <img src={chevronDown} alt='Стрелка на кнопке' className={styles.select__img}/>
    <select  className={styles.optoinsFirst__select}>
    <option>Метро</option>
    <option value='Грушевка'>Грушевка</option>
        <option value='Фрунзенская'>Фрунзенская</option>
        <option value='Первомайская'>Первомайская </option>
        <option value='Вокзальная'>Вокзальная </option>
        <option value='Октябрьская'>Октябрьская </option> 
    </select>
    </div>
    <div className={styles.rowPanel1__div}>
    <img src={chevronDown} alt='Стрелка на кнопке' className={styles.select__img}/>
    <select  className={styles.optoinsFirst__select} >
    <option>Район</option>
    <option value='Центральный'>Центральный</option>
        <option value='Ленинский'>Ленинский</option>
        <option value='Заводской'>Заводской </option>
        <option value='Первомайский'>Первомайский </option>
        <option value='Советский'>Советский </option>  
    </select>
    </div>
    </form>
    </div>
    <SlidersMainPageCardsGold/>
    <div className={styles.textDecor__div}>
        <div className={styles.textDecorLeft__div}>
        <img src={textImg} alt='Изображение по количеству предложений' />
        <p>Предложений по Минску</p>
        </div>
        <div className={styles.borderRight__div}>
        <button>Посмотреть все <img src={chevron10} alt='Стрелка на кнопке'/></button>
        </div>
    </div>
    </div>

   
</section>
    )
}
export default SectionMainPageCardsSlids;