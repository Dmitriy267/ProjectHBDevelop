import React from "react";
import {CarouselHotHomeMainPage} from '../carousel/CarouselHotHomeMainPage';
import styles from './SlidsMainPageHotHome.module.scss';
import img1 from '../../image/mainPage/Sliders/HotHome1.png';
import img2 from '../../image/mainPage/Sliders/HotHome2.png';
import img3 from '../../image/mainPage/Sliders/HotHome3.png';
import img4 from '../../image/mainPage/Sliders/HotHome4.png';

function SlidsMainPageHotHome (){
  

    return (
       
<CarouselHotHomeMainPage>
    <div className={styles.carousel1__div}><img src={img1} alt='Первое изображение бани'/></div >
    <div className={styles.carousel2__div}><img src={img2} alt='Второе изображение бани'/></div >
    <div className={styles.carousel3__div}><img src={img3} alt='Третье изображение бани'/></div > 
    <div className={styles.carousel4__div}><img src={img4} alt='Четвертое изображение бани'/></div >  
   
    </CarouselHotHomeMainPage>

    )
}

export default SlidsMainPageHotHome;