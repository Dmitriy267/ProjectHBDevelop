import React from "react";
import styles from './CardsGoldSliders.module.scss';
import  {PlaceholderCardsGold} from '../common/PlaceholderCardsGold';
import PanelCardsGoldBottom from '../PanelCardsGoldBottom';
import LabelGold from '../LabelGold';
import {SummPeopleInfo} from '../common/SummPeopleInfo';
import SliderComponentCardsGold from '../SliderComponentCardsGold';
interface CardsGoldSlidersProps {
    price:string;
    text1:string;
    text2:string;
    text3:string;
    descript:string;
  
}
const CardsGoldSliders:React.FC<CardsGoldSlidersProps> =(props)=>{
    const { price,  descript, text1, text2, text3}=props;
return (
    <div className={styles.wrapper__div}>
        <div className={styles.blockSlid__div}>
        {/*Создаем слайд*/}

{<SliderComponentCardsGold />}

        {/*Конец слайда*/}
        <LabelGold/>
    </div>
        <LabelGold/>
        <div className={styles.cardDescript__div}>
            <div className={styles.cardsRow__div}>
        <div className={styles.row1__div}>
        <p className={styles.price__p}>{price}</p>
        <p className={styles.view__p}>за сутки</p>
        </div>
        <div className={styles.row2__div}>
            <SummPeopleInfo/>
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

export default CardsGoldSliders;