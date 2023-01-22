import React from "react";
import styles from './InfoBlockCards.module.scss';
const InfoBlockCards=({children}:{children:React.ReactNode})=><div className={styles.infoBlock__div}>{children}</div>

export {InfoBlockCards};