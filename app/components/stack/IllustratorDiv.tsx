import Image from 'next/image'
import React, { useRef } from 'react'
import FigmaIcon from '../hero/icons/FigmaIcon'
import IllustratorIcon from '../hero/icons/IllustratorIcon'
import styles from './stack.module.css'

const IllustratorDiv = () => {


   const illustratorDivRef = useRef<HTMLDivElement>(null);
   const h2Ref=useRef<HTMLHeadingElement>(null);
   const pRef=useRef<HTMLParagraphElement>(null);
   const imageDivRef=useRef<HTMLDivElement>(null);
   const illustratorIconRef=useRef<SVGSVGElement>(null);
   

   return (
      <div className={styles.stackDiv} ref={illustratorDivRef}>

         <IllustratorIcon  ref={illustratorIconRef} className={`${styles.generalIcon} ${styles.illustratorIcon}`}/>

         <h2 className={`${styles.generalH2} ${styles.illustratorH2}`} ref={h2Ref}>
            Adobe Illustrator
         </h2>

         <p className={`${styles.generalP} ${styles.illustratorP}`} ref={pRef}>
         The industry standard for manipulating <span>vector images </span>. It's not been a main component of my workflow until quite recently, when I started to love experimentin with it. 
         </p>
      </div>
   )
}

export default IllustratorDiv