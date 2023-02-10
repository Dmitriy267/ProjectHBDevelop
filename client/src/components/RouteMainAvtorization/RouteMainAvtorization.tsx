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
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


interface IFormInput {
    login: string;
    password: string;

  }
  
  const schema = yup.object({
    password: yup.string().required().min(6),
   login:yup.string().required().min(8),
  }).required();

const  RouteMainAvtorization =()=>{
    const { register, handleSubmit,formState:{errors} } = useForm<IFormInput>({resolver: yupResolver(schema)});
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    return (
        <>
        <EnterMainSection>
             <PositionModulDiv>  
<ModuleRegistration width="406px" height="536px" >
<form className={styles.avtorization__form} onSubmit={handleSubmit(onSubmit)}>
    <p className={styles.form__p_bold}>Авторизация</p>
    <p className={styles.form__p}>Авторизируйтесь, чтобы начать <br/>публиковать свои объявления</p>
    <input type="text" className={styles.avtorization__input} placeholder="Логин"  {...register("login", { required: true, minLength: 8 })}
 style={{border:errors.login&&`1px solid #EB5757`}} />
    <img src={User} alt="Иконка пользователя" className={styles.avtorization__img} />
    <input type="password" className={styles.password__input} placeholder="Пароль"  {...register('password',{required:true, minLength:6})}  style={{border:errors.password&&`1px solid #EB5757`}}
    />
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

</>
    )
}

export {RouteMainAvtorization}