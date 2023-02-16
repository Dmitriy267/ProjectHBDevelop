import React from 'react';
import styles from './SelectMetro.module.scss';
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import { UseFormRegister} from 'react-hook-form';

interface IFormValues{
    metro:string;
}
const SelectMetro=React.forwardRef<HTMLSelectElement,
{ label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({  name, label, onChange, onBlur }, ref) => (

    <>
    <div className={styles.select__div}>
            <label>{label}</label>
            <select name={name} className={styles.optoinsFirst__select} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option>Выберите</option>
            <option value='Грушевка'>Грушевка</option>
        <option value='Фрунзенская'>Фрунзенская</option>
        <option value='Первомайская'>Первомайская </option>
        <option value='Вокзальная'>Вокзальная </option>
        <option value='Октябрьская'>Октябрьская </option>
     
    </select>
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
    </div>
  
  </>
));

export default SelectMetro;