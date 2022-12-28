import React  from "react";
import {CardDivRight} from '../common/CardDivRight';
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
     <img src={imgSrc} alt={altTitle} />
      <p className="card-title__p_center">{title}</p>
      <p className="card-text-info__p">{description}</p>
      <CardDivBottom>
        <CardDivLeft textDataCard="14 Января 2008"/>
        <CardDivRight ReadText="Читать" />
      </CardDivBottom>
      </CardDivCommon>
</>
    )
}
export default ArticleComponent1;