import React from 'react'
import styles from './cardSection.module.css'

interface EcommerceCardProps{
   className:string,
   topLabel:string,
   imgSrc:string,
   title:string,
   description:string,
   stars:number,
   price:number,   
}

//className is for the specific different color of every levels of rarity of a weapon.

const EcommerceCard:React.FC<EcommerceCardProps> = ({
   className,
   topLabel,
   imgSrc,
   title,
   description,
   stars,
   price
}) => {
   return (
      <div className={`${styles.ecommerceCard} ${className}`}>
         <div className={styles.cardContent}>
            <h3>
               {topLabel}
            </h3>
            <h2>
               {title}
            </h2>
            <p>
               {description}
            </p>
            <span>
               ${price}
            </span>
         </div>
         
      </div>




   )
}

export default EcommerceCard