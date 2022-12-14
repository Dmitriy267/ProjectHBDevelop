import React from 'react';
import styles from './CardsGold.module.scss';

interface CardsGoldProps {
    price:string;
    imgSrc:string;
    altDescript:string;
}
function CardsGold ({price, imgSrc, altDescript}:CardsGoldProps){
return (
    <div className={styles.wrapper__div}>
        <img src={imgSrc} alt={altDescript}/>
        <p>{price}</p>
        <p>за сутки</p>
    </div>
)
}

export default CardsGold;