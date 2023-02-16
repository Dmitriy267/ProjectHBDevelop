import React from "react";
import styles from './LocationMapRooms.module.scss';
import {ButtonMap} from '../common/ButtonMap';
import imgSrc from '../../image/viewRooms/Mask Group.png'
function LocationMapRooms (){
    return(
<section className={styles.locat__section}>
    <img src={imgSrc} className={styles.location__img} alt='Фоновое изображение'/>
    <div className={styles.locat__div}>
    <p>Показать найденные квартиры на карте</p>
    <p>Ищите новостройки рядом с работой,
парком или родственниками</p>
<ButtonMap/>

</div>
    </section>
    )
}
export default LocationMapRooms;