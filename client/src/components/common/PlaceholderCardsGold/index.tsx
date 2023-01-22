import React from "react";
import styles from './PlaceholderCardsGold.module.scss';
import metro from '../../../image/cardsGold/metro 1.svg';
import ellipse from '../../../image/cardsGold/Ellipse 52.svg';
import {PlaceholderRow1Div} from '../PlaceholderRow1Div';
const PlaceholderCardsGold=({text1, text2, text3}:{text1:string, text2:string, text3:string})=>{
    return (
        <div className={styles.wrapper__div}>
            <PlaceholderRow1Div>
            <p className={styles.text1__p}>{text1}</p> 
            </PlaceholderRow1Div>
        <div className={styles.row2__div}>
           <img src={metro} alt='Обозначение метро'/>
           <p>{text2}</p>
           <img src={ellipse} alt='Обозначение населенного пункта'/>
           <p>{text3}</p>
           </div>
        </div>
    )
}
export {PlaceholderCardsGold}