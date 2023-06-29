'use client'



import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react'
import CardsCarousel from './CardsCarousel';
import styles from './cardSection.module.css'

const CardSection = () => {



   const sushiH3Ref=useRef<HTMLHeadingElement>(null);
   const travelAgencyH3Ref=useRef<HTMLHeadingElement>(null);
   const ecommerceH3Ref=useRef<HTMLHeadingElement>(null);
   const mainParagraphRef=useRef<HTMLParagraphElement>(null);

   const [isActive,setIsActive] = useState(sushiH3Ref);

   useEffect(()=>{
      if(isActive === sushiH3Ref){
         const tl = gsap.timeline();
         tl.to(sushiH3Ref.current,{
            color:'#FFC895',
            duration:0.25,
         }).to(mainParagraphRef.current,{
            backgroundImage:'linear-gradient(to bottom, white 0%,#FFC895 100% )'
         },'<')
      }else{
         gsap.to(sushiH3Ref.current,{
            clearProps:'color',
            duration:0,
         })
      }

      if(isActive === travelAgencyH3Ref){
         const tl = gsap.timeline();
         tl.to(travelAgencyH3Ref.current,{
            color:'#C6CDE0',
            duration:0.25,
         }).to(mainParagraphRef.current,{
            backgroundImage:'linear-gradient(to bottom, white 0%,#C6CDE0 100% )'
         },'<')
      }else{
         gsap.to(travelAgencyH3Ref.current,{
            clearProps:'color',
            duration:0,
         })
      }

      if(isActive === ecommerceH3Ref){
         const tl = gsap.timeline();
         tl.to(ecommerceH3Ref.current,{
            color:'#67FADE',
            duration:0.25,
         }).to(mainParagraphRef.current,{
            backgroundImage:'linear-gradient(to bottom, white 0%,#67FADE 100% )'
         },'<')
      }else{
         gsap.to(ecommerceH3Ref.current,{
            clearProps:'color',
            duration:0,
         })
      }
   },[isActive])

   return (
      <div className={styles.cardSectionWrapper}>
         <div className={styles.cardsSectionSecondaryWrapper}>
            <p className={styles.cardsMainParagraph} ref={mainParagraphRef}>
               Scrolling Pinterest in search for inspiration has never really been my thing.That would make me a pretty bad Graphic designer. What I like to do though, is experimenting with different design systems for different use cases.
            </p>

            <p className={styles.cardsMainParagraph}>
               Here's a small showing of the endless ways you can design a web card.
            </p>

            <p className={styles.cardsMainParagraph}>
               Let's say you own...
            </p>

            <div className={styles.titlesContainer}>
               <h3 ref={sushiH3Ref} onClick={()=>setIsActive(sushiH3Ref)} id='sushi'>
                  A sushi restaurant
               </h3>

               <h3 ref={travelAgencyH3Ref} onClick={()=>setIsActive(travelAgencyH3Ref)} id='agency'>
                  A travel agency that offers unique experiences
               </h3>

               <h3 ref={ecommerceH3Ref} onClick={()=>setIsActive(ecommerceH3Ref)} id='ecommerce'>
               Dangerous items you want to get rid of via an e-commerce
               </h3>
               
            </div>
            <CardsCarousel active={isActive}/>
         </div>
      </div>
   )
}

export default CardSection