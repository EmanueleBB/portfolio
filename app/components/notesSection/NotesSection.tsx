'use client'


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'


import ContactForm from '../contactsSection/ContactForm'
import ContactsSection from '../contactsSection/ContactsSection'
import styles from './notesSection.module.css'



const NotesSection = () => {

   gsap.registerPlugin(ScrollTrigger);

  const imageRef = useRef<HTMLImageElement>(null);
  const noteSectionContainerRef=useRef<HTMLDivElement>(null);




   useLayoutEffect(() => {

 
      if(noteSectionContainerRef.current){

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: noteSectionContainerRef.current,
            start: 'top 50%',
            end: 'bottom 25%',
            markers: true,
            scrub:true,
            
         }
         });

         tl.to(imageRef.current,{
            opacity:1
         })
      }
   }, []);

      
   return (
      <div className={styles.notesSectionContainer} ref={noteSectionContainerRef}>
         <Image className={styles.astronautImage} src='/astronaut1.png' alt='an astronaut' height= {300} width={300} ref={imageRef}/>

         
         <div className={styles.messageDiv}>
            <p className={styles.noteParagraph}>
               My goal for the near future is to add some more stuff to this portfolio. I want to build a blog section, an 'About me' page and maybe an 'How built this' page. 
            </p>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
            </svg>
         </div>
         <div className={styles.messageDiv}>
         <p className={styles.noteParagraph}>
            I really want to get them right though, and that requires time. I want to focus on something else at the moment, since this project, from the design stage to the developement took all my soul and efforts of the last few months. I'll do my best to get them out as fast as possible, so make sure to stick around to see what's new. 
         </p>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
            </svg>
         </div>
         
         <p className={styles.noteParagraph}>
            In the meanwhile, if you want to get in touch with me, below are all the infos you need. I wish you a great day!
         </p>
         
      </div>
   )
}

export default NotesSection;