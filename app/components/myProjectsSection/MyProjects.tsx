import React from 'react'
import ProjectCard from './ProjectCard'
import styles from './projects.module.css'

const MyProjects = () => {
   return (
      <div className={styles.mainContainer}>
         <h3>
            Here are some of my latest projects
         </h3>
         <div className={styles.projectsContainer}>
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
               description='An Airbnb clone made with NextJS 13.3'
            />
            <ProjectCard
               title='Audi RS6 Redesign'
               imgSrc=''
               stack={['Next JS 13.3','Photoshop', 'Sass', 'Gsap']}
               description='Because beautiful cars deserve beautiful landing pages'
            />
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={['HTML','CSS','Javascript']}
               description='My first real project, made with plain HTML, CSS and Javascript'
            />
            <ProjectCard
            title='Full stack Airbnb Clone'
            imgSrc=''
            stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            description=''
            />
            <ProjectCard
            title='Full stack Airbnb Clone'
            imgSrc=''
            stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            description=''
            />
            <ProjectCard
            title='Full stack Airbnb Clone'
            imgSrc=''
            stack={['Next JS 13.3','Mongo DB', 'Prisma', 'Next Auth', 'Cloudinary CDN', 'Tailwind CSS']}
            description=''
            />
         </div>
      </div>
   )
}

export default MyProjects