import React from 'react';
import styles from './CardsGold.module.scss';
import  {PlaceholderCardsGold} from '../common/PlaceholderCardsGold';
import user from '../../image/cardsGold/user.svg';
import PanelCardsGoldBottom from '../PanelCardsGoldBottom';
import LabelGold from '../LabelGold';

interface CardsGoldProps {
    price:string;
    atlDesript:string;
    imgSrc:string;
    text1:string;
    text2:string;
    text3:string;
    descript:string;
  
}
const CardsGold:React.FC<CardsGoldProps> =(props)=>{
    const {imgSrc, atlDesript, price, descript, text1, text2, text3}=props;
return (
    <div className={styles.wrapper__div}>
        <img src={imgSrc} alt={atlDesript} className={styles.wrapper__img}/>
        <LabelGold/>
        <div className={styles.cardDescript__div}>
            <div className={styles.cardsRow__div}>
        <div className={styles.row1__div}>
        <p className={styles.price__p}>{price}</p>
        <p className={styles.view__p}>за сутки</p>
        </div>
        <div className={styles.row2__div}>
            <div className={styles.info__div}>
            <img src={user} alt='Изображение пользователя'/>
            <p>4 (2+2)</p>
            </div>
            <div className={styles.cwot__div}>
            <p>4 комн.</p>
            </div>
        </div>
        </div>
       <PlaceholderCardsGold text1={text1} text2={text2} text3={text3} />
      <p className={styles.descript__p}>{descript}</p>
      <PanelCardsGoldBottom/>
      </div>
      </div>
    
)
}

export default CardsGold;