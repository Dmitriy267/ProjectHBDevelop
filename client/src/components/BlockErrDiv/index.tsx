import React, { Children } from "react";
import styles from './BlockErrDiv.module.scss';
interface BlockErrDivProps{
    titleErr:string;
    descripErr:string;
    children: React.ReactNode;
}
function BlockErrDiv({titleErr, descripErr, children}:BlockErrDivProps){
    return(
<div className={styles.errDiv}>
    
                <p className={styles.title__p}>{titleErr}</p>
                <p className={styles.descrip__p}>{descripErr}</p>
{children}
            </div>
          
    )
}
export default BlockErrDiv;