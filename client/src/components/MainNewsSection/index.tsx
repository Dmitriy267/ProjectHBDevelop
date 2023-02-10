import React from "react";
//import "./index.scss";
import styles from './MainNewsSection.module.scss';
import Group654 from "../../image/Group 654.svg";
import room from "../../image/room.png";
function MainNewsSection() {
  return (
    <section className={styles.news__section}>
      <img src={Group654} alt="Векторное изображение точек" />
      <img src={room} alt="Фото комнаты" />

      <div className={styles.descript__div}>
        <p>
          Итак, утром вы выезжаете в путь по Молодеченской трассе. Если
          автомобиля у вас нет - садитесь на <br /> маршрутку в сторону
          Молодечно от железнодорожного вокзала. Остановка называется «Линия
          Сталина»
          <br />
          -да-да, именно здесь вы и проведёте ближайшие несколько часов, а
          вероятнее всего – останетесь до <br /> самого вечера.
        </p>
        <p className={styles.text2__p}>
          «Линия Сталина» - это уникальный музейный комплекс, располагающийся
          под открытым небом. Поэтому <br /> желательно приезжать сюда в хорошую
          погоду. Его территория поистине огромна: целых 26 га. Такое <br />{" "}
          название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века
          именовали цепь укреплений, созданную для защиты государственной
          границы СССР. Комплекс же построен лишь в 2005 году – к <br />{" "}
          шестидесятой годовщине Победы в Великой Отечественной войне.
        </p>
        <p className={styles.text3__p}>
          Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в
          направлении Молодечно, то <br /> можете провести в музейном комплексе
          хоть целый день. Здесь действительно есть на что посмотреть: <br />{" "}
          ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые
          заграждения, зенитные <br /> пушки, бронетехника… Вы встретите даже
          элементы ракетных войск – и всё это не муляжи, а настоящие <br />{" "}
          боевые орудия! За отдельную плату вам предложат пострелять из винтовки
          и пулемёта, а также <br /> прокатиться на танке. Проголодались?
          Загляните в кафе и насладитесь сытным домашним обедом.
        </p>
        <p className={styles.text3__p}>
          Посетить «Линию Сталина» будет интересно как взрослым, так и детям.
          Особенно мальчишкам!
          <br /> Уставшие от впечатлений, они будут рады вместо долгой дороги
          домой остановиться на ночь в уютном <br />
          современном коттедже. На сайте можно выбрать и снять посуточно
          наиболее удобный для вас вариант. <br />
          Проведите незабываемые выходные за городом – приезжайте в «Линию
          Сталина»!
        </p>
        <p>Отличная усадьба в 10 км от "Линии Сталина".</p>
      </div>
    </section>
  );
}
export default MainNewsSection;
