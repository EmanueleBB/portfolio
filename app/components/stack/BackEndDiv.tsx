import FirebaseIcon from '../hero/icons/FirebaseIcon'
import MongoIcon from '../hero/icons/MongoIcon'
import NodeIcon from '../hero/icons/NodeIcon'
import PrismaIcon from '../hero/icons/PrismaIcon'
import SanityIcon from '../hero/icons/SanityIcon'
import styles from './stack.module.css'

const BackEndDiv = () => {
   return (
      <div className={styles.stackDiv}>
         And the backend stuff I worked with
         <div className={styles.languagesGrid}>
            <NodeIcon/>
            <PrismaIcon/>
            <FirebaseIcon/>
            <MongoIcon/>
            <SanityIcon/>
         </div>


      </div>
   )
}

export default BackEndDiv