import React from "react";
import styles from './ButtonMap.module.scss';
import pin from '../../../image/viewRooms/pin.svg';
const ButtonMap=()=><button className={styles.locat__button}><img src={pin} alt='Иконка знака местонахождения'/>Открыть карту</button>

export {ButtonMap}