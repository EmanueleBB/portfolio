import React from 'react'
import FigmaIcon from '../hero/icons/FigmaIcon'
import NextIcon from '../hero/icons/NextIcon'
import PhotoshopIcon from '../hero/icons/PhotoshopIcon'
import SassIcon from '../hero/icons/SassIcon'
import TypescriptIcon from '../hero/icons/TypescriptIcon'
import MidjourneyDiv from '../stack/MidjourneyDiv'
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
               stack={[<NextIcon/>]}
               description='An Airbnb clone made with NextJS 13.3'
               url=''
               githubRepoLink=''
            />
            <ProjectCard
               title='Audi RS6 landing page redesign'
               imgSrc='/audiRedesign.jpg'
               stack={[<FigmaIcon/>,<PhotoshopIcon/>,<NextIcon/>,<TypescriptIcon/>,<SassIcon/>]}
               description='Because beautiful cars deserve beautiful websites. Actually, every landing page in the world should be beautiful, but yeah, this one in particular.'
               url=''
               githubRepoLink=''
            />
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={[<NextIcon/>]}
               description='My first real project, made with plain HTML, CSS and Javascript'
               url=''
               githubRepoLink=''
            />
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={[<NextIcon/>]}
               description=''
               url=''
            />
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={[<NextIcon/>]}
               description=''
               url=''
            /> 
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc=''
               stack={[<NextIcon/>]}
               description=''
               url=''
            />
         </div>
      </div>
   )
}

export default MyProjects