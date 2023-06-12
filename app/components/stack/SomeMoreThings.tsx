import ExpressIcon from '../hero/icons/ExpressIcon'
import PhotoshopIcon from '../hero/icons/PhotoshopIcon'
import PopupIconAndText, { Directions, Positions } from './smallerComponents/PopupIconAndText'
import styles from './stack.module.css'

const SomeMoreThings = () => {
   return (
      <div className={`${styles.stackDiv} ${styles.someMoreThingsDiv}`}>
         SomeMoreThings
         <PopupIconAndText 
            title='Express' 
            icon={<ExpressIcon/>} 
            barPosition={Positions.left} 
            label={<p>The standard for writing <span>RESTful APIs</span></p>}
            direction={Directions.toTop}
         />
      </div>
   )
}

export default SomeMoreThings