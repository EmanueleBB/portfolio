'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './codeSection.module.css'

const CodeSection = () => {

   const designDesktopRef = useRef<HTMLDivElement>(null);


   return (
      <div className={styles.codeSectionContainer}>
         <h2 className={styles.codeHeading}>
            CODE
         </h2>
      
         <div className={styles.desktopContainer} ref={designDesktopRef}>
            <Image
               src='/mockups/codeDesktop.png' 
               fill={true}
               alt='desktop with vs code opened'
               priority
               
            />
         </div>
      </div>
   )
}

export default CodeSection