import React from "react";
import styles from './InputRegistration.module.scss';

interface InputRegistrationProps {
    type:string;
    placeholder:string;
    onChange:()=>void;
    value?:string;
}
const InputRegistration=({type, placeholder, onChange, value}:InputRegistrationProps)=>{
    return(
<input type={type} placeholder={placeholder} className={styles.registration__input} onChange={onChange} value={value}/>

    )
}
export {InputRegistration}