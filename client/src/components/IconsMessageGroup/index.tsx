import React  from "react";
import styles from './IconsMessageGroup.module.scss';
import {IconsMessageContacts} from '../common/IconsMessageContacts';
import viber from '../../image/contacts/simple-icons_viber.svg';
import telegram from '../../image/contacts/bx_bxl-telegram.svg';
import whatsapp from '../../image/contacts/icomoon-free_whatsapp.svg';
function IconsMessageGroup(){
return(
    <div className={styles.icons__div}>
        <IconsMessageContacts>
    <img src={viber} alt='Изображение иконки вайбер'/>
  </IconsMessageContacts>
  <IconsMessageContacts>
    <img src={telegram} alt='Изображение иконки телеграм'/>
  </IconsMessageContacts>
  <IconsMessageContacts>
    <img src={whatsapp} alt='Изображение иконки ватсапп'/>
  </IconsMessageContacts>
    </div>
)
}
export default IconsMessageGroup;