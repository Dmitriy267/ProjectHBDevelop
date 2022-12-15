import React, { useState } from "react";
import {EnterMainSection} from '../common/EnterMainSection';
import {PositionModulDiv} from '../common/PositionModulDiv';
import {ModuleRegistration} from '../common/ModuleRegistration';
import user from '../../image/registration/user.svg';
import email from '../../image/registration/mail.svg';
import password from '../../image/registration/password.svg';
import { ButtonModule } from '../common/ButtonModule';
import styles from './PageRegistration.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import errorZnack from '../../image/avtorization/alert 1.svg';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import userRoboto from '../../image/avtorization/userRoboto.png';
import {ButtonErrMessage} from '../common/ButtonErrMessage';
 import { Navigate } from 'react-router-dom';
interface InputsRegistrationProps{
login:string;
mail:string;
password:string;
confirmPassword:string;
}
const schema = yup.object({
    password: yup.string().required().min(6,''),
    confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Пароли не совпадают'),
mail:yup.string().required().email()
  }).required();

function PageRegistration (){
   
    const { register, formState:{errors}, handleSubmit } = useForm<InputsRegistrationProps>({resolver: yupResolver(schema)});
   
    const onSubmit: SubmitHandler<InputsRegistrationProps> = data =>{
        console.log(data);
        
        setData(data=>!data)
       
         
    }
   const [data, setData]=useState(false)
      
    return(
        <EnterMainSection>
            <PositionModulDiv>    
            <ModuleRegistration  width="844px" height="654px" marginTop="175px">
<form className={styles.registration__form} onSubmit={handleSubmit(onSubmit)}>
    <p>Регистрация</p>
    <div className={styles.registration__div}>
     
        <div className={styles.registrationInputs__div}>
            <input type='text' placeholder='Логин' {...register('login',{required:true, minLength:8})}/>
        <img src={user} alt='Иконка пользователя' className={styles.registration__user}/>
      <input type='email' placeholder='Электронная почта'  className={styles.otherEmail__input} {...register('mail',{required:true, pattern:/^.+\@.+\..+$/})} 
      style={{border:errors.mail&&`1px solid #EB5757`}}/>
  {errors.mail&&<img src={errorZnack} alt='Иконка ошибки' className={styles.errorZnasck1}/>}
      <img src={email} alt='Иконка почты' className={styles.registration__mail}/>
      <input type='password' placeholder='Пароль' {...register('password',{required:true, minLength:6})} />
      <img src={password} alt='Иконка пароля' className={styles.registration__password}/>
     
      <input type='password' placeholder='Повторите пароль' {...register('confirmPassword',{required:true, minLength:6})}
      style={{border:errors.confirmPassword&&`1px solid #EB5757`}} />
       {errors.confirmPassword&&<img src={errorZnack} alt='Иконка ошибки' className={styles.errorZnasck2}/>}
      <img src={password} alt='Иконка пароля' className={styles.registration__passwordtwo}/>
      <img src={userRoboto} alt='Изображение проверки пользователя' className={styles.userRoboto}/>
     {
      errors.confirmPassword&& <ButtonErrMessage>Ошибка ввода</ButtonErrMessage>
      }
       
      <ButtonModule >Зарегистрироваться</ButtonModule>
          </div>
        
   <div className={styles.rules__div}>
    <div className={styles.rulesUser__div}>
<p className={styles.rulesUser__p}>Пользователь обязуется:</p>
<p className={styles.rules__p}>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</p>
<p className={styles.rules__p}>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</p>
    </div>
    <p className={styles.ruleslink__p}>Уже есть аккаунта? <a href='#'>Войдите</a></p>
   </div>
    </div>
    {data&& <Navigate replace to="/Завершение регистрации" />}
</form>
            </ModuleRegistration>
</PositionModulDiv>
</EnterMainSection>

    )
}
export default PageRegistration;