import React from "react";
import styles from './InputCheckbox.module.scss'
const InputCheckbox =({label, value}:{label:string, value:string})=>{
    return (
<div className={styles.inputCheckbox__div}>
    <input type='checkbox' value={value}/>
    <label htmlFor="check">{label}</label>
</div>
    )
}
export {InputCheckbox};