import React, { useState } from "react";
import styles from './FormsContacts.module.scss';
import {Label} from '../common/Label';
import {InputFormContact} from '../common/InputFormContact';
import User from '../../image/contacts/user.svg';
import Email from '../../image/contacts/mailform.svg';
import ModalForm from "../ModalForm";

function FormsContacts(){
    const [activeModal, setActiveModal]=useState(false);
    const [text, setText]=useState('');
    const [email, setEmail]=useState('')
    function handleSubmitModal(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setActiveModal(true)
    }
    function handleChangeForm(event: React.ChangeEvent<HTMLTextAreaElement>){
        setText(event.target.value)
       console.log(text)
    }
    function InputChangeEmail(event:React.ChangeEvent<HTMLInputElement>){
setEmail(event.target.value)
console.log(email)
    }
    return (
<form className={styles.form} onSubmit={handleSubmitModal}>
    <div className={styles.form__div}>
        <div className={styles.group__div}>
     <div className={styles.formgroup1__div}>   
    <Label textLabel="Ваше имя"/>
    <InputFormContact typeText="text"/>
    </div>
    <div className={styles.user__div}>
    <img src={User} alt='Иконка пользователя' className={styles.user__img}/>
    </div>

<div className={styles.formgroup2__div}>   
    <Label textLabel="Ваша электронная почта" htmlForLab="email"/>
    <input type="email" placeholder="Введите" name="email" className={styles.form__inputEmail} onChange={InputChangeEmail} value={email} required/>
    </div>
    <div className={styles.mail__div}>
    <img src={Email} alt='Иконка письма'/>
    </div>
</div>
<div className={styles.message__div}>
    <Label textLabel="Ваше сообщение"/>
        <textarea placeholder="Сообщение" className={styles.form__textarea} value={text} onChange={handleChangeForm}></textarea>
</div>
    <input type='submit' value='Отправить' className={styles.form__button}/>
    <ModalForm showModal={activeModal} onClose={()=>setActiveModal(false)}/>
    </div>
</form>
    )
}
export default FormsContacts;