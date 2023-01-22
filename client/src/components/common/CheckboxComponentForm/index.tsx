import React from 'react';
import styles from './CheckboxComponentForm.module.scss';
import { UseFormRegister} from 'react-hook-form';

interface IFormValues{
    gaz:string;
    stove:string;
    coffeMashins:string;
    electOver:string;
    cook:string;
    cookMashins:string;
}
const CheckboxComponentForm=React.forwardRef<HTMLInputElement,
{ label: string, value:string } & ReturnType<UseFormRegister<IFormValues>>
>(({ name, label, onChange, onBlur, value }, ref) => (

    <>
   <div className={styles.inputCheckbox__div}>
    <input type='checkbox' name={name} ref={ref} onChange={onChange} onBlur={onBlur} value={value}/>
    <label htmlFor="check">{label}</label>
</div>
  
  </>
));

export   {CheckboxComponentForm};