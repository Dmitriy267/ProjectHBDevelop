import React from "react";
import styles from './CardDivCommon.module.scss';
const CardDivCommon=({children}:{children:React.ReactNode})=>{
    return (
<div className={styles.card__div}>
    {children}
</div>
    )
}
export {CardDivCommon}