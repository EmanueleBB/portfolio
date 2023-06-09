import gsap from 'gsap';
import React, { forwardRef, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './cardSection.module.css'
import EcommerceCard from './EcommerceCard';
import TravelAgencyCard from './TravelAgencyCard';


interface CardsCarouselProps {
   activeSection: RefObject<HTMLHeadingElement>;
   activeCard: number;
}

const CardsCarousel: React.ForwardRefRenderFunction<HTMLDivElement, CardsCarouselProps> = (
   {
      activeSection,
      activeCard,
   },
   ref
) => {

   const [bodyContent, setBodyContent] = useState<JSX.Element | null>(null);
   const cardsContainerRef = useRef<HTMLDivElement>(null);
   const [carouselPadding,setCarouselPadding]=useState(0);
   const [carouselGap,setCarouselGap]=useState(0);
   const [carouselTransform,setCarouselTransfrom]=useState(0);
   

   useEffect(() => {
      console.log({ activeSection });
      console.log({ activeCard });
   }, [activeSection, activeCard])


   //definitions of the various cards
   useEffect(() => {

      if (activeSection.current?.id === 'ecommerce') {
         const cards = [
            {
               className: styles.legendaryCard,
               topLabel: 'Legendary weapon',
               imgSrc: '/rayGun.png',
               title: 'RAY GUN',
               description: 'Great at killing dead beings that suddently decided to go for a run',
               stars: 4.6,
               price: 289.99
            },
            {
               className: styles.rareCard,
               topLabel: 'Rare item',
               imgSrc: '/blueShell.png',
               title: 'BLUE SHELL',
               description: 'If someone you despise is annoyingly good at karting, make sure to buy some of these ;)',
               stars: 2.4,
               price: 89.99
            },
            {
               className: styles.mythicalCard,
               topLabel: 'Mythical weapon',
               imgSrc: '/mestolo.png',
               title: 'MESTOLO',
               description: 'Weapon of mass destruction. Handle carefully. PS: if you don’t know why this is here, let’s just say that you are a lucky person.',
               stars: 4.6,
               price: 899.99
            },
         ];

      
         setBodyContent(
            <>
               {cards.map((card, index) => (
                  <EcommerceCard
                     key={index}
                     className={`${card.className} ${index === activeCard ? styles.activeCard : styles.inactiveCard}`}
                     topLabel={card.topLabel}
                     imgSrc={card.imgSrc}
                     title={card.title}
                     description={card.description}
                     stars={card.stars}
                     price={card.price}
                     
                  />
               ))}
            </>
         );

      } else if(activeSection.current?.id === 'agency') {

         const cards = [

            {
               className:'',
               location: 'Turkey, Europe',
               imgSrc: '/cappadocia.jpg',
               title: 'Cappadocia',
               description: 'Great at killing dead beings that suddently decided to go for a run',
               days: 5,
               price: 289.99
            },
            {
               className:'',
               location: 'Sweden, Europe',
               imgSrc: '/lapland.jpg',
               title: 'Lapland',
               description: 'If someone you despise is annoyingly good at karting, make sure to buy some of these ;)',
               days: 6,
               price: 89.99
            },
            {
               className:'',
               location: 'Indiana, USA',
               imgSrc: '/hawkins.jpg',
               title: 'Hawkins',
               description: 'If someone you despise is annoyingly good at karting, make sure to buy some of these ;)',
               days: 7,
               price: 89.99
            },
            {
               className:'',
               location: 'Indiana, USA',
               imgSrc: '/namek.jpg',
               title: 'Namek',
               description: 'If someone you despise is annoyingly good at karting, make sure to buy some of these ;)',
               days: 7,
               price: 89.99
            }
         ]
         
         setBodyContent(
         <>
            {cards.map((card, index) => {
               const { imgSrc, title, location, description, price, days } = card;
               return(
                  <TravelAgencyCard
                     key={index}
                     className={`${index === activeCard ? styles.activeCard : styles.inactiveCard}`}
                     imgSrc={imgSrc}
                     title={title}
                     location={location}
                     description={description}
                     price={price}
                     days={days}
                  />
               )
            })}
         </>);
      }
   }, [activeSection, activeCard]);

   


   useLayoutEffect(()=>{
      
      let currentCardDisplayed;

      const computedStyle = getComputedStyle(document.documentElement);
      const gapValue = parseFloat(computedStyle.getPropertyValue('--carousel-gap'));
      setCarouselGap(gapValue);


      if (activeSection.current && activeSection.current.id==='ecommerce'){

         currentCardDisplayed = document.querySelector(`.${styles.ecommerceCard}`);

      }else if(activeSection.current && activeSection.current.id==='agency'){
         currentCardDisplayed = document.querySelector(`.${styles.travelAgencyCard}`);
      }

   
      if (currentCardDisplayed) {

         const cardWidth = currentCardDisplayed.clientWidth;
         console.log({currentCardDisplayed})


         setCarouselPadding(window.innerWidth / 2 - cardWidth / 2);

         setCarouselTransfrom(cardWidth + carouselGap*0.01*window.innerWidth);

         gsap.to(cardsContainerRef.current,{
            translateX:-activeCard*carouselTransform,
            ease:'power1.out'
         })
         
         console.log(activeCard*carouselTransform);
      }

   },[bodyContent,activeCard,activeSection])

   return (
      <div className={styles.carouselWrapper}
         ref={ref} 
         style={{paddingLeft:`${carouselPadding}px`}}
         >
         <div className={styles.cardsContainer} ref={cardsContainerRef}>
            {bodyContent}
         </div>
      </div>
   )
}

export default forwardRef(CardsCarousel);
