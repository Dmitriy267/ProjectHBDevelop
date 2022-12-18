import React from "react";
import styles from './ButtonModule.module.scss';
const ButtonModule=({children}:{children:React.ReactNode})=>{
    return(
        <button type="submit" className={styles.module__button}>{children}</button>
    )
}

export {ButtonModule}