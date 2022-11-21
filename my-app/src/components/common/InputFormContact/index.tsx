import React from "react";
import styles from './InputFormContact.module.scss';

const InputFormContact=({typeText, textPlaceholder, nameValue}:{typeText:string, textPlaceholder?:string, nameValue?:string})=>(
<input type={typeText} placeholder={textPlaceholder} name={nameValue} className={styles.form__input}/>
)
    
export {InputFormContact}