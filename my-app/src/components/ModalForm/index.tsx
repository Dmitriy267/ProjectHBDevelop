import React from "react";
import styles from './ModalForm.module.scss';

const ModalForm=({showModal, onClose}:{showModal:boolean, onClose:()=>void})=>{
    if(!showModal){
        return null
    }
    return(
<div className={styles.modal__div}>
    <div className={styles.modalform__div}>
        <div className={styles.modalform__div_group}>
        <p>Ваше письмо отправлено!</p>
        <p>Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
        <button className={styles.modal__button} onClick={()=>onClose()}>Закрыть окно</button>
        </div>
    </div>
</div>
    )
}
export default ModalForm;