import React from "react";
import styles from './ModalContactsMobile.module.scss';
import boy from '../../image/mainPage/Modal/boy.png';
import viber from '../../image/mainPage/Modal/simple-icons_viber (2).svg';
import whatsapp from '../../image/mainPage/Modal/icomoon-free_whatsapp (2).svg';
import mail from '../../image/mainPage/Modal/mail 1 (3).svg';

interface ModalContactsMobileProps{
    showModal:boolean;
    onClose:()=>void;
}

const ModalContactsMobile=({showModal, onClose}:ModalContactsMobileProps)=>{
  if(!showModal) return null;
    return(
    
<div className={styles.modal__div} onClick={onClose}>
    <div className={styles.modalContent__div}>
<div className={styles.formModal__div}>
<img src={boy} alt='Фото владельца' className={styles.border__img}/>
<p>Владелец</p>
<p className={styles.mame__p}>Dmitriy</p>
<p className={styles.tel__p}><a href='tel: +375 (29) 291-14-44'> +375 (29) 291-14-44</a></p>
<p><a href='mailto:vladimir6234@tut.by'>vladimir6234@tut.by</a></p>
<div className={styles.linkMessendg__div}>
<div className={styles.borderMessendg1__div}><img src={viber} alt='Иконка вайбер' /></div>
<div className={styles.borderMessendg2__div}><img src={whatsapp} alt='Иконка ватсапп' /></div>
<div className={styles.borderMessendg3__div}><img src={mail} alt='Иконка электронной почты' /></div>
</div>
</div>
</div>
</div>

    )
}
export default ModalContactsMobile;