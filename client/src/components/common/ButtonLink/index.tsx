import React from "react";
import styles from './ButtonLink.module.scss';
const ButtonLink=({text, onClick}:{text:string, onClick?:()=>void})=>{
    return(
<button className={styles.btnLink__button} onClick={onClick}>{text}</button>
    )
}
export {ButtonLink}