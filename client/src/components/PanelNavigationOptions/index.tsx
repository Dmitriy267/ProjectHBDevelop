import React, { useEffect,  useState } from "react";
import styles from './PanelNavigationOptions.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import setup from '../../image/panelNavigation/setup 1.svg'
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import  chevronRight from './../../image/panelNavigation/chevron-down-right.svg';
import  chevronDown from './../../image/panelNavigation/chevron-down.svg';
import {CheckboxComponent} from '../common/CheckboxComponent';
import { CheckboxComponentForm } from '../common/CheckboxComponentForm';
import {PlaceEnum} from '../TabRooms';
import {AreaEnum} from '../TabRooms';
import {MetroEnum} from '../TabRooms';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {FetchMinskRooms, FetchMinskRooms2, FetchMinskRooms3, FetchMinskRooms4,FetchMinskRooms5} from '../../redux/features/CityMinskRoom/cityMinskRoomSlice';

                                           
interface IFormInput {
    MinPrice:number;
    MaxPrice:number;
rooms:string;
place:PlaceEnum;
gaz:string;
    stove:string;
    coffeMashins:string;
    electOver:string;
    cook:string;
    cookMashins:string;
    area:AreaEnum;
    metro:MetroEnum;
}
function PanelNavigationOptions (){
    const dispatch=useAppDispatch();
    const {minskRooms} =useAppSelector(state=>state.cityMinskRoom);
    const { register, handleSubmit, setFocus } = useForm<IFormInput>();

  useEffect(() => {
    setFocus('rooms');
  
  }, [setFocus]);

  const [manyOption, setManyOption]=useState(false)
  const OptionsAllShow=()=>{
    setManyOption(manyOption=>!manyOption)
  }
  const onSubmit = (data: IFormInput)=> {
 console.log(data)
      const {rooms, place, MinPrice, MaxPrice, gaz,  stove, coffeMashins, electOver, cook, cookMashins, area, metro}=data;
 switch(rooms){
    case('1 комн.'):
    return dispatch(FetchMinskRooms());
  case ('2 комн.'):
    return dispatch(FetchMinskRooms2());
    case ('3 комн.'):
    return dispatch(FetchMinskRooms3());
    case ('4 комн.'):
        return dispatch(FetchMinskRooms4());
        case ('5 комн.'):
            return dispatch(FetchMinskRooms5());
            default:
                return null;
 }




    

}
    return(
<div className={styles.options__div}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__top}>
        <div className={styles.panel1__div}>
            <div className={styles.rowPanel1__div}>
        <p className={styles.panel1__p}>Комнаты</p>
    <select {...register('rooms')} className={styles.panel1__select} >
      
    <option value='Выберите'>Выберите</option>
          <option value='1 комн.'>1 комн.</option>
          <option value='2 комн.'>2 комн.</option>
          <option value='3 комн.'>3 комн.</option>
          <option value='4 комн.'>4 комн.</option>
          <option value='5 комн.'>5 комн.</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке'/>
    </div>
    </div>
    <div className={styles.panel2__div}>
        <div className={styles.rowPanel2__div}>
        <p>Цена за сутки (BYN)</p>
        <input type='number' placeholder='От' {...register('MinPrice', {min:20, max:50})} />
   <hr/>
        <input type='number' placeholder='До'{...register('MaxPrice', {min:50, max:200}) }/>
        </div>
    </div>
    <div className={styles.panel3__div}>
        <div className={styles.rowPanel3__div}>
        <p>Больше опций </p>
       <button onClick={OptionsAllShow}><img src={setup} alt='Ползунок опций'/></button>
       </div>
    </div>
    <div className={styles.panel4__div}>
        <div className={styles.rowPanel4__div}>
    <button className={styles.remove__button} onClick={()=>{}}>Очистить</button>
    <button type='submit' className={styles.showObj__button}>Показать объекты<img src={chevronRight} alt='Стрелка кнопки' className={styles.chevronRight__img}/></button>
    </div>
    </div>
    </div>
    <div className={styles.form__bottom}>
    {manyOption&&(
        <div className={styles.wrapper__options}>
        <div className={styles.optoinsFirst__div}>
            <p>Спальные места</p>
            <select  className={styles.optoinsFirst__select} {...register('place')}>
    <option>Выберите</option>
    <option value='Односпальные'>Односпальные</option>
        <option value='Двухместные'>Двухместные</option>
        <option value='Полуторные'>Полуторные </option>
    </select>
  
    <img src={chevronDown} alt='Стрелка на кнопке' className={styles.select__img}/>
        <CheckboxComponent>
        <CheckboxComponentForm label='Газовая плита' {...register('gaz')} value='Газовая плита'/>
        <CheckboxComponentForm label='Духовка' {...register('stove')} value='Духовка'/>
        <CheckboxComponentForm label='Кофеварка' {...register('coffeMashins')} value='Кофеварка'/>
        <CheckboxComponentForm label='Микроволновая печь ' {...register('electOver')} value='Микроволновая печь '/>
        <CheckboxComponentForm label='Посуда ' {...register('cook')} value='Посуда '/>
        <CheckboxComponentForm label='Посудомоечная машина  ' {...register('cookMashins')} value='Посудомоечная машина  '/>
        </CheckboxComponent>
        </div>
        <div className={styles.optoinsTwo__div}>
            <p>Район</p>
            <select  className={styles.optoinsFirst__select} {...register('area')}>
    <option>Выберите</option>
    <option value='Заводской'>Заводской</option>
    <option value='Ленинский'>Ленинский</option>
    <option value='Московский'>Московский</option>
    <option value='Октябрьский'>Октябрьский</option>
    <option value='Центральный'>Центральный</option>
        <option value='Фрунзенский'>Фрунзенский</option>
        <option value='Партизанский'>Партизанский </option>
        <option value='Первомайский'>Первомайский </option>
        <option value='Советский'>Советский </option>  
    </select>
    <img src={chevronDown} alt='Стрелка на кнопке' className={styles.select__img}/>
    <CheckboxComponent>
    <CheckboxComponentForm label='Газовая плита' {...register('gaz')} value='Газовая плита'/>
        <CheckboxComponentForm label='Духовка' {...register('stove')} value='Духовка'/>
        <CheckboxComponentForm label='Кофеварка' {...register('coffeMashins')} value='Кофеварка'/>
        <CheckboxComponentForm label='Микроволновая печь ' {...register('electOver')} value='Микроволновая печь '/>
        <CheckboxComponentForm label='Посуда ' {...register('cook')} value='Посуда '/>
        <CheckboxComponentForm label='Посудомоечная машина  ' {...register('cookMashins')} value='Посудомоечная машина  '/>
        </CheckboxComponent>
        </div>
        <div className={styles.optoinsThree__div}>
            <p>Метро</p>
            <select  className={styles.optoinsFirst__select} {...register('metro')}>
    <option>Выберите</option>
    <option value='Грушевка'>Грушевка</option>
        <option value='Фрунзенская'>Фрунзенская</option>
        <option value='Первомайская'>Первомайская </option>
        <option value='Вокзальная'>Вокзальная </option>
        <option value='Октябрьская'>Октябрьская </option> 
    </select>
    <img src={chevronDown} alt='Стрелка на кнопке' className={styles.select__img}/>
    <CheckboxComponent>
    <CheckboxComponentForm label='Газовая плита' {...register('gaz')} value='Газовая плита'/>
        <CheckboxComponentForm label='Духовка' {...register('stove')} value='Духовка'/>
        <CheckboxComponentForm label='Кофеварка' {...register('coffeMashins')} value='Кофеварка'/>
        <CheckboxComponentForm label='Микроволновая печь ' {...register('electOver')} value='Микроволновая печь '/>
        <CheckboxComponentForm label='Посуда ' {...register('cook')} value='Посуда '/>
        <CheckboxComponentForm label='Посудомоечная машина  ' {...register('cookMashins')} value='Посудомоечная машина  '/>
        </CheckboxComponent>
        </div>
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
        <div className={styles.optoinsFive__div}>
        <CheckboxComponent>
        <CheckboxComponentForm label='Газовая плита' {...register('gaz')} value='Газовая плита'/>
        <CheckboxComponentForm label='Духовка' {...register('stove')} value='Духовка'/>
        <CheckboxComponentForm label='Кофеварка' {...register('coffeMashins')} value='Кофеварка'/>
        <CheckboxComponentForm label='Микроволновая печь ' {...register('electOver')} value='Микроволновая печь '/>
        <CheckboxComponentForm label='Посуда ' {...register('cook')} value='Посуда '/>
        <CheckboxComponentForm label='Посудомоечная машина  ' {...register('cookMashins')} value='Посудомоечная машина  '/>
        </CheckboxComponent>
        </div>
   
</div>
    )}
    </div>
    </form>
   
</div>
    )
}

export default PanelNavigationOptions;