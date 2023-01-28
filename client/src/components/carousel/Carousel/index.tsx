import React, { Children, cloneElement, useEffect, useState, } from "react";
import styles from './Carousel.module.scss';
import arrowLeft from '../../../image/cardsGold/bx_bx-chevron-down-left.svg';
import  arrowRight from '../../../image/cardsGold/bx_bx-chevron-down-right.svg';


const PAGE_WIDTH:string='537.84px';

const  Carousel =(props: { children: any; })=>{
    const {children}=props;
    const [pages, setPages]=useState([]);
    const [offset, setOffset]=useState<string|number>('0px');
    const stylesTransform={transform:`translateX(${offset}px)` };
    const handleArrowLeftClick=()=>{
        setOffset((currentOffSet:string|number)=>{
            const newOffset=parseInt(`${currentOffSet}`)+parseInt(`${PAGE_WIDTH}`);
            console.log(newOffset);
            return Math.min(newOffset,0);
        
    })

    }
    const handleArrowRightClick=()=>{
        console.log('handleArrowRightClick');
        setOffset((currentOffSet:any)=>{
            const newOffset=parseInt(`${currentOffSet}`)-parseInt(`${PAGE_WIDTH}`);
            const maxOffset=-(parseInt(`${PAGE_WIDTH}`)*(pages.length-1));
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
                        minWidth: `${PAGE_WIDTH}`,
                        maxWidth: `${PAGE_WIDTH}`,
                    },
                }

                )
            })
        )
        
    }, [])

    return(
        <div className={styles.main__div}>
            <div className={styles.arrow__div}>
             <button className={styles.left__button} onClick={handleArrowLeftClick}><img src={arrowLeft} alt='Стрелка влево'/></button>
             <button className={styles.right__button} onClick={handleArrowRightClick}><img src={arrowRight} alt='Стрелка вправо'/></button>
             </div> 
<div className={styles.window}>

<div className={styles.pagesContainer__div} style={stylesTransform}>    
    {pages}
</div>

</div>

</div>
    )

}
export {Carousel};