import React, { useEffect } from "react";
import styles from './BlockCategoriesMain.module.scss';
import deposit from '../../image/mainPage/depositphotos_1.png';
import PanelMainPage from '../PanelMainPage';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {FetchTabs } from '../../redux/features/TabRooms/tabRoomsSlice';
import {TabCardRooms} from '../common/TabCardRooms';

function BlockCategoriesMain (){
    const dispatch=useAppDispatch();
 
  const {tabRooms, loading, hasErrors}=useAppSelector(state=>state.tabRoom)
    console.log(tabRooms)
    useEffect(()=>{
        console.log( dispatch(FetchTabs))
        dispatch(FetchTabs)
    }, [])
    const renderRoomTabs=()=>{
        if(loading){
            <p>Загрузка результата поиска...</p>
        }
        if(hasErrors){
            <p>{hasErrors}</p>
        }
        return tabRooms.map((tabRoom, id)=><TabCardRooms key={id} tabRoom={tabRoom}    />)
    }

    return(
        <>
<section className={styles.wrap__section}>
    <div className={styles.depositos__div}>
        <p>Sdaem.by - у нас живут <span className={styles.text__span}>ваши объявления</span></p>
        <img src={deposit} alt='Фон за панелей опций'/>
        </div>
    <PanelMainPage/>
    <div>
 {
    renderRoomTabs()
    }
 </div>
</section>
</>
    )
}
export default BlockCategoriesMain;