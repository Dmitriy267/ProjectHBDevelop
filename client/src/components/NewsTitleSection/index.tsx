import React from "react";
import styles from './NewsTitleSection.module.scss';
import MainNewsDiv from "../MainNewsDiv";
import vk from "../../image/iconsMessage/vk.svg";
import fb from "../../image/iconsMessage/facebook.svg";
import viber from "../../image/iconsMessage/simple-icons_viber.svg";
import telegram from "../../image/iconsMessage/bx_bxl-telegram.svg";
import whatsap from "../../image/iconsMessage/icomoon-free_whatsapp.svg";
import {DateText} from '../common/DateText/DateText';
import IconsNewsDivGroup from '../IconsNewsDivGroup';
function NewsTitleSection() {
  return (
    <React.Fragment>
      <section className={styles.news__section}>
        <MainNewsDiv
          altImageHome="Изображение дома"
          altImageCircle="Изображение точки"
          rubricTitleP=" Линия Сталина: суровый отдых в усадьбах на сутки"
          rubricTextP="Новости"
        />

        <p className={styles.news__p}>
          Линия Сталина: суровый отдых в усадьбах на сутки
        </p>
        <div className={styles.newsBottom__div}>
          <DateText text='14 Января 2008'/>
          <div className={styles.newsRight__div}>
            <p>Поделиться</p>
            <IconsNewsDivGroup>
              <div className={styles.icons__div}>
                <img src={vk} alt="Изображение иконки вконтакте" className={styles.iconsbackground__img}/>
              </div>
              <div className={styles.icons__div}>
                <img src={fb} alt="Изображение иконки фейсбук" className={styles.iconsbackground__img}/>
              </div>
              <div className={styles.icons__div}>
                <img src={viber} alt="Изображение иконки вайбер" className={styles.iconsOther__img}/>
              </div>
              <div className={styles.icons__div}>
                <img src={telegram} alt="Изображение иконки телеграмм" className={styles.iconsOther__img}/>
              </div>
              <div className={styles.icons__div}>
                <img src={whatsap} alt="Изображение иконки ватсап" className={styles.iconsOther__img}/>
              </div>
            </IconsNewsDivGroup>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default NewsTitleSection;
