import React from "react";
import {CarouselCardsGold} from '../carousel/CarouselCardsGold';
import styles from './SliderComponentCardsGold.module.scss';
import img1 from '../../image/mainPage/SlidersCentr/image1.png';
import img2 from '../../image/mainPage/SlidersCentr/Mask Group (7).png';
import img3 from '../../image/mainPage/SlidersCentr/Mask Group (7).png';
import img4 from '../../image/mainPage/SlidersCentr/image4.jpg';
import img5 from '../../image/mainPage/SlidersCentr/image5.jpg';
import img6 from '../../image/mainPage/SlidersCentr/image6.jpg';

function SliderComponentCardsGold (){
    return (
        
<CarouselCardsGold>
    <div className={styles.carousel__div}><img src={img1} alt='Фото квартиры'/></div >
    <div className={styles.carousel__div}><img src={img2} alt='Фото квартиры'/></div > 
    <div className={styles.carousel__div}><img src={img3} alt='Фото квартиры'/></div >
    <div className={styles.carousel__div}><img src={img4} alt='Фото квартиры'/></div > 
    <div className={styles.carousel__div}><img src={img5} alt='Фото квартиры'/></div > 
    <div className={styles.carousel__div}><img src={img6} alt='Фото квартиры'/></div >   
    </CarouselCardsGold>

    )
}

export default SliderComponentCardsGold;