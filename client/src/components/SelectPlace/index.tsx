import React from 'react';
import styles from './SelectPlace.module.scss';
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import { UseFormRegister} from 'react-hook-form';

interface IFormValues{
    place:string;
}
const SelectPlace=React.forwardRef<HTMLSelectElement,
{ label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({  name, label, onChange, onBlur }, ref) => (

    <>
    <div className={styles.select__div}>
            <label>{label}</label>
            <select name={name} className={styles.optoinsFirst__select} ref={ref} onChange={onChange} onBlur={onBlur}>
    <option>Выберите</option>
        <option value='Односпальные'>Односпальные</option>
        <option value='Двухместные'>Двухместные</option>
        <option value='Полуторные'>Полуторные </option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке' className={styles.select__img}/>
    </div>
  
  </>
));

export default SelectPlace;