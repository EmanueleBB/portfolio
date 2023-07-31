import Image from 'next/image'
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
                  <Image src={imgSrc} alt='Item image' fill/>
                  <h2>
                     {title}
                  </h2>
                  <div className={styles.bottomContent}>
                     <h5>
                        Lowest ask
                     </h5>
                     <h3>
                        ${price}
                     </h3>
                     <p>
                        {soldIn24hrs} sold in the last 24 hours
                     </p>
                  </div>
                </div>
            </div>
         ):(<div className={`${styles.stockXCard} ${className}`}>
            <Image src={imgSrc} alt='Poster image' fill/>
            <button>
               SHOP COLLECTION
            </button>
         </div>)
      
      
   )
}

export default StockXCard