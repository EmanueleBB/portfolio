import React from 'react'
import styles from './CardSection.module.css'

interface EcommerceCardProps{
   className:string,
   topLabel:string,
   imgSrc:string,
   title:string,
   stars:number,
   price:number,   
}



const EcommerceCard:React.FC<EcommerceCardProps> = ({
   className,
   topLabel,
   imgSrc,
   title,
   stars,
   price
}) => {
   return (
      <div className={`${styles.ecommerceCardDiv} ${className}`}>
         {topLabel}
         {title}
         ${price}
      </div>
   )
}

export default EcommerceCard