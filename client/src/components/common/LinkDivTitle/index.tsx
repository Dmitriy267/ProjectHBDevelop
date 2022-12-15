import React from 'react'
import home from "../../../image/home.svg";
import styles from './LinkDivTitle.module.scss';
const LinkDivTitle =({children}:{children:React.ReactNode})=>{
    return (
        <div className={styles.linkTitle__div}>
        <img src={home} alt="Изображение дома" />
        {children}
      </div>
    )
}
export {LinkDivTitle};