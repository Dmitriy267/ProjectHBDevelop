import React from "react";
import styles from './LinkCardsInfoAdverst.module.scss';

const LinkCardsInfoAdverst=({children,textLink }:{children?:React.ReactNode, textLink:string})=>{
    return(
        <div className={styles.link__div}>
            <p><a href='#'>{textLink}</a></p>
            {children}
        </div>
    )
}
export {LinkCardsInfoAdverst}