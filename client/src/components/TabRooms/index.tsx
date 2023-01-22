import React, { useState, useEffect} from "react";
import styles from './TabRooms.module.scss';
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import { useForm, SubmitHandler } from "react-hook-form";
import setup from '../../image/panelNavigation/setup 1.svg';
//import ManyOptionsMainPage from "../ManyOptionsMainPage";
import placeholder from '../../image/mainPage/Group (2).svg';
import chevron__img from '../../image/mainPage/chevron-down (4).svg';
import {CheckboxComponent} from '../common/CheckboxComponent';
import SelectPlace from '../SelectPlace';
import SelectArea from '../SelectArea';
import SelectMetro from '../SelectMetro';
import {CheckboxComponentForm} from '../common/CheckboxComponentForm';

enum CityEnum{
Минск='Минск',
Витебск='Витебск',
Гродно='Гродно',
Гомель='Гомель',
Брест='Брест'

}
 export enum PlaceEnum{
    Односпальные='Односпальные',
    Двухместные='Двухместные',
    Полуторные='Полуторные'
}
export enum AreaEnum{
    Центральный='Центральный' ,
    Ленинский='Ленинский',
    Заводской='Заводской',
    Первомайский='Первомайский',
    Советский='Советский'
}
export enum MetroEnum{
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
    gaz:string;
    stove:string;
    coffeMashins:string;
    electOver:string;
    cook:string;
    cookMashins:string;
}
function TabRooms (){
    const [manyOption, setManyOption]=useState(false)
  const OptionsAllShow=()=>{
    setManyOption(manyOption=>!manyOption)
  }
  
    const { register, handleSubmit, setFocus  } = useForm<TabRoomsProps>();
  
    const onSubmit: SubmitHandler<TabRoomsProps> = data => console.log(data);

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
            <input type='number' placeholder='От' {...register('MinPrice', {min:50})}/>
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
    {manyOption&&(<div className={styles.block__options}>
    <div className={styles.optoinsFirst__div}>
        <SelectPlace label='Спальные места' {...register('place')}/>
        <CheckboxComponent>
        <CheckboxComponentForm label='Газовая плита' {...register('gaz')} value='Газовая плита'/>
        <CheckboxComponentForm label='Духовка' {...register('stove')} value='Духовка'/>
        <CheckboxComponentForm label='Кофеварка' {...register('coffeMashins')} value='Кофеварка'/>
        <CheckboxComponentForm label='Микроволновая печь ' {...register('electOver')} value='Микроволновая печь '/>
        <CheckboxComponentForm label='Посуда ' {...register('cook')} value='Посуда '/>
        <CheckboxComponentForm label='Посудомоечная машина  ' {...register('cookMashins')} value='Посудомоечная машина  '/>
        </CheckboxComponent>
        </div>
        {/*Второй блок*/}
        <div className={styles.optoinsTwo__div}>
        <SelectArea label='Район' {...register('area')}/> 
        <CheckboxComponent>
        <CheckboxComponentForm label='Газовая плита' {...register('gaz')} value='Газовая плита'/>
        <CheckboxComponentForm label='Духовка' {...register('stove')} value='Духовка'/>
        <CheckboxComponentForm label='Кофеварка' {...register('coffeMashins')} value='Кофеварка'/>
        <CheckboxComponentForm label='Микроволновая печь ' {...register('electOver')} value='Микроволновая печь '/>
        <CheckboxComponentForm label='Посуда ' {...register('cook')} value='Посуда '/>
        <CheckboxComponentForm label='Посудомоечная машина  ' {...register('cookMashins')} value='Посудомоечная машина  '/>
        </CheckboxComponent>
        </div>
        {/*Третий блок*/}
        <div className={styles.optoinsThree__div}>
        <SelectMetro label='Метро' {...register('metro')}/>
         <CheckboxComponent>
        <CheckboxComponentForm label='Газовая плита' {...register('gaz')} value='Газовая плита'/>
        <CheckboxComponentForm label='Духовка' {...register('stove')} value='Духовка'/>
        <CheckboxComponentForm label='Кофеварка' {...register('coffeMashins')} value='Кофеварка'/>
        <CheckboxComponentForm label='Микроволновая печь ' {...register('electOver')} value='Микроволновая печь '/>
        <CheckboxComponentForm label='Посуда ' {...register('cook')} value='Посуда '/>
        <CheckboxComponentForm label='Посудомоечная машина  ' {...register('cookMashins')} value='Посудомоечная машина  '/>
        </CheckboxComponent>
        </div>
         {/*Четвертый блок*/}
         <div className={styles.optoinsFour__div}>
         <CheckboxComponent>
        <CheckboxComponentForm label='Газовая плита' {...register('gaz')} value='Газовая плита'/>
        <CheckboxComponentForm label='Духовка' {...register('stove')} value='Духовка'/>
        <CheckboxComponentForm label='Кофеварка' {...register('coffeMashins')} value='Кофеварка'/>
        <CheckboxComponentForm label='Микроволновая печь ' {...register('electOver')} value='Микроволновая печь '/>
        <CheckboxComponentForm label='Посуда ' {...register('cook')} value='Посуда '/>
        <CheckboxComponentForm label='Посудомоечная машина  ' {...register('cookMashins')} value='Посудомоечная машина  '/>
        </CheckboxComponent>
        </div>




    </div>)
}
    </div>




        </form>
    )
}

export default TabRooms;