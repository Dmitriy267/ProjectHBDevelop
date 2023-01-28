import React from "react";
import styles from './CheckboxComponent.module.scss';

const CheckboxComponent =({children}:{children:React.ReactNode})=>{
    return (
<div className={styles.checkbox__div}>
  {children}
</div>
    )
}

export  {CheckboxComponent}