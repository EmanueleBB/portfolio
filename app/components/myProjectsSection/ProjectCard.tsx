'use client'

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from './projects.module.css';
import {IoIosCloseCircleOutline} from 'react-icons/io'

interface ProjectCardProps{
   title:string;
   imgSrc:string;
   stack:string[];
   description:string;
}

const ProjectCard:React.FC<ProjectCardProps> = ({
   title,
   imgSrc,
   stack
}) => {

   const contentRef=useRef<HTMLDivElement>(null);
   const [animationNeedsToPlayInReverse,setAnimationNeedsToPlayInReverse]=useState(false);

   const tl = useRef<gsap.core.Timeline | null>(null);
   let windowCenter:number;
   let translateContent:number;

   useEffect(() => {
      windowCenter=window?.innerWidth/2;
   })
   

   const animateContent = () => {
      if (!animationNeedsToPlayInReverse) {

         tl.current = gsap.timeline(); 

         const contentX = contentRef.current?.getBoundingClientRect().left;
         const contentWidth=contentRef.current?.getBoundingClientRect().width;

         if(contentWidth&&contentX){
            translateContent=windowCenter-contentWidth/2-contentX;
         }

         console.log(translateContent);

         tl.current.to(contentRef.current,{
            yPercent:-100,
            duration:0.25,
            ease:'power2.out',
            transform:'',
            transformOrigin: 'bottom',
            zIndex:1
         }).to(contentRef.current,{
            yPercent:-100,
            duration:0,
            transformOrigin: 'bottom',
            zIndex:10,
            
            
         }).to(contentRef.current,{
            borderRadius:22,
            
            zIndex:10,
            duration:0.4,
            ease:'power2.in',
            transformOrigin: 'left',
            transform:`translateX(${translateContent}px) translateY(200px) `,
            height:'50vh',
            width:'160%',
            
            onComplete:()=>{
               console.log(translateContent)
            }
            
         })
         if(contentRef.current){

            console.log(contentRef.current.style.top)
         }

         setAnimationNeedsToPlayInReverse(true);
      }else {
         if (tl.current) {
           tl.current.reverse();
         }
         setAnimationNeedsToPlayInReverse(false);
      }
   }

   return (


      <div className={styles.projectCardContainer}>
         
         <div className={styles.backSide}>
            <svg width="383" height="297" viewBox="0 0 383 297" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M127.331 0C132.754 0 138.002 1.91618 142.149 5.41017L150.078 12.0898C154.226 15.5838 159.474 17.5 164.897 17.5H359.5C372.203 17.5 382.5 27.7975 382.5 40.5V274C382.5 286.703 372.203 297 359.5 297H23C10.2974 297 0 286.703 0 274V23C0 10.2975 10.2975 0 23 0H127.331Z" fill="url(#paint0_linear_645_371)"/>
               <defs>
               <linearGradient id="paint0_linear_645_371" x1="191.25" y1="0" x2="191.25" y2="297" gradientUnits="userSpaceOnUse">
               <stop stop-color="#00B2D9"/>
               <stop offset="0.203457" stop-color="#0089A7"/>
               </linearGradient>
               </defs>
            </svg>

            <div className={styles.content} ref={contentRef}>
               <div  className={styles.contentRightDiv}>
                  <svg className={styles.closeIcon} onClick={animateContent} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 17L17 0.999999" stroke="black" stroke-width="2" stroke-linecap="round"/>
                     <path d="M1 1L17 17" stroke="black" stroke-width="2" stroke-linecap="round"/>
                  </svg>
               </div>

               <div className={styles.contentRightDiv}>
                  <Image style={{objectFit: "cover"}} alt='mockup' src={imgSrc} fill/>
               </div>
            </div>


            <div className={styles.frontSide} onClick={animateContent}>
               <h4>
                  {title}
               </h4>
            </div>
         </div>
         
      </div>
   )
}

export default ProjectCard;