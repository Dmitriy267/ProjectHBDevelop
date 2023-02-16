import React from "react";

import styles from './CardRead.module.scss';
const CardRead=({ReadText}:{ReadText:string})=>{
    return (
        <div className={styles.card__div}>
        <a href='#'>{ReadText}</a>
      </div>
    )
}
export {CardRead}