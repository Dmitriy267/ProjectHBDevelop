import React from 'react';
import styles from './SelectArea.module.scss';
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import { UseFormRegister} from 'react-hook-form';

interface IFormValues{
    area:string;
}
const SelectArea=React.forwardRef<HTMLSelectElement,
{ label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({  name, label, onChange, onBlur }, ref) => (

    <>
    <div className={styles.select__div}>
            <label>{label}</label>
            <select name={name} className={styles.optoinsFirst__select} ref={ref} onChange={onChange} onBlur={onBlur}>
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
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
    </div>
  
  </>
));

export default SelectArea;