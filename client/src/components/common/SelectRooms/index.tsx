import React, {useRef} from 'react';
import styles from './SelectRooms.module.scss';
import { UseFormRegister } from 'react-hook-form';
interface IFormValues{
    rooms:string;
   
}
const SelectRooms=React.forwardRef<HTMLSelectElement, ReturnType<UseFormRegister<IFormValues>>
>(({name, onChange }, ref)=>(
    
        <select name={name} className={styles.panel1__select} ref={ref} onChange={onChange} >
      
        <option>Выберите</option>
            <option value='room1'>1 комн.</option>
            <option value='room2'>2 комн.</option>
            <option value='room3'>3 комн.</option>
            <option value='room4'>4 комн.</option>
            <option value='room5'>5 комн.</option>
        </select>
        
    )
)
export {SelectRooms}