import React, { useEffect, useRef } from 'react'
import styles from './cardSection.module.css'
import { Nunito } from 'next/font/google'



interface TravelAgencyCardProps{
   className?:string,
   imgSrc:string, 
   title:string,
   location:string,
   description:string,
   price:number
   days:number;
   
}

const nunito = Nunito({subsets:['latin']});

const TravelAgencyCard:React.FC<TravelAgencyCardProps> = ({
   className,
   imgSrc,
   title,
   description,
   location,
   days,
   price
}) => {


   const travelAgencyDivRef=useRef<HTMLDivElement>(null);

   useEffect(()=>{
      if (travelAgencyDivRef.current) {
         travelAgencyDivRef.current.style.backgroundImage = `url(${imgSrc})`;
       }
   },[])

   return (
      <div className={`${styles.travelAgencyCard} ${className} ${nunito.className}`} ref={travelAgencyDivRef}>
         <div className={styles.infoContainer}>
            <h3>
               {title}
            </h3>
            <h3>
               ${price}
            </h3>
            <h4>
               {location}
            </h4>
            <h4>
               {days} days 
            </h4>
         </div>
      </div>
   )
}

export default TravelAgencyCard