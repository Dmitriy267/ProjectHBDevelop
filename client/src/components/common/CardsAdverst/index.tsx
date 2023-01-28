import React from "react";
import styles from './CardsAdverst.module.scss';

const CardsAdverst=({children}:{children:React.ReactNode})=>{
    return (
        <div className={styles.wrapper__div}>
            <div className={styles.block__div}>
                {children}
            </div>
        </div>
    )
}

export {CardsAdverst}