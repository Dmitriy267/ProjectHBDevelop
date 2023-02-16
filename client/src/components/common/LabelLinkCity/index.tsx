import React from "react";

import styles from './LabelLinkCity.module.scss';

interface LabelLinkCityProps{
    text:string;
    onClick:()=>void;
}

const LabelLinkCity=({text, onClick}:LabelLinkCityProps)=><button className={styles.wrapp__div} onClick={onClick}>{text}</button>
    

export {LabelLinkCity};