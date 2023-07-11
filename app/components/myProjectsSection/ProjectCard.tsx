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
   const cardContainerRef=useRef<HTMLDivElement>(null);
   const [animationNeedsToPlayInReverse,setAnimationNeedsToPlayInReverse]=useState(false);

   const tl = useRef<gsap.core.Timeline | null>(null);
   let windowCenterX:number;
   let windowCenterY:number;
   let translateContentX:number;
   let translateContentY:number;

   useEffect(() => {
      windowCenterX=window?.innerWidth/2;
      windowCenterY=window?.innerHeight/2;
   })
   

   const animateContent = () => {
      if (!animationNeedsToPlayInReverse) {

         tl.current = gsap.timeline(); 

         const contentX = contentRef.current?.getBoundingClientRect().left;
         const contentY = contentRef.current?.getBoundingClientRect().y;
         const contentWidth=contentRef.current?.getBoundingClientRect().width;
         const contentHeight=contentRef.current?.getBoundingClientRect().height;

         if(contentWidth&&contentX&&contentHeight&&contentY){
            translateContentX=windowCenterX-contentWidth/2-contentX;
            translateContentY=windowCenterY+contentHeight/2-contentY;

            tl.current.to(contentRef.current,{
               onStart:()=>{
                  gsap.to(cardContainerRef.current,{
                     zIndex:10
                  })
               },
               onReverseComplete:()=>{
                  gsap.to(cardContainerRef.current,{
                     zIndex:1
                  })
               },
               transform:`translateY(-${contentHeight}px) `,
               duration:0.25,
               ease:'power2.out',
               transformOrigin: 'center',
               zIndex:1
            }).to(contentRef.current,{
               zIndex:10,
               duration:0,
            }).to(contentRef.current,{
               borderRadius:22,
               zIndex:10,
               duration:0.5,
               ease:'power3.in',
               transformOrigin: 'center',
               transform:`translateX(${translateContentX}px) translateY(${translateContentY}px) `,
               height:'60vh',
               width:'70vw',
               border:'1px solid grey'
            },'<').to(contentRef.current.querySelector(`.${styles.contentLeftDiv}`),{
               width:'30%',
               duration:0.5,
            },'<').to(contentRef.current.querySelector(`.${styles.closeIcon}`),{
               opacity:1,
               scale:1,
               duraiton:0.2
            },'<')
            .to(contentRef.current.querySelector(`.${styles.contentRightDiv}`),{
               opacity:1,
               duration:0.5,
            },'<')
         }

         setAnimationNeedsToPlayInReverse(true);
      }else {
         if (tl.current) {

           tl.current.reverse()
           
            
         
         }
         setAnimationNeedsToPlayInReverse(false);
      }
   }

   return (


      <div className={styles.projectCardContainer} ref={cardContainerRef}>
         
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
               
               <div  className={styles.contentLeftDiv}>
                  <svg className={styles.closeIcon} onClick={animateContent} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 17L17 0.999999" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                     <path d="M1 1L17 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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