import React, {useState} from "react";
import {Carousel} from '../carousel/Carousel';
import styles from './SliderComponent.module.scss';

interface SliderComponentProps {
    atlDesript:string;
    imgSrc1?:string;
    imgSrc2?:string;
    imgSrc3?:string;
    imgSrc4?:string;
    imgSrc5?:string;
    imgSrc6?:string;
}
function SliderComponent ({...props }:SliderComponentProps){
    const { imgSrc1, atlDesript, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6}=props;

    return (
        
<Carousel>
    <div className={styles.carousel1__div}><img src={imgSrc1} alt={atlDesript}/></div >
    <div className={styles.carousel2__div}><img src={imgSrc2} alt={atlDesript}/></div > 
    <div className={styles.carousel3__div}><img src={imgSrc3} alt={atlDesript}/></div >
    <div className={styles.carousel4__div}><img src={imgSrc4} alt={atlDesript}/></div > 
    <div className={styles.carousel5__div}><img src={imgSrc5} alt={atlDesript}/></div > 
    <div className={styles.carousel6__div}><img src={imgSrc6} alt={atlDesript}/></div >   
    </Carousel>

    )
}

export default SliderComponent;