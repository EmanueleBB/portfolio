import React from 'react'
import AirbnbIcon from '../hero/icons/AirbnbIcon'
import AudiIcon from '../hero/icons/audiIcon'
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
               stack={[<NextRoundedIcon key='airbnbNext'/>,<MongoIcon key='airbnbMongo'/>,<TypescriptIcon key='airbnbTypescript'/>,<ReactIcon key='airbnbReact'/>,<PrismaIcon key='airbnbPrisma'/>]}
               leftAlign
               description='An Airbnb clone made with NextJS 13.3, MongoDB, Typescript, Prisma and Cloudinary CDN'
               url='https://rent-app-clone-gray.vercel.app/'
               githubRepoLink='https://github.com/EmanueleBB/Airbnb-Clone'
               frontIcon={<AirbnbIcon/>}
            />
            <ProjectCard
               title='Audi RS6 landing page redesign'
               imgSrc='/audiRedesign.jpg'
               stack={[<FigmaIcon key='rs6Figma'/>,<PhotoshopIcon key='rs6Ps'/>,<TypescriptIcon key='rs6Ts'/>,<SassIcon key='rs6Sass'/>,<NextRoundedIcon key='rs6Next'/>]}
               description='Because beautiful cars deserve beautiful websites. Actually, every landing page in the world should be beautiful, but yeah, this one in particular.'
               url='https://www.apple.com/it/mac/'
               githubRepoLink='https://github.com/EmanueleBB/portfolio'
               frontIcon={<AudiIcon/>}
            />
            <ProjectCard
               title='Gruppo Storico Spadaccini'
               imgSrc='/gss1.png'
               stack={[<HtmlIcon key='gssHtml'/>,<CssIcon key='gssCss'/>,<JavascriptIcon key='gssJs'/>]}
               description='My first real project, made with plain HTML, CSS and vanilla Javascript. I started working on this after about 2 months from the beginning of my web development journey'
               url='https://www.gruppostoricospadaccini.it/'
               githubRepoLink=''
               frontIcon='/logoGssNero.png'
            />
            <ProjectCard
               title='The forbidden ecommerce'
               imgSrc='/gss1.png'
               stack={[<NextIcon key='4next'/>]}
               description=''
               url=''
            />
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc='/gss1.png'
               stack={[<NextIcon key='5next'/>]}
               description=''
               url=''
            /> 
            <ProjectCard
               title='Full stack Airbnb Clone'
               imgSrc='/gss1.png'
               stack={[<NextIcon key='6next'/>]}
               description=''
               url=''
            />
         </div>
      </div>
   )
}

export default MyProjects