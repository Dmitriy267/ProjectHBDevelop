import React from "react";
import styles from './PanelNavigationOptions.module.scss';
function PanelNavigationOptions (){
    return(
<div className={styles.options__div}>
    <form>
    <select>
        <option>1 комн.</option>
        <option>2 комн.</option>
        <option>3 комн.</option>
        <option>4 комн.</option>
        <option>5 комн.</option>
    </select>
    <button>Очистить</button>
    <button type='submit'>Показать объекты</button>
    </form>
   
</div>
    )
}

export default PanelNavigationOptions;