import React from 'react';
import styles from './ManyOptions.module.scss';
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import CheckboxComponent from '../CheckboxComponent';
function ManyOptions (){
    return (
<div className={styles.wrapper__options}>
        <div className={styles.optoinsFirst__div}>
            <p>Спальные места</p>
            <select  className={styles.optoinsFirst__select}>
    <option>Выберите</option>
        <option value='bedroom1'>Односпальная кровать</option>
        <option value='bedroom2'>Двухместная кровать</option>
        <option value='bedroom3'>Полуторная кровать</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
        <CheckboxComponent/>
        </div>
        <div className={styles.optoinsTwo__div}>
            <p>Район</p>
            <select  className={styles.optoinsFirst__select}>
    <option>Выберите</option>
        <option value='center'>Центральный район</option>
        <option value='leninsk'>Ленинский район</option>
        <option value='zavodsk'>Заводской район</option>
        <option value='pervomaisk'>Первомайский район</option>
        <option value='sovetsk'>Советский район</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
        <CheckboxComponent/>
        </div>
        <div className={styles.optoinsThree__div}>
            <p>Метро</p>
            <select  className={styles.optoinsFirst__select}>
    <option>Выберите</option>
        <option value='grushMetro'>Грушевка</option>
        <option value='phrunzMetro'>Фрунзенская</option>
        <option value='pervomMetro'>Первомайская</option>
        <option value='vokzalMetro'>Вокзальная</option>
        <option value='octaibrMetro'>Октябрьская</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
        <CheckboxComponent/>
        </div>
        <div className={styles.optoinsFour__div}>
        <CheckboxComponent/>
        </div>
        <div className={styles.optoinsFive__div}>
        <CheckboxComponent/>
        </div>
   
</div>
    )
}
export default ManyOptions;