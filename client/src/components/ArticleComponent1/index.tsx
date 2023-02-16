import React  from "react";
import styles from './ArticleComponent1.module.scss';
import {CardRead} from '../common/CardRead';
import {CardDivLeft} from '../common/CardDivLeft';
import {CardDivBottom} from '../common/CardDivBottom';
import {CardDivCommon} from '../common/CardDivCommon';
interface ArticleComponent1Props{
    imgSrc:string;
    title:string;
    description:string;
    altTitle:string;
}
const ArticleComponent1 =({imgSrc, title, description, altTitle}:ArticleComponent1Props)=>{
    return(
        <>
  <CardDivCommon>
     <img src={imgSrc} alt={altTitle} className={styles.main__img}/>
      <p className={styles.title__p}>{title}</p>
      <p className={styles.info__p}>{description}</p>
      <CardDivBottom>
        <CardDivLeft textDataCard="14 Января 2008"/>
        <CardRead ReadText="Читать"/>
      </CardDivBottom>
      </CardDivCommon>
</>
    )
}
export default ArticleComponent1;