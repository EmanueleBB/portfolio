import Link from 'next/link'
import ExpressIcon from '../hero/icons/ExpressIcon'
import GithubIcon from '../hero/icons/GithubIcon'
import GsapIcon from '../hero/icons/GsapIcon'
import NodeIcon from '../hero/icons/NodeIcon'
import PhotoshopIcon from '../hero/icons/PhotoshopIcon'
import PostmanIcon from '../hero/icons/PostmanIcon'
import ReduxIcon from '../hero/icons/ReduxIcon'
import StripeIcon from '../hero/icons/StripeIcon'
import ThreeJsIcon from '../hero/icons/ThreeJsIcon'
import PopupIconAndText, { Directions, Positions } from './smallerComponents/PopupIconAndText'
import styles from './smallerComponents/popupIconAndText.module.css'

const SomeMoreThings = () => {
   return (
      <div className={`${styles.stackDiv} ${styles.someMoreThingsDiv}`}>



         <div className={`${styles.generalContainer} ${styles.bottomToTop} ${styles.leftAlign}`}>
            <ExpressIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.expressTitle}`}>
               Express
            </h3>

            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.expressText}`}>The standard for writing <span className={`${styles.textSpan} ${styles.expressTextSpan}`}>RESTful APIs</span></p>
               <div className={styles.popupBar}></div>             
            </div>    

         </div>     





         <div className={`${styles.generalContainer} ${styles.topToBottom} ${styles.rightAlign}`}>
            <ReduxIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.reduxTitle}`}>
               Redux & Redux Toolkit
            </h3>

            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.reduxText}`}>The standard for <span className={`${styles.textSpan} ${styles.reduxTextSpan}`}>state management</span> in React. Even though I think in many cases <span className={`${styles.textSpan} ${styles.reduxTextSpan}`}>Zustand</span> is a much handier option</p>
               <div className={styles.popupBar}></div>             
            </div>        
         </div>    






         <div className={`${styles.generalContainer} ${styles.topToBottom} ${styles.leftAlign}`}>
            <GsapIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.gsapTitle}`}>
               Gsap
            </h3>

            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.gsapText}`}>A <span className={`${styles.textSpan} ${styles.gsapTextSpan}`}>Javascript library</span> for <span className={`${styles.textSpan} ${styles.gsapTextSpan}`}>animations</span>. Most of the animations on my portfolio are created using</p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div> 





         <div className={`${styles.generalContainer} ${styles.bottomToTop} ${styles.rightAlign}`}>
            <ThreeJsIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.threeTitle}`}>
               Three JS & React Three Fiber
            </h3>

            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.threeText}`}>A <span className={`${styles.textSpan} ${styles.threeTextSpan}`}>Javascript and React library</span> for creating <span className={`${styles.textSpan} ${styles.threeTextSpan}`}>3D</span> objects and environments in a web page.</p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div>





         <div className={`${styles.generalContainer} ${styles.topToBottom} ${styles.leftAlign}`}>
            <PostmanIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.postmanTitle}`}>
               Postman
            </h3>
            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.postmanText}`}>An API platform for <span className={`${styles.textSpan} ${styles.postmanTextSpan}`}>building</span> and <span className={`${styles.textSpan} ${styles.postmanTextSpan}`}>testing</span> APIs</p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div>





         <div className={`${styles.generalContainer} ${styles.bottomToTop} ${styles.leftAlign}`}>
            <StripeIcon className={`${styles.generalIcon} ${styles.stripeIcon}`}/>

            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.stripeText}`}>Can you really say you know what a computer is if you don't have a stripe profile? <span className={`${styles.textSpan} ${styles.stripeTextSpan}`}><a className={styles.stripeLink} href='https://github.com/EmanueleBB' target='blank'>here</a></span> is mine</p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div>






         <div className={`${styles.generalContainer} ${styles.bottomToTop} ${styles.leftAlign}`}>
            <GithubIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.githubTitle}`}>
               Github
            </h3>
            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.githubText}`}>Can you really say you know what a computer is if you don't have a Github profile? <span className={`${styles.textSpan} ${styles.githubTextSpan}`}><a className={styles.githubLink} href='https://github.com/EmanueleBB' target='blank'>here</a></span> is mine</p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div>



      </div>
   )
}

export default SomeMoreThings;