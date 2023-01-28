import React from "react";
import styles from './PlaceholderRow1Div.module.scss';
import cityPlaceholder from '../../../image/cardsGold/pin.svg';

const PlaceholderRow1Div=({children}:{children:React.ReactNode})=>{
    return (
      
           <div className={styles.row1__div}>
            <img src={cityPlaceholder} alt='Местонахождение на карте'/>
                {children}
        </div>
     
    )
}
export {PlaceholderRow1Div}