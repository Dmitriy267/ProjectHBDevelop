import React from "react";
import SectionErrorPage from '../SectionErrorPage/index.tsx';
import BlockErrDiv from '../BlockErrDiv';
import  {BlockLinkMainPage} from '../common/BlockLinkMainPage/index.tsx';
import NumberErr from '../NumberErr';
import styles from '../SectionErrorPage/SectionErrorPage.module.scss';
import ellipsis from '../../image/Group 654.svg';
function NotfoundPage() {
    return (
        <SectionErrorPage>
            <BlockErrDiv titleErr='Ошибка 404' descripErr='Возможно, у вас опечатка в адресе страницы, или её просто не существует'>
            <BlockLinkMainPage/>
            </BlockErrDiv>
            <NumberErr/>
            <img  src={ellipsis} alt="Векторное изображение многоточий" className={styles.ellips1}/>
            <img  src={ellipsis} alt="Векторное изображение многоточий" className={styles.ellips2}/>
        
        </SectionErrorPage>

    )
}
export default NotfoundPage