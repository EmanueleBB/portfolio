'use client'

import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';
import styles from './projects.module.css'

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



   const animateContent = () => {
      const tl=gsap.timeline();
      tl.to(contentRef.current,{
         y:-200,
         duration:0.5,
         ease:'power2.out',
         transform:'perspective(1000px) rotateX(-30deg) scaleY(1.6)',
         transformOrigin: 'bottom',
      }).to(contentRef.current,{
         duration:0.5,
         ease:'power2.inOut',
         y:0,
         transform:'scaleY(1)',
         transformOrigin: 'top',
         zIndex:10,
      }).to(contentRef.current,{
         y:0,
         duration:0.2,
         transform:'scale(2)',
         ease:'power2.in',
         
      })
   }

   return (
      <div className={styles.projectCardContainer}>
         <Image fill src={imgSrc} alt='Image of the project'/>
         <h4>
            {title}
         </h4>
         <div className={styles.backSide}>
            <div className={styles.content} ref={contentRef}>
            </div>
            <div className={styles.frontSide} onClick={animateContent}>
            </div>
         </div>
         
      </div>
   )
}

export default ProjectCard;