import React from "react";
import styles from './ButtonErrMessage.module.scss';
import errOther  from '../../../image/avtorization/iconsBtnErr.svg';
const ButtonErrMessage =({children, onClick}:{children:React.ReactNode, onClick?:()=>void})=><button className={styles.err__btn} onClick={onClick}>{children}<img src={errOther} alt="Иконка ошибки на кнопке" className={styles.errOther}/></button>


export {ButtonErrMessage}