import React from "react";
import styles from './CardsGoldViewRow.module.scss';
import LabelGoldRow from '../LabelGoldRow';
import  mapsRooms  from './../../image/viewRooms/Vector.svg';
import {DetalsCards} from '../common/DetalsCards';
import user from '../../image/cardsGold/user.svg';
import metro from '../../image/cardsGold/CardsViewRow/metro.svg';
import {ContactsCardGold} from '../common/ContactsCardGold';
import cellphone from '../../image/cardsGold/cellphone.svg';
import ButtonMark from '../ButtonMark';
import {ContactsCardGoldAddit} from '../common/ContactsCardGoldAddit';
interface CardsGoldViewRowProps {
    price:string;
    atlDesript:string;
    imgSrc:string;
    text1:string;
    text2:string;
    text3:string;
    textTitle:string,
    descriptOther:string;
  
}
const CardsGoldViewRow:React.FC<CardsGoldViewRowProps> =(props) =>{
    const {imgSrc, atlDesript, textTitle, price,  text1, text2, text3, descriptOther}=props;
    return (
<div className={styles.cards__div}>
    <div className={styles.blockSlid__div}>
        <img src={imgSrc} alt={atlDesript} className={styles.wrapper__img}/>
        <LabelGoldRow/>
    </div>
    <div className={styles.right__div}>
    <div className={styles.descriptRight__div}>
<p className={styles.textTitle__p}>{textTitle}</p>
<div className={styles.placeholder__div}>
<img src={mapsRooms} alt='Местонахождение на карте'/>
                <p>{text1}</p>
                </div>
                <div className={styles.price__div}> 
                <p className={styles.price__p}>{price}</p>
                <p className={styles.textPrice__p}>за сутки</p>
                </div>
                <div className={styles.rowDetals__div}>
                <DetalsCards>
                <img src={user} alt='Изображение пользователя' className={styles.detalsUser__img}/>
                    <p className={styles.detalsUser__p}>4 (2+2)</p>
                </DetalsCards>
                <DetalsCards>
                    <p className={styles.textMiddle__p}>4 комн.</p>
                </DetalsCards>
                <DetalsCards>
                    <img src={metro} alt='Обозначение метро' className={styles.detalsMetro__img}/>
                    <p className={styles.detalsMetro__p}>{text2}</p>
                </DetalsCards>
                <DetalsCards>
                    <div className={styles.Sets__p}>
                    <p className={styles.wet__p}>район:</p>
                    <p className={styles.dest__p}>{text3}</p>
                    </div>
                </DetalsCards>
                </div>
                <p className={styles.textOther__p}>{descriptOther}</p>
                <div className={styles.rowBottom__div}>
                    <div className={styles.rowBottomLeft__div}>
                <ContactsCardGold>
    <img src={cellphone} alt='Изображение телефона' className={styles.cellphone__img}/>
    <p className={styles.text1__p}>Контакты</p>
</ContactsCardGold>
<ButtonMark/>
</div>
<ContactsCardGoldAddit>
<p className={styles.textAddit__p}>Подробнее</p>
</ContactsCardGoldAddit>
                </div>
    </div>
    </div> 
</div>
    )
}
export default CardsGoldViewRow;