'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Button, {ButtonVariants} from '../Button'
import styles from './navbar.module.css'
import useNavbarStore from '@/app/stores/NavbarStore'

import LogoIcon from '@/app/LogoIcon'
import useStackStore from '@/app/stores/StackStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {

   const {isVisible,isCompact,setIsCompact,toggleIsVisible}=useNavbarStore();
   const {toggleStackIsOnScreen,toggleParagraphIsAnimated}=useStackStore();
   const [showDropdown, setShowDropdown] = useState(false);
   const divRef=useRef<HTMLDivElement>(null);
   const firstStrokeRef=useRef<HTMLDivElement>(null);
   const secondStrokeRef=useRef<HTMLDivElement>(null);
   
   const router = useRouter();

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

         const dropDown=document.querySelector(`.${styles.navbarDropdownWrapper}`)
      
         hamburgerTl.current=gsap.timeline({
            onStart:()=>{gsap.to(dropDown,{
               visibility:'visible',
            })},
            onReverseComplete:()=>{gsap.to(dropDown,{
               visibility:'hidden',
            })}
         });

         const childrenArray = Array.from(dropDown?.children || []);
         
         hamburgerTl.current.to(dropDown,{
            opacity:1,
            duration:0.3      
         },0).to(firstStrokeRef.current,{
            top:'calc(50% - 1px)',
            duration:0.15,
            ease:'power2.in'       
         },0).to(secondStrokeRef.current,{
            top:'calc(-50% + 1px)',
            duration:0.15,
            ease:'power2.in'       
         },0).to(firstStrokeRef.current,{
            transform:'rotate(45deg)',
            duration:0.15,
            ease:'power2.out'       
         },0.15).to(secondStrokeRef.current,{
            transform:'rotate(-45deg)',
            duration:0.15,
            ease:'power2.out'       
         },0.15).to(childrenArray,{
            top:0,
            duration:0.3,
            stagger:0.05,
            opacity:1,
         },0)
      }
      if(showDropdown && hamburgerTl.current){
         hamburgerTl.current.reverse()
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
         <div className={styles.logoIcon} onClick={()=>router.push('/')}>
            <Image src='/logos/logoBig.png' fill alt='logo'/>
         </div>
         <div className={styles.navbarNavlinksWrapper} >
            <button className={styles.navLink} onClick={handleStackButtonClick}>My tech stack</button>
            <Link href="/#designSection"  className={styles.navLink}>Design</Link>
            <Link href="/#codeSection" className={styles.navLink}>Code</Link>
            <Link href="/about" className={styles.navLink}>About me</Link>
            <a href='/pdfs/resume.pdf' className={styles.navLink} target='_blank'>resume</a>
            <Button
               href='/#contactsSection'
               variant={ButtonVariants.pink}
               label='Contacts'
            />   
         </div>
         <div className={styles.hamburgerIcon} onClick={handleHamburgerClick}>
            <div className={styles.hamburgerStroke} ref={firstStrokeRef}></div>
            <div className={styles.hamburgerStroke} ref={secondStrokeRef}></div>
         </div> 
         
            
         <div className={`${styles.navbarDropdownWrapper} `} >
            <button className={styles.navLink} onClick={()=>{handleStackButtonClick();handleHamburgerClick()}}>My tech stack</button>
            <Link href="/#designSection"  className={styles.navLink} onClick={handleHamburgerClick}>Design</Link>
            <Link href="/#codeSection" className={styles.navLink} onClick={handleHamburgerClick}>Code</Link>
            <Link href="/about" className={styles.navLink} onClick={handleHamburgerClick}>About me</Link>
            <Link href='/pdfs/resume.pdf' className={styles.navLink} target='_blank' onClick={handleHamburgerClick}>resume</Link>
            <Link href="/#contactsSection" className={styles.navLink} onClick={handleHamburgerClick}>Contacts</Link> 
         </div>
            
         
         
      </div>
   )
}

export default Navbar;