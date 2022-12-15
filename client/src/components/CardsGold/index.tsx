import React from 'react';
import styles from './CardsGold.module.scss';
import  {PlaceholderCardsGold} from '../common/PlaceholderCardsGold';

interface CardsGoldProps {
    price:string;
    atlDesript:string;
    imgSrc:string;
  
}
function CardsGold ({price , atlDesript, imgSrc}:CardsGoldProps){
return (
    <div className={styles.wrapper__div}>
        <img src={imgSrc} alt={atlDesript}/>
        <p>{price}</p>
        <p>за сутки</p>
       <PlaceholderCardsGold>
       </PlaceholderCardsGold>
    </div>
)
}

export default CardsGold;