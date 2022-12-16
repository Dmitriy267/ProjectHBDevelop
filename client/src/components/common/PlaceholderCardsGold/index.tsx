import React from "react";
import styles from './PlaceholderCardsGold.module.scss';
import cityPlaceholder from '../../../image/cardsGold/pin.svg';
import metro from '../../../image/cardsGold/metro 1.svg';
import ellipse from '../../../image/cardsGold/Ellipse 52.svg';
const PlaceholderCardsGold=({text1, text2, text3}:{text1:string, text2:string, text3:string})=>{
    return (
        <div className={styles.wrapper__div}>
            <div className={styles.row1__div}>
            <img src={cityPlaceholder} alt='Местонахождение на карте'/>
                <p>{text1}</p> 
        </div>
        <div className={styles.row2__div}>
           <img src={metro} alt='Обазначение метро'/>
           <p>{text2}</p>
           <img src={ellipse} alt=''/>
           <p>{text3}</p>
           </div>
        </div>
    )
}
export {PlaceholderCardsGold}