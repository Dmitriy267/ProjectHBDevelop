import React, {  } from "react";
import { EnterMainSection } from "../common/EnterMainSection";
import {PositionModulDiv} from "../common/PositionModulDiv";
import {ModuleRegistration} from '../common/ModuleRegistration';
import styles from './PageEndRegistration.module.scss';
import {Navigate} from 'react-router-dom';
function PageEndRegistration (){
    const data=true;
    function ClickEndRegist(){
console.log('Регистрация завершена')
    }

    return(
        <EnterMainSection>
               <PositionModulDiv>
               <ModuleRegistration width="406px" height="330px">
                <div className={styles.endRegist__div}>
                <p>Подтвердите регистрацию</p>
                <p className={styles.endRegist__p}>Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</p>
                <button className={styles.endRegist__button} onClick={ClickEndRegist}>Понятно</button>
                    </div>
                </ModuleRegistration>  
               </PositionModulDiv>  
            </EnterMainSection>

    )
}

export default PageEndRegistration;