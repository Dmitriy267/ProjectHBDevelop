import React from "react";
import styles from './PanelCardsGoldBottom.module.scss';
import heart from '../../image/cardsGold/heart.svg';
import cellphone from '../../image/cardsGold/cellphone.svg';
import {ContactsCardGold} from '../common/ContactsCardGold';
import {ContactsCardGoldAddit} from '../common/ContactsCardGoldAddit';

function PanelCardsGoldBottom (){
    return(
<div className={styles.cardsBottom__div}>
    <div className={styles.row__div}>
<div className={styles.heart__div}>
    <img src={heart}  alt='Изображение сердечка'/>
</div>
<ContactsCardGold>
    <img src={cellphone} alt='Изображение телефона' className={styles.cellphone__img}/>
    <p className={styles.text1__p}>Контакты</p>
</ContactsCardGold>
<ContactsCardGoldAddit>
    <p className={styles.text2__p}>Подробнее</p>
</ContactsCardGoldAddit>
    </div>
</div>
    )
}

export default PanelCardsGoldBottom;