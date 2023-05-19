'use client'

import { RefObject, useLayoutEffect, useRef } from 'react'
import Button, {ButtonVariants} from './components/Button'
import styles from './page.module.css'
import gsap from 'gsap'
import { CustomEase } from 'gsap/all'

export default function Home(){

	const wrapperRef=useRef<HTMLDivElement>(null);
	const h2Ref=useRef<HTMLHeadingElement>(null);
	const h1Ref=useRef<HTMLHeadingElement>(null);

	
	
	useLayoutEffect(() => {
		const tl = gsap.timeline();
		
		
		tl.from(wrapperRef.current, {
			duration: 1.5,
			backgroundImage:'radial-gradient(circle at center bottom, black 30%, #2B0A4F 60%, #AF4DC9 90%, #F9A2F0 120%)',
			ease: 'power2.inOut',
			backgroundPosition: 'center top',
		}).from(h2Ref.current, {
			duration: 2,
			top:100,
			opacity:0,
			ease: 'power3.out',
		},'<+=1').from(h1Ref.current, {
			duration: 1.5,
			top:50,
			opacity:0,
			ease: 'power4.out',
		},'<+=1.2');
	}, []);

	return (
		<div className={styles.heroMainDiv} ref={wrapperRef}>
			<h2 className={styles.heroH2} ref={h2Ref}>	
				Hi there, I'm Emanuele 👋🏻
			</h2>
			<h1 className={styles.heroH1} ref={h1Ref}>
				Full-stack Web and Mobile<br/>developer
			</h1>
			<p className={styles.heroParagraph}> 
				I'm a full stack web developer based in Italy.
				React and Next JS are the main frameworks I use for my projects.
				I might have a slight obsession for Apple's designs 
			</p>
			<div className={styles.bottomCtasDiv}>
            <Button
               variant={ButtonVariants.pink}
               label='Contacts'
            />
            <a href="" className={styles.navLink}>See full stack</a>
         </div>
			
		</div>
	)
}
