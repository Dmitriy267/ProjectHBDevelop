import React from "react";
import styles from './MyTableViewCardsGold.module.scss';
function MyTableViewCardsGold ({children}:{children:React.ReactNode}){
    return (
        <div className={styles.table__div}>{children}</div>
    )
}
export default MyTableViewCardsGold;