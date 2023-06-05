import Image from 'next/image'
import FigmaIcon from '../hero/icons/FigmaIcon'
import styles from './stack.module.css'

const FigmaDiv = () => {
   return (
      <div className={styles.stackDiv}>

         <FigmaIcon className={styles.figmaIcon}/>

         <h2 className={styles.figmaH2}>
            Figma
         </h2>

         <p className={styles.figmaP}>
         The main software I use to build my <span>designs</span>, from the initial <span>concept</span> to the final <span>mockup</span>. The image below is a concept mockup made in Figma. 
         </p>
         <div className={styles.mockupContainer}>
            <Image
               src='/mockups/rs6Mockup.png'
               alt='mockup'
               fill={true}
            />
         </div>

      </div>
   )
}

export default FigmaDiv