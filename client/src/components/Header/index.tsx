import React from "react";
import "./index.scss";
import heart from "../../image/header/heart.svg";
import Group5 from "../../image/header/Group5.svg";
import { Link } from "react-router-dom";
import LinkRegistration from '../LinkRegistration';
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/userSlice";
import Login from '../Login';

export default function Header() {
  const user=useSelector(selectUser)
  return (
   
      <header className="header">
        <nav>
          <ul>
            <li>
              <a href="#">Главная</a>
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
          {user?<Login/>:<LinkRegistration/>}
        </div>
      </header>
   
  );
}
