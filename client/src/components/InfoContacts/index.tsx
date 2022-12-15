import React from "react";
import styles from './InfoContacts.module.scss';
interface InfoContactsProps{
    children: React.ReactNode;
}
const InfoContacts=({children}:InfoContactsProps)=>{
    return(
<div className={styles.info__div}>
    {children}
</div>
    )
}
export default InfoContacts;