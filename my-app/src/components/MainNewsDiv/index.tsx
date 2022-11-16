import React from "react";
import home from "../../image/home.svg";
import circle from "../../image/circle.svg";
import "./index.scss";
interface MainNewsDivProps {
  altImageCircle: string;
  altImageHome: string;
  rubricTitleP: string;
  rubricTextP: string;
}
function MainNewsDiv({
  altImageHome,
  altImageCircle,
  rubricTitleP,
  rubricTextP
}: MainNewsDivProps) {
  return (
    <div className="main-news__div">
      <img src={home} alt={altImageHome} />
      <p className="rubric-text__p">{rubricTextP}</p>
      <img src={circle} alt={altImageCircle} />
      <p className="rubric-title__p">{rubricTitleP}</p>
    </div>
  );
}
export default MainNewsDiv;
