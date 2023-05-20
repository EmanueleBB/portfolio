'use client'

import useNavbarStore from "@/app/stores/NavbarStore";
import useStackStore from "@/app/stores/StackStore";
import gsap from "gsap";
import { ReactComponentElement, ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import HorizontalWrapper from "./HorizontalWrapper";
import XButton from "./XButton";



const Stack = () => {

   const {stackIsOnScreen,toggleStackIsOnScreen}=useStackStore();
   const {isVisible,toggleIsVisible} = useNavbarStore();

   const horizontalWrapperRef=useRef(null);


   useEffect(() => {
      if (stackIsOnScreen) {
         gsap.to(horizontalWrapperRef.current, {
            xPercent:-100,
            duration:1,
            ease:'power2.inOut'
         });
      } else {
         gsap.to(horizontalWrapperRef.current, {
            
            xPercent:0,
            duration:1,
            ease:'power2.inOut'
         });
      }
   }, [stackIsOnScreen]);


   

   const handleClick = () => {
      toggleStackIsOnScreen();
      toggleIsVisible();
   }

   return (
      <HorizontalWrapper ref={horizontalWrapperRef}>
         <div>
            Belllaaaegaeg
            <XButton onClick={handleClick}/>
         </div>
      </HorizontalWrapper>
   );
 };
 
 export default Stack;