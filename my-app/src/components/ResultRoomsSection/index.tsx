import React from "react";
import styles from './ResultRoomsSection.module.scss';
import ViewRooms from '../ViewRooms';
function ResultRoomsSection (){
    return(
<section className={styles.result__section}>
    <ViewRooms/>
</section>
    )
}
export default ResultRoomsSection;