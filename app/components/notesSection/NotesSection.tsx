'use client'


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useLayoutEffect } from 'react'

import ContactForm from '../contactsSection/ContactForm'
import ContactsSection from '../contactsSection/ContactsSection'
import styles from './notesSection.module.css'


const NotesSection = () => {

   gsap.registerPlugin(ScrollTrigger);

   useLayoutEffect(()=>{

      const tl=gsap.timeline();

   },[])

   return (
      <div className={styles.notesSectionContainer}>
         <Image className={styles.astronautImage} src='/astronaut1.png' alt='an astronaut' height= {300} width={300}/>
         <p className={styles.noteParagraph}>
            Hi, yes, just a quick last thing. 
         </p>
         <p className={styles.noteParagraph}>
            My goal for the near future is to add some more stuff to this portfolio. I want to build a blog section, an 'About me' page and maybe an 'How built this' page. 
         </p>
         <p className={styles.noteParagraph}>
            I really want to get them right though, and that requires time. I want to focus on something else at the moment, since this project, from the design stage to the developement took all my soul and efforts of the last few months. I'll do my best to get them out as fast as possible, so make sure to stick around to see what's new. 
         </p>
         <p className={styles.noteParagraph}>
            In the meanwhile, if you want to get in touch with me, below are all the infos you need. I wish you a great day!
         </p>
         
      </div>
   )
}

export default NotesSection