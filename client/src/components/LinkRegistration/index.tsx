import React from "react";
import {Link} from 'react-router-dom';
import styles from './LinkRegistration.module.scss';
function LinkRegistration (){
    return(
        <div className={styles.header__div}>
            <Link to="/Вход и регистрация">Вход и регистрация</Link>
          </div>
    )
}

export default LinkRegistration;