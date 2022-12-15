import React from "react";
import "./index.scss";
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
      <section className="block-news-title__section">
        <MainNewsDiv
          altImageHome="Изображение дома"
          altImageCircle="Изображение точки"
          rubricTitleP=" Линия Сталина: суровый отдых в усадьбах на сутки"
          rubricTextP="Новости"
        />

        <p className="title-main-news__p_center">
          Линия Сталина: суровый отдых в усадьбах на сутки{" "}
        </p>
        <div className="main-news__div_bottom">
          <DateText text='14 Января 2008'/>
          <div className="icons-news__div_right">
            <p>Поделиться</p>
            <IconsNewsDivGroup>
              <div className="icons-background__div">
                <img src={vk} alt="Изображение иконки вконтакте" className="iconsbackground__img"/>
              </div>
              <div className="icons-background__div">
                <img src={fb} alt="Изображение иконки фейсбук" className="iconsbackground__img"/>
              </div>
              <div className="icons-background__div">
                <img src={viber} alt="Изображение иконки вайбер" className="iconsbackground__img_other"/>
              </div>
              <div className="icons-background__div">
                <img src={telegram} alt="Изображение иконки телеграмм" className="iconsbackground__img_other"/>
              </div>
              <div className="icons-background__div">
                <img src={whatsap} alt="Изображение иконки ватсап" className="iconsbackground__img_other"/>
              </div>
            </IconsNewsDivGroup>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default NewsTitleSection;
