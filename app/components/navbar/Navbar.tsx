'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Button, {ButtonVariants} from '../Button'
import styles from './navbar.module.css'
import useNavbarStore from '@/app/stores/NavbarStore'
import useWindowSize from '@/app/hooks/useWindowSize'
import LogoIcon from '@/app/LogoIcon'

const Navbar = () => {

   const {isVisible,isCompact,setIsCompact}=useNavbarStore();
   const divRef=useRef<HTMLDivElement>(null);

   const {windowWidth} = useWindowSize();
   
  

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


   return (
      <div className={styles.navbar} ref={divRef}>
         <LogoIcon className={styles.logoIcon}/>
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

export default Navbar;