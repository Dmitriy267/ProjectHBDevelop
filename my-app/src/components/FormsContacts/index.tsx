import React, { useState } from "react";
import styles from './FormsContacts.module.scss';
import {Label} from '../common/Label';
import User from '../../image/contacts/user.svg';
import Email from '../../image/contacts/mailform.svg';
import ModalForm from "../ModalForm";
import {SubmitHandler, useForm} from 'react-hook-form';

interface IFormInput {
    name:string;
    email:string;
    message:string;
}
function FormsContacts(){
    const {register,handleSubmit}=useForm<IFormInput>();
    const onSubmit:SubmitHandler<IFormInput>=data=>{
            console.log(data);
            setActiveModal(true);  
    }
    const [activeModal, setActiveModal]=useState(false);
    return (
<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.form__div}>
        <div className={styles.group__div}>
     <div className={styles.formgroup1__div}>
     <Label textLabel="Ваше имя"/>     
   <input type="text" className={styles.form__input} {...register('name',{required:true, maxLength:15})}/>
    </div>
    <div className={styles.user__div}>
    <img src={User} alt='Иконка пользователя' className={styles.user__img}/>
    </div>

<div className={styles.formgroup2__div}>   
    <Label textLabel="Ваша электронная почта" htmlForLab="email"/>
    <input type="email" placeholder="Введите" className={styles.form__inputEmail} 
    {...register('email',{required:true, pattern:/^.+\@.+\..+$/})}/>
    </div>
    <div className={styles.mail__div}>
    <img src={Email} alt='Иконка письма'/>
    </div>
</div>
<div className={styles.message__div}>
    <Label textLabel="Ваше сообщение"/>
        <textarea placeholder="Сообщение" className={styles.form__textarea} {...register('message', {required:true, minLength:30})}></textarea>
</div>
    <input type='submit' value='Отправить' className={styles.form__button}/>
    <ModalForm showModal={activeModal} onClose={()=>setActiveModal(false)}/>
    </div>
</form>
    )
}
export default FormsContacts;