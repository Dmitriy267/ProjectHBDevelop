import React from "react";
import "./index.scss";
import room from "../../image/room.png";

import {CardDivRight} from '../common/CardDivRight';
import {CardDivLeft} from '../common/CardDivLeft';
import {CardDivBottom} from '../common/CardDivBottom';
import {CardDivCommon} from '../common/CardDivCommon';

interface CardInfoNewsProps {
  textTitle: string;
  textInfo: string;
  altDescript:string;
}
function CardInfoNews({
  altDescript,
  textTitle,
  textInfo,
}: CardInfoNewsProps) {

  return (
    <CardDivCommon>
     <img src={room} alt={altDescript} />
      <p className="card-title__p_center">{textTitle}</p>
      <p className="card-text-info__p">{textInfo}</p>
      <CardDivBottom>
        <CardDivLeft textDataCard="14 Января 2008"/>
        <CardDivRight ReadText="Читать" />
      </CardDivBottom>
      </CardDivCommon>
  
  );
}
export default CardInfoNews;
