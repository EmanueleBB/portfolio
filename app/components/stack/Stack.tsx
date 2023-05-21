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
   const { isVisible, toggleIsVisible } = useNavbarStore();
   const horizontalWrapperRef = useRef<HTMLDivElement>(null);
   const horizontalScrollerRef = useRef<HTMLDivElement>(null);
   

   useEffect(() => {

      if (stackIsOnScreen) {

         gsap.to(document.body,{
            overflowY:'hidden'
         })

         gsap.to(horizontalWrapperRef.current, {
            xPercent: -100,
            duration: 1,
            ease: 'power2.inOut'

         });
         
      } else {
         gsap.to(document.body,{
            overflowY:'auto'
         })
         gsap.to(horizontalWrapperRef.current, {
            xPercent: 0,
            duration: 1,
            ease: 'power2.inOut',
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