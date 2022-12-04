import React from "react";
import styles from './ButtonModule.module.scss';
interface ButtonModuleProps {
    children:React.ReactNode;
    onClick?:()=>void;
}
const ButtonModule=({children, onClick}:ButtonModuleProps)=>{
    return(
        <button type="submit" className={styles.module__button} onClick={onClick}>{children}</button>
    )
}

export {ButtonModule}