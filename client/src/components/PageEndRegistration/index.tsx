import React from "react";
import { EnterMainSection } from "../common/EnterMainSection";
import {PositionModulDiv} from "../common/PositionModulDiv";
import {ModuleRegistration} from '../common/ModuleRegistration';
import styles from './PageEndRegistration.module.scss';
import { useNavigate } from "react-router-dom";

function PageEndRegistration (){
    const data=true;
    const navigate=useNavigate();

    function ClickEndRegist(){
console.log('Регистрация завершена')
    return navigate('*')

    }
    
    return(
        <EnterMainSection>
               <PositionModulDiv>
               <div className={styles.window__div}>
                <div className={styles.endRegist__div}>
                <p>Подтвердите регистрацию</p>
                <p className={styles.endRegist__p}>Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</p>
                <button className={styles.endRegist__button} onClick={ClickEndRegist}>Понятно</button>
                    </div>
                    </div>
                  
               </PositionModulDiv>  
            </EnterMainSection>

    )
}

export default PageEndRegistration;