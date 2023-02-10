import React, {useState, ChangeEvent} from "react";
import styles from './FormPasswordDiv.module.scss';
function FormPasswordDiv (){
    const [value, setValue]=useState(2);
    const handleChenge=(event:ChangeEvent<any>)=>{
setValue(event.target.value)
    }
    return(
        <div className={styles.password__div}>
            <input type='range' defaultValue={value} onChange={handleChenge} className={styles.range__input} min={1} max={3} step={1}/>
    <p>Запомнить меня</p>
    <a href="#">Забыли пароль?</a>
    </div>
    )
}
export default FormPasswordDiv;