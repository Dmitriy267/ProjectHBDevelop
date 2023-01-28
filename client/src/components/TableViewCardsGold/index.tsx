import React from "react";
import styles from './TableViewCardsGold.module.scss';
function TableViewCardsGold ({children}:{children:React.ReactNode}){
    return (
        <div className={styles.table__div}>{children}</div>
    )
}
export default TableViewCardsGold;