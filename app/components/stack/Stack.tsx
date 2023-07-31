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
import useWindowSizeInfos from "@/app/hooks/useWindowSize";
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
   const {windowHeight,windowWidth,maxDimension,maxDimensionValue, minDimensionValue} = useWindowSizeInfos();

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

      const horizontalWrapperRefValue=horizontalWrapperRef.current;

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
               stagger: 0.05,
            },'<');
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
            {/* <Image
               src='/leonardoNotes.png'
               alt='a cool image'
               fill
               style={{objectFit: "cover",opacity: "0.1"}}
            /> */}
            <p className={`${styles.generalP} ${styles.introP}`} ref={paragraphRef}>
               {divideInSpans("This is a somewhat detailed list of all the tech I've gained experience with in the last years. It covers the main tools I use from the design stage to the front-end / back-end development.")}
            </p>
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