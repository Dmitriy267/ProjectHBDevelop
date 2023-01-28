import React from "react";
import styles from './UlListComponent.module.scss';
const UlListComponent=()=>{
return (
    <ul className={styles.numberPage__ul}>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">...</a></li>
        <li><a href="#">11</a></li>
      </ul>
)
}

export {UlListComponent};