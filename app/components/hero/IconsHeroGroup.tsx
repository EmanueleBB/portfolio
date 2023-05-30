
import styles from './heroSection.module.css'
import HtmlIcon from './icons/HtmlIcon'
import IllustratorIcon from './icons/IllustratorIcon'
import NextIcon from './icons/NextIcon'
import ReactIcon from './icons/ReactIcon'
import PrismaIcon from './icons/PrismaIcon'
import FigmaIcon from './icons/FigmaIcon'
import SassIcon from './icons/SassIcon'
import AfterEffectsIcon from './icons/AfterEffectsIcon'
import GsapIcon from './icons/GsapIcon'
import PhotoshopIcon from './icons/PhotoshopIcon'
import CssIcon from './icons/CssIcon'
import TypescriptIcon from './icons/TypescriptIcon'
import NodeIcon from './icons/NodeIcon'
import ExpressIcon from './icons/ExpressIcon'
import SeoIcon from './icons/SeoIcon'
import ReduxIcon from './icons/ReduxIcon'
import GraphQlIcon from './icons/GraphQlIcon'
import MongoIcon from './icons/MongoIcon'
import PostmanIcon from './icons/PostmanIcon'
import FirebaseIcon from './icons/FirebaseIcon'
import { forwardRef, ForwardRefRenderFunction, Ref } from 'react'



const IconsHeroGroup:ForwardRefRenderFunction<HTMLDivElement,{}> = (props,ref: Ref<HTMLDivElement>) => {
   return (
      <div className={styles.iconsBox} ref={ref}>
         <IllustratorIcon/>
         <HtmlIcon/>
         <FigmaIcon/>
         <SassIcon/>
         <AfterEffectsIcon/>
         <GsapIcon/>
         <PhotoshopIcon/>
         <CssIcon/>
         <TypescriptIcon/>

         <ReactIcon/>
         <NextIcon/>

         <NodeIcon/>
         <PrismaIcon/>
         <ExpressIcon/>
         <SeoIcon/>
         <ReduxIcon/>
         <GraphQlIcon/>
         <MongoIcon/>
         <PostmanIcon/>
         <FirebaseIcon/>
      </div>
   )
}

export default forwardRef(IconsHeroGroup);