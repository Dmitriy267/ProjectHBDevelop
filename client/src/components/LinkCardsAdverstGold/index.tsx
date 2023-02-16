import React from "react";
import styles from './LinkCardsAdverstGold.module.scss';
import whiteChevron from '../../image/mainPage/chevron-down (11).svg';

const LinkCardsAdverstGold=()=>{
    return(
        <div className={styles.link__div}>
            <p><a href='#'>Еще о тарифе Gold</a></p>
            <img src={whiteChevron} alt='Стрелка на блоке'/>
        </div>
    )
}
export default LinkCardsAdverstGold;