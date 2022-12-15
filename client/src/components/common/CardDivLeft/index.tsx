import React from "react";
import styles from './CardDivLeft.module.scss'
const CardDivLeft=({textDataCard}:{textDataCard:string})=>{
    return(
        <div className={styles.card__div_left}>
        <p>{textDataCard}</p>
      </div>
    )
}
export {CardDivLeft}