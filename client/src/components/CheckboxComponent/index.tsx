import React from "react";
import styles from './CheckboxComponent.module.scss';
import {InputCheckbox} from '../common/InputCheckbox';
const CheckboxComponent =()=>{
    return (
<div className={styles.checkbox__div}>
    <InputCheckbox text='Газовая плита' value=''/>
    <InputCheckbox text='Духовка' value=''/>
    <InputCheckbox text='Кофеварка' value=''/>
    <InputCheckbox text='Микроволновая печь ' value=''/>
    <InputCheckbox text='Посуда ' value=''/>
    <InputCheckbox text='Посудомоечная машина ' value=''/>
</div>
    )
}

export default CheckboxComponent;