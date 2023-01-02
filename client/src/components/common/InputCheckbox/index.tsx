import React from "react";
import styles from './InputCheckbox.module.scss'
const InputCheckbox =({text, value}:{text:string, value:string})=>{
    return (
<div className={styles.inputCheckbox__div}>
    <input type='checkbox' value={value}/>
    <label htmlFor="check">{text}</label>
</div>
    )
}
export {InputCheckbox};