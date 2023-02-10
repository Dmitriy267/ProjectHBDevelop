import React from "react";
import styles from './CardMinskRoom.module.scss';
import { SummPeopleInfoMyCard } from "../SummPeopleInfoMyCard";
import {InfoBlockCards} from '../../common/InfoBlockCards';
import { PlaceholderRow1Div } from "../PlaceholderRow1Div";
import metroImg from '../../../image/cardsGold/metro 1.svg';
import ellipse from '../../../image/cardsGold/Ellipse 52.svg';
import {ContactsCardGoldAddit} from '../../common/ContactsCardGoldAddit';
import {MobileContactsCard} from '../../common/MobileContactsCard';
import PanelCardsGoldBottom from "../../PanelCardsGoldBottom";


interface  CardMinskRoomProps{
    imgSrc:string;
    altTitle:string;
    MinPrice?:string;
    rooms:string;
    description:string;
    id:number,
      title:string,
      city:string,
      place?:string,
      coffeMashins?:string,
      cook?:string,
      cookMashins?:string,
      electOver?:string,
      gaz?:string,
      metro?:string,
      stove?:string,
      area?:string,
      MaxPrice?:string,
      textPeople:string,
}

function CardMinskRoom ({...props}:CardMinskRoomProps){
    const {imgSrc, altTitle, MinPrice, rooms, description, title, city, place, coffeMashins, cook, cookMashins, electOver, gaz, metro, stove, area, MaxPrice, textPeople}=props;
    return (
<>
<div className={styles.wrapper__div}>
          <img src={imgSrc} alt={altTitle} className={styles.first__img}/>
        <div className={styles.descript__div}>
            <div className={styles.infoTop__div}>
            <div className={styles.row1__div}>
        <p>{MinPrice} BYN</p>
        <p>за сутки</p>
        </div>
        <div className={styles.row2__div}>
        <SummPeopleInfoMyCard textPeople={textPeople}/>
        <InfoBlockCards>
        <p className={styles.text1__p}>{rooms}</p>
        </InfoBlockCards>
       
        </div>
            </div>
            <div className={styles.adress__div}>
                <PlaceholderRow1Div>
                  <p className={styles.text__p}>{city}</p>
                    </PlaceholderRow1Div> 
                    <div className={styles.row3__div}>
           <img src={metroImg} alt='Обозначение метро'/>
           <p>{metro}</p>
           </div>
            </div>
            <p className={styles.descriptText__p}>{description}</p>
            <p className={styles.descriptText2__p}>В квартире имеется:</p>
            <ul className={styles.list__ul}>
                <li>{coffeMashins}</li>
                <li>{cook}</li>
                <li>{electOver}</li>
                <li>{gaz}</li>
                <li>{stove}</li>
                <li>{cookMashins}</li>
                </ul>
            <PanelCardsGoldBottom/>
        </div>
        </div>
</>
    )
}
export {CardMinskRoom}