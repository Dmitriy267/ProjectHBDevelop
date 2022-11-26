import React from "react";
import styles from './RouteMainAvtorization.module.scss';
import {AvtorizationMainSection} from '../common/AvtorizationMainSection';
import {ModuleRegistration} from '../common/ModuleRegistration';
import {ButtonModule} from '../common/ButtonModule';
import User from '../../image/contacts/user.svg'
const  RouteMainAvtorization =()=>{
    return (
        <AvtorizationMainSection>
            <div className={styles.positionModul__div}>
<ModuleRegistration width="406px" height="536px" marginTop="182px">
<form className={styles.avtorization__form}>
    <p>Авторизация</p>
    <p>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
    <input type="text" className={styles.avtorization__input}/>
    <img src={User} alt="Иконка пользователя"/>
    <input type="password" className={styles.password__input}/>
    <p>Запомнить меня</p>
    <a href="#">Забыли пароль?</a>
<ButtonModule>
Войти
</ButtonModule>
<p>Еще нет аккаунта? <a href="#">Создайте акканут</a></p>
</form>
</ModuleRegistration>
</div>
</AvtorizationMainSection>
    )
}

export {RouteMainAvtorization}