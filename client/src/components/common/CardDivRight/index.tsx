import React from "react";
import {Link} from 'react-router-dom';
import styles from './CardDivRight.module.scss';
const CardDivRight=({ReadText}:{ReadText:string})=>{
    return (
        <div className={styles.card__div_right}>
        <Link to='/Новость'>{ReadText}</Link>
      </div>
    )
}
export {CardDivRight}