'use client'


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'


import ContactForm from '../contactsSection/ContactForm'
import ContactsSection from '../contactsSection/ContactsSection'
import styles from './notesSection.module.css'



const NotesSection = () => {

   gsap.registerPlugin(ScrollTrigger);

   const imageRef = useRef<HTMLImageElement>(null);
   const noteSectionContainerRef=useRef<HTMLDivElement>(null);
   const [currentTime, setCurrentTime] = useState('');
   const firstMessageRef = useRef<HTMLDivElement>(null);
   const secondMessageRef = useRef<HTMLDivElement>(null);
   const thirdMessageRef = useRef<HTMLDivElement>(null);
   const fourthMessageRef = useRef<HTMLDivElement>(null);
   const fifthMessageRef = useRef<HTMLDivElement>(null);
   const sixthMessageRef =useRef<HTMLDivElement>(null);
   const seventhMessageRef =useRef<HTMLDivElement>(null);
   const eightMessageRef =useRef<HTMLDivElement>(null);





   useLayoutEffect(() => {

      if (noteSectionContainerRef.current) {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: noteSectionContainerRef.current,
               start: 'top 25%',
               end: 'bottom bottom',
               markers: true,
               scrub: true,
            },
         });

         const messageRefs = [
            imageRef,
            firstMessageRef,
            secondMessageRef,
            thirdMessageRef,
            fourthMessageRef,
            fifthMessageRef,
            sixthMessageRef,
            seventhMessageRef,
            eightMessageRef
         ];

         messageRefs.forEach((messageRef, index) => {
            if (messageRef.current) {
               tl.to(messageRef.current, {
                  duration: 1,
                  onComplete: () => {
                     gsap.to(messageRef.current, {
                        opacity: 1,
                        top: 0,
                        duration: 0.7,
                        ease:'power2.out'
                     });
                     if (index > 0) {
                        gsap.to(
                           messageRefs[index - 1]?.current?.querySelector('svg') as SVGElement,
                           {
                              opacity: 0,
                              duration: 0.1,
                           }
                        );
                     }
                  },
               });
            }
         });
      }
   }, []);

   
      
   return (
      <div className={styles.notesSectionContainer} ref={noteSectionContainerRef}>
         <Image className={styles.astronautImage} src='/astronaut1.png' alt='an astronaut' height= {300} width={300} ref={imageRef}/>

         <div className={styles.messagesContainer}>
            <div className={styles.messageDiv} ref={firstMessageRef}>
               <p className={styles.noteParagraph}>
                  Hey!            
               </p>
               <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
               </svg>
               
            
            </div>

            <div className={styles.messageDiv} ref={secondMessageRef}>
               <p className={styles.noteParagraph}>
                  
                  Hi, Just one quick last thing! 😄 
               </p>
               <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
               </svg>
               
               
            </div>

            <div className={styles.messageDiv} ref={thirdMessageRef}>
               <p className={styles.noteParagraph}>
                  My goal for the near future is to expand this portfolio with some more sections and a blog. I really want to get them right though and the whole process, from design, to revision, to developement - <i>to redesign and revision an unnecessary amount of times </i> - takes a lot time.
               </p>
               <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
               </svg>
               
            </div>


            <div className={styles.messageDiv} ref={fourthMessageRef}>
               <p className={styles.noteParagraph}>
                  This portfolio alone took all my time and soul of the last few months, and right now I want to focus on something else - like doing leetcode problems 🫠. Also get outside to remember what the sun looks like may be an idea.
               </p>
               <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
               </svg>
               
            </div>

            <div className={styles.messageDiv} ref={fifthMessageRef}>
               <p className={styles.noteParagraph}>
                  I'll try to implement the new features in the shortest time possible, so make sure to stick around to see what's new.
               </p>
               <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
               </svg>
               
            </div>

            <div className={styles.messageDiv} ref={sixthMessageRef}>
               <p className={styles.noteParagraph}>
                  If you want to contact me, below are all the infos you need.  
               </p>
               <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
               </svg>
               
            </div>
            <div className={styles.messageDiv} ref={seventhMessageRef}>
               <p className={styles.noteParagraph}>
                  Thank you for passing by, I really appreciate that. 🥹 
               </p>
               <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
               </svg>
               
            </div>
            <div className={styles.messageDiv} ref={eightMessageRef}>
               <p className={styles.noteParagraph}>
                  Have a great day! 💪
               </p>
               <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0002C10.582 21.4801 19.002 12.7357 19.002 2.02464V0H3.56986V6.08498C3.56986 12.2108 3.56986 15.2737 2.62783 17.7101C2.01148 19.3042 1.11614 20.7537 0 22.0002Z" />
               </svg>
               
            </div>


         </div>
      </div>
   )
}

export default NotesSection;