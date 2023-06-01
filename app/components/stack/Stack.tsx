'use client'

import useNavbarStore from "@/app/stores/NavbarStore";
import useStackStore from "@/app/stores/StackStore";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import HorizontalWrapper from "./HorizontalWrapper";

import XButton from "./XButton";
import styles from './stack.module.css';
import ProgressBar from "./ProgressBar";
import FigmaDiv from "./FigmaDiv";



const Stack = () => {

   let bodyYPosition:number|undefined;

   const horizontalWrapperRef = useRef<HTMLDivElement>(null);
   const progressBarAndCloseDivRef = useRef<HTMLDivElement>(null);
   const [percentageScrolled,setPercentageScrolled] = useState(0)
   
   const { toggleIsVisible } = useNavbarStore();
   const { stackIsOnScreen, toggleStackIsOnScreen } = useStackStore();


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

 
   const handleClick = () => {
     toggleStackIsOnScreen();
     toggleIsVisible();
   };

   return (  
      <HorizontalWrapper ref={horizontalWrapperRef}>
         <div>
            This is a somewhat detailed list of all the tech I've gained experience with in the last years.
         </div>
         <FigmaDiv/>  
         <FigmaDiv/>

         <div className={styles.progressBarAndCloseDiv} ref={progressBarAndCloseDivRef}>
            <ProgressBar percentageScrolled={percentageScrolled}/>
            <XButton onClick={handleClick} />
         </div>
      </HorizontalWrapper>
    
   );
};
 
 export default Stack;