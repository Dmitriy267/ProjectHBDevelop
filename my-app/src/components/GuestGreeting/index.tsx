import React from "react";
import {Link} from 'react-router-dom';
import styles from './GuestGreeting.module.scss';
function GuestGreeting(){
    return(
        <div className={styles.enter__div}>
        <Link to="/Вход и регистрация">Вход и регистрация</Link>
      </div>
    )
}
export default GuestGreeting;