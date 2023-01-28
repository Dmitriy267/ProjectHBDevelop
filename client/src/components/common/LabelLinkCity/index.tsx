import React from "react";
import styles from './LabelLinkCity.module.scss';

const LabelLinkCity=({text}:{text:string})=>{
    return (
        <div className={styles.wrapp__div}>
            <a href='#'>{text}</a>
        </div>
    )
}
export {LabelLinkCity};