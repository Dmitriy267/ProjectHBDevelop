import React from "react";
import {EnterMainSection} from '../common/EnterMainSection';
import {PositionModulDiv} from '../common/PositionModulDiv';
import {ModuleRegistration} from '../common/ModuleRegistration'
import { ButtonModule } from '../common/ButtonModule';
import {InputRegistration} from '../common/InputRegistration';
import styles from './PageRegistration.module.scss';
import user from '../../image/registration/user.svg';
import email from '../../image/registration/mail.svg';
import password from '../../image/registration/password.svg';
function PageRegistration (){
    return(
        <EnterMainSection>
            <PositionModulDiv>    
            <ModuleRegistration  width="844px" height="581px" marginTop="175px">
<form className={styles.registration__form}>
    <p>Регистрация</p>
    <div className={styles.registration__div}>
    <div className={styles.registrationInputs__div}>
  <InputRegistration type='text' placeholder='Логин' onChange={()=>console.log('input')}/>
  <img src={user} alt='Иконка пользователя' className={styles.registration__user}/>
<input type='email' placeholder='Электронная почта'  className={styles.otherEmail__input}/>
<img src={email} alt='Иконка почты' className={styles.registration__mail}/>
<InputRegistration type='password' placeholder='Пароль' onChange={()=>console.log('input')}/>
<img src={password} alt='Иконка пароля' className={styles.registration__password}/>
<InputRegistration type='password' placeholder='Повторите пароль' onChange={()=>console.log('input')}/>
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
export default PageRegistration