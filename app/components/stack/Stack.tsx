'use client'

import useNavbarStore from "@/app/stores/NavbarStore";
import useStackStore from "@/app/stores/StackStore";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import HorizontalWrapper from "./HorizontalWrapper";
import ScrollTrigger from "gsap/ScrollTrigger";

import XButton from "./XButton";
import styles from './stack.module.css';
import ProgressBar from "./ProgressBar";
import FigmaDiv from "./FigmaDiv";
import PhotoshopDiv from "./PhotoshopDiv";
import Image from "next/image";
import useWindowSizeInfos from "@/app/hooks/useWindowResize";
import IllustratorDiv from "./IllustratorDiv";
import MidjourneyDiv from "./MidjourneyDiv";
import ReactAndNextDiv from "./ReactAndNextDiv";

import SomeMoreThings from "./SomeMoreThings";
import LanguagesDiv from "./LanugagesDiv";



const Stack = () => {

   let bodyYPosition:number|undefined;

   const horizontalWrapperRef = useRef<HTMLDivElement>(null);
   const progressBarAndCloseDivRef = useRef<HTMLDivElement>(null);
   const paragraphRef=useRef<HTMLParagraphElement>(null);
   const arrowRef=useRef<SVGSVGElement>(null);
   const { toggleIsVisible } = useNavbarStore();
   const { stackIsOnScreen, paragraphIsAnimated, toggleStackIsOnScreen } = useStackStore();
   const [percentageScrolled,setPercentageScrolled] = useState(0);
    

   const divideInSpans = (text: string) => {
      const words = text.split(' ');
      return words.map((word: string, index: number) => (
         <span key={index} className={`${styles.word}`}>{word} </span>
      ));
    };


   //For the progressBar we need to know how much of the content has been scrolled
   useEffect(() => {
      const updatePercentageScrolled = () => {
         if (horizontalWrapperRef.current) {
            const scrollLeft = horizontalWrapperRef.current.scrollLeft;
            const scrollWidth = horizontalWrapperRef.current.scrollWidth;
            let currentPercentageScrolled = (scrollLeft / (scrollWidth - window.innerWidth));
            setPercentageScrolled(currentPercentageScrolled);
         };
      }
      if (horizontalWrapperRef.current) {
         horizontalWrapperRef.current.addEventListener('scroll', updatePercentageScrolled);
      }
      return () => {
         if (horizontalWrapperRef.current) {
            horizontalWrapperRef.current.removeEventListener('scroll', updatePercentageScrolled);
         }
      };
   }, []);


   //logic for the left and right swipes
   useEffect(() => {
     
      bodyYPosition = document?.body.getBoundingClientRect().y*(-1);
      if (stackIsOnScreen) {
         const tl = gsap.timeline();

         //This piece of code handles the left swipe of the stack section
         tl.to(horizontalWrapperRef.current,{
            top:bodyYPosition,
            duration:0,
         }).to(horizontalWrapperRef.current, {
            onStart:()=>{
               document.documentElement.style.overflowY='hidden';
               document.body.style.overflowY='hidden';
               horizontalWrapperRef.current && (horizontalWrapperRef.current.style.overflow = 'hidden');
            },
            left: '0%',
            duration: 1,
            ease: 'power2.inOut',
            onComplete:()=>{
               progressBarAndCloseDivRef.current && (progressBarAndCloseDivRef.current.style.position='fixed')
               horizontalWrapperRef.current && (horizontalWrapperRef.current.style.overflowX = 'scroll');
            }
         })

      //This piece of code handles the right swipe of the stack section
      } else {
         gsap.to(horizontalWrapperRef.current, {
            onStart:()=>{
               document.body.style.overflowY='hidden';
               horizontalWrapperRef.current && (horizontalWrapperRef.current.style.overflow = 'hidden');
               progressBarAndCloseDivRef.current && (progressBarAndCloseDivRef.current.style.position='absolute');
            },
            boxShadow:'none',
            left: '100%',
            duration: 1,
            ease: 'power2.inOut',
            onComplete:()=>{
               document.documentElement.style.overflowY='auto';
               document.body.style.overflowY='auto';
               horizontalWrapperRef.current && (horizontalWrapperRef.current.style.overflowX = 'scroll');}
         });
      }
   }, [stackIsOnScreen]);



   //This animates every word of the paragraph
   useEffect(() => {
      if (paragraphIsAnimated) {
         const tl = gsap.timeline();
         if (paragraphRef.current) {
            const spanElements = paragraphRef.current.querySelectorAll(`.${styles.word}`);
            tl.to(spanElements, {
               delay:1,
               stagger: 0.05,
               top:0,
               duration: 0.4,
               ease:'expo.out'
            }).to(spanElements,{
               opacity: 1,
               duration: 1.2,
               ease:'power1.out',
               stagger: 0.06,
            },'<').to(arrowRef.current,{
               top:0,
               rotate:'-720',
               ease:'power2.out',
               opacity:0.6,
               duration:1.3,
               onComplete:()=>{
                  gsap.to(`.${styles.scrollRightSpan}`,{
                     opacity:1,
                  })
               }
            },'<+=1.5');
         }
      }
   }, [paragraphIsAnimated]);

  
   const handleClick = () => {
      toggleStackIsOnScreen();
      toggleIsVisible();
   };

   return (  
      <HorizontalWrapper ref={horizontalWrapperRef}>
         <div className={`${styles.introDiv} ${styles.stackDiv}`}>
      
            <p className={`${styles.generalP} ${styles.introP}`} ref={paragraphRef}>
               {divideInSpans("This is a somewhat detailed list of all the tech I've gained experience with in the last years. It covers the main tools I use from the design stage to the front-end / back-end development.")}
            </p>
            <svg ref={arrowRef} width="51" height="46" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
               <defs>
                  <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="50%" stopColor="white" />
                     <stop offset="100%" stopColor="#b6b6b6" />
                  </linearGradient>
               </defs>
            
               <path fill="url(#myGradient)" d="M3 20C1.34315 20 1.44847e-07 21.3431 0 23C-1.44846e-07 24.6569 1.34315 26 3 26L3 20ZM50.1213 25.1213C51.2929 23.9498 51.2929 22.0503 50.1213 20.8787L31.0294 1.7868C29.8579 0.615226 27.9584 0.615226 26.7868 1.7868C25.6152 2.95837 25.6152 4.85787 26.7868 6.02944L43.7574 23L26.7868 39.9706C25.6152 41.1421 25.6152 43.0416 26.7868 44.2132C27.9584 45.3848 29.8579 45.3848 31.0294 44.2132L50.1213 25.1213ZM3 26L48 26L48 20L3 20L3 26Z" />
               
            </svg>
            <span className={styles.scrollRightSpan} >Please proceed sideways</span>

         </div>
         <FigmaDiv/>  
         <PhotoshopDiv/>
         <IllustratorDiv/>  
         <MidjourneyDiv/>
         <ReactAndNextDiv/>
         <LanguagesDiv/>
         
         <SomeMoreThings/>

         <div className={styles.progressBarAndCloseDiv} ref={progressBarAndCloseDivRef}>
            <ProgressBar percentageScrolled={percentageScrolled}/>
            <XButton onClick={handleClick} />
         </div>
      </HorizontalWrapper>
    
   );
};
 
export default Stack;