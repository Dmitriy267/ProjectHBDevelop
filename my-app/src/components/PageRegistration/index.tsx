import React from "react";
import {EnterMainSection} from '../common/EnterMainSection';
import {PositionModulDiv} from '../common/PositionModulDiv';
import {ModuleRegistration} from '../common/ModuleRegistration';
import user from '../../image/registration/user.svg';
import email from '../../image/registration/mail.svg';
import password from '../../image/registration/password.svg';
import { ButtonModule } from '../common/ButtonModule';
import styles from './PageRegistration.module.scss';
import { useForm, SubmitHandler  } from 'react-hook-form';
import {connect} from 'react-redux';

interface InputsRegistrationProps {
    login:string;
    mail:string;
    password:string;
}

interface DispatchProps {
    onSubmit: () => void
  }
  
function PageRegistration (){
    const { register, handleSubmit } = useForm<InputsRegistrationProps>();
 
    const onSubmit: SubmitHandler<InputsRegistrationProps> = data => {
        console.log(data);
        console.log(data.login);
        let UserLogin=data.login;
        return localStorage.setItem( 'keyLoginUser',JSON.stringify(UserLogin));
    }
    return(
        <EnterMainSection>
            <PositionModulDiv>    
            <ModuleRegistration  width="844px" height="581px" marginTop="175px">
<form className={styles.registration__form} onSubmit={handleSubmit(onSubmit)}>
    <p>Регистрация</p>
    <div className={styles.registration__div}>
        <div className={styles.registrationInputs__div}>
            <input type='text' placeholder='Логин' {...register('login',{required:true, minLength:8})}/>
        <img src={user} alt='Иконка пользователя' className={styles.registration__user}/>
      <input type='email' placeholder='Электронная почта'  className={styles.otherEmail__input} {...register('mail',{required:true, pattern:/^.+\@.+\..+$/})}/>
      <img src={email} alt='Иконка почты' className={styles.registration__mail}/>
      <input type='password' placeholder='Пароль' {...register('password',{required:true, minLength:6})}/>
      <img src={password} alt='Иконка пароля' className={styles.registration__password}/>
      <input type='password' placeholder='Повторите пароль' {...register('password',{required:true, minLength:6})}/>
      <img src={password} alt='Иконка пароля' className={styles.registration__passwordtwo}/>
      <div className={styles.registrationinput__div}>
          <div className={styles.checkbox__div}>
      <input type='checkbox'/>
      <p>Я не робот</p>
      </div>
      </div>
      <ButtonModule>Зарегистрироваться</ButtonModule>
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
</form>
            </ModuleRegistration>
</PositionModulDiv>
</EnterMainSection>

    )
}

const mapDispatchToProps= {
    onSubmit:()=>({type:'GET_REGISTRATION'})
    
}

export default connect <DispatchProps>(null, mapDispatchToProps) (PageRegistration);
