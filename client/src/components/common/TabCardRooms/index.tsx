import React from "react";
import styles from './TabCardRooms.module.scss';
import { SummPeopleInfo } from "../SummPeopleInfo";
import {InfoBlockCards} from '../../common/InfoBlockCards';
import { PlaceholderRow1Div } from "../PlaceholderRow1Div";
import metro from '../../../image/cardsGold/metro 1.svg';
import ellipse from '../../../image/cardsGold/Ellipse 52.svg';
import {ContactsCardGoldAddit} from '../../common/ContactsCardGoldAddit';
import {MobileContactsCard} from '../../common/MobileContactsCard';
import { Rooms } from "../../../redux/models/models";

interface TabCardRoomsProps {
    tabRoom:Rooms;
}
function TabCardRooms ({tabRoom}:TabCardRoomsProps){
    return (
<>
<div className={styles.wrapper__div}>
          <img src={tabRoom.imgSrc} alt={tabRoom.altTitle}/>
        <div className={styles.descript__div}>
            <div className={styles.infoTop__div}>
            <div className={styles.row1__div}>
        <p>{tabRoom.MinPrice}</p>
        <p>за сутки</p>
        </div>
        <div className={styles.row2__div}>
        <SummPeopleInfo/>
        <InfoBlockCards>
        <p className={styles.text1__p}>{tabRoom.rooms}</p>
        </InfoBlockCards>
        <InfoBlockCards>
        <p className={styles.text1__p}>{tabRoom.areaText}</p>
        </InfoBlockCards>
        </div>
            </div>
            <div className={styles.adress__div}>
                <PlaceholderRow1Div>
                    <p className={styles.text3__p}>{tabRoom.city}</p>
                    </PlaceholderRow1Div> 
                    <div className={styles.row3__div}>
           <img src={metro} alt='Обозначение метро'/>
           <img src={ellipse} alt='Обозначение населенного пункта'/>
           </div>
            </div>
            <p className={styles.descriptText__p}>{tabRoom.description}</p>
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
export {TabCardRooms}