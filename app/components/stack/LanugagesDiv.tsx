import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import CssIcon from '../hero/icons/CssIcon';
import FirebaseIcon from '../hero/icons/FirebaseIcon';
import GraphQlIcon from '../hero/icons/GraphQlIcon';
import HtmlIcon from '../hero/icons/HtmlIcon';
import JavascriptIcon from '../hero/icons/JavascriptIcon';
import MongoIcon from '../hero/icons/MongoIcon';
import NodeIcon from '../hero/icons/NodeIcon';
import PrismaIcon from '../hero/icons/PrismaIcon';
import SanityIcon from '../hero/icons/SanityIcon';
import SassIcon from '../hero/icons/SassIcon';
import TypescriptIcon from '../hero/icons/TypescriptIcon';
import styles from './stack.module.css'

const LanguagesDiv = () => {


   const currentDivRef=useRef<HTMLDivElement>(null);
   const [animationComplete, setAnimationComplete] = useState(false);

   useLayoutEffect(()=>{
      const options = {
         root: null,
         rootMargin: `150px`,
         threshold: 0.75,
      }

      const handleAnimation = (entries:IntersectionObserverEntry[]) => {
         entries.forEach((entry)=>{
            
            if (entry.isIntersecting && currentDivRef.current ){
               const icons = currentDivRef.current.querySelectorAll(`.${styles.generalIcon}`);
               const titles = currentDivRef.current.querySelectorAll(`.${styles.languageTitle}`);
               const tl = gsap.timeline({
                  onComplete:()=>observer.unobserve(currentDivRef.current as HTMLDivElement)
               });
               tl.fromTo(icons,{
                  top:30,
               },{
                  top:0,
                  duration:0.5,
                  stagger:0.1,
                  ease:'power1.out'
               }).fromTo(icons,{
                  opacity:0,
               },{
                  opacity:1,  
                  duration:1.5,
                  stagger:0.1,
                  ease:'power1.out'
               },'<').fromTo(titles,{
                  top:40,
                  opacity:0,
                  
                  
               },{
                  top:0,
                  opacity:1,
                  duration:0.7,
                  stagger:0.1,
                  ease:'power1.inOut'
               },'<')
               
               
               
            }

         })
      }

      const observer = new IntersectionObserver(handleAnimation,options);

      if (currentDivRef.current) {
         observer.observe(currentDivRef.current);
      }


      return() => {
         if (currentDivRef.current) {
            observer.unobserve(currentDivRef.current);
         }
      }
   },[]) 

   return (
      <div className={`${styles.stackDiv} ${styles.languagesDiv}`} ref={currentDivRef}>
         <h2 className={styles.mainBackgroundHeading}>
            Languages & BackEnd tools
         </h2>
         
         <div className={styles.languagesGrid}>
            <div>
               <div className={styles.languageBox}>
                  <JavascriptIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#FFC700'}}>
                     Javascript
                  </p>
                  
               </div>
               <div className={styles.languageBox}>
                  <TypescriptIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#3178C6'}}>
                     Typescript
                  </p>
                  
               </div>
            </div>

            <div>
               <div className={styles.languageBox}>
                  <HtmlIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#FF7A00'}}>
                     HTML
                  </p>
               </div>
               <div className={styles.languageBox}>
                  <SassIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#FA11FF'}}>
                     SASS
                  </p>
               </div>
               <div className={styles.languageBox}>
                  <CssIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#00C2FF'}}>
                     CSS
                  </p>
               </div>
            </div>

            <div>
            <div className={styles.languageBox}>
                  <NodeIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'white'}}>
                     Node
                  </p>
               </div>
               <div className={styles.languageBox}>
               <GraphQlIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#E535AB'}}>
                     GraphQL
                  </p>
               </div>
               <div className={styles.languageBox}>
                  <PrismaIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'white'}}>
                     Prisma
                  </p>
               </div>
            </div>

            <div>
               <div className={styles.languageBox}>
               <FirebaseIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#FCCA3F'}}>
                     Firebase
                  </p>
                  
               </div>
               
               <div className={styles.languageBox}>
                  <MongoIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#10AA50'}}>
                     Mongo DB
                  </p>
               </div>
               <div className={styles.languageBox}>
                  <SanityIcon className={styles.generalIcon}/>
                  <p className={styles.languageTitle} style={{color:'#F9B1AB'}}>
                     Sanity CMS
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LanguagesDiv;