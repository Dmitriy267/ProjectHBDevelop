import React from "react";
import {CarouselMainPageAvto} from '../carousel/CarouselMainPageAvto';
import styles from './SlidsMainPageAvto.module.scss';
import img1 from '../../image/mainPage/Sliders/avto1.png';
import img2 from '../../image/mainPage/Sliders/avto2.png';
import img3 from '../../image/mainPage/Sliders/avto3.png';
import img4 from '../../image/mainPage/Sliders/avto4.png';

function  SlidsMainPageAvto (){
  
    return (
       
<CarouselMainPageAvto>
    <div className={styles.carousel1__div}><img src={img1} alt='Первое изображение автомобиля'/></div >
    <div className={styles.carousel2__div}><img src={img2} alt='Второе изображение автомобиля'/></div >
    <div className={styles.carousel3__div}><img src={img3} alt='Третье изображение автомобиля'/></div > 
    <div className={styles.carousel4__div}><img src={img4} alt='Четвертое изображение автомобиля'/></div >  
   
    </CarouselMainPageAvto>

    )
}

export default SlidsMainPageAvto;