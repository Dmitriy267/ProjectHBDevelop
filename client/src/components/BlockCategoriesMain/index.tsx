import React from "react";
import styles from './BlockCategoriesMain.module.scss';
import deposit from '../../image/mainPage/depositphotos_1.png';
import PanelMainPage from '../PanelMainPage';
function BlockCategoriesMain (){
    return(
<section className={styles.wrap__section}>
    <div className={styles.depositos__div}>
        <p>Sdaem.by - у нас живут <span className={styles.text__span}>ваши объявления</span></p>
        <img src={deposit} alt='Фон за панелей опций'/>
        </div>
    <PanelMainPage/>
</section>
    )
}
export default BlockCategoriesMain;