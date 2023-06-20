import CssIcon from '../hero/icons/CssIcon';
import FirebaseIcon from '../hero/icons/FirebaseIcon';
import GraphQlIcon from '../hero/icons/GraphQlIcon';
import HtmlIcon from '../hero/icons/HtmlIcon';
import JavascriptIcon from '../hero/icons/JavascriptIcon';
import MongoIcon from '../hero/icons/MongoIcon';
import NodeIcon from '../hero/icons/NodeIcon';
import PrismaIcon from '../hero/icons/PrismaIcon';
import SanityIcon from '../hero/icons/SanityIcon';
import SassIcon from '../hero/icons/SassIcon';
import TypescriptIcon from '../hero/icons/TypescriptIcon';
import styles from './stack.module.css'

const LanguagesDiv = () => {
   return (
      <div className={styles.stackDiv}>
         Languages & BackEnd tools
         <div className={styles.languagesGrid}>
            <div>
               <div>
                  <JavascriptIcon className={styles.generalIcon}/>
                  Javascript
               </div>
               <div>
                  <TypescriptIcon className={styles.generalIcon}/>
                  Typescript
               </div>

            </div>
            <div>
               <HtmlIcon className={styles.generalIcon}/>
               <SassIcon className={styles.generalIcon}/>
               <CssIcon className={styles.generalIcon}/>
            </div>
            <div>
               <NodeIcon className={styles.generalIcon}/>
               <FirebaseIcon className={styles.generalIcon}/>
               <PrismaIcon className={styles.generalIcon}/>
            </div>
            <div>
               <GraphQlIcon className={styles.generalIcon}/>
               <MongoIcon className={styles.generalIcon}/>
               <SanityIcon className={styles.generalIcon}/>
            </div>
         </div>
      </div>
   )
}

export default LanguagesDiv;