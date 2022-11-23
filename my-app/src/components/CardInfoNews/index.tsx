import React from "react";
import "./index.scss";
import room from "../../image/room.png";
import {Link} from 'react-router-dom';
interface CardInfoNewsProps {
  textTitle: string;
  textInfo: string;
  textDataCard: string;
  ReadText: string;
  altDescript:string;
}
function CardInfoNews({
  altDescript,
  textTitle,
  textInfo,
  textDataCard,
  ReadText
}: CardInfoNewsProps) {
  function ClickNewsRead(){
    console.log('переход на страницу с новостью')
  }
  return (
    <div className="card__div_common">
  <img src={room} alt={altDescript} />
      <p className="card-title__p_center">{textTitle}</p>
      <p className="card-text-info__p">{textInfo}</p>
      <div className="card__div_bottom">
        <div className="card__div_left">
          <p>{textDataCard}</p>
        </div>
        <div className="card__div_right">
          <Link to='/Новость'>{ReadText}</Link>
        </div>
      </div>
    </div>
  );
}
export default CardInfoNews;
