'use client'

import gsap from 'gsap';
import Image from 'next/image';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import styles from './projects.module.css';
import {IoIosCloseCircleOutline} from 'react-icons/io'

interface ProjectCardProps{
   title:string;
   imgSrc:string;
   stack:ReactElement[];
   description:string;
   url:string;
   githubRepoLink?:string;
}

const ProjectCard:React.FC<ProjectCardProps> = ({
   title,
   imgSrc,
   stack,
   description,
   url
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
               duration:0.4,
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
            },'<').to(contentRef.current.querySelector(`.${styles.closeIcon}`),{
               opacity:1,
               width:34,
               height:34,
               duraiton:0.2
            },'<')
            .to(contentRef.current.querySelector(`.${styles.contentRightDiv}`),{
               opacity:1,
               duration:0.5,
            },'<').to(contentRef.current.querySelector(`h2`),{
               opacity:1,
               top:0,
               duration:0.3,
            }).to(contentRef.current.querySelector(`p`),{
               opacity:1,
               top:0,
               duration:0.3,
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
                  <svg className={styles.closeIcon} onClick={animateContent} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM7.29289 24.7071C6.90237 24.3166 6.90237 23.6834 7.29289 23.2929L14.5858 16L7.29289 8.70713C6.90237 8.3166 6.90237 7.68344 7.29289 7.29291C7.68342 6.90239 8.31658 6.90239 8.70711 7.29291L16 14.5858L23.2929 7.29289C23.6834 6.90237 24.3166 6.90237 24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L17.4142 16L24.7071 23.2929C25.0976 23.6834 25.0976 24.3166 24.7071 24.7071C24.3166 25.0977 23.6834 25.0977 23.2929 24.7071L16 17.4142L8.70711 24.7071C8.31658 25.0976 7.68342 25.0976 7.29289 24.7071Z"/>
                  </svg>

               <div  className={styles.contentLeftDiv}>
                  <h2>
                     {title}
                  </h2>
                  <p>
                     {description}
                  </p>
                  <div className={styles.stackIconsContainer}>
                     {
                        stack.map((icon,idx)=>(
                           <div key={idx} className={styles.iconBox}>
                              {icon}
                           </div>
                        ))
                     }
                  </div>
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