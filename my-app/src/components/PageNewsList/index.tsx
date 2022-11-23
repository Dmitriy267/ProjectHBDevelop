import React from "react";
import "./index.scss";
import home from "../../image/home.svg";
import loup from "../../image/loup.svg";
import circle from "../../image/circle.svg";
import CardInfoNews from '../CardInfoNews';


function PageNewsList() {
 
  return (
    <section className="page-news__section">
      <div className="block-page-news__div">
        <div className="link-news__div_left">
          <img src={home} alt="Изображение дома" />
          <img src={circle} alt="Изображение точки" />
          <p className="news-link__p">
            <a href="#">Новости</a>
          </p>
        </div>
        <p className="title-news-text__p">Новости </p>
      </div>
      <div className="block-search-articles__div_right">
        <input type="text" placeholder="Поиск по статьям"/>
        <button>
          <img src={loup} alt="Изображение лупы" />
        </button>
      </div>
      {
        <div className="block-articles__div_center">
      {[...Array(9)].map((item, index)=>
       <CardInfoNews key={index}
       altDescript={"Фото комнаты"}
       textTitle="Линия Сталина: суровый отдых в усадьбах на сутки"
       textInfo="Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице 
       хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А..."
       textDataCard="14 Января 2008"
       ReadText="Читать"
     />
      )}

      </div>
      
      
}
      <ul className="namber-page__ul_bottom">
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">...</a></li>
        <li><a href="#">11</a></li>
      </ul>
    </section>
  );
}
export default PageNewsList;
