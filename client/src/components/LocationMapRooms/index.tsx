import React from "react";
import styles from './LocationMapRooms.module.scss';
import {ButtonMap} from '../common/ButtonMap';
function LocationMapRooms (){
    return(
<section className={styles.locat__section}>
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