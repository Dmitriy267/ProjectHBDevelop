import React from "react";
import {CarouselMainPageCardsGold} from '../carousel/CarouselMainPageCardsGold';
import styles from './SlidersMainPageCardsGold.module.scss';
import {CardsMainPage} from '../common/CardsMainPage';
import img1 from '../../image/mainPage/SlidersCentr/image1.png';
import img2 from '../../image/mainPage/SlidersCentr/Mask Group (7).png';
import img3 from '../../image/mainPage/SlidersCentr/Mask Group (7).png';
import img4 from '../../image/mainPage/SlidersCentr/image4.jpg';
import img5 from '../../image/mainPage/SlidersCentr/image5.jpg';
import img6 from '../../image/mainPage/SlidersCentr/image6.jpg';
function SlidersMainPageCardsGold (){
   

    return (
        <>
<CarouselMainPageCardsGold>
        <CardsMainPage  priceText={"65.00 BYN"} roomsTexst={"4 комн."} areaText={"179 м²"} cityText={"Минск, б-р Мулявина, д. 10"} metroText={"Грушевка"} placeholderCity={"Шабаны"} descriptText={"Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ..."}>
        <div className={styles.slid1__div}><img src={img1} alt='Фото квартиры' /></div>
        </CardsMainPage>
        <CardsMainPage priceText={"65.00 BYN"} roomsTexst={"4 комн."} areaText={"179 м²"} cityText={"Минск, б-р Мулявина, д. 10"} metroText={"Грушевка"} placeholderCity={"Шабаны"} descriptText={"Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ..."}>
        <div className={styles.slid2__div}><img src={img2} alt='Фото квартиры' /></div>
        </CardsMainPage>
        <CardsMainPage  priceText={"65.00 BYN"} roomsTexst={"4 комн."} areaText={"179 м²"} cityText={"Минск, б-р Мулявина, д. 10"} metroText={"Грушевка"} placeholderCity={"Шабаны"} descriptText={"Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ..."}>
        <div className={styles.slid2__div}><img src={img3} alt='Фото квартиры' /></div>
        </CardsMainPage>
        <CardsMainPage  priceText={"150,75 BYN"} roomsTexst={"3 комн."} areaText={"82.6 м²"} cityText={"Минск, ул. Кальварийская, д.16"} metroText={"Фрунзенская"} placeholderCity={"Минск"} descriptText={"Этажный монолитный дом, площадь 100/60/ кв.м., 2 лоджии застекленные, год постройки 2015, домофон, видеодомофон, лифт, стеклопакеты, подземный гараж, хороший вид из окна, благоустроенный двор ..."}>
        <div className={styles.slid2__div}><img src={img4} alt='Фото квартиры' /></div>
        </CardsMainPage>
        <CardsMainPage  priceText={"75 BYN"} roomsTexst={"2 комн."} areaText={"60 м²"} cityText={"Минск, ул.Танка Максима, д.4"} metroText={"Фрунзенская"} placeholderCity={"Минск"} descriptText={"Уютная двухкомнатная квартира в тихом центре столицы по адресу ул. Максима Танка 4, в шаговой доступности от ст. м. Фрунзенская. В квартире есть всё для комфортного проживания и отдыха: ..."}>
        <div className={styles.slid2__div}><img src={img5} alt='Фото квартиры' /></div>
        </CardsMainPage>
        <CardsMainPage  priceText={"90 BYN"} roomsTexst={"1 комн."} areaText={"40 м²"} cityText={"Минск, ул.Романовская Слобода, д.4"} metroText={"Фрунзенская"} placeholderCity={"Минск"} descriptText={"Просторная однокомнатная квартира в центре Минска на ул. Романовская слобода, д.14 недалеко от ст. м. Фрунзенская и Немига..."}>
        <div className={styles.slid2__div}><img src={img6} alt='Фото квартиры' /></div>
        </CardsMainPage>
   
    </CarouselMainPageCardsGold>
</>
    )
}

export default SlidersMainPageCardsGold;