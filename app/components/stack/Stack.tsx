'use client'

import useStackStore from "@/app/stores/StackStore";
import gsap from "gsap";
import { ReactComponentElement, ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import HorizontalWrapper from "./HorizontalWrapper";

const Stack = () => {

   const {stackIsOnScreen}=useStackStore();
   const horizontalWrapperRef=useRef(null);

   useLayoutEffect(() => {
      if (stackIsOnScreen) {
         gsap.to(horizontalWrapperRef.current, {
            xPercent:-100,
            
         });
      } else {
         gsap.to(horizontalWrapperRef.current, {
            xPercent:0,
            
         });
      }
   }, [stackIsOnScreen]);

   return (
      <HorizontalWrapper ref={horizontalWrapperRef}>
         <div>
            Belllaaaegaeg
         </div>
      </HorizontalWrapper>
   );
 };
 
 export default Stack;