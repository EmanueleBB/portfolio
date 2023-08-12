'use client'

import styles from './stack.module.css'
import Image from 'next/image'
import { forwardRef, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'

import PhotoshopIcon from '../hero/icons/PhotoshopIcon'

import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'



const PhotoshopDiv = () => {

   const photoshopDivRef=useRef<HTMLDivElement>(null);
   const maskDivRef=useRef<HTMLDivElement>(null);
   const h2Ref=useRef<HTMLHeadingElement>(null);
   const pRef=useRef<HTMLParagraphElement>(null);
   const imageDivRef=useRef<HTMLDivElement>(null);
   const photoshopIconRef=useRef<SVGSVGElement>(null);

   

   useLayoutEffect(() => {

      // const photoshopDivRefValue=photoshopDivRef.current;

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
            tl.fromTo(photoshopIconRef.current,{
               y:-15,
               opacity:0,
            },{
               y:0,
               opacity:1,
               duration:1,
               ease:'power2.out'
            }).to(maskDivRef.current,{
               delay:0.5,
               opacity:1,
               duration:0,
               ease:'linear',
            },'<')
            .from(maskDivRef.current,{
               height:0,
               duration:3,
               ease:'linear',
            },'<')
            .fromTo(h2Ref.current,{
               backgroundImage: 'radial-gradient(ellipse at center top, #31A8FF 20%, #001E36 70% )',
               y:-15,
               opacity:0,
            },{
               backgroundImage: 'radial-gradient(ellipse at center top, #31A8FF 20%, #001E36 100% )',
               y:0,
               opacity:1,
               duration:1,
               ease:'power2.out'
            },'<+=2.5')
            .fromTo(pRef.current,{
               y:-15,
               opacity:0,
            },{
               
               y:0,
               opacity:1,
               duration:1.7,
               ease:'power3.out'
            },'<+=0.5')
            

            if (photoshopDivRef.current) {
               observer.unobserve(photoshopDivRef.current);
            }
            
         }
         });
      };

      const observer = new IntersectionObserver(handleAnimation, options);

      if (photoshopDivRef.current) {
         observer.observe(photoshopDivRef.current);
      }

      return () => {
         if (photoshopDivRef.current) {
            observer.unobserve(photoshopDivRef.current);
         }
      };
   }, []);


   return (
      <div className={styles.stackDiv} ref={photoshopDivRef}>

         <PhotoshopIcon className={styles.generalIcon} ref={photoshopIconRef}/>

         <h2 className={`${styles.generalH2} ${styles.photoshopH2}`} ref={h2Ref}>
            Adobe Photoshop
         </h2>

         <p className={`${styles.generalP} ${styles.photoshopP}`} ref={pRef}>
         The standard for <span>image retouch</span>. It&apos;s one of the main <span>tools</span> I use to transition from <span>vision</span> to <span >reality.</span>
         </p>
         <div className={styles.ballerinaImageContainer} ref={imageDivRef}>
            <Image
               src='/ballerinaBlackAndWhite.jpg'
               alt='image of a ballet dancer'
               fill={true}
            />
         </div>
         <div className={styles.maskDiv} ref={maskDivRef}>
            <div className={styles.coloredBallerinaImageContainer} >
               <Image
                  src='/ballerinaColored.png'
                  alt='image of a ballet dancer'
                  fill={true}
               />
            </div>
         </div>
      </div>
   )
}

export default PhotoshopDiv;