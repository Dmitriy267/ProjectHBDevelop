import React from "react";
import styles from './ManyOptionsMainPage.module.scss';
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import {CheckboxComponent} from '../common/CheckboxComponent';
//import { useForm} from "react-hook-form";
//import {UseFormRegister, FieldValues } from 'react-hook-form';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';
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
 interface ManyOptionsMainPageProps {
    place:PlaceEnum;
    area:AreaEnum;
    metro:MetroEnum;
    register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
}
function ManyOptionsMainPage ({register}:ManyOptionsMainPageProps){

    return(
    <div className={styles.block__options}>
    <div className={styles.optoinsFirst__div}>
        <div className={styles.select__div}>
            <label className={styles.label}>Спальные места</label>
            <select  className={styles.optoinsFirst__select} {...register('place')}>
    <option>Выберите</option>
        <option value='Односпальные'>Односпальные</option>
        <option value='Двухместные'>Двухместные</option>
        <option value='Полуторные'>Полуторные </option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
    </div>
    <CheckboxComponent>
        
        </CheckboxComponent>
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
    <CheckboxComponent>
        
        </CheckboxComponent>
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
    <CheckboxComponent>
        
        </CheckboxComponent>
        </div>
         {/*Четвертый блок*/}
         <div className={styles.optoinsFour__div}>
         <CheckboxComponent>
        
        </CheckboxComponent>
        </div>




    </div>

    )
}

export default ManyOptionsMainPage;