import Link from 'next/link'
import styles from './linksSection.module.css'


const LinksSection = () => {
   return (
      <div className={styles.linksSectionContainer}>
         <h2>
            And from here you can give a look to...
         </h2>
            <Link href='/about'>Who am I?</Link>
            <Link href='/about'>My resume</Link>
         <h2>
            Or...
         </h2>
      </div>
   )
}

export default LinksSection