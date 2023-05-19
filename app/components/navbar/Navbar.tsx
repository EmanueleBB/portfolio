
import Button, {ButtonVariants} from '../Button'
import styles from './navbar.module.css'

const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <a href="" className={styles.navLink}>My tech stack</a>
         <a href="" className={styles.navLink}>Design</a>
         <a href="" className={styles.navLink}>Code</a>
         <a href="" className={styles.navLink}>About me</a>
         <a href="" className={styles.navLink}>resume</a>
         <Button
            variant={ButtonVariants.pink}
            label='Contacts'
         />
      </div>
   )
}

export default Navbar