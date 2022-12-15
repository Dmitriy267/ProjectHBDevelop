import React from "react";
import styles from './FormPasswordDiv.module.scss'
function FormPasswordDiv (){
    return(
        <div className={styles.password__div}>
        <input type="range" min="0" max="1" step="1" value="0.5" className={styles.slider__input}/>  
    <p>Запомнить меня</p>
    <a href="#">Забыли пароль?</a>
    </div>
    )
}
export default FormPasswordDiv;