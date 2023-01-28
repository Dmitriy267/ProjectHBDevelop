import React from "react";
import styles from './CardDivBottom.module.scss';
const CardDivBottom=({children}:{children:React.ReactNode})=>{
    return(
        <div className={styles.card__div_bottom}>
            {children}
            </div>
    )
}
export  {CardDivBottom}