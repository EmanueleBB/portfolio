'use client'

import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import FigmaIcon from '../hero/icons/FigmaIcon'
import IllustratorIcon from '../hero/icons/IllustratorIcon'
import styles from './stack.module.css'

const IllustratorDiv = () => {


   const illustratorDivRef = useRef<HTMLDivElement>(null);
   const h2Ref=useRef<HTMLHeadingElement>(null);
   const pRef=useRef<HTMLParagraphElement>(null);
   const outlineImageRef=useRef<HTMLImageElement>(null);
   const coloredImageRef=useRef<HTMLImageElement>(null);

   const illustratorIconRef=useRef<SVGSVGElement>(null);
   const videoRef = useRef<HTMLVideoElement>(null);

   useLayoutEffect(() => {

      // const illustratorDivRefValue=illustratorDivRef.current;

      const options = {
         root: null,
         rootMargin: `150px`,
         threshold: 0.75,
      };

      const handleAnimation = (entries: IntersectionObserverEntry[]) => {

         entries.forEach((entry) => {
         
         const tl=gsap.timeline();

         if (entry.isIntersecting) {

            tl.to(h2Ref.current,{
               onStart:()=>{
                  if(videoRef.current){
                     
                     videoRef.current?.play();
                     
                  }

               },
               backgroundImage: 'radial-gradient(ellipse at center top, #FF9A00 20%, #330000 100% )',
               textShadow:'none',
               opacity:1,
               duration:1.5,
               ease:'power2.out'
            },'<+=0.2').to(videoRef.current,{
               opacity:0,
               duration:0.3
            },'3').to(outlineImageRef.current,{
               opacity:1,
               duration:1,
            },'2.7').to(outlineImageRef.current,{
               opacity:0,
               duration:0.7
            }).to(coloredImageRef.current,{
               opacity:1,
               duration:1.2,
               ease:'power2.in'
            })

            if (illustratorDivRef.current) {
               observer.unobserve(illustratorDivRef.current);
            }
            
         }
         });
      };

      const observer = new IntersectionObserver(handleAnimation, options);

      if (illustratorDivRef.current) {
         observer.observe(illustratorDivRef.current);
      }

      return () => {
         if (illustratorDivRef.current) {
            observer.unobserve(illustratorDivRef.current);
         }
      };
   }, []);
   

   return (
      <div className={styles.stackDiv} ref={illustratorDivRef}>

         <IllustratorIcon  ref={illustratorIconRef} className={`${styles.generalIcon} ${styles.illustratorIcon}`}/>

         <h2 className={`${styles.generalH2} ${styles.illustratorH2}`} ref={h2Ref}>
            Adobe Illustrator
         </h2>

         <p className={`${styles.generalP} ${styles.illustratorP}`} ref={pRef}>
         The industry standard for manipulating <span>vector images </span>. It&apos;s not been a main component of my workflow until quite recently, when I started to love experimenting with it. 
         </p>

         <div className={styles.illustratorImagesContainer}>
            <video src='/rick/rickDrawing.mp4' ref={videoRef}/>
            <Image src='/rick/rickOutline.png' alt='Rick' fill ref={outlineImageRef}/>
            <Image src='/rick/rickColored2.png' alt='Rick' fill ref={coloredImageRef}/>  
         </div>
      </div>
   )
}

export default IllustratorDiv