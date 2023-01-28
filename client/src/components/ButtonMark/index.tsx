import React from "react";
import styles from './ButtonMark.module.scss';
import heart from '../../image/cardsGold/CardsViewRow/heart.svg';


const ButtonMark=()=>{
    return(
        <button className={styles.mark__button}>В закладки<img src={heart}  alt='Изображение сердечка'/></button>
    )
}


export  default ButtonMark;