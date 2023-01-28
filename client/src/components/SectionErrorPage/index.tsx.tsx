import React from "react";
import styles from './SectionErrorPage.module.scss';
interface SectionErrorPageProps {
    children:React.ReactNode;
} 

const SectionErrorPage=({children}:SectionErrorPageProps)=>{
    return(
<section className={styles.error__section}>{children}</section>
    )
}
export default SectionErrorPage;