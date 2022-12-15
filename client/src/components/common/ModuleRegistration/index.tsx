import React from "react";
import styles from './ModuleRegistration.module.scss'
 
const ModuleRegistration=({children, width, height, marginTop}:{children:React.ReactNode, width?:string, height?:string, marginTop?:string})=>{
    return(
        <div style={{width, height, marginTop}} className={styles.wrapper__module}>
            {children}
        </div>
    )
}

export {ModuleRegistration};