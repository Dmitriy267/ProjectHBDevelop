import React from "react";
import styles from './ContactsCardGold.module.scss';

const ContactsCardGold=({children}:{children:React.ReactNode})=>{
    return(
<div className={styles.contacts__div}>
  {children}
</div>
    )
}
export {ContactsCardGold}