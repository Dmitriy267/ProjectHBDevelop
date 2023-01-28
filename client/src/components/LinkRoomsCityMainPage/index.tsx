import React from "react";
import styles from './LinkRoomsCityMainPage.module.scss';
import rooms from '../../image/mainPage/rooms.png';
import {LabelLinkCity} from '../common/LabelLinkCity';
const LinkRoomsCityMainPage=()=>{
    return(
<div className={styles.wrapper__div}>
    <img src={rooms} alt='Изображение квартиры на главной странице'/>
    <div className={styles.descript__div}>
    <p className={styles.gradient__p}>СНЯТЬ КВАРТИРУ</p>
    <p className={styles.text__p}>Квартиры на сутки</p>
    <div className={styles.rowTopCity__div}>
<LabelLinkCity text='Минск'/>
<LabelLinkCity text='Витебск'/>
<LabelLinkCity text='Гродно'/>
<LabelLinkCity text='Гомель'/>
    </div>
    <div className={styles.rowBottomCity__div}>
    <LabelLinkCity text='Брест'/>
<LabelLinkCity text='Могилев'/>
    </div>
    </div>
</div>
    )
}
export default LinkRoomsCityMainPage;