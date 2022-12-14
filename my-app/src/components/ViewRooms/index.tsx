import React from "react";
import styles from './ViewRooms.module.scss';
import  chevron from './../../image/viewRooms/chevron-down.svg';
import  sort from './../../image/viewRooms/sort.svg';
import  rowRooms from './../../image/viewRooms/Group 279.svg';
import  columRooms  from './../../image/viewRooms/Group 278.svg';
import  mapsRooms  from './../../image/viewRooms/Vector.svg';
import CardsGold from '../CardsGold';
function ViewRooms (){
    return (
    
    <div className={styles.wrapper__div}>
        <div className={styles.view__div}>
            <div className={styles.viewSelect__div}>
                <img src={sort} alt='Векторное изображение сортировки'/>
<select className={styles.view__select}>
    <option>Выберите</option>
        <option value='room1'>1 комн.</option>
        <option value='room2'>2 комн.</option>
        <option value='room3'>3 комн.</option>
        <option value='room4'>4 комн.</option>
        <option value='room5'>5 комн.</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке'/>
    </div>
    <div className={styles.viewButtons__div}>
    <button className={styles.row__button}><img src={rowRooms} alt='Изображение списком' className={styles.rowRooms}/>Список</button>
    <button className={styles.colum__button}><img src={columRooms} alt='Изображение плиткой' className={styles.columRooms}/>Плитки</button>
    <button className={styles.maps__button}><img src={mapsRooms} alt='Изображение карты' className={styles.mapsRooms}/>Показать на карте</button>
    </div>
        </div>
        <p>Найдено 234 результата</p>
    <CardsGold price="" imgSrc="" altDescript=""/>
      </div>
      
    )
}
export default ViewRooms;