import React from "react";
import room from "../../image/room1.png";
import styles from './CardInfoNews.module.scss';
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
     <img src={room} alt={altDescript} className={styles.room__img}/>
      <p className={styles.center__p}>{textTitle}</p>
      <p className={styles.info__p}>{textInfo}</p>
      <CardDivBottom>
        <CardDivLeft textDataCard="14 Января 2008"/>
        <CardDivRight ReadText="Читать" />
      </CardDivBottom>
      </CardDivCommon>
  
  );
}
export default CardInfoNews;
