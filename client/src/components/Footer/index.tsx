import React from "react";
import styles from './Footer.module.scss';
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
      <div className={styles.BlockCenter__div}>
        <div className={styles.blockLeft__div}>
          <div className={styles.logo__div}>
            <img src={Logo} alt="Логотип сайта" />
            <p>СДАЁМ БАЙ</p>
          </div>
          <div className={styles.infoIp__div}>
            <p>ИП Шушкевич Андрей Викторович</p>
            <p>УНП 192602485 Минским горисполкомом</p>
            <p>10.02.2016</p>
            <p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
            <p>+375 29 621 48 33, sdaem@sdaem.by</p>
            <p>Режим работы: 08:00-22:00</p>
          </div>
        </div>
        <div className={styles.blockRight__div}>
          <div className={styles.info__div}>
            <ul className={styles.boldLeft__ul}>
              <li><a href="#">Коттеджи и усадьбы</a></li>
              <li><a href="#">Бани и сауны</a></li>
              <li><a href="#">Авто на прокат</a></li>
            </ul>
            <div className={styles.infoHome__div}>
              <p>Квартиры</p>
              <ul className={styles.infoFirst__ul}>
                <li><a href='#'>Квартиры в Минске</a></li>
                <li><a href='#'>Квартиры в Гомеле</a></li>
                <li><a href="#">Квартиры в Бресте</a></li>
              </ul>
            </div>
            <ul className={styles.infoSecond__ul}>
              <li><a href='#'>Квартиры в Витебске</a></li>
              <li><a href='#'>Квартиры в Гродно</a></li>
              <li><a href='#'>Квартиры в Могилеве</a></li>
            </ul>
            <ul className={styles.infoThree__ul}>
              <li><a href='#'>Новости</a></li>
              <li><a href='#'>Размещение и тарифы </a></li>
              <li><a href="#">Объявления на карте</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className={styles.infoBottom__div}>
            <div className={styles.infoBottomLeft__div}>
              <p>Мы в соцсетях</p>
              <div className={styles.message__div}>
                <img src={instagram} alt="Изображение иконки инстаграмм" />
                <img src={vk} alt="Изображение иконки вконтакте" />
                <img src={fb} alt="Изображение иконки фейсбук" />
              </div>
            </div>
            <div className={styles.messageBottom__div}>
              <img src={visa} alt="Изображение логотипа Виза" />
              <img src={webpay} alt="Изображение логотипа Вебпэй" />
              <img src={Verifed} alt="Изображение логотипа Верифед Виза" />
              <img src={MCard} alt="Изображение логотипа Мастеркард" />
              <img src={MCardSec} alt="Изображение логотипа Мастеркард Секьюр Код"/>
              <img src={belCard} alt="Изображение логотипа Белкарт" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
