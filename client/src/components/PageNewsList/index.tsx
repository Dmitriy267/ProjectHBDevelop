import React, {useState, ChangeEvent, MouseEventHandler, useReducer, useEffect } from "react";
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
import {UlListComponent} from '../common/UlListComponent';
import { useForm , SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchPosts1} from '../../redux/features/Post/postsSlice';
import type { AppDispatch } from '../../redux/store';
import { useSelector } from "react-redux";
import {postSelector} from '../../redux/features/Post/postsSlice';
import {post2Selector} from '../../redux/features/Post2/posts2Slice';
import {post3Selector} from '../../redux/features/Post3/posts3Slice';
import {post4Selector} from '../../redux/features/Post4/posts4Slice';
import { fetchPosts2} from '../../redux/features/Post2/posts2Slice';
import { fetchPosts3} from '../../redux/features/Post3/posts3Slice';
import { fetchPosts4} from '../../redux/features/Post4/posts4Slice';


interface PageNewsListProps {
  searchArticles: string;
}
function PageNewsList() {
const [data, setData]=useState(false);
const dispatch=useDispatch<AppDispatch>();
const postsGet=useSelector(postSelector);
const postsGet2=useSelector(post2Selector);
const postsGet3=useSelector(post3Selector);
const postsGet4=useSelector(post4Selector);
console.log(postsGet)
console.log(postsGet2)

const { register, handleSubmit } = useForm<PageNewsListProps>();
const onSubmit: SubmitHandler<PageNewsListProps> = data => {
  console.log(data);
  setData(data=>!data);
  const {searchArticles}=data;
  console.log(searchArticles)
  switch(searchArticles){
case 'Баня':
return dispatch((fetchPosts1()))
case 'Коттедж':
return dispatch((fetchPosts2()))
case 'Усадьба':
  return dispatch((fetchPosts3()))
case '':
  return dispatch((fetchPosts4()))
  default:
    return null
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("searchArticles", { required: false, maxLength: 20 })}placeholder="Поиск по статьям" />
        <button type="submit">
          <img src={loup} alt="Изображение лупы" />
        </button>
        </form>
      </div>

        <div className="block-articles__div_center">

        {
    postsGet?postsGet.map((el, id)=><ArticleComponent1 key={id} imgSrc={el.imgSrc} title={el.title} description={el.description} altTitle={el.altTitle}/>):
   <p>Статья не найдена</p>}
   {postsGet2? postsGet2.map((el, id)=><ArticleComponent1 key={id} imgSrc={el.imgSrc} title={el.title} description={el.description} altTitle={el.altTitle}/>):
   <p>Статья не найдена</p>
   }
    {
    postsGet3? postsGet3.map((el, id)=><ArticleComponent1 key={id} imgSrc={el.imgSrc} title={el.title} description={el.description} altTitle={el.altTitle}/>):
   <p>Статья не найдена</p>
   }

{
    postsGet4? [...Array(9)].map(( index)=>
    <CardInfoNews key={index}
    altDescript={"Фото комнаты"}
    textTitle="Линия Сталина: суровый отдых в усадьбах на сутки"
    textInfo="Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице 
    хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А..."
  />
   ):
   <p>Статья не найдена</p>
   }  
        
      </div>
    

      <UlListComponent/>
    </section>
    <Footer/>
    </>
  );
}
export default PageNewsList;
