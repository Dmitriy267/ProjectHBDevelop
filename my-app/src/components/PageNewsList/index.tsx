import React, {useState, ChangeEvent, MouseEventHandler } from "react";
import "./index.scss";
import home from "../../image/home.svg";
import loup from "../../image/loup.svg";
import circle from "../../image/circle.svg";
import CardInfoNews from '../CardInfoNews';
import Header from "../Header";
import Footer from "../Footer";
import NavigationSectionProducts from '../NavigationSectionProducts';
import ArticleComponent1 from '../ArticleComponent1';
import {LinkDivTitle} from '../common/LinkDivTitle'
import styles from './PageNewsList.module.scss';

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
];
const ArticleHome=[ 
  {id:1,
  imgSrc:'',
  title:'Коттеджный комплекс «Ручеёк» ',
  description:'Коттеджный Банный комплекс «Ручеёк» предлагает снять дом/коттедж в Люберцах недорого на сутки. Во дворе мангал, беседка, купель.',
  altTitle:'Фото коттеджа'

},
{
  id:2,
  imgSrc:'',
  title:'Прованс',
  description:'Предлагаем вам отдохнуть в атмосферном загородном доме в стиле французского прованса. В коттедже вы найдете все необходимое, чтобы провести тихий уютный вечер с друзьями или устроить веселую вечеринку ',
  altTitle:'Фото коттеджа'

},
{
  id:3,
  imgSrc:'',
  title:'Гостевой дом-вилла',
  description:'Комфортный, уютный двухэтажный коттедж в стиле Вилла - отдых на природе с городским комфортом.',
  altTitle:'Фото коттеджа'
}]
function PageNewsList() {
const [inputArticl, setInputArticl]=useState('')
function onChangeInputArticle (event:ChangeEvent<HTMLInputElement>){
  return setInputArticl(event.target.value)
}

const onClickArticles:MouseEventHandler=(event)=> {
console.log('Выбор статьи')

    
  }
  
  return (
    <>
    <Header/>
    <NavigationSectionProducts />
    <section className="page-news__section">
      <div className="block-page-news__div">
        <LinkDivTitle>
          <p className={styles.newsLink__p}>
            <a href="#">Новости</a>
          </p>
        </LinkDivTitle>
        <p className="title-news-text__p">Новости </p>
      </div>
      <div className="block-search-articles__div_right">
        <input type="text" placeholder="Поиск по статьям" value={inputArticl} onChange={onChangeInputArticle} />
        <button onClick={onClickArticles}>
          <img src={loup} alt="Изображение лупы" />
        </button>
      </div>

        <div className="block-articles__div_center">
        {(()=>{
switch (inputArticl){
  case 'Баня':
    return Articles.map((el, id)=><ArticleComponent1 key={id} imgSrc={el.imgSrc} title={el.title} description={el.description} altTitle={el.altTitle}/>)
    case 'Коттедж':
          return ArticleHome.map((el, id)=><ArticleComponent1 key={id} imgSrc={el.imgSrc} title={el.title} description={el.description} altTitle={el.altTitle}/>)
        default:
          return   [...Array(9)].map((item, index)=>
          <CardInfoNews key={index}
   altDescript="Фото комнаты"
          textTitle="Линия Сталина: суровый отдых в усадьбах на сутки"
          textInfo="Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице 
          хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А..."
          />
         )
}
        })()
       
         
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
    <Footer/>
    </>
  );
}
export default PageNewsList;
