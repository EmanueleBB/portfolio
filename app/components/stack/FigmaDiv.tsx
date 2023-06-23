'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import FigmaIcon from '../hero/icons/FigmaIcon'
import styles from './stack.module.css'

const FigmaDiv = () => {


   const figmaDivRef = useRef<HTMLDivElement>(null);
   const h2Ref=useRef<HTMLHeadingElement>(null);
   const pRef=useRef<HTMLParagraphElement>(null);
   const imageDivRef=useRef<HTMLDivElement>(null);
   const figmaIconRef=useRef<SVGSVGElement>(null);


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
            tl.fromTo(figmaIconRef.current,{
               x:15,
               opacity:0,
            },{
               x:0,
               opacity:1,
               duration:0.5,
               ease:'power2.out'
            }).fromTo(h2Ref.current,{
               x:15,
               opacity:0,
            },{
               x:0,
               opacity:1,
               duration:0.5,
               ease:'power2.out'
            }).fromTo(pRef.current,{
               x:15,
               opacity:0,
            },{
               x:0,
               opacity:1,
               duration:0.5,
               ease:'power2.out'
            }).fromTo(imageDivRef.current,{
               x:15,
               opacity:0,
            },{
               x:0,
               opacity:1,
               duration:0.5,
               ease:'power2.out'
            })

            if (figmaDivRef.current) {
               observer.unobserve(figmaDivRef.current);
            }
            
         } else {
            console.log('Element is not visible');
         }
         });
      };

      const observer = new IntersectionObserver(handleAnimation, options);

      if (figmaDivRef.current) {
         observer.observe(figmaDivRef.current);
      }

      return () => {
         if (figmaDivRef.current) {
            observer.unobserve(figmaDivRef.current);
         }
      };
   }, []);


   return (
      <div className={styles.stackDiv} ref={figmaDivRef}>

         <FigmaIcon className={styles.generalIcon} ref={figmaIconRef}/>

         <h2 className={`${styles.generalH2} ${styles.figmaH2}`} ref={h2Ref}>
            Figma
         </h2>

         <p className={`${styles.generalP} ${styles.figmaP}`} ref={pRef}>
         The main software I use to build my <span>designs</span>, from the initial <span>concept</span> to the final <span>mockup</span>. The image below is a concept mockup made in Figma. 
         </p>
         <div className={`${styles.mockupContainer}`} ref={imageDivRef}>
            <Image
               src='/mockups/rs6Mockup.png'
               alt='mockup'
               fill={true}
            />
         </div>

      </div>
   )
}

export default FigmaDiv