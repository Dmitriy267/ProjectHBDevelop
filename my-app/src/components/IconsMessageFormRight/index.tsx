import React from "react";
import styles from './IconsMessageFormRight.module.scss'
import inst from '../../image/contacts/ant-design_instagram-outlined.svg'
import vk from '../../image/contacts/ant-design_vk-outlined.svg'
import fb from '../../image/contacts/ant-design_fb-outlined.svg'
function IconsMessageFormRight () {
    return(
        <div className={styles.groupright__div}>  
    <img src={inst} alt='Изображение иконки инстаграм'/>
    <img src={vk} alt='Изображение иконки вконтакте'/>
    <img src={fb} alt='Изображение иконки фейсбук'/>
        </div>
    )
}
export default IconsMessageFormRight;