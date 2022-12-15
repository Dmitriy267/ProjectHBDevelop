import React from "react";
import "./index.scss";
import Logo from "../../image/logo 1.png";
import instagram from "../../image/footer/ant-design_instagram-outlined.svg";
import vk from "../../image/footer/ant-design_vk-outlined.svg";
import fb from "../../image/footer/ant-design_fb-outlined.svg";
import visa from "../../image/footer/banksCards/visa_PNG30.png";
import webpay from "../../image/footer/banksCards/webpay.png";
import Verifed from "../../image/footer/banksCards/verified-by-visa 1.png";
import MCard from "../../image/footer/banksCards/1280px-Mastercard-logo 1.png";
import MCardSec from "../../image/footer/banksCards/securecode.png";
import belCard from "../../image/footer/banksCards/logotip-belkart-v-odnom-tsvete.png";

function Footer() {
  return (
    <footer>
      <div className="block-footer__div_center">
        <div className="block-footer__div_left">
          <div className="block-footer-logo__div">
            <img src={Logo} alt="Логотип сайта" />
            <p>СДАЁМ БАЙ</p>
          </div>
          <div className="block-info-ip__div">
            <p>ИП Шушкевич Андрей Викторович</p>
            <p>УНП 192602485 Минским</p>
            <p>горисполкомом 10.02.2016 220068,</p>
            <p>РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
            <p>+375 29 621 48 33, sdaem@sdaem.by</p>
            <p>Режим работы: 08:00-22:00</p>
          </div>
        </div>
        <div className="block-footer__div_right">
          <div className="block-info-footer__div_up">
            <ul className="block-info__ul_boldLeft">
              <li>Коттеджи и усадьбы</li>
              <li>Бани и сауны</li>
              <li>Авто на прокат</li>
            </ul>
            <div className="block-info-home__div">
              <p>Квартиры</p>
              <ul className="block-info-home__ul_first">
                <li>Квартиры в Минске</li>
                <li>Квартиры в Гомеле</li>
                <li>Квартиры в Бресте</li>
              </ul>
            </div>
            <ul className="block-info-home__ul_second">
              <li>Квартиры в Витебске</li>
              <li>Квартиры в Гродно</li>
              <li>Квартиры в Могилеве</li>
            </ul>
            <ul className="block-info__ul_three">
              <li>Новости</li>
              <li>Размещение и тарифы </li>
              <li>Объявления на карте</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="block-info-footer__div_bottom">
            <div className="block-info-footer__div_bottomLeft">
              <p>Мы в соцсетях</p>
              <div className="block-icons-message__div">
                <img src={instagram} alt="Изображение иконки инстаграмм" />
                <img src={vk} alt="Изображение иконки вконтакте" />
                <img src={fb} alt="Изображение иконки фейсбук" />
              </div>
            </div>
            <div className="block-info-footer__div_bottomRight">
              <img src={visa} alt="Изображение логотипа Виза" />
              <img src={webpay} alt="Изображение логотипа Вебпэй" />
              <img src={Verifed} alt="Изображение логотипа Верифед Виза" />
              <img src={MCard} alt="Изображение логотипа Мастеркард" />
              <img
                src={MCardSec}
                alt="Изображение логотипа Мастеркард Секьюр Код"
              />
              <img src={belCard} alt="Изображение логотипа Белкарт" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
