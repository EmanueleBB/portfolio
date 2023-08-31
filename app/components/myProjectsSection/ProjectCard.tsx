'use client'

import gsap from 'gsap';
import Image from 'next/image';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import styles from './projects.module.css';
import {FiGithub} from 'react-icons/fi'
import { BsArrowUpRightSquare} from 'react-icons/bs';
import GithubIcon from '../hero/icons/GithubIcon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useWindowResize from '@/app/hooks/useWindowResize';

interface ProjectCardProps{
   title:string;
   imgSrc:string;
   stack:ReactElement[];
   description:string;
   url:string;
   githubRepoLink?:string;
   leftAlign?:boolean;
   frontIcon?:ReactElement|string;
}

const ProjectCard:React.FC<ProjectCardProps> = ({
   title,
   imgSrc,
   stack,
   description,
   url,
   leftAlign,
   githubRepoLink,
   frontIcon
}) => {

   const contentRef=useRef<HTMLDivElement>(null);
   const backSideRef=useRef<HTMLDivElement>(null);
   const folderContainerRef=useRef<HTMLDivElement>(null);
   const [animationNeedsToPlayInReverse,setAnimationNeedsToPlayInReverse]=useState(false);
   const [windowCenter, setWindowCenter] = useState<{ X: number; Y: number }>({
      X: 0,
      Y: 0
   });

   const windowSize = useWindowResize();

   const tl = useRef<gsap.core.Timeline | null>(null);
   
   let translateContentX:number;
   let translateContentY:number;
   let windowCenterX:number;
   let windowCenterY:number;
   let finalSizes={
      height: windowSize.width <= 1068 ? windowSize.height * 0.8 : windowSize.height * 0.65,
      width: windowSize.width <= 1068 ? windowSize.width * 0.8 : windowSize.width * 0.9
   }

   
   
   windowCenterX=windowSize.width/2;
   windowCenterY=windowSize.height/2;

   useEffect(()=>{
      windowCenterX=windowSize.width/2;
      windowCenterY=windowSize.height/2;
      finalSizes={
         height: windowSize.width <= 1068 ? windowSize.height * 0.85 : windowSize.height * 0.65,
         width: windowSize.width <= 1068 ? windowSize.width * 0.8 : windowSize.width * 0.8
      }
   },[windowSize])

   const animateContent = () => {

      if (!animationNeedsToPlayInReverse) {

         const contentX = contentRef.current?.getBoundingClientRect().left;
         const contentY = contentRef.current?.getBoundingClientRect().top;
         const contentWidth=contentRef.current?.getBoundingClientRect().width;
         const contentHeight=contentRef.current?.getBoundingClientRect().height;

         tl.current = gsap.timeline(); 

         //changed a bit for contentY since the vertical position relative to the folder was giving me problems in the animation
         if(contentWidth&&contentX&&contentHeight&&contentY&&folderContainerRef.current&&backSideRef.current){
            
            translateContentX = windowCenterX - contentWidth / 2 - contentX;
            translateContentY = windowCenterY + finalSizes.height / 2 - contentY;
         
            tl.current.to(contentRef.current,{
               onStart:()=>{
                  gsap.to(folderContainerRef.current,{
                     zIndex:10
                  })
                  
               },
               onReverseComplete:()=>{
                  gsap.to(folderContainerRef.current,{
                     zIndex:1
                  })
                  
               },
               transform:`translateY(-${contentHeight}px) `,
               duration:0.4,
               ease:'power2.out',
               zIndex:1
            }).to(contentRef.current,{
               zIndex:10,
               duration:0,
            }).to(contentRef.current,{
               borderRadius:22,
               zIndex:10,
               duration:0.5,
               ease:'power3.in',
               transform: `translateX(${translateContentX}px) translateY(${translateContentY-backSideRef.current?.getBoundingClientRect().height*0.88}px)`, // Changed here
               height: `${finalSizes.height}px`, 
               width: `${finalSizes.width}px` 
               
            },'<').to(folderContainerRef.current.querySelector(`.${styles.overlay}`),{
               opacity:1,
               display:'flex',
               duration:0.3,
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
           tl.current.reverse();
         }
         setAnimationNeedsToPlayInReverse(false);
      }
   }




   return (
      <div className={styles.foldersContainer} ref={folderContainerRef}>
         
         <div className={styles.backSide} ref={backSideRef}>
            <svg width="383" height="297" viewBox="0 0 383 297" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M127.331 0C132.754 0 138.002 1.91618 142.149 5.41017L150.078 12.0898C154.226 15.5838 159.474 17.5 164.897 17.5H359.5C372.203 17.5 382.5 27.7975 382.5 40.5V274C382.5 286.703 372.203 297 359.5 297H23C10.2974 297 0 286.703 0 274V23C0 10.2975 10.2975 0 23 0H127.331Z" fill="url(#paint0_linear_645_371)"/>
               <defs>
               <linearGradient id="paint0_linear_645_371" x1="191.25" y1="0" x2="191.25" y2="297" gradientUnits="userSpaceOnUse">
               <stop stopColor="#00B2D9"/>
               <stop offset="0.203457" stopColor="#0089A7"/>
               </linearGradient>
               </defs>
            </svg>

            <div className={styles.overlay}>
            </div>

            <div className={styles.content} ref={contentRef}>
                  
               <div  className={styles.contentLeftDiv}>
                  <svg className={styles.closeIcon} onClick={animateContent} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM7.29289 24.7071C6.90237 24.3166 6.90237 23.6834 7.29289 23.2929L14.5858 16L7.29289 8.70713C6.90237 8.3166 6.90237 7.68344 7.29289 7.29291C7.68342 6.90239 8.31658 6.90239 8.70711 7.29291L16 14.5858L23.2929 7.29289C23.6834 6.90237 24.3166 6.90237 24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L17.4142 16L24.7071 23.2929C25.0976 23.6834 25.0976 24.3166 24.7071 24.7071C24.3166 25.0977 23.6834 25.0977 23.2929 24.7071L16 17.4142L8.70711 24.7071C8.31658 25.0976 7.68342 25.0976 7.29289 24.7071Z"/>
                  </svg>
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
                  <div className={styles.linkIconsContainer}>
                     {githubRepoLink && (<Link href={githubRepoLink} className={styles.linkIcon} target='_blank'>
                        <FiGithub />
                     </Link>)}
                     <Link href={url} className={styles.linkIcon} target='_blank'>
                     <BsArrowUpRightSquare/>

                     </Link>
                  </div>
               </div>
               
                  <div className={styles.contentRightDiv}>
                  
                     <Image style={{backgroundPositionX:leftAlign?'100%':'center',objectFit:"cover"}} alt='mockup' src={imgSrc} fill/>
                  </div>
            </div>


            <div className={styles.frontSide} onClick={animateContent}>
            {typeof frontIcon === "string" ? (
               <img src={frontIcon} alt="Icon"/>
            ) : (
               frontIcon
            )}
               <h4>
                  {title}
               </h4>
            </div>
         </div>
         
      </div>
   )
}

export default ProjectCard;