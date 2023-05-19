'use client'

import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import Button, { ButtonVariants } from '../Button';
import styles from './heroSection.module.css'


const HeroSection = () => {
   const wrapperRef=useRef<HTMLDivElement>(null);
	const h2Ref=useRef<HTMLHeadingElement>(null);
	const h1Ref=useRef<HTMLHeadingElement>(null);
	const pRef=useRef<HTMLParagraphElement>(null);
	const ButtonRef=useRef<HTMLButtonElement>(null);
	

	useLayoutEffect(() => {
		const tl = gsap.timeline();
		console.log({ButtonRef})
		
		tl.from(wrapperRef.current, {
			duration: 2,
			backgroundImage:'radial-gradient(circle at center bottom, black 30%, #2B0A4F 60%, #AF4DC9 90%, #F9A2F0 120%)',
			ease: 'power2.inOut',
			backgroundPosition: 'center top',
		}).from(h2Ref.current, {
         
			duration: 1,
			top:35,
			opacity:0,
			ease: 'power3.out',
		},'<+=1.5').from(h1Ref.current, {
			duration: 1.5,
			top:65,
			opacity:0,
			ease: 'power4.out',
		},'<+=1').from(pRef.current, {
			duration: 2,
			top:25,
			opacity:0,
			ease: 'power4.out',
		},'<+=1').fromTo(ButtonRef.current, {
			top:15,
			opacity:0,
		},{
			duration:0.15,
			top:0,
			opacity:1,
			ease: 'power4.out',
		},'<+=1.25').from('.stagger', {
			duration: 0.15,
			top:15,
			opacity:0,
			ease: 'power4.out',
		},'<+=0.25');
	}, []);



   return (
      <div className={styles.heroMainDiv} ref={wrapperRef}>

			<h2 className={styles.heroH2} ref={h2Ref}>	
				Hi there, I'm Emanuele 👋🏻
			</h2>
			<h1 className={styles.heroH1} ref={h1Ref}>
				Full-stack Web and Mobile<br/>developer
			</h1>
			<p className={styles.heroParagraph} ref={pRef}> 
				I'm a full stack web developer based in Italy.
				React and Next JS are the main frameworks I use for my projects.
				I might have a slight obsession for Apple's designs 
			</p>
			<div className={styles.bottomCtasDiv}>
            <Button
					ref={ButtonRef}
               variant={ButtonVariants.pink}
               label='Contacts'
            />
            <a href="" className={`${styles.navLink} stagger`} >See full stack</a>
         </div>
		</div>
   )
}

export default HeroSection