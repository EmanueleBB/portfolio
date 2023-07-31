import gsap from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import FigmaIcon from '../hero/icons/FigmaIcon'
import IllustratorIcon from '../hero/icons/IllustratorIcon'
import styles from './stack.module.css'

const MidjourneyDiv = () => {


   const midjourneyDivRef = useRef<HTMLDivElement>(null);
   const h2Ref=useRef<HTMLHeadingElement>(null);
   const pRef=useRef<HTMLParagraphElement>(null);
   const subPRef=useRef<HTMLParagraphElement>(null);
   const imageDivRef=useRef<HTMLDivElement>(null);
   const midjourneyIconRef=useRef<SVGSVGElement>(null);


   useLayoutEffect(() => {

      // const midjourneyDivRefValue=midjourneyDivRef.current;

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
            tl.fromTo(midjourneyIconRef.current,{
               y:-15,
               opacity:0,
            },{
               y:0,
               opacity:1,
               duration:1,
               ease:'power2.out'
            }).fromTo(h2Ref.current,{
               
               y:-15,
               opacity:0,
            },{
               y:0,
               opacity:1,
               duration:1,
               ease:'power2.out'
            },'<+=0.2')
            .fromTo(pRef.current,{
               y:-15,
               opacity:0,
            },{
               y:0,
               opacity:1,
               duration:1.7,
               ease:'power3.out'
            },'<+=0.2')
            .to(imageDivRef.current,{
               opacity:1,
            },'<+=1')
            .to(subPRef.current,{
               y:-15,
               opacity:1,
            })
            

            if (midjourneyDivRef.current) {
               observer.unobserve(midjourneyDivRef.current);
            }
            
         }
         });
      };

      const observer = new IntersectionObserver(handleAnimation, options);

      if (midjourneyDivRef.current) {
         observer.observe(midjourneyDivRef.current);
      }

      return () => {
         if (midjourneyDivRef.current) {
            observer.unobserve(midjourneyDivRef.current);
         }
      };
   }, []);
   

   return (
      <div className={styles.stackDiv} ref={midjourneyDivRef}>
         <div className={styles.midjourneyIconContainer}>
            <Image
               src='/midjourney.png'
               fill
               alt='midjourney icon'
               quality={100}
            />
         </div>

         <h2 className={`${styles.generalH2} ${styles.midjourneyH2}`} ref={h2Ref}>
            Midjourney
         </h2>

         <p className={`${styles.generalP} ${styles.midjourneyP}`} ref={pRef}>
            Since the AI boom I tried many of these new technologies, and this one in combination with the new Photoshop generative capabilities makes creating original <span>visual assets</span> easy as it has never been.
         </p>

         <p className={`${styles.generalP} ${styles.midjourneySubP}`} ref={subPRef}>
            This is not a photo, I just asked to midjourney for a real life version of the queen of hearts. It did a pretty good job, I have to admit.
         </p>

         <div className={styles.queenOfHeartsDiv} ref={imageDivRef}>
            
            <Image
               src='/queenOfHearts.png'
               alt='the queen of hearts'
               fill
               quality={100}
            />
         </div>
      </div>
   )
}

export default MidjourneyDiv;