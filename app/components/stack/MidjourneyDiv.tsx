import Image from 'next/image'
import React, { useRef } from 'react'
import FigmaIcon from '../hero/icons/FigmaIcon'
import IllustratorIcon from '../hero/icons/IllustratorIcon'
import styles from './stack.module.css'

const MidjourneyDiv = () => {


   const illustratorDivRef = useRef<HTMLDivElement>(null);
   const h2Ref=useRef<HTMLHeadingElement>(null);
   const pRef=useRef<HTMLParagraphElement>(null);
   const imageDivRef=useRef<HTMLDivElement>(null);
   const illustratorIconRef=useRef<SVGSVGElement>(null);
   

   return (
      <div className={styles.stackDiv} ref={illustratorDivRef}>
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
            Since the AI boom I tried many of these new technologies, and this one in combination with the new Photoshop generative capabilities makes creating original <span>visual assets</span> just a matter of imagination, not skill.
         </p>

         <p className={`${styles.generalP} ${styles.midjourneySubP}`} ref={pRef}>
            This is not a photo, I just asked to midjourney for a real life version of the queen of hearts. It did a pretty good job, I have to admit.
         </p>

         <div className={styles.queenOfHeartsDiv}>
            
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