import React from "react";
import {CarouselBigHomeMainPage} from '../carousel/CarouselBigHomeMainPage';
import styles from './SlidsMainPage.module.scss';
import img1 from '../../image/mainPage/Sliders/olimpik_renderi_kottedgei10 1.png';
import img2 from '../../image/mainPage/Sliders/beautiful-canadian-cottages 1.png';

function SlidsMainPage (){
  

    return (
       
<CarouselBigHomeMainPage>
    <div className={styles.carousel1__div}><img src={img1} alt='Первое изображение коттеджа'/></div >
    <div className={styles.carousel2__div}><img src={img2} alt='Второе изображение коттеджа'/></div > 
   
    </CarouselBigHomeMainPage>
 

    )
}

export default SlidsMainPage;