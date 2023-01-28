import React from "react";
import styles from './IconsMessageContacts.module.scss';

const IconsMessageContacts=({children}:{children:React.ReactNode})=>{
        return (
            <div className={styles.border__div}>
            {children}
           </div>
        )
}

export  {IconsMessageContacts}