import React, { useState } from "react";
import styles from './FormsContacts.module.scss';
import {Label} from '../common/Label';
import User from '../../image/contacts/user.svg';
import Email from '../../image/contacts/mailform.svg';
import ModalForm from "../ModalForm";
import {SubmitHandler, useForm} from 'react-hook-form';



interface IFormInput {
    Name:string;
    mail:string;
    Message:string;
}

function FormsContacts(){
    const {register,handleSubmit, formState:{errors}}=useForm<IFormInput>();
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
   <input type="text" className={styles.form__input} {...register('Name',{required:true, maxLength:15})} title={errors.Name&&'Введите свое имя. Максимальная длина слова должна быть не более 15 символов'}/>

    </div>
    <div className={styles.user__div}>
    <img src={User} alt='Иконка пользователя' className={styles.user__img}/>
    </div>

<div className={styles.formgroup2__div}>   
    <Label textLabel="Ваша электронная почта" htmlForLab="email"/>
    <input type="email" placeholder="Введите" className={styles.form__inputEmail} 
    title={errors.mail&&'Адрес электронной почты должен содержать символ "@"'}
    {...register('mail',{required:true, pattern:/^.+\@.+\..+$/})}
    style={{border:errors.mail&&`1px solid rgba(235, 87, 87, 1)`}}
    />
     
    </div>
    <div className={styles.mail__div}>
    <img src={Email} alt='Иконка письма'/>
    </div>
</div>
<div className={styles.message__div}>
    <Label textLabel="Ваше сообщение"/>
        <textarea placeholder="Сообщение" className={styles.form__textarea} {...register('Message', {required:true, minLength:30})}
         style={{border:errors.Message&&`1px solid rgba(235, 87, 87, 1)`}}
        title={errors.Message&&'Ваше сообщение должно быть записано не менее, чем в 30 символов'}
        ></textarea>
     
</div>
    <input type='submit' value='Отправить' className={styles.form__button}/>
    <ModalForm showModal={activeModal} onClose={()=>setActiveModal(false)}/>
    </div>
</form>
    )
}
export default FormsContacts;