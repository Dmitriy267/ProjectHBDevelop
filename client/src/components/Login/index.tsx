import React from "react";
import styles from './Login.module.scss';
import { useSelector } from "react-redux";
import chdown from '../../image/header/chevron-down.svg';
import {selectUserLogin} from '../../redux/features/User/userSlice';
import user from '../../image/errorPage/boy.png'
interface RootState {

    login:string;
  }
  
function Login (){
    const login=useSelector(selectUserLogin)
    return (
<div className={styles.blockLogin__div}>
    <img src={user} alt='Фото пользователя'  className={styles.blockLogin__img}/>
    <p>{login}</p>
    <button><img src={chdown} alt='Иконка на кнопке'className={styles.clickLogin__img}/></button>
</div>
    )
}
export default Login;