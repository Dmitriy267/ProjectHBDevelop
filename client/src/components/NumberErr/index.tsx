import React from "react";
import numErr from '../../image/errorPage/numberErr.svg';
import styles from './NumberErr.module.scss';
const NumberErr=()=>{
    return(

    <img src={numErr} alt="Номер ошибки" className={styles.numErr}/>

    )
}
export default NumberErr;