import React from "react";
import styles from './PanelNavigationOptions.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";


interface IFormInput {
rooms:string;
}
function PanelNavigationOptions (){
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    return(
<div className={styles.options__div}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <select {...register('rooms')}>
    <option disabled>Выберите</option>
        <option value='room1'>1 комн.</option>
        <option value='room2'>2 комн.</option>
        <option value='room3'>3 комн.</option>
        <option value='room4'>4 комн.</option>
        <option value='room5'>5 комн.</option>
    </select>
    <button>Очистить</button>
    <button type='submit'>Показать объекты</button>
    </form>
   
</div>
    )
}

export default PanelNavigationOptions;