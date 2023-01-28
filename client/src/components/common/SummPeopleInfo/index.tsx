import React from "react";
import styles from './SummPeopleInfo.module.scss';
import user from '../../../image/cardsGold/user.svg';

const SummPeopleInfo=()=>{
    return(
        <div className={styles.info__div}>
        <img src={user} alt='Изображение пользователя'/>
        <p>4 (2+2)</p>
        </div>
    )
}
export {SummPeopleInfo}