import React from "react";
import styles from './RouteMainAvtorization.module.scss';
import {ModuleRegistration} from '../common/ModuleRegistration';
import {ButtonModule} from '../common/ButtonModule';
import User from '../../image/contacts/user.svg';
import password from '../../image/avtorization/password 1.svg';
import FormPasswordDiv from '../FormPasswordDiv';
import {Link} from 'react-router-dom';
import { EnterMainSection } from "../common/EnterMainSection";
import {PositionModulDiv} from "../common/PositionModulDiv";
const  RouteMainAvtorization =()=>{
    return (
        <EnterMainSection>
             <PositionModulDiv>  
<ModuleRegistration width="406px" height="536px">
<form className={styles.avtorization__form}>
    <p className={styles.form__p_bold}>Авторизация</p>
    <p className={styles.form__p}>Авторизируйтесь, чтобы начать <br/>публиковать свои объявления</p>
    <input type="text" className={styles.avtorization__input} placeholder="Логин"  required/>
    <img src={User} alt="Иконка пользователя" className={styles.avtorization__img} />
    <input type="password" className={styles.password__input} placeholder="Пароль" required/>
    <img src={password} alt="Иконка пароля" className={styles.password__img}/>
    <FormPasswordDiv/>
<ButtonModule>
Войти
</ButtonModule>
<p className={styles.text__p}>Еще нет аккаунта? <Link to="/Регистрация">Создайте акканут</Link></p>
</form>
</ModuleRegistration>
</PositionModulDiv>
</EnterMainSection>
    )
}

export {RouteMainAvtorization}