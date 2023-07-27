'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Button, {ButtonVariants} from '../Button'
import styles from './navbar.module.css'
import useNavbarStore from '@/app/stores/NavbarStore'

import LogoIcon from '@/app/LogoIcon'
import useStackStore from '@/app/stores/StackStore'

const Navbar = () => {

   const {isVisible,isCompact,setIsCompact,toggleIsVisible}=useNavbarStore();
   const {toggleStackIsOnScreen,toggleParagraphIsAnimated}=useStackStore();
   const [showDropdown, setShowDropdown] = useState(false);
   const divRef=useRef<HTMLDivElement>(null);
   const firstStrokeRef=useRef<HTMLDivElement>(null);
   const secondStrokeRef=useRef<HTMLDivElement>(null);

   const hamburgerTl = useRef<gsap.core.Timeline | null>(null);
   

   const handleStackButtonClick = () => {
		//Make the navbar disappear
		toggleIsVisible();
		//Handling of the stack section.I need this to make the stack component know when to appear
		toggleStackIsOnScreen();
		toggleParagraphIsAnimated();	
   }
   
   // useLayoutEffect(()=>{
   //    const tl = gsap.timeline();

   //    if(divRef.current){
   //       const childrenArray = Array.from(divRef.current?.children)

   //       tl.fromTo(childrenArray,{
   //          opacity:0,
   //          top:15,
   //       },{
   //          delay:5.10,
   //          opacity:1,
   //          top:0,
   //          stagger:-0.1,
   //          ease:'power4.out'
   //       })
   //    }
   // },[]);

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

   


   const handleHamburgerClick = () => {

      setShowDropdown(!showDropdown);
      

      if(!showDropdown){

         hamburgerTl.current=gsap.timeline();

         hamburgerTl.current.to(firstStrokeRef.current,{
            top:'calc(50% - 1px)',
            duration:0.15,
            ease:'power1.in'       
         }).to(secondStrokeRef.current,{
            top:'calc(-50% + 1px)',
            duration:0.15,
            ease:'power1.in'       
         },'<').to(firstStrokeRef.current,{
            transform:'rotate(45deg)',
            duration:0.15,
            ease:'power1.out'       
         }).to(secondStrokeRef.current,{
            transform:'rotate(-45deg)',
            duration:0.15,
            ease:'power1.out'       
         },'<')
      }
      if(showDropdown && hamburgerTl.current){
         hamburgerTl.current.reverse();
      }
   };

   useEffect(() => {
      if (showDropdown) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }, [showDropdown]);


   return (
      <div className={styles.navbar} ref={divRef}>
         <LogoIcon className={styles.logoIcon}/>
         <div className={styles.navbarNavlinksWrapper}>
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
         <div className={styles.hamburgerIcon} onClick={handleHamburgerClick}>
            <div className={styles.hamburgerStroke} ref={firstStrokeRef}></div>
            <div className={styles.hamburgerStroke} ref={secondStrokeRef}></div>
         </div> 
         {
            showDropdown && (
               <div className={styles.navbarDropdownWrapper}>
                  <button className={styles.navLink} onClick={()=>{handleStackButtonClick();handleHamburgerClick()}}>My tech stack</button>
                  <a href="" className={styles.navLink} onClick={handleHamburgerClick}>Design</a>
                  <a href="" className={styles.navLink} onClick={handleHamburgerClick}>Code</a>
                  <a href="" className={styles.navLink} onClick={handleHamburgerClick}>About me</a>
                  <a href='/pdfs/resume.pdf' className={styles.navLink} target='_blank' onClick={handleHamburgerClick}>resume</a>
                  <Button
                     variant={ButtonVariants.pink}
                     label='Contacts'
                     onClick={handleHamburgerClick}
                  />   
               </div>
            )
         }
         
      </div>
   )
}

export default Navbar;