import React, {useState} from "react";
import "./index.scss";
import home from "../../image/home.svg";
import loup from "../../image/loup.svg";
import circle from "../../image/circle.svg";
import CardInfoNews from '../CardInfoNews';
import Bathhouse from '../Bathhouse';

function PageNewsList() {
  const [article, setArticle]=useState<string>('');
  const  handeClickArticles = ()=>{
    console.log(article)
 switch (article){
  case 'Баня':
    return <Bathhouse altDescript="Фото бани" textTitle="История и традиции русской бани: краткий очерк" textInfo="Баня всегда была и есть для русского человека не просто местом, где можно принять гигиенические процедуры и очистить свое тело от загрязнений, 
    а особым, почти сакральным сооружением, где очищение происходит не только на физическом, но и на духовном уровне."/>
    console.log(article)
 }
    
  }
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
        <input type="text" placeholder="Поиск по статьям" value={article} onChange={event=>setArticle(event.target.value)}/>
        <button onClick={handeClickArticles}>
          <img src={loup} alt="Изображение лупы" />
        </button>
      </div>
      {
        <div className="block-articles__div_center">
      {[...Array(9)].map((item, index)=>
       <CardInfoNews key={index}
altDescript="Фото комнаты"
       textTitle="Линия Сталина: суровый отдых в усадьбах на сутки"
       textInfo="Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице 
       хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А..."
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
