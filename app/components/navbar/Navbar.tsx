'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Button, {ButtonVariants} from '../Button'
import styles from './navbar.module.css'
import useNavbarStore from '@/app/stores/NavbarStore'

const Navbar = () => {

   const {isVisible}=useNavbarStore();

   const divRef=useRef<HTMLDivElement>(null);
   
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

   useLayoutEffect(()=>{

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