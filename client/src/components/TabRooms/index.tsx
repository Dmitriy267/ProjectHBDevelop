import React, { useState, useEffect} from "react";
import styles from './TabRooms.module.scss';
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import { useForm, SubmitHandler } from "react-hook-form";
import setup from '../../image/panelNavigation/setup 1.svg';
//import ManyOptionsMainPage from "../ManyOptionsMainPage";
import placeholder from '../../image/mainPage/Group (2).svg';
import chevron__img from '../../image/mainPage/chevron-down (4).svg';
import CheckboxComponent from '../CheckboxComponent';
enum CityEnum{
Минск='Минск',
Витебск='Витебск',
Гродно='Гродно',
Гомель='Гомель',
Брест='Брест'

}
enum PlaceEnum{
    Односпальные='Односпальные',
    Двухместные='Двухместные',
    Полуторные='Полуторные'
}
enum AreaEnum{
    Центральный='Центральный' ,
    Ленинский='Ленинский',
    Заводской='Заводской',
    Первомайский='Первомайский',
    Советский='Советский'
}
enum MetroEnum{
    Грушевка='Грушевка',
    Фрунзенская='Фрунзенская',
    Первомайская='Первомайская',
    Вокзальная='Вокзальная',
    Октябрьская='Октябрьская'
}
interface TabRoomsProps{
    city:CityEnum;
    rooms:string;
    MinPrice:number;
    MaxPrice:number;
    place:PlaceEnum;
    area:AreaEnum;
    metro:MetroEnum;
}
function TabRooms (){
    const [manyOption, setManyOption]=useState(false)
  const OptionsAllShow=()=>{
    setManyOption(manyOption=>!manyOption)
  }
  
    const { register, handleSubmit, setFocus  } = useForm<TabRoomsProps>();
  
    const onSubmit = (data: TabRoomsProps)=> console.log(data);

    useEffect(() => {
        setFocus('city');
      
      }, [setFocus]);
    return (
        <form className={styles.wrapper__form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.top__div}>
            <div className={styles.city__div}>
                <div className={styles.groupCity__div}>
            <label> Город </label>
                <select {...register('city')} className={styles.panel1__select} >
      <option>Выберите</option>
          <option value='Минск'>Минск</option>
          <option value='Витебск'>Витебск</option>
          <option value='Гродно'>Гродно</option>
          <option value='Гомель'>Гомель</option>
          <option value='Брест'>Брест</option>
      </select>
    
      <img src={chevron} alt='Стрелка на кнопке'/>
           
            </div>
            </div>

            <div className={styles.rooms__div}>
                <div className={styles.groupRooms__div}>
            <label> Комнаты </label>
                <select {...register('rooms')} className={styles.panel1__select} >
      <option className={styles.default__option}>Выберите</option>
          <option value='1 комн.'>1 комн.</option>
          <option value='2 комн.'>2 комн.</option>
          <option value='3 комн.'>3 комн.</option>
          <option value='4 комн.'>4 комн.</option>
          <option value='5 комн.'>5 комн.</option>
      </select>
    
      <img src={chevron} alt='Стрелка на кнопке'/>
           
            </div>
            </div>
            <div className={styles.price__div}>
                <div className={styles.groupPrice__div}>
            <label> Цена за сутки (BYN) </label>
            <div className={styles.groupPriceRow__div}>
            <input type='number' placeholder='От' {...register('MinPrice', {min:1000})}/>
    <hr/>
        <input type='number' placeholder='До' {...register('MaxPrice', {max:20000})}/>
        </div>
            </div>
            </div>
            <div className={styles.moreOptions__div}>
        <div className={styles.groupOptions__div}>
        <label>Больше опций </label>
       <button onClick={OptionsAllShow} className={styles.options__button}><img src={setup} alt='Ползунок опций'/></button>
       </div>
    </div>
    <div className={styles.map__div}>
        <a href="#">На карте</a>
        <img src={placeholder} alt='Иконка местоположения на карте'/>
    </div>

    <button type='submit' className={styles.submit__button}>Показать<img src={chevron__img} alt='Стрелка на кнопке "Показать"' className={styles.submit__img}/></button>
 
</div>
    <div className={styles.form__bottom}>
    {manyOption&& (
        <div className={styles.block__options}>
        <div className={styles.optoinsFirst__div}>
                <label className={styles.label}>Спальные места</label>
                <select  className={styles.optoinsFirst__select} {...register('place')}>
        <option>Выберите</option>
            <option value='Односпальные'>Односпальные</option>
            <option value='Двухместные'>Двухместные</option>
            <option value='Полуторные'>Полуторные </option>
        </select>
        <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
            <CheckboxComponent/>
            </div>
            {/*Второй блок*/}
            <div className={styles.optoinsTwo__div}>
                <label className={styles.label}>Район</label>
                <select  className={styles.optoinsFirst__select} {...register('area')}>
        <option>Выберите</option>
            <option value='Центральный'>Центральный</option>
            <option value='Ленинский'>Ленинский</option>
            <option value='Заводской'>Заводской </option>
            <option value='Первомайский'>Первомайский </option>
            <option value='Советский'>Советский </option>
        </select>
        <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
            <CheckboxComponent/>
            </div>
            {/*Третий блок*/}
            <div className={styles.optoinsThree__div}>
                <label className={styles.label}>Метро</label>
                <select  className={styles.optoinsFirst__select} {...register('metro')}>
        <option>Выберите</option>
            <option value='Грушевка'>Грушевка</option>
            <option value='Фрунзенская'>Фрунзенская</option>
            <option value='Первомайская'>Первомайская </option>
            <option value='Вокзальная'>Вокзальная </option>
            <option value='Октябрьская'>Октябрьская </option>
        </select>
        <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
            <CheckboxComponent/>
            </div>
             {/*Четвертый блок*/}
             <div className={styles.optoinsFour__div}>
            <CheckboxComponent/>
            </div>
    
    
    
    
        </div>
    )}
    </div>




        </form>
    )
}

export default TabRooms;