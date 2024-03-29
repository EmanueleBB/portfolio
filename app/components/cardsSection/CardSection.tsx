'use client'



import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import CardsCarousel from './CardsCarousel';
import styles from './cardSection.module.css'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'

const CardSection = () => {

   const stockXH3Ref=useRef<HTMLHeadingElement>(null);
   const travelAgencyH3Ref=useRef<HTMLHeadingElement>(null);
   const ecommerceH3Ref=useRef<HTMLHeadingElement>(null);
   const mainParagraphRef=useRef<HTMLParagraphElement>(null);
   const carouselRef=useRef<HTMLDivElement>(null);

   const [activeSection,setActiveSection] = useState(stockXH3Ref);
   const [activeCard,setActiveCard] = useState(0);
   


   
   //Handles the change of colors of the sections;
   useEffect(()=>{

      setActiveCard(0);

      if(activeSection === stockXH3Ref){
         const tl = gsap.timeline();
         tl.to(stockXH3Ref.current,{
            color:'#B7F8FF',
            duration:0.25,
         }).to(mainParagraphRef.current,{
            backgroundImage:'linear-gradient(to bottom, white -30%, #B7F8FF 70% )'
         },'<')
      }else{
         gsap.to(stockXH3Ref.current,{
            clearProps:'color',
            duration:0,
         })
      }

      if(activeSection === travelAgencyH3Ref){
         const tl = gsap.timeline();
         tl.to(travelAgencyH3Ref.current,{
            color:'#C6CDE0',
            duration:0.25,
         }).to(mainParagraphRef.current,{
            backgroundImage:'linear-gradient(to bottom, white -30%,#C6CDE0 70% )'
         },'<')
      }else{
         gsap.to(travelAgencyH3Ref.current,{
            clearProps:'color',
            duration:0,
         })
      }

      if(activeSection === ecommerceH3Ref){
         const tl = gsap.timeline();
         tl.to(ecommerceH3Ref.current,{
            color:'#67FADE',
            duration:0.25,
         }).to(mainParagraphRef.current,{
            backgroundImage:'linear-gradient(to bottom, white -30%,#67FADE 70% )'
         },'<')
      }else{
         gsap.to(ecommerceH3Ref.current,{
            clearProps:'color',
            duration:0,
         })
      }

      
   },[activeSection])


   const handleRightButtonClick = () => {
      
      if (carouselRef.current && activeCard < (carouselRef.current as any).querySelector(`.${styles.cardsContainer}`)?.childNodes.length - 1) {
        setActiveCard(activeCard + 1);
      } else if (carouselRef.current && activeCard === carouselRef.current.childNodes.length - 1) {
        return;
      }
    };
    

   const handleLeftButtonClick = () => {
      if(activeCard > 0){
         setActiveCard(activeCard-1); 
      } 
   }

   return (
      <div className={styles.cardSectionWrapper}>
         <div className={styles.cardsSectionSecondaryWrapper}>
            <p className={styles.cardsMainParagraph} ref={mainParagraphRef}>
               Scrolling Pinterest in search for inspiration has never really been my thing.That would make me a pretty bad Graphic designer. What I like to do though, is experimenting with different design systems for different use cases.
            </p>

            <p className={styles.cardsMainParagraph}>
               Here&apos;s a little showing of the many ways you can design a web card.
            </p>

            <p className={styles.cardsMainParagraph}>
               Let&apos;s say you own...
            </p>

            <div className={styles.titlesContainer}>
               <h3 ref={stockXH3Ref} onClick={()=>setActiveSection(stockXH3Ref)} id='stockx'>
                  The 2028 version of StockX
               </h3>

               <h3 ref={travelAgencyH3Ref} onClick={()=>setActiveSection(travelAgencyH3Ref)} id='agency'>
                  A travel agency that offers unique experiences
               </h3>

               <h3 ref={ecommerceH3Ref} onClick={()=>setActiveSection(ecommerceH3Ref)} id='ecommerce'>
               Dangerous items you want to get rid of via an e-commerce
               </h3>
            </div>
         </div>
         <div style={{position:'relative'}}>

            <CardsCarousel activeSection={activeSection} activeCard={activeCard} ref={carouselRef} setActiveCard={setActiveCard}/>
            <div className={styles.leftAndRightButtonsDiv}>
               <button className={styles.cardsCarouselButton} onClick={handleLeftButtonClick}>
                  <IoIosArrowDropleftCircle/>
               </button>
               <button className={styles.cardsCarouselButton} onClick={handleRightButtonClick}>
                  <IoIosArrowDroprightCircle/>
               </button>
            </div>
         </div>
      </div>
   )
}

export default CardSection