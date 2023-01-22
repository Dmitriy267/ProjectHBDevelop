import React from "react";
import styles from './CardsAdverstGold.module.scss';
import shin from '../../image/mainPage/Group 665.svg'
const CardsAdverstGold=({children}:{children:React.ReactNode})=>{
    return (
<div className={styles.wrapper__div}>
    <img src={shin} alt='Первое изображение сияния' className={styles.positImg1}/>
  <img src={shin} alt='Второе изображение сияния' className={styles.positImg2}/>
  <div className={styles.decor__div}></div>
  <div className={styles.decor2}></div>
  <div className={styles.decor3}></div>
    <div className={styles.block__div}>
        {children}
    </div>
</div>
    )
}

export default CardsAdverstGold;