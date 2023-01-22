import React from "react";
import styles from './CardsAdverstImg.module.scss';

const CardsAdverstImg=({children}:{children:React.ReactNode})=>{
    return(
        <div className={styles.wrapper__div}>
            {children}
        </div>
    )
}

export {CardsAdverstImg}