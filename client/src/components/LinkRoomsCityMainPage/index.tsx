import React from "react";
import styles from './LinkRoomsCityMainPage.module.scss';
import rooms from '../../image/mainPage/rooms.png';
import {LabelLinkCity} from '../common/LabelLinkCity';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {getTitleCity} from '../../redux/features/TitleCity/titleCitySlice'
const LinkRoomsCityMainPage=()=>{

   
    
    const dispatch=useAppDispatch();
    const {nameTiitleCity,}=useAppSelector(state=>state.titleCity)
    const navigate=useNavigate();
    
  

    const onClickCity =()=>{
        navigate('/Каталог квартир');
       console.log(nameTiitleCity)
    }
    return(
<div className={styles.wrapper__div}>
    <img src={rooms} alt='Изображение квартиры на главной странице'/>
    <div className={styles.descript__div}>
    <p className={styles.gradient__p}>СНЯТЬ КВАРТИРУ</p>
    <p className={styles.text__p}>Квартиры на сутки</p>
    <div className={styles.rowTopCity__div}>
<LabelLinkCity  text='Минск' onClick={()=>{onClickCity();dispatch(getTitleCity('в Минске'))}}/>
<LabelLinkCity text='Витебск' onClick={()=>{onClickCity();dispatch(getTitleCity('в Витебске'))}}/>
<LabelLinkCity text='Гродно' onClick={()=>{onClickCity();dispatch(getTitleCity('в Гродно'))}}/>
<LabelLinkCity text='Гомель' onClick={()=>{onClickCity();dispatch(getTitleCity('в Гомеле'))}}/>
    </div>
    <div className={styles.rowBottomCity__div}>
    <LabelLinkCity text='Брест'onClick={()=>{onClickCity();dispatch(getTitleCity('в Бресте'))}}/>
<LabelLinkCity text='Могилев' onClick={()=>{onClickCity();dispatch(getTitleCity('в Могилеве'))}}/>
    </div>
    </div>
</div>
    )
}
export default LinkRoomsCityMainPage;