import React from "react";
import styles from './EnterMainSection.module.scss';
const EnterMainSection=({children}:{children:React.ReactNode})=>{
    return (
        <section className={styles.enterMain__section}>
{children}
</section>
    )

}
export {EnterMainSection}