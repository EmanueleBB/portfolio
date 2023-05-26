'use client'

import useNavbarStore from "@/app/stores/NavbarStore";
import useStackStore from "@/app/stores/StackStore";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import HorizontalWrapper from "./HorizontalWrapper";

import XButton from "./XButton";
import styles from './stack.module.css';



const Stack = () => {
   const { stackIsOnScreen, toggleStackIsOnScreen } = useStackStore();
   const { toggleIsVisible } = useNavbarStore();
   const horizontalWrapperRef = useRef<HTMLDivElement>(null);
   const bodyYPosition = document?.body.getBoundingClientRect().y*(-1);
   

   useEffect(() => {

      if (stackIsOnScreen) {

         const tl = gsap.timeline()
         
         tl.to(horizontalWrapperRef.current,{
            top:bodyYPosition,
            duration:0,
         }).to(horizontalWrapperRef.current, {
            onStart:()=>{document.body.style.overflowY='hidden'},
            xPercent: -100,
            duration: 1,
            ease: 'power2.inOut',
            
         })
         
      } else {

         gsap.to(horizontalWrapperRef.current, {
            onStart:()=>{document.body.style.overflowY='hidden'},
            boxShadow:'none',
            xPercent: 0,
            duration: 1,
            ease: 'power2.inOut',
            onComplete:()=>{document.body.style.overflowY='auto'}
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
         {/* </div> */}
         <div className={styles.progressBarAndCloseDiv}>
            {/* <ProgressBar/> */}
            <XButton onClick={handleClick} />
         </div>
      </HorizontalWrapper>
    
   );
};
 
 export default Stack;