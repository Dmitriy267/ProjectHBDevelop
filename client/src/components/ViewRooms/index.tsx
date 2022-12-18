import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from './ViewRooms.module.scss';
import  chevron from './../../image/viewRooms/chevron-down.svg';
import  sort from './../../image/viewRooms/sort.svg';
import  rowRooms from './../../image/viewRooms/Group 279.svg';
import  columRooms  from './../../image/viewRooms/Group 278.svg';
import  mapsRooms  from './../../image/viewRooms/Vector.svg';
import CardsGold from '../CardsGold';
import TableViewCardsGold from '../TableViewCardsGold';
import axios from 'axios';
import { UlListComponent } from "../common/UlListComponent";
import vk from '../../image/viewRooms/vk 1.svg';
import fb from '../../image/viewRooms/facebook 1.svg';
import vb from '../../image/viewRooms/simple-icons_viber (1).svg';
import tg from '../../image/viewRooms/bx_bxl-telegram (1).svg';
import wp from '../../image/viewRooms/icomoon-free_whatsapp (1).svg';

function ViewRooms (){
  
    const [selectValue, setSelectValue]=useState('defolt');
    const [data, setData]=useState<any[]>([])
    const handleRoomsSubmit=(event:FormEvent)=>{
        console.log('Выбрана форма')
    }
function handleSelectRoom(event:ChangeEvent<HTMLSelectElement>){
    setSelectValue(event.target.value);
    console.log(event.target.value)
}
useEffect(()=>{
    const fetchData = async () => {
        const result = await axios(
          'http://localhost:5000/',
        );
  
        setData(result.data);
        console.log(result.data)
      };
  
      fetchData();
}, [])
    return (
    
    <div className={styles.wrapper__div}>
        <form className={styles.view__form} onSubmit={handleRoomsSubmit}>
            <div className={styles.viewSelect__div}>
                <img src={sort} alt='Векторное изображение сортировки'/>
<select className={styles.view__select} value={selectValue} onChange={handleSelectRoom}>
    <option value='defolt'>По умолчанию</option>
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
        </form>
        <p className={styles.resultText__p}>Найдено 234 результата</p>
        <TableViewCardsGold>
        {
          
           !data? '...Загрузка с сервера':data.map((el, id)=>{ 
            return( 
                
    <CardsGold  key={id} price={el.price} imgSrc={el.imgSrc} atlDesript={el.atlDesript} text1={el.text1} text2={el.text2} text3={el.text3} descript={el.descript}/>
            )
})
           
        }
       
        </TableViewCardsGold>
        <div className={styles.page__div}>
        <UlListComponent/>
        <div className={styles.rowLink__div}>
            <p>Поделиться</p>
            <div className={styles.rowLinkMes__div}>
                <img src={vk} alt='Иконка соцсетей'/>
            </div>
            <div className={styles.rowLinkMes__div}>
                <img src={fb} alt='Иконка соцсетей'/>
            </div>
            <div className={styles.rowLinkMes__div}>
                <img src={vb} alt='Иконка соцсетей'/>
            </div>
            <div className={styles.rowLinkMes__div}>
                <img src={tg} alt='Иконка соцсетей'/>
            </div>
            <div className={styles.rowLinkMes__div}>
                <img src={wp} alt='Иконка соцсетей'/>
            </div>
        </div>
        </div>
      </div>
      
    )
}
export default ViewRooms;