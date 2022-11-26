import React from "react";
import { Outlet } from "react-router-dom";
import styles from './RouteMainAvtorization.module.scss';
const  RouteMainAvtorization =()=>{
    return (
<section className={styles.avtorizationMain__section}>
<Outlet/>
</section>

    )
}

export {RouteMainAvtorization}