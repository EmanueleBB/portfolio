import Image from 'next/image'
import React, { useRef } from 'react'
import FigmaIcon from '../hero/icons/FigmaIcon'
import IllustratorIcon from '../hero/icons/IllustratorIcon'
import NextIcon from '../hero/icons/NextIcon'
import ReactIcon from '../hero/icons/ReactIcon'
import FakeTerminal from './smallerComponents/FakeTerminal'
import styles from './stack.module.css'

const ReactAndNextDiv = () => {

   const illustratorDivRef = useRef<HTMLDivElement>(null);
   const h2Ref=useRef<HTMLHeadingElement>(null);
   const pRef=useRef<HTMLParagraphElement>(null);
   const imageDivRef=useRef<HTMLDivElement>(null);
   const illustratorIconRef=useRef<SVGSVGElement>(null);

   return (
      <div className={styles.stackDiv}>
         <div className={styles.iconsContainer}>
            <ReactIcon className={`${styles.generalIcon} ${styles.reactIcon}`} />
            <NextIcon className={`${styles.generalIcon} ${styles.nextIcon}`} />
         </div>

         <h2 className={`${styles.generalH2} ${styles.midjourneyH2}`} ref={h2Ref}>
            React and NextJS
         </h2>

         <p className={`${styles.generalP} ${styles.midjourneyP}`} ref={pRef}>
            These are the two frameworks I worked the most. This porfolio is built using Next JS
         </p>

            <FakeTerminal/>
      </div>
   )
}

export default ReactAndNextDiv;