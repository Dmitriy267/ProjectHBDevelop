import React from "react";
import { ButtonMap } from "../common/ButtonMap";
import styles from './InfoAdsMapSection.module.scss';
import depositCenter from '../../image/mainPage/depositphotos_2.png';
import {CardsAdverst} from '../common/CardsAdverst';
import {CardsAdverstImg} from '../common/CardsAdverstImg';
import target2 from '../../image/mainPage/target 2.svg';
import {LinkCardsInfoAdverst} from '../common/LinkCardsInfoAdverst';
import move from '../../image/mainPage/move 1.svg';
import chevronImg from '../../image/mainPage/chevron-down (4).svg';
import CardsAdverstGold from '../CardsAdverstGold';
import LinkCardsAdverstGold from '../LinkCardsAdverstGold';
import decor from '../../image/mainPage/Group 655.svg';
import decor2 from '../../image/mainPage/Group 662.svg';
function InfoAdsMapSection (){
    return(
        <section className={styles.section}>
            <div className={styles.map__div}>
                <img src={depositCenter} alt='Фон за текстом' className={styles.depositCenter__img}/>
                <p>Поиск квартир на карте</p>
                <p className={styles.textMap__p}>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
                <ButtonMap/>
                <img src={decor} alt='Векторное изображение' className={styles.decor1__img}/>
            </div>
            <div className={styles.center__div}>
            <CardsAdverst>
                <div className={styles.top__div}>
                <CardsAdverstImg>
                    <img src={target2} alt='Изображение на первой карточке'/>
                </CardsAdverstImg>
                <p className={styles.top__p}>Начните привлекать клиентов бесплатно!</p>
                </div>
                <p className={styles.center__p}>Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span>бесплатно создавать и публиковать</span> объявления на сайте. </p>
                <LinkCardsInfoAdverst textLink='+  Разместить объявление'>
                </LinkCardsInfoAdverst>
             </CardsAdverst>
             <CardsAdverst>
                <div className={styles.top2__div}>
                <CardsAdverstImg>
                    <img src={move} alt='Изображение на второй карточке'/>
                </CardsAdverstImg>
                <p className={styles.top2__p}>Поднимайте объявления</p>
                </div>
                <p className={styles.center2__p}>Вы в любое время можете <span>поднимать</span> объявления <span>вверх первой страницы</span> каталога,
они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</p>
                <LinkCardsInfoAdverst textLink='Узнать стоимость услуги'>
                    <img src={chevronImg} alt='Стрелка перехода' className={styles.chevron__img}/>
                </LinkCardsInfoAdverst>
             </CardsAdverst>
             <CardsAdverstGold>
                <p className={styles.title__p}>Приоритет Gold </p>
                <p className={styles.info1__p}>Приоритетное размещение <span>Gold</span> позволяет <span>закрепить ваше объявление</span> в верхней части каталога!</p>
                <p className={styles.info2__p}>Gold объявления <span>перемещаются <br/> каждые 5 мин</span> на 1 позицию, что делает размещение одинаковым для всех.</p>
               <LinkCardsAdverstGold/>
             </CardsAdverstGold>

            </div>
            <img src={decor2} alt='Векторное изображение' className={styles.decor2__img}/>
            

        </section>
    )
}

export default InfoAdsMapSection;