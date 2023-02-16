import React from "react";
import styles from './PositionModulDiv.module.scss';
const PositionModulDiv=({children}:{children:React.ReactNode})=>{
    return(
        <div className={styles.positionModul__div}>{children}</div> 
    )
}

export {PositionModulDiv}