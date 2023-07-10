'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Button, {ButtonVariants} from '../Button'
import styles from './navbar.module.css'
import useNavbarStore from '@/app/stores/NavbarStore'

import LogoIcon from '@/app/LogoIcon'
import useStackStore from '@/app/stores/StackStore'

const Navbar = () => {

   const {isVisible,isCompact,setIsCompact,toggleIsVisible}=useNavbarStore();
   const {toggleStackIsOnScreen,toggleParagraphIsAnimated}=useStackStore();
   
   const divRef=useRef<HTMLDivElement>(null);
   

   const handleStackButtonClick = () => {
		//Make the navbar disappear
		toggleIsVisible();
		//Handling of the stack section.I need this to make the stack component know when to appear
		toggleStackIsOnScreen();
		toggleParagraphIsAnimated();	
   }
   
  

   useLayoutEffect(()=>{
      const tl = gsap.timeline();

      if(divRef.current){
         const childrenArray = Array.from(divRef.current?.children)

         tl.fromTo(childrenArray,{
            opacity:0,
            top:15,
         },{
            delay:5.10,
            opacity:1,
            top:0,
            stagger:-0.1,
            ease:'power4.out'
         })
      }
   },[]);

   useEffect(()=>{
      if(isVisible){
         gsap.to(divRef.current,{
            opacity:1,
         })
      }else{
         gsap.to(divRef.current,{
            opacity:0,
         })
      }
   },[isVisible]);


   return (
      <div className={styles.navbar} ref={divRef}>
         <LogoIcon className={styles.logoIcon}/>
         <button className={styles.navLink} onClick={handleStackButtonClick}>My tech stack</button>
         <a href="" className={styles.navLink}>Design</a>
         <a href="" className={styles.navLink}>Code</a>
         <a href="" className={styles.navLink}>About me</a>
         <a href='/pdfs/resume.pdf' className={styles.navLink} target='_blank'>resume</a>
         <Button
            variant={ButtonVariants.pink}
            label='Contacts'
         />
      </div>
   )
}

export default Navbar;