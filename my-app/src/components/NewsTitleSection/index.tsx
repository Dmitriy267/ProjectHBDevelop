import React from "react";
import "./index.scss";
import MainNewsDiv from "../MainNewsDiv";
import vk from "../../image/iconsMessage/vk.svg";
import fb from "../../image/iconsMessage/facebook.svg";
import viber from "../../image/iconsMessage/simple-icons_viber.svg";
import telegram from "../../image/iconsMessage/bx_bxl-telegram.svg";
import whatsap from "../../image/iconsMessage/icomoon-free_whatsapp.svg";
import {DateText} from '../common/DateText/DateText';
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
            <div className="icons-news__div_group">
              <div className="icons-background__div">
                <img src={vk} alt="Изображение иконки вконтакте" />
              </div>
              <div className="icons-background__div">
                <img src={fb} alt="Изображение иконки фейсбук" />
              </div>
              <div className="icons-background__div">
                <img src={viber} alt="Изображение иконки вайбер" />
              </div>
              <div className="icons-background__div">
                <img src={telegram} alt="Изображение иконки телеграмм" />
              </div>
              <div className="icons-background__div">
                <img src={whatsap} alt="Изображение иконки ватсап" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default NewsTitleSection;
