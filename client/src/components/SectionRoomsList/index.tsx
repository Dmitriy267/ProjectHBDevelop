import React from "react";
import styles from './SectionRoomsList.module.scss';
import {LinkDivTitle} from '../common/LinkDivTitle';
import {ButtonLink} from '../common/ButtonLink';
function SectionRoomsList (){
    return(
<section className={styles.roomsList__section}>
    <div className={styles.roomsTitle__div}>
<LinkDivTitle>
<p className={styles.roomList__p}>
<a href="#">Квартиры в Минске</a>
</p>
</LinkDivTitle>
<p className={styles.text__p}>Аренда квартир на сутки в Минске</p>
<p className={styles.rec__p}>Рекомендуем посмотреть</p>
</div>
<div className={styles.linkRooms__div}>
    <div className={styles.row1__div}>
        <ButtonLink text='Недорогие'/>
        <ButtonLink text='1-комнатные'/>
        <ButtonLink text='2-комнатные'/>
        <ButtonLink text='3-комнатные'/>
        <ButtonLink text='4-комнатные'/>
        <ButtonLink text='5-комнатные'/>
        <ButtonLink text='Заводской р.'/>
        <ButtonLink text='Ленинский р.'/>
        <ButtonLink text='Московский р.'/>
        <ButtonLink text='Октябрьский р.'/>
    </div>
    <div className={styles.row2__div}>
    <ButtonLink text='Партизанский р.'/>
        <ButtonLink text='Первомайский р.'/>
        <ButtonLink text='Советский р.'/>
        <ButtonLink text='Фрунзенский р.'/>
        <ButtonLink text='Центральный р.'/>
    </div>
</div>
</section>
    )
}

export default SectionRoomsList;