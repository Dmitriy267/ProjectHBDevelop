import React from "react";
import styles from './User.module.scss';

function User ({name}:{name:string}){
    return(
        <>
        <p className={styles.user__p}>{name}</p>
        </>
    )
}
export default User;