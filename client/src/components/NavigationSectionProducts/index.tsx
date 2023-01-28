import React from "react";
import styles from './NavigationSectionProducts.module.scss';
import Logo from "../../image/logo 1.png";
import {Button} from "../common/Button";
import { Link } from "react-router-dom";
export default function NavigationSectionProducts() {
  return (
    <section className={styles.navigation__section}>
      <div className={styles.navigation__div}>
        <a href="#">
          <img src={Logo} alt="Логотип сайта" />
        </a>
        <nav>
          <ul>
            <li>
              <Link to='/Каталог квартир'> Квартиры на сутки
                <svg
                  fill="none"
                  viewBox="0 0 9 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z"
                    fill="#1E2123"
                  />
                </svg>
                </Link>
            </li>
            <li>
              <a href="#">Коттеджи и усадьбы</a>
            </li>
            <li>
              <a href="#">Бани и Сауны</a>
            </li>
            <li>
              <a href="#">Авто напрокат</a>
            </li>
          </ul>
        </nav>
        <Button text='+ Разместить объявление'/>
      </div>
    </section>
  );
}
