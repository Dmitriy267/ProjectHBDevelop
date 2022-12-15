import React from "react";
import styles from './Label.module.scss'
const Label=({textLabel, htmlForLab}:{textLabel:string, htmlForLab?:string})=><label className={styles.title__label} htmlFor={htmlForLab}>{textLabel}</label>

export {Label}