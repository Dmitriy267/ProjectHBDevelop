import React from "react";
import {CardDivRight} from '../common/CardDivRight';
import {CardDivLeft} from '../common/CardDivLeft';
import {CardDivBottom} from '../common/CardDivBottom';
import {CardDivCommon} from '../common/CardDivCommon';
import  bathhouse from "../../image/imageCards/ban.jpg";

interface  BathhouseProps{
    textTitle: string;
    textInfo: string;
    altDescript:string;
  }
const Bathhouse=({
    altDescript,
    textTitle,
    textInfo,
  }: BathhouseProps)=>{
    return(
        <CardDivCommon>
        <img src={bathhouse} alt={altDescript} />
         <p className="card-title__p_center">{textTitle}</p>
         <p className="card-text-info__p">{textInfo}</p>
         <CardDivBottom>
           <CardDivLeft textDataCard="14 Января 2008"/>
           <CardDivRight ReadText="Читать" />
         </CardDivBottom>
         </CardDivCommon>
    )
}
export default Bathhouse