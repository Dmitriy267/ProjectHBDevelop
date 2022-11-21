import React from "react";
import { Link } from "react-router-dom";
import home_run from '../../../image/errorPage/home-run 1.svg';
import styles from './BlockLinkMainPage.module.scss';
const BlockLinkMainPage=()=>{
    return(
        <div className={styles.divPage}>
            <img src={home_run} alt="Иконка для главной страницы"/>
            <Link to ='Главная' className={styles.linkMaimPage}>Вернуться на главную</Link>
        </div>
    )
}
export {BlockLinkMainPage}