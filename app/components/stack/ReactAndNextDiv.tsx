import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'



import NextIcon from '../hero/icons/NextIcon'
import ReactIcon from '../hero/icons/ReactIcon'

import styles from './stack.module.css'

const ReactAndNextDiv = () => {

   
   const h2Ref=useRef<HTMLHeadingElement>(null);
   const pRef=useRef<HTMLParagraphElement>(null);
   const imageDivRef=useRef<HTMLDivElement>(null);
   const reactAndNextJsDivRef=useRef<HTMLDivElement>(null);
   const reactIconRef=useRef<SVGSVGElement>(null);
   const nextJsIconRef=useRef<SVGSVGElement>(null);

   useLayoutEffect(() => {

      


      const options = {
         root: null,
         rootMargin: `150px`,
         threshold: 0.75,
      };

      const handleAnimation = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry) => {
         // Logica per l'animazione
         if (entry.isIntersecting) {

            const tl=gsap.timeline();
            tl.fromTo(imageDivRef.current,{
               top:-10,
               opacity:0,
            },{
               delay:0.3,
               top:0,
               opacity:1,
               duration:0.4,
               ease:'power1.out'
            }).to(reactIconRef.current,{
               
               opacity:0.5,
               duration:0.4,
               ease:'power1.out'
            })
            tl.to(nextJsIconRef.current,{
               opacity:0.5,
               
               duration:0.4,
               ease:'power1.out'
            },'<+=0.3')

            if (reactAndNextJsDivRef.current) {
               observer.unobserve(reactAndNextJsDivRef.current);
            }
            
         }});
      };

      const observer = new IntersectionObserver(handleAnimation, options);

      if (reactAndNextJsDivRef.current) {
         observer.observe(reactAndNextJsDivRef.current);
      }

      return () => {
         if (reactAndNextJsDivRef.current) {
            observer.unobserve(reactAndNextJsDivRef.current);
         }
      };
   }, []);

   

   return (
      <div className={styles.stackDiv} ref={reactAndNextJsDivRef}>
         <div className={styles.iconsContainer}>
            <ReactIcon className={`${styles.generalIcon} ${styles.reactIcon}`} ref={reactIconRef}/>
            <NextIcon className={`${styles.generalIcon} ${styles.nextIcon}`} ref={nextJsIconRef} />
         </div>

         <h2 className={`${styles.generalH2} ${styles.reactAndNextJsH2}`} ref={h2Ref}>
            React    | NextJS
         </h2>

         <p className={`${styles.generalP} ${styles.reactAndNextJsP}`} ref={pRef}>
            These are the two frameworks I worked the most. This porfolio is built using Next JS
         </p>
         <div className={`${styles.mockupContainer} ${styles.reactAndNextMockupContainer}`} ref={imageDivRef}>
            <Image
               src='/mockups/reactAndNextJs.png'
               alt='mockup'
               fill={true}
            />
         </div>
            
      </div>
   )
}

export default ReactAndNextDiv;