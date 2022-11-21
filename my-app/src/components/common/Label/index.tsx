import React from "react";
import styles from './Label.module.scss'
const Label=({textLabel}:{textLabel:string})=><label className={styles.title__label}>{textLabel}</label>

export {Label}