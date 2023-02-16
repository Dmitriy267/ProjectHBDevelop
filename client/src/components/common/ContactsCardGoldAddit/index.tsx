import React from "react";
import styles from './ContactsCardGoldAddit.module.scss';

const ContactsCardGoldAddit=({children}:{children:React.ReactNode})=>{
    return(
<div className={styles.contacts__div}>
  {children}
</div>
    )
}
export {ContactsCardGoldAddit}