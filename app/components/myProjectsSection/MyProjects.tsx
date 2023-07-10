import React from 'react'
import ProjectCard from './ProjectCard'
import styles from './projects.module.css'

const MyProjects = () => {
   return (
      <div className={styles.mainContainer}>
         <h3>
            Here are some of my projectssssss
         </h3>
         <div className={styles.projectsContainer}>
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            />
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            />
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            />
            <ProjectCard
            title='Full stack Airbnb Clone'
            imgSrc=''
            stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            />
            <ProjectCard
            title='Full stack Airbnb Clone'
            imgSrc=''
            stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            />
            <ProjectCard
            title='Full stack Airbnb Clone'
            imgSrc=''
            stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            />
         </div>
      </div>
   )
}

export default MyProjects