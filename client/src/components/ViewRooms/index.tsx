import React, { ChangeEvent, FormEvent, useEffect, useState , MouseEvent, useRef} from "react";
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
import RowsCardsGold from '../RowsCardsGold';
import CardsGoldViewRow from '../CardsGoldViewRow';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { CardMinskRoom } from "../common/CardMinskRoom";
import MyTableViewCardsGold from '../MyTableViewCardsGold';
import CardsGoldSliders from '../CardsGoldSliders';
function ViewRooms (){
 const dispatch=useAppDispatch();
    const {minskRooms, loading, hasErrors} =useAppSelector(state=>state.cityMinskRoom);
   const divSelectRooms=useRef<HTMLDivElement>(null)
    const [selectValue, setSelectValue]=useState('По умолчанию');
    const [data, setData]=useState<any[]>([])
    const handleRoomsSubmit=()=>{
       console.log(setData)
    }
    
function handleSelectRoom(event:ChangeEvent<HTMLSelectElement>){
    setSelectValue(event.target.value);

}

  
 console.log(minskRooms)
  
         let minskResult= minskRooms.map((el, id)=><CardMinskRoom  key={id} imgSrc={el.imgSrc} altTitle={el.altTitle} rooms={el.rooms}
     description={el.description} id={0} city={el.city} coffeMashins={el.coffeMashins} metro={el.metro} cook={el.cook} gaz={el.gaz}
     stove={el.stove} cookMashins={el.cookMashins}
     electOver={el.electOver} MinPrice={el.MinPrice} textPeople={el.textPeople} title={el.title} />)
     
   



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

const [columToggle, setColumToggle]=useState(false);
const [rowToggle, setRowToggle]=useState(false)
const ClickColumRooms=(e:MouseEvent)=>{
    e.preventDefault();
    setColumToggle(columToggle=>!columToggle)
    console.log(  columToggle)

}
const ClickRowRooms=(e:MouseEvent)=>{
    e.preventDefault();
    setRowToggle(rowToggle=>!rowToggle)

}
    return (
    
    <div className={styles.wrapper__div}>
        <form className={styles.view__form} onSubmit={handleRoomsSubmit}>
            <div className={styles.viewSelect__div}>
                <img src={sort} alt='Векторное изображение сортировки'/>
<select  value={selectValue} onChange={handleSelectRoom}>
    <option value='По умолчанию'>По умолчанию</option>
        <option value='room1'>1 комн.</option>
        <option value='room2'>2 комн.</option>
        <option value='room3'>3 комн.</option>
        <option value='room4'>4 комн.</option>
        <option value='room5'>5 комн.</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке'/>
    </div>
    <div className={styles.viewButtons__div}>
    <button className={styles.row__button} onClick={ClickRowRooms}><img src={rowRooms} alt='Изображение списком' className={styles.rowRooms}/>Список</button>
    <button className={styles.colum__button} onClick={ClickColumRooms}><img src={columRooms} alt='Изображение плиткой' className={styles.columRooms}/>Плитки</button>
    <button className={styles.maps__button} ><img src={mapsRooms} alt='Изображение карты' className={styles.mapsRooms}/>Показать на карте</button>
    </div>
        </form>
        <p className={styles.resultText__p}>Найдено 234 результата</p>
      {loading? <p>Загрузка результата поиска...</p>:null}
      {hasErrors? <p>{hasErrors}</p>:null}
        { minskRooms?<div className={styles.selectRooms__div} ref={divSelectRooms}><MyTableViewCardsGold>{minskResult} </MyTableViewCardsGold></div>:null}
 
     
        {columToggle? <TableViewCardsGold>
            <CardsGoldSliders price={'65.00 BYN'} text1={"Минск, б-р Мулявина, д. 10"} text2={"Грушевка"} text3={"Шабаны"} descript={"Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ..."} />
        {
          
           data.map((el, id)=>{ 
            return( 
                
    <CardsGold  key={id} price={el.price} imgSrc={el.imgSrc} atlDesript={el.atlDesript} text1={el.text1} text2={el.text2} text3={el.text3} descript={el.descript}/>
            )
}).slice(1,7)
           
        
}
        </TableViewCardsGold>:null
    }
    {
        rowToggle?<RowsCardsGold>

{
       data.map((el, id)=>{ 
        return( 
           
<CardsGoldViewRow  key={id} price={el.price}  atlDesript={el.atlDesript} text1={el.text1} text2={el.text2} text3={el.text3} 
            descriptOther={el.descriptOther} textTitle={el.textTitle} imgSrc1={el.imgSrc1} imgSrc2={el.imgSrc2} imgSrc3={el.imgSrc3} imgSrc4={el.imgSrc4} imgSrc5={el.imgSrc5} imgSrc6={el.imgSrc6}/>
            
        )
  
}).slice(0,3)
}
        </RowsCardsGold>:null
    }
   
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