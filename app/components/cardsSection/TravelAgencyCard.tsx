import React from 'react'
import styles from './cardSection.module.css'

interface TravelAgencyCardProps{
   className?:string,
   imgSrc:string,
   title:string,
   description:string,
   price:number
}


const TravelAgencyCard:React.FC<TravelAgencyCardProps> = ({
   className,
   imgSrc,
   title,
   description,
   price
}) => {
   return (
      <div className={`${styles.travelAgencyCard} ${className}`}>

      </div>
   )
}

export default TravelAgencyCard