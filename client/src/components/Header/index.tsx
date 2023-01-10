import React from "react";
import "./index.scss";
import heart from "../../image/header/heart.svg";
import Group5 from "../../image/header/Group5.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
   
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/Главная">Главная</Link>
            </li>
            <li>
              <Link to="/Новости">Новости</Link>
            </li>

            <li>
              <a href="#">Размещение и тарифы</a>
            </li>
            <li>
              <a href="#">
                <img src={Group5} alt="Векторное изображение карты" />
                Объявления на карте
              </a>
            </li>
            <li>
            <Link to="/Контактная">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="block-header__div_group">
          <div className="block-header__div_left">
            <a href="#">Закладки</a>
            <img src={heart} alt="Векторное изображение закладки" />
          </div>
          <div className="block-header__div_right">
            <Link to="/Вход и регистрация">Вход и регистрация</Link>
          </div>
        </div>
      </header>
   
  );
}
