import React from "react";
import styles from './Header.module.scss';
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
   
      <header className={styles.header}>
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
        <div className={styles.group__div}>
          <div className={styles.blockLeft__div}>
            <p><a href="#">Закладки</a></p>
            <img src={heart} alt="Векторное изображение закладки" />

          </div>
          {user?<Login/>:<LinkRegistration/>}
          
        </div>
      </header>
   
  );
}
