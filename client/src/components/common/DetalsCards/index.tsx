import React from 'react';
import styles from './DetalsCards.module.scss';
const DetalsCards =({children}:{children:React.ReactNode})=>{
    return (
<div className={styles.detalsWrapper__div}>
    {children}
</div>
    )
}
export {DetalsCards}