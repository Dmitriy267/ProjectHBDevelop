import React from 'react';
import styles from './ManyOptions.module.scss';
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import {CheckboxComponent} from '../common/CheckboxComponent';
import { CheckboxComponentForm } from '../common/CheckboxComponentForm';
import { useForm } from "react-hook-form";
 export interface ManyOptionsProps{
  
    gaz:string;
    stove:string;
    coffeMashins:string;
    electOver:string;
    cook:string;
    cookMashins:string;
}
function ManyOptions (){
    const { register } = useForm<ManyOptionsProps>();
  
    

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
            <select  className={styles.optoinsFirst__select}>
    <option>Выберите</option>
        <option value='center'>Центральный район</option>
        <option value='leninsk'>Ленинский район</option>
        <option value='zavodsk'>Заводской район</option>
        <option value='pervomaisk'>Первомайский район</option>
        <option value='sovetsk'>Советский район</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
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
            <select  className={styles.optoinsFirst__select}>
    <option>Выберите</option>
        <option value='grushMetro'>Грушевка</option>
        <option value='phrunzMetro'>Фрунзенская</option>
        <option value='pervomMetro'>Первомайская</option>
        <option value='vokzalMetro'>Вокзальная</option>
        <option value='octaibrMetro'>Октябрьская</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
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
    )
}
export default ManyOptions;