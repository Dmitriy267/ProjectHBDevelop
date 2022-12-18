import React from "react";
import styles from './LocationMapRooms.module.scss';
import pin from '../../image/viewRooms/pin.svg';
function LocationMapRooms (){
    return(
<section className={styles.locat__section}>
    <div className={styles.locat__div}>
    <p>Показать найденные квартиры на карте</p>
    <p>Ищите новостройки рядом с работой,
парком или родственниками</p>
<button className={styles.locat__button}><img src={pin} alt='Иконка знака местонахождения'/>Открыть карту</button>
</div>
    </section>
    )
}
export default LocationMapRooms;