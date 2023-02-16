import React, { useState }  from "react";
import styles from './PanelMainPage.module.scss';
import clsx from 'clsx';
import TabRooms from '../TabRooms'

function PanelMainPage (){
    const [togglState, setToggleState]=useState(1);
    const toggleTab=(index: React.SetStateAction<number>)=>{
        setToggleState(index)
    }
    return (
<div className={styles.container__div}>
    <ul className={styles.tab__ul}>
<li className={togglState===1? clsx(styles.active__li, styles.tabs__li, styles.sizeTab1__li):clsx( styles.tabs__li, styles.sizeTab1__li)} onClick={()=>toggleTab(1)}>Квартиры на сутки</li>
<li className={togglState===2? clsx(styles.active__li, styles.tabs__li, styles.sizeTab2__li): clsx(styles.tabs__li,styles.sizeTab1__li) } onClick={()=>toggleTab(2)}>Коттеджи и усадьбы</li>
<li className={togglState===3? clsx(styles.active__li, styles.tabs__li, styles.sizeTab3__li): clsx(styles.tabs__li, styles.sizeTab3__li)} onClick={()=>toggleTab(3)}>Бани и сауны</li>
<li className={togglState===4? clsx(styles.active__li, styles.tabs__li, styles.sizeTab4__li): clsx(styles.tabs__li, styles.sizeTab4__li)} onClick={()=>toggleTab(4)}>Авто напрокат</li>
    </ul>
    <div className={styles.content__box}>
        <div className={togglState===1? clsx(styles.active__div, styles.content): styles.content}><TabRooms/></div>
        <div className={togglState===2? clsx(styles.active__div, styles.content): styles.content}><h3>Content2</h3></div>
        <div className={togglState===3? clsx(styles.active__div, styles.content): styles.content}><h3>Content3</h3></div>
        <div className={togglState===4? clsx(styles.active__div, styles.content): styles.content}><h3>Content4</h3></div>
    </div>
</div>
    )
}
export default PanelMainPage;