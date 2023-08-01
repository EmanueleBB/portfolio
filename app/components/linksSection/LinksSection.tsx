import Link from 'next/link'
import ContactForm from '../contactsSection/ContactForm'
import ContactsSection from '../contactsSection/ContactsSection'
import styles from './linksSection.module.css'


const LinksSection = () => {
   return (
      <div className={styles.linksSectionContainer}>
         <p>
            I'm gonna add a lot more stuff in the times to come to this portfolio. I'm currently working for expanding it with a blog, a 'How I made this', and an about page. But I want to get them right at that requires time. So make sure to stick around to see what's new. In the mainwhile, here's how you can get in touch with me :)
         </p>
         
      </div>
   )
}

export default LinksSection