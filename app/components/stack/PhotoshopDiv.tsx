import gsap from 'gsap'
import Image from 'next/image'
import { useEffect } from 'react'
import PhotoshopIcon from '../hero/icons/PhotoshopIcon'
import styles from './stack.module.css'

const PhotoshopDiv = () => {

   const tl = gsap.timeline();

   useEffect(()=>{
      
   })


   return (
      <div className={styles.stackDiv}>

         <PhotoshopIcon className={styles.generalIcon}/>

         <h2 className={`${styles.generalH2} ${styles.photoshopH2}`}>
            Photoshop
         </h2>

         <p className={`${styles.generalP} ${styles.photoshopP}`}>
         The standard for <span>image retouch</span>. It's one of the main <span>tools</span> I use to transition from <span>vision</span> to <span>reality.</span>
         </p>
         <div className={styles.ballerinaImageContainer}>
            <Image
               src='/ballerinaBlackAndWhite.jpg'
               alt='image of a ballet dancer'
               fill={true}
            />
         </div>
         <div className={styles.maskDiv}>
            <div className={styles.coloredBallerinaImageContainer}>
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