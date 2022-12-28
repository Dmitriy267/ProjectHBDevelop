import React from "react";
import { useSelector } from "react-redux";
import chdown from '../../image/header/chevron-down.svg';
import {selectUserLogin} from '../../redux/features/User/userSlice';
interface RootState {

    login:string;
  }
  
function Login (){
    const login=useSelector(selectUserLogin)
    return (
<div>
    <p>{login}</p>
    <button><img src={chdown} alt='Иконка на кнопке'/></button>
</div>
    )
}
export default Login;