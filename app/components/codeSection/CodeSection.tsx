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
   
   useLayoutEffect(() => {

      gsap.registerPlugin(ScrollTrigger);
      const tl=gsap.timeline();

      ScrollTrigger.create({
         trigger:codeDivRef.current,
         scrub:true,
         markers:true,
         start:'top 25%',
         end:'bottom bottom',
         animation:tl,
         id:'code',
      })

      tl.to(codeDesktopRef.current,{
         
         top:'40vh',
         duration:3,
         opacity:1,
         ease:'power1.Out',
      }).to(codeDesktopRef.current,{
         
         duration:5,
         opacity:1,
         ease:'power1.Out',
      }).to(codeDesktopRef.current,{
         position:'sticky',
         bottom:'10vh',
         duration:0,
      })
   
   }, [])


   return (
      <div className={styles.codeSectionContainer} ref={codeDivRef}>
         <h2 className={styles.codeHeading} ref={codeHeadingRef}>
            CODE
         </h2>
      
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