import React, { useEffect, useState } from 'react'
import Button, { ButtonVariants } from '../Button'
import styles from './cardSection.module.css'

interface StockXCardProps{
   
   title?:string,
   subtitle?:string,
   price?:number,   
   soldIn24hrs?:number,
   lastSale?:number,
   isPoster:boolean,
   imgSrc:string,
   className:string,
}

//className is for the specific different color of every levels of rarity of a weapon.

const StockXCard:React.FC<StockXCardProps> = ({
   title,
   subtitle,
   price,
   soldIn24hrs,
   lastSale,
   isPoster,
   imgSrc,
   className

}) => {

   
   return (
   
         !isPoster ? (
            <div className={`${styles.stockXCard} ${className}`}>
         <div className={styles.cardContent}> 
            <h2>
               {title}
            </h2>
            <h4>
               {subtitle}
            </h4>
            <img src={imgSrc} alt="ciao" />
            

   
            <div className={styles.priceAndButtonContainer}>
               <span>
                  ${price}
               </span>
               <button className={styles.stockXCardButton}>
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
         ):(<></>)
      
      
   )
}

export default StockXCard