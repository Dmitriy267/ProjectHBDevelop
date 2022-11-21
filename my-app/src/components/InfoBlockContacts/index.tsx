import React from "react";
import styles from './InfoBlockContacts.module.scss';
import {IconsMessageContacts} from '../common/IconsMessageContacts'
import placeholder from '../../image/contacts/Group.svg';
import cellphone from '../../image/contacts/cellphone.svg';
import  mail from '../../image/contacts/mail.svg';
import  clock from '../../image/contacts/clock.svg';
import IconsMessageGroup from '../IconsMessageGroup';

interface InfoBlockContactsProps{
    text1:string;
    text2:string;
    text3:string;
    text4:string;
}
function InfoBlockContacts({text1, text2, text3, text4}:InfoBlockContactsProps){
    return(
        <>
        <div className={styles.block__div1}>
    <IconsMessageContacts>
    <img src={placeholder} alt='Изображение иконки местонахождения'/>
  </IconsMessageContacts>
  <p>{text1}</p>
  </div>
  <div className={styles.block__div2}>
  <IconsMessageContacts>
  <img src={cellphone} alt='Изображение иконки телефона' className={styles.cellphone__img}/>
</IconsMessageContacts>
<a href="tel:+375 29 621-48-33">{text2}</a>
<IconsMessageGroup/>
</div>
<div className={styles.block__div3}>
  <IconsMessageContacts>
  <img src={mail} alt='Изображение иконки письма'/>
</IconsMessageContacts>
<a href="mailto:sdaem@sdaem.by">{text3}</a>
</div>
<div className={styles.block__div4}>
  <IconsMessageContacts>
  <img src={clock} alt='Изображение иконки часов'/>
</IconsMessageContacts>
<p>{text4}</p>
</div>
</>
    )
}
export default InfoBlockContacts;