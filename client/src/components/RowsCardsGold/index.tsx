import React from "react";
import styles from './RowsCardsGold.module.scss';
function RowsCardsGold ({children}:{children:React.ReactNode}){
return (
    <div className={styles.Rowtable__div}>{children}</div>
)
}

export default RowsCardsGold;