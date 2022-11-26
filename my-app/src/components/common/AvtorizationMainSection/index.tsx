import React from "react";
import styles from './AvtorizationMainSection.module.scss';
const AvtorizationMainSection=({children}:{children:React.ReactNode})=>{
    return (
        <section className={styles.avtorizationMain__section}>
{children}
</section>
    )

}
export {AvtorizationMainSection}