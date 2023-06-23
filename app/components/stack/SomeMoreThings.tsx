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
import {FaFolder} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const SomeMoreThings = () => {

   const observerOptions = {
      root:null,
      rootMargin:'-100px',
      treshold:1,
      
      
   }


   useLayoutEffect(() => {

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {

         const tl=gsap.timeline();

         if (entry.isIntersecting && entry.target.classList.contains(styles.bottomToTop)) {
            tl.from(entry.target,{
               opacity:0,
               duration:0.4,
               ease:'power1.out'
            }).from(entry.target.querySelector(`.${styles.generalIcon}`),{
               opacity:0,
               duration:0.4,
               top:20,
               ease:'power1.out'
            }).from(entry.target.querySelector('h3'),{
               opacity:0,
               duration:0.4,
               top:20,
               ease:'power1.out'
            }).from(entry.target.querySelector(`.${styles.popupBar}`),{
               scaleY:0,
               opacity:0,
               duration:0.5,
               ease:'power1.out'
            }).from(entry.target.querySelector(`.${styles.text}`),{
               top:25,
               opacity:0,
               duration:0.5,
               ease:'power1.out',
               onComplete:()=>observer.unobserve(entry.target)
            })
         } else if(entry.isIntersecting && entry.target.classList.contains(styles.topToBottom)){
            tl.from(entry.target,{
               opacity:0,
               duration:0.4,
               ease:'power1.out'
            }).from(entry.target.querySelector(`.${styles.generalIcon}`),{
               opacity:0,
               duration:0.4,
               top:-20,
               ease:'power1.out'
            }).from(entry.target.querySelector('h3'),{
               opacity:0,
               duration:0.4,
               top:-20,
               ease:'power1.out'
            }).from(entry.target.querySelector(`.${styles.popupBar}`),{
               scaleY:0,
               
               opacity:0,
               duration:0.5,
               ease:'power1.out'
            }).from(entry.target.querySelector(`.${styles.text}`),{
               top:-25,
               opacity:0,
               duration:0.5,
               ease:'power1.out',
               onComplete:()=>observer.unobserve(entry.target)
            })


         }
         });
      }, observerOptions);

      // Osserva tutti gli elementi con classe "generalContainer"
      const elements = document.querySelectorAll(`.${styles.generalContainer}`);
      elements.forEach((element) => {
         observer.observe(element);
      });

      // Cleanup dell'observer quando il componente viene smontato
      return () => observer.disconnect();
   }, []);

   


   return (
      <div className={`${styles.stackDiv} ${styles.someMoreThingsDiv}`}>

         <h2 className={styles.mainBackgroundHeading}>
            
         </h2> 

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

         <div className={styles.lastDiv}>

         <p className={`${styles.title} ${styles.seoTitle}`}>
               The idea is to never stop 
               adding points here
            </p>
          
            <p className={`${styles.lastDivText} ${styles.text}`}>
               Currently working on:
            </p>
            <p className={`${styles.title} ${styles.seoTitle}`}>SQL</p>

            <svg className={`${styles.generalIcon} ${styles.gear}`}xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
               <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" fill='#808080'/>
            </svg>
            
         </div>

      </div>
   )
}

export default SomeMoreThings;