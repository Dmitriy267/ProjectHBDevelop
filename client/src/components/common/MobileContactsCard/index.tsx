import React, {useState} from "react";
import styles from './MobileContactsCard.module.scss';
import cellphone from '../../../image/cardsGold/cellphone.svg';
import ModalContactsMobile from '../../ModalContactsMobile';

const MobileContactsCard=()=>{
    const [activeModal, setActiveModal]=useState(false);
    return(
        <>
<button className={styles.wrapper__button} onClick={()=>setActiveModal(true)}>
<img src={cellphone} alt='Изображение телефона'/>
    Контакты
</button>
<ModalContactsMobile showModal={activeModal}  onClose={()=>setActiveModal(false)}/>
</>
    )
}
export {MobileContactsCard}