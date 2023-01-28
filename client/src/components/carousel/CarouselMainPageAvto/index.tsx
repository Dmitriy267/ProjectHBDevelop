import React, {useEffect, useState, Children, cloneElement} from "react";
import styles from './CarouselMainPageAvto.module.scss';
import arrowRight from '../../../image/mainPage/Sliders/Group 652.svg';
const MAIN_PAGE_WIDTH:string='516px';
const CarouselMainPageAvto=({children}:{children: any})=>{
   
    const [pages, setPages]=useState([]);
    const [offset, setOffset]=useState<string|number>('0px');
    const stylesTransform={transform:`translateX(${offset}px)` };
    const handleArrowRightClick=()=>{
        console.log('handleArrowRightClick');
        setOffset((currentOffSet:string|number)=>{
            const newOffset=parseInt(`${currentOffSet}`)-parseInt(`${MAIN_PAGE_WIDTH}`);
            const maxOffset=-(parseInt(`${MAIN_PAGE_WIDTH}`)*(pages.length-1));
            console.log(newOffset, maxOffset);
            return Math.max(newOffset, maxOffset);
        
    })
}
    useEffect(()=>{
        return setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        maxWidth: `${MAIN_PAGE_WIDTH}`,
                       
                    },
                }

                )
            
            })
        )

    }, [])
    return(
        <div className={styles.main__div}>
        <div className={styles.arrow__div}>
         <button className={styles.right__button} onClick={handleArrowRightClick}><img src={arrowRight} alt='Стрелка вправо'/></button>
       </div>
<div className={styles.window}>
<div className={styles.text__div}>
            <p>EСЛИ СРОЧНО НУЖНА МАШИНА</p>
            <p>Авто на прокат</p>

           </div>
<div className={styles.pagesContainer__div} style={stylesTransform}>    
{pages}
</div>

</div>

</div>
    )

}
export {CarouselMainPageAvto}