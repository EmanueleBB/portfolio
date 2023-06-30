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
            <>
               <EcommerceCard
                  className={styles.legendaryCard}
                  topLabel='Legendary weapon'
                  imgSrc='/rayGun.png'
                  title='RAY GUN'
                  description='Great at killing dead beings that suddently decided to go for a run'
                  stars={4.6}
                  price={289.99}
               />
               <EcommerceCard
                  className={styles.rareCard}
                  topLabel='Rare item'
                  imgSrc=''
                  title='BLUE SHELL'
                  description='If someone you despise is annoyingly good at karting, make sure to buy some of these ;)'
                  stars={3.8}
                  price={89.99}
               />
               <EcommerceCard
                  className={styles.mythicalCard}
                  topLabel='Mythical weapon'
                  imgSrc=''
                  title='MESTOLO'
                  description='Does it really need a caption? Weapon of mass destruction. Handle carefully.
                  PS: if you don’t know why this is here, let’s just say that you are a lucky person.'
                  stars={4.6}
                  price={899.99}
               />
            </>
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