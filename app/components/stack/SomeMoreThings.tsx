import ExpressIcon from '../hero/icons/ExpressIcon'
import PhotoshopIcon from '../hero/icons/PhotoshopIcon'
import ReduxIcon from '../hero/icons/ReduxIcon'
import PopupIconAndText, { Directions, Positions } from './smallerComponents/PopupIconAndText'
import styles from './smallerComponents/popupIconAndText.module.css'

const SomeMoreThings = () => {
   return (
      <div className={`${styles.stackDiv} ${styles.someMoreThingsDiv}`}>



         <div className={`${styles.generalContainer} ${styles.bottomToTop} ${styles.leftAlign}`}>
            <ExpressIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.expressTitle}`}>
               Express
            </h3>

            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.expressText}`}>The standard for <br/>writing <span className={`${styles.textSpan} ${styles.expressTextSpan}`}>RESTful APIs</span></p>
               <div className={styles.popupBar}></div>             
            </div>    

         </div>     



         <div className={`${styles.generalContainer} ${styles.topToBottom} ${styles.rightAlign}`}>
            <ReduxIcon className={styles.generalIcon}/>
            <h3 className={`${styles.title} ${styles.reduxTitle}`}>
               Redux & Redux Toolkit
            </h3>

            <div className={`${styles.barAndTextContainer}`}>
               <p className={`${styles.text} ${styles.reduxText}`}>The standard for <span className={`${styles.textSpan} ${styles.reduxTextSpan}`}>state management</span> in React. Even though I think in many cases <span className={`${styles.textSpan} ${styles.reduxTextSpan}`}>Zustand</span> is a much handier option</p>
               <div className={styles.popupBar}></div>             
            </div>  
                 
         </div>    

      </div>
   )
}

export default SomeMoreThings;