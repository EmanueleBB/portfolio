import React, { useEffect, useState } from 'react'
import Button, { ButtonVariants } from '../Button'
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

   const [ratingContent, setRatingContent] = useState<JSX.Element | null>(null);

   useEffect(()=>{
      if(stars <5 && stars>=4.25){
         setRatingContent(
            <div>
               <svg width="90" height="14" viewBox="0 0 90 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 11.2052L10.3949 13.2585C11.0166 13.6348 11.7774 13.0785 11.6138 12.375L10.7139 8.51383L13.7162 5.91244C14.2643 5.43797 13.9698 4.53812 13.2499 4.48086L9.29871 4.14546L7.7526 0.496964C7.47447 -0.165655 6.52553 -0.165655 6.2474 0.496964L4.70129 4.13728L0.750115 4.47268C0.030233 4.52994 -0.264264 5.42979 0.283828 5.90426L3.28606 8.50565L2.38621 12.3668C2.2226 13.0704 2.98339 13.6266 3.6051 13.2503L7 11.2052Z" fill="#4EFFF4"/>
                  <path d="M26 11.2052L29.3949 13.2585C30.0166 13.6348 30.7774 13.0785 30.6138 12.375L29.7139 8.51383L32.7162 5.91244C33.2643 5.43797 32.9698 4.53812 32.2499 4.48086L28.2987 4.14546L26.7526 0.496964C26.4745 -0.165655 25.5255 -0.165655 25.2474 0.496964L23.7013 4.13728L19.7501 4.47268C19.0302 4.52994 18.7357 5.42979 19.2838 5.90426L22.2861 8.50565L21.3862 12.3668C21.2226 13.0704 21.9834 13.6266 22.6051 13.2503L26 11.2052Z" fill="#4EFFF4"/>
                  <path d="M45 11.2052L48.3949 13.2585C49.0166 13.6348 49.7774 13.0785 49.6138 12.375L48.7139 8.51383L51.7162 5.91244C52.2643 5.43797 51.9698 4.53812 51.2499 4.48086L47.2987 4.14546L45.7526 0.496964C45.4745 -0.165655 44.5255 -0.165655 44.2474 0.496964L42.7013 4.13728L38.7501 4.47268C38.0302 4.52994 37.7357 5.42979 38.2838 5.90426L41.2861 8.50565L40.3862 12.3668C40.2226 13.0704 40.9834 13.6266 41.6051 13.2503L45 11.2052Z" fill="#4EFFF4"/>
                  <path d="M64 11.2052L67.3949 13.2585C68.0166 13.6348 68.7774 13.0785 68.6138 12.375L67.7139 8.51383L70.7162 5.91244C71.2643 5.43797 70.9698 4.53812 70.2499 4.48086L66.2987 4.14546L64.7526 0.496964C64.4745 -0.165655 63.5255 -0.165655 63.2474 0.496964L61.7013 4.13728L57.7501 4.47268C57.0302 4.52994 56.7357 5.42979 57.2838 5.90426L60.2861 8.50565L59.3862 12.3668C59.2226 13.0704 59.9834 13.6266 60.6051 13.2503L64 11.2052Z" fill="#4EFFF4"/>
                  <path d="M89.2558 4.48009L85.2971 4.13657L83.7513 0.496879C83.4732 -0.165626 82.5244 -0.165626 82.2463 0.496879L80.7005 4.14475L76.75 4.48009C76.0302 4.53734 75.7358 5.43704 76.2838 5.91143L79.2855 8.51238L78.3858 12.3729C78.2222 13.0763 78.9829 13.6325 79.6045 13.2562L82.9988 11.2115L86.3931 13.2644C87.0147 13.6407 87.7754 13.0845 87.6118 12.3811L86.7121 8.51238L89.7138 5.91143C90.2618 5.43704 89.9756 4.53734 89.2558 4.48009ZM82.9988 9.68198V2.07544L84.3974 5.37979L87.9799 5.69059L85.2644 8.04617L86.0823 11.5468L82.9988 9.68198Z" fill="#4EFFF4"/>
               </svg>
            </div>
         )
      }
   },[])

   return (
      <div className={`${styles.ecommerceCard} ${className}`}>
         <div className={styles.cardContent}>
            <h3>
               {topLabel}
            </h3>
            <h2>
               {title}
            </h2>
            <img src={imgSrc} alt="ciao" />
            <p>
               {description}
            </p>

            <div className={styles.ratingDiv}>
               {ratingContent}
               <span>
                  {stars}
               </span>
            </div>

            <div className={styles.priceAndButtonContainer}>
               <span>
                  ${price}
               </span>
               <button className={styles.ecommerceCardButton}>
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
   )
}

export default EcommerceCard