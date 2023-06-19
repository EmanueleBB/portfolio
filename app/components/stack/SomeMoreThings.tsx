import Link from 'next/link'
import ExpressIcon from '../hero/icons/ExpressIcon'
import GithubIcon from '../hero/icons/GithubIcon'
import GsapIcon from '../hero/icons/GsapIcon'
import NodeIcon from '../hero/icons/NodeIcon'
import PhotoshopIcon from '../hero/icons/PhotoshopIcon'
import PostmanIcon from '../hero/icons/PostmanIcon'
import ReduxIcon from '../hero/icons/ReduxIcon'
import SeoIcon from '../hero/icons/SeoIcon'
import StripeIcon from '../hero/icons/StripeIcon'
import ThreeJsIcon from '../hero/icons/ThreeJsIcon'
import VercelIcon from '../hero/icons/VercelIcon'
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
            <ThreeJsIcon className={`${styles.generalIcon} ${styles.threeJsIcon}`}/>
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





         <div className={`${styles.generalContainer} ${styles.bottomToTop} ${styles.rightAlign}`}>
            <StripeIcon className={`${styles.generalIcon} ${styles.stripeIcon}`}/>

            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.stripeText}`}>A solid API for processing <span className={`${styles.textSpan} ${styles.stripeTextSpan}`}>online payments</span></p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div>






         <div className={`${styles.generalContainer} ${styles.bottomToTop} ${styles.leftAlign}`}>
            <GithubIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.githubTitle}`}>
               Github
            </h3>
            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.githubText}`}>Can you really say you know what a computer is if you don't have a Github profile? <span className={`${styles.textSpan} ${styles.githubTextSpan}`}><a className={styles.githubLink} href='https://github.com/EmanueleBB' target='blank'>here</a></span> is mine.</p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div>

         <div className={`${styles.generalContainer} ${styles.topToBottom} ${styles.rightAlign}`}>
            <VercelIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.vercelTitle}`}>
               Vercel
            </h3>
            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.vercelText}`}>The go-to <span className={`${styles.textSpan} ${styles.vercelTextSpan}`}>deployment platform </span> for hosting Next JS projects</p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div>


         <div className={`${styles.generalContainer} ${styles.topToBottom} ${styles.rightAlign}`}>
            <SeoIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.seoTitle}`}>
               Search engine optimization
            </h3>
            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.seoText}`}>I completed a SEO bootcamp 
                  on <a href='https://zerotomastery.io/courses/seo-content-optimization/' className={styles.seoLink} >Zero to mastery</a> as soon as I understood what a crucial aspect of web development search engine optimization is.
                  I familiarized with tools like SemRush,
                  ScreamingFrog, Google Keyword Planner,
                  Google Search Console and many more.</p>
               <div className={styles.popupBar}></div>             
            </div>    
         </div>

         <div className={`${styles.generalContainer} ${styles.topToBottom} ${styles.lastDiv}`}>

         <p className={styles.text}>
               The idea is to never stop 
               adding points here
            </p>
         <svg className={`${styles.gear} ${styles.generalIcon}`} width="30" height="30" viewBox="0 0 30 30"  fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M15.0034 20.25C13.572 20.25 12.1991 19.6969 11.187 18.7123C10.1748 17.7277 9.60613 16.3924 9.60613 15C9.60613 13.6076 10.1748 12.2723 11.187 11.2877C12.1991 10.3031 13.572 9.75 15.0034 9.75C16.4349 9.75 17.8077 10.3031 18.8199 11.2877C19.832 12.2723 20.4007 13.6076 20.4007 15C20.4007 16.3924 19.832 17.7277 18.8199 18.7123C17.8077 19.6969 16.4349 20.25 15.0034 20.25ZM26.4611 16.455C26.5227 15.975 26.569 15.495 26.569 15C26.569 14.505 26.5227 14.01 26.4611 13.5L29.7148 11.055C30.0078 10.83 30.0849 10.425 29.8999 10.095L26.8157 4.905C26.6307 4.575 26.2143 4.44 25.8751 4.575L22.0353 6.075C21.2334 5.49 20.4007 4.98 19.4292 4.605L18.8586 0.630003C18.8273 0.453328 18.7327 0.293143 18.5915 0.17783C18.4504 0.0625168 18.2719 -0.000479662 18.0876 2.7502e-06H11.9192C11.5337 2.7502e-06 11.2099 0.270003 11.1482 0.630003L10.5776 4.605C9.60613 4.98 8.7734 5.49 7.97152 6.075L4.13174 4.575C3.79249 4.44 3.37612 4.575 3.19107 4.905L0.106915 10.095C-0.0935556 10.425 -0.00103058 10.83 0.291965 11.055L3.54575 13.5C3.48407 14.01 3.43781 14.505 3.43781 15C3.43781 15.495 3.48407 15.975 3.54575 16.455L0.291965 18.945C-0.00103058 19.17 -0.0935556 19.575 0.106915 19.905L3.19107 25.095C3.37612 25.425 3.79249 25.545 4.13174 25.425L7.97152 23.91C8.7734 24.51 9.60613 25.02 10.5776 25.395L11.1482 29.37C11.2099 29.73 11.5337 30 11.9192 30H18.0876C18.4731 30 18.7969 29.73 18.8586 29.37L19.4292 25.395C20.4007 25.005 21.2334 24.51 22.0353 23.91L25.8751 25.425C26.2143 25.545 26.6307 25.425 26.8157 25.095L29.8999 19.905C30.0849 19.575 30.0078 19.17 29.7148 18.945L26.4611 16.455Z" fill="#808080" />

         </svg>
            <p className={styles.text}>
               Currently adding to the stack : SQL
            </p>
            
         </div>

      </div>
   )
}

export default SomeMoreThings;