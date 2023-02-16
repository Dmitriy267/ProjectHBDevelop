import React, {useState} from "react";
import LabelGold from "../../LabelGold";
import { SummPeopleInfo } from "../SummPeopleInfo";
import styles from './CardsMainPage.module.scss';
import {InfoBlockCards} from '../../common/InfoBlockCards';
import { PlaceholderRow1Div } from "../PlaceholderRow1Div";
import metro from '../../../image/cardsGold/metro 1.svg';
import ellipse from '../../../image/cardsGold/Ellipse 52.svg';
import {ContactsCardGoldAddit} from '../../common/ContactsCardGoldAddit';
import {MobileContactsCard} from '../../common/MobileContactsCard';

interface CardsMainPageProps {
    children?:React.ReactNode;
    priceText:string;
    roomsTexst:string;
    areaText:string;
    cityText:string;
    metroText:string;
    placeholderCity:string;
    descriptText:string;

}
const CardsMainPage=({children, priceText, roomsTexst, areaText, cityText,metroText, placeholderCity, descriptText}:CardsMainPageProps)=>{
    
    return(
        <>
        <div className={styles.wrapper__div}>
            {children}
        <LabelGold/>
        <div className={styles.descript__div}>
            <div className={styles.infoTop__div}>
            <div className={styles.row1__div}>
        <p>{priceText}</p>
        <p>за сутки</p>
        </div>
        <div className={styles.row2__div}>
        <SummPeopleInfo/>
        <InfoBlockCards>
        <p className={styles.text1__p}>{roomsTexst}</p>
        </InfoBlockCards>
        <InfoBlockCards>
        <p className={styles.text1__p}>{areaText}</p>
        </InfoBlockCards>
        </div>
            </div>
            <div className={styles.adress__div}>
                <PlaceholderRow1Div>
                    <p className={styles.text3__p}>{cityText}</p>
                    </PlaceholderRow1Div> 
                    <div className={styles.row3__div}>
           <img src={metro} alt='Обозначение метро'/>
           <p>{metroText}</p>
           <img src={ellipse} alt='Обозначение населенного пункта'/>
           <p>{placeholderCity}</p>
           </div>
            </div>
            <p className={styles.descriptText__p}>{descriptText}</p>
            <div className={styles.bottomLine__div}>
                <div className={styles.bottom_div}>
                    <MobileContactsCard />
                <ContactsCardGoldAddit>
    <a href='#' className={styles.textAddit__a}>Подробнее</a>
</ContactsCardGoldAddit>
                    </div>
            </div>
        </div>
        </div>
        </>
    )
}
export {CardsMainPage}