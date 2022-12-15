import React from "react";
import styles from './InfoAdminRoom.module.scss';
import alert from '../../image/contacts/alert 1.svg';
function InfoAdminRoom(){
    return(
<div className={styles.info__div}>
<div className={styles.block__div}>
        <img src={alert} alt='Иконка восклицательного знака'/>
    <p className={styles.text}>Администрация сайта не владеет информацией<br/> 
о наличии свободных квартир</p>
</div>
</div>
    )
}
export default InfoAdminRoom;