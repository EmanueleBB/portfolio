'use client'

import useNavbarStore from "@/app/stores/NavbarStore";
import useStackStore from "@/app/stores/StackStore";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import HorizontalWrapper from "./HorizontalWrapper";

import XButton from "./XButton";
import styles from './stack.module.css';
import ProgressBar from "./ProgressBar";



const Stack = () => {
   const { stackIsOnScreen, toggleStackIsOnScreen } = useStackStore();
   const { toggleIsVisible } = useNavbarStore();
   const horizontalWrapperRef = useRef<HTMLDivElement>(null);
   const progressBarAndCloseDivRef = useRef<HTMLDivElement>(null);

   let bodyYPosition:number|undefined;

   useEffect(() => {
      //In the animation it's necessary to use left instead of x or xPercent: using
      //these will make the position:fixed of the children behave like position:absolute

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
         {/* <div className={styles.horizontalScroller} ref={horizontalScrollerRef}> */}
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
            <div className={styles.dummy}></div>
         {/* </div> */}

         <div className={styles.progressBarAndCloseDiv} ref={progressBarAndCloseDivRef}>
            <ProgressBar />
            <XButton onClick={handleClick} />
         </div>
      </HorizontalWrapper>
    
   );
};
 
 export default Stack;