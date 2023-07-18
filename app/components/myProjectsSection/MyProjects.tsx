import React from 'react'
import CssIcon from '../hero/icons/CssIcon'
import FigmaIcon from '../hero/icons/FigmaIcon'
import HtmlIcon from '../hero/icons/HtmlIcon'
import JavascriptIcon from '../hero/icons/JavascriptIcon'
import MongoIcon from '../hero/icons/MongoIcon'
import NextIcon from '../hero/icons/NextIcon'
import NextRoundedIcon from '../hero/icons/NextRoundedIcon'
import PhotoshopIcon from '../hero/icons/PhotoshopIcon'
import PrismaIcon from '../hero/icons/PrismaIcon'
import ReactIcon from '../hero/icons/ReactIcon'
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
               imgSrc='/airbnbNew.png'
               stack={[<NextRoundedIcon/>,<MongoIcon/>,<TypescriptIcon/>,<ReactIcon/>,<PrismaIcon/>]}
               leftAlign
               description='An Airbnb clone made with NextJS 13.3'
               url='https://rent-app-clone-gray.vercel.app/'
               githubRepoLink='https://github.com/EmanueleBB/Airbnb-Clone'
            />
            <ProjectCard
               title='Audi RS6 landing page redesign'
               imgSrc='/audiRedesign.jpg'
               stack={[<FigmaIcon/>,<PhotoshopIcon/>,<TypescriptIcon/>,<SassIcon/>,<NextRoundedIcon/>]}
               description='Because beautiful cars deserve beautiful websites. Actually, every landing page in the world should be beautiful, but yeah, this one in particular.'
               url='https://www.apple.com/it/mac/'
               githubRepoLink='https://github.com/EmanueleBB/portfolio'
            />
            <ProjectCard
               title='Gruppo Storico Spadaccini'
               imgSrc='/gss1.png'
               stack={[<HtmlIcon/>,<CssIcon/>,<JavascriptIcon/>]}
               description='My first real project, made with plain HTML, CSS and Javascript'
               url='https://www.gruppostoricospadaccini.it/'
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