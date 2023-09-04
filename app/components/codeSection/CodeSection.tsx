'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import styles from './codeSection.module.css'

const CodeSection = () => {

   const codeDesktopRef = useRef<HTMLDivElement>(null);
   const codeHeadingRef = useRef<HTMLHeadingElement>(null);
   const codeDivRef=useRef<HTMLDivElement>(null);
   const codeDescriptionSpanRef=useRef<HTMLSpanElement>(null);
   const secondCodeDescriptionSpanRef=useRef<HTMLSpanElement>(null);

   
   useLayoutEffect(() => {

      gsap.registerPlugin(ScrollTrigger);
      const tl=gsap.timeline();

      ScrollTrigger.create({
         trigger:codeDivRef.current,
         scrub:true,
         markers:false,
         start:'top 25%',
         end:'bottom top',
         animation:tl,
         id:'code',
      })
      

      tl.to(codeDesktopRef.current,{
         onStart:()=>{
            codeDesktopRef.current&&(codeDesktopRef.current.style.display='flex');
            gsap.to(codeHeadingRef.current,{
               display:'inline-block'
            })
         },
         top:'45vh',
         duration:3,
         opacity:1,
         ease:'power1.Out',
         onReverseComplete:()=>{
            gsap.to(codeHeadingRef.current,{
               display:'none'
            });
            
            codeDescriptionSpanRef.current&&(codeDescriptionSpanRef.current.style.display='none');
            secondCodeDescriptionSpanRef.current&&(secondCodeDescriptionSpanRef.current.style.display='none')
            
         }
      }).to(codeHeadingRef.current,{
         top:'0vh',
         duration:3,
         opacity:1,
         ease:'power2.Out',
      },'<+=1.5')




      .to(codeDescriptionSpanRef.current,{
         onStart:()=>{
            codeDescriptionSpanRef.current&&(codeDescriptionSpanRef.current.style.display='inline-block')
         },
         top:'27.5vh',
         opacity:1,
         duration:2,
         ease:'power1.out',
      
      }).to(codeDescriptionSpanRef.current,{
         top:'20vh',
         opacity:0,
         duration:2,
         ease:'power1.in',
         
      }).to(secondCodeDescriptionSpanRef.current,{
         onStart:()=>{
            secondCodeDescriptionSpanRef.current&&(secondCodeDescriptionSpanRef.current.style.display='inline-block')
         },
         top:'27.5vh',
         opacity:1,
         duration:2,
         ease:'power1.out',
      }).to(secondCodeDescriptionSpanRef.current,{
         top:'20vh',
         opacity:0,
         duration:2,
         ease:'power1.in',
         onComplete:()=>{
            if(codeDivRef.current && codeDesktopRef.current){

               codeDivRef.current.style.paddingBottom=`${window.innerHeight*0.55 - codeDesktopRef.current.getBoundingClientRect().height}px`;
            }
         }
         
      }).to(codeDesktopRef.current,{
         
         top:'-50vh',
         opacity:1,
         duration:4,
         ease:'linear'
         
      }).to(codeHeadingRef.current,{
         
         top:'-100px',
         opacity:0,
         duration:2,
         ease:'power2.out'
      },'<')
   }, [])


   return (
      <div className={styles.codeSectionContainer} ref={codeDivRef} id='codeSection'>
        
         <h2 className={styles.codeHeading} ref={codeHeadingRef}>
            CODE
         </h2>

         <span className={styles.codeDescriptionSpan} ref={codeDescriptionSpanRef}>
            React and Next JS are the two frameworks I worked the most for building fullstack projects
         </span>
         <span className={styles.codeDescriptionSpan} ref={secondCodeDescriptionSpanRef}>
            On the backEnd side I worked with tools like MongoDB, Firebase, Prisma, GraphQL, REST, Node, Express. You can see more here
         </span>
         <div className={styles.desktopContainer} ref={codeDesktopRef}>
            <Image
               src='/mockups/codeDesktop.png' 
               fill={true}
               alt='desktop with vs code opened'
            />
         </div>
      </div>
   )
}

export default CodeSection