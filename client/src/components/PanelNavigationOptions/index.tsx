import React, { useEffect, useState } from "react";
import styles from './PanelNavigationOptions.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import setup from '../../image/panelNavigation/setup 1.svg'
import  chevron from './../../image/panelNavigation/chevron-down.svg';
import  chevronRight from './../../image/panelNavigation/chevron-down-right.svg';
import axios from 'axios';
import ManyOptions from '../ManyOptions';
interface IFormInput {
rooms:string;
}
function PanelNavigationOptions (){
    const { register, handleSubmit } = useForm<IFormInput>();
  const [data, setData]=useState([])
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

  const [manyOption, setManyOption]=useState(false)
  const OptionsAllShow=()=>{
    setManyOption(manyOption=>!manyOption)
  }
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    
    return(
<div className={styles.options__div}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__top}>
        <div className={styles.panel1__div}>
            <div className={styles.rowPanel1__div}>
        <p className={styles.panel1__p}>Комнаты</p>
    <select {...register('rooms')} className={styles.panel1__select}>
    <option>Выберите</option>
        <option value='room1'>1 комн.</option>
        <option value='room2'>2 комн.</option>
        <option value='room3'>3 комн.</option>
        <option value='room4'>4 комн.</option>
        <option value='room5'>5 комн.</option>
    </select>
    <img src={chevron} alt='Стрелка на кнопке'/>
    </div>
    </div>
    <div className={styles.panel2__div}>
        <div className={styles.rowPanel2__div}>
        <p>Цена за сутки (BYN)</p>
        <input type='number' placeholder='От'/>
    <hr/>
        <input type='number' placeholder='До'/>
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
    <button className={styles.remove__button}>Очистить</button>
    <button type='submit' className={styles.showObj__button}>Показать объекты<img src={chevronRight} alt='Стрелка кнопки' className={styles.chevronRight__img}/></button>
    </div>
    </div>
    </div>
    <div className={styles.form__bottom}>
    {manyOption?<ManyOptions/>:null}
    </div>
    </form>
   
</div>
    )
}

export default PanelNavigationOptions;