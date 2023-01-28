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
import { fetchPost, fetchPost2, fetchPost3} from '../../redux/features/Post/postsSlice';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";



interface PageNewsListProps {
  searchArticles: string;
}
function PageNewsList() {
const [data, setData]=useState(false);
const dispatch=useAppDispatch();
const {posts, loading, ErrorGet}=useAppSelector(state=>state.posts)


console.log(posts)


const { register, handleSubmit } = useForm<PageNewsListProps>();
const onSubmit: SubmitHandler<PageNewsListProps> = data => {
  console.log(data);
  setData(data=>!data);
  const {searchArticles}=data;
  console.log(searchArticles)
  switch (searchArticles){
    case ('Баня'):
      return dispatch(fetchPost());
      case ('Коттедж'):
        return dispatch(fetchPost2());
        case ('Усадьба'):
          return dispatch(fetchPost3());
        default:
          return null;
  }
}
const renderSearchPost=()=>{
  if (loading) {
    return <p>Загрузка данных</p>
  }
  if( ErrorGet) {
    return <p>Произошла ошибка на сервере.Попробуйте найти другую статью</p>
  }
return posts.map((el, id)=><ArticleComponent1 key={id} imgSrc={el.imgSrc} title={el.title} description={el.description} altTitle={el.altTitle}/>)
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
          renderSearchPost()
}

{
    [...Array(9)].map(( index)=>
    <CardInfoNews key={index}
    altDescript={"Фото комнаты"}
    textTitle="Линия Сталина: суровый отдых в усадьбах на сутки"
    textInfo="Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице 
    хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А..."
  />
   )
   }  
        
      </div>
    

      <UlListComponent/>
    </section>
    <Footer/>
    </>
  );
}
export default PageNewsList;
