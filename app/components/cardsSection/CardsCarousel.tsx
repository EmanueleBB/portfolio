import React, { RefObject, useEffect, useState } from 'react'
import styles from './cardSection.module.css'
import EcommerceCard from './EcommerceCard';

interface CardsCarouselProps {
   active:RefObject<HTMLHeadingElement>;
}

const CardsCarousel:React.FC<CardsCarouselProps> = (
   {active}
   ) => {


   const [bodyContent, setBodyContent] = useState<JSX.Element | null>(null);

   useEffect(() => {
      if (active.current?.id === 'ecommerce') {

         setBodyContent(
            <EcommerceCard
               className={styles.rareCard}
               topLabel='Legendary weapon'
               imgSrc=''
               title='RAY GUN'
               stars={4.6}
               price={289.99}

            />
         );
      } else {
         setBodyContent(null);
      }
   }, [active]);

   

   return (
      <div className={styles.carouselWrapper}>
         {bodyContent}
      </div>
   )
}

export default CardsCarousel