import Image from 'next/image';
import React from 'react';
import styles from './projects.module.css'

interface ProjectCardProps{
   title:string;
   imgSrc:string;
   stack:string[];
}

const ProjectCard:React.FC<ProjectCardProps> = ({
   title,
   imgSrc,
   stack
}) => {

   return (
      <div className={styles.projectCardContainer}>
         <Image fill src={imgSrc} alt='Image of the project'/>
         <h4>
            {title}
         </h4>
      </div>
   )
}

export default ProjectCard;