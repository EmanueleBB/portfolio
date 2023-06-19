import CssIcon from '../hero/icons/CssIcon';
import GraphQlIcon from '../hero/icons/GraphQlIcon';
import HtmlIcon from '../hero/icons/HtmlIcon';
import JavascriptIcon from '../hero/icons/JavascriptIcon';
import SassIcon from '../hero/icons/SassIcon';
import TypescriptIcon from '../hero/icons/TypescriptIcon';
import styles from './stack.module.css'

const LanguagesDiv = () => {
   return (
      <div className={styles.stackDiv}>
         Languages I speak
         <div className={styles.languagesGrid}>
            <JavascriptIcon/>
            <HtmlIcon/>
            <GraphQlIcon/>
            <SassIcon/>
            <TypescriptIcon/>
            <CssIcon/>
         </div>


      </div>
   )
}

export default LanguagesDiv;