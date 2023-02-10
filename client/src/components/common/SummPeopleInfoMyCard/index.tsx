import React from "react";
import styles from './SummPeopleInfoMyCard.module.scss';
import user from '../../../image/cardsGold/user.svg';

const SummPeopleInfoMyCard=({textPeople}:{textPeople:string})=>{
    return(
        <div className={styles.info__div}>
        <img src={user} alt='Изображение пользователя'/>
        <p>{textPeople}</p>
        </div>
    )
}
export {SummPeopleInfoMyCard}