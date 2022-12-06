import React, {useState, ChangeEvent, useEffect, MouseEvent, MouseEventHandler } from "react";
import "./index.scss";
import home from "../../image/home.svg";
import loup from "../../image/loup.svg";
import circle from "../../image/circle.svg";
import CardInfoNews from '../CardInfoNews';
import ArticleComponent1 from '../ArticleComponent1';

const Articles=[{
  id:1,
  imgSrc:'',
  title:'Баня Русская С душой',
  description:'В Бане С душой вы можете посетить традиционную баню на дровах - проверенную веками и особенно любимую жителями больших городов. Уютный звук сгорающих в печи дров, запах натурального дерева рождают у нас добрые чувства.',
  altTitle:'Фото бани'

},
{
  id:2,
  imgSrc:'',
  title:' Банька с веничком на двоих',
  description:'В сауну Банька с веничком на двоих вы можете прийти веселой компанией, арендовать парную на всех, пообщаться и отдохнуть. У нас вы сможете найти : бодрящую купель, пахучие веники, бильярд, уютную комнату отдыха ',
  altTitle:'Фото бани'

},
{
  id:3,
  imgSrc:'',
  title:'Баня На Волге',
  description:'К Вашим услугам представлены: парная с немецкой дровяной печью (топиться дубовыми дровами). Самый большой бассейн (Саратовское водохранилище).',
  altTitle:'Фото бани'
}
]
function PageNewsList() {
const [inputArticl, setInputArticl]=useState('')
function onChangeInputArticle (event:ChangeEvent<HTMLInputElement>){
  return setInputArticl(event.target.value)
}
useEffect (()=>{
 document.title=`Поиск по статье {inputArticl}`
})
const onClickArticles:MouseEventHandler=(event)=> {
console.log('Выбор статьи')
    
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
        <input type="text" placeholder="Поиск по статьям" value={inputArticl} onChange={onChangeInputArticle} />
        <button onClick={onClickArticles}>
          <img src={loup} alt="Изображение лупы" />
        </button>
      </div>
      <h3>Поиск по статье {inputArticl}</h3>
        <div className="block-articles__div_center">
        {Articles.map((el, id)=><ArticleComponent1 key={id} imgSrc={el.imgSrc} title={el.title} description={el.description} altTitle={el.altTitle}/>)&&
          [...Array(9)].map((item, index)=>
          <CardInfoNews key={index}
   altDescript="Фото комнаты"
          textTitle="Линия Сталина: суровый отдых в усадьбах на сутки"
          textInfo="Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице 
          хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А..."
          />
         )
       
         }
        
      </div>
      
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
