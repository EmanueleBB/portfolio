'use client'

import useStackStore from '@/app/stores/StackStore';
import gsap from 'gsap';
import React, { ReactNode, useEffect, useRef } from 'react'


interface MainContainerProps{
   children:ReactNode;
}


const MainContainer:React.FC<MainContainerProps> = ({children}) => {

   const {stackIsOnScreen} = useStackStore();
   const mainContainerRef = useRef(null);

   //This useEffect handles the left/right swipe
   useEffect(() => {
   
      const handleStackIsOnScreenChange = () => {
         if (!stackIsOnScreen) {
            gsap.to(mainContainerRef.current, {
               left: 0,
               duration: 1,
               ease: 'power2.inOut',
            });
         } else {
            gsap.to(mainContainerRef.current, {
               
               left: '-100%',
               duration:1,
               ease: 'power2.inOut',
            });
         }
      };
   
      handleStackIsOnScreenChange(); // I execute the animation on the first loading (the div will remain still)
   
      return () => {
        // Rimuovi l'ascoltatore dell'evento quando il componente viene smontato
        handleStackIsOnScreenChange();
      };
   }, [stackIsOnScreen]);

   return (
      <div ref={mainContainerRef} /*style={{border:'5px solid blue', boxSizing:'border-box'}}*/>
         {children}
      </div>
   )
}

export default MainContainer