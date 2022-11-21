import React from "react";
import styles from './FormsContacts.module.scss';
import {Label} from '../common/Label';
import {InputFormContact} from '../common/InputFormContact';
import User from '../../image/contacts/user.svg';
import Email from '../../image/contacts/mailform.svg';

function FormsContacts(){
    return (
<form className={styles.form}>
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
    <Label textLabel="Ваша электронная почта"/>
    <InputFormContact typeText="email"   textPlaceholder="Введите"/>
    </div>
    <div className={styles.mail__div}>
    <img src={Email} alt='Иконка письма'/>
    </div>
</div>
<div className={styles.message__div}>
    <Label textLabel="Ваше сообщение"/>
        <textarea placeholder="Сообщение"></textarea>
</div>
    <button className={styles.form__button}>Отправить</button>
    </div>
</form>
    )
}
export default FormsContacts;