import React  from "react";
import InfoContacts from '../InfoContacts';
import styles from './ContactsPage.module.scss';
import InfoAdminRoom from '../InfoAdminRoom';
import InfoBlockContacts from '../InfoBlockContacts';
import FormsContacts from '../FormsContacts';
import  IconsMessageFormRight from '../IconsMessageFormRight';

function ContactsPage(){

return(
<section className={styles.contacts__section}>
    <div className={styles.contacts__div}>
        <div className={styles.left__div}>
<p className={styles.title__p}>Контакты</p>
<p className={styles.textmaib__p}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
<InfoContacts>
    <InfoBlockContacts text1="220068, РБ, г. Минск, ул. Осипенко, 21, кв.23" text2="+375 29 621-48-33" text3="sdaem@sdaem.by" text4="Режим работы: 08:00-22:00"/>
</InfoContacts>
<p className={styles.iptext__p}>ИП Шушкевич Андрей Викторович<br/>
УНП 192602485 Минским горисполкомом 10.02.2016
</p>
<InfoAdminRoom/>
</div>
<FormsContacts/>
<IconsMessageFormRight/>
    </div>
  
</section>
)
}
export default ContactsPage;