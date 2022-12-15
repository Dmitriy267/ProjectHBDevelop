import React from "react";
import home from "../../image/home.svg";
import circle from "../../image/circle.svg";
import styles from './MainNewsDiv.module.scss';
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
    <div className={styles.news__div}>
      <img src={home} alt={styles.altImageHome} />
      <p className={styles.rubrictext__p}>{rubricTextP}</p>
      <img src={circle} alt={altImageCircle}  className={styles.circle}/>
      <p className={styles.rubrictitle__p}>{rubricTitleP}</p>
    </div>
  );
}
export default MainNewsDiv;
