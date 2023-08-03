'use client'

import useNavbarStore from '@/app/stores/NavbarStore';
import useStackStore from '@/app/stores/StackStore';
import gsap from 'gsap';

import {ReactNode, useLayoutEffect, useRef } from 'react';
import Button, { ButtonVariants } from '../Button';
import styles from './heroSection.module.css'
import IconsHeroGroup from './IconsHeroGroup';


const HeroSection = () => {

   const heroMainDivRef=useRef<HTMLDivElement>(null);
	const h2Ref=useRef<HTMLHeadingElement>(null);
	const h1Ref=useRef<HTMLHeadingElement>(null);
	const pRef=useRef<HTMLParagraphElement>(null);
	const ButtonRef=useRef<HTMLAnchorElement>(null);
	const iconsHeroGroupRef = useRef<HTMLDivElement>(null);
	const seeStackRef=useRef<HTMLAnchorElement>(null);

	const {toggleIsVisible}=useNavbarStore();
	const {toggleStackIsOnScreen,toggleParagraphIsAnimated}=useStackStore();

	
	const iconsAnimation = () => {
		const tlIcons = gsap.timeline();
		const icons = Array.from(iconsHeroGroupRef.current?.childNodes || []);
		tlIcons.to(icons[10],{
			onStart:()=>{gsap.to(`.${styles.shadow}`,{
				opacity:1,
				duration:0,
			})},
			transform:'scale(0.6)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		}).to(icons[9],{
			transform:'scale(0.6)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[11],{

			transform:'scale(0.6)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[8],{
			transform:'scale(0.6)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[12],{
			transform:'scale(0.65)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[7],{
			transform:'scale(0.65)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[13],{
			transform:'scale(0.7)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[6],{
			transform:'scale(0.7)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[14],{
			transform:'scale(0.75)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[5],{
			transform:'scale(0.75)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[15],{
			transform:'scale(0.9)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[4],{

			transform:'scale(0.9)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[16],{
			transform:'scale(1)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[3],{
			transform:'scale(1)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[17],{
			transform:'scale(1)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[2],{
			transform:'scale(1)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[18],{
			transform:'scale(1.2)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[1],{
			transform:'scale(1.2)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[19],{
			transform:'scale(1.4)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1').to(icons[0],{
			transform:'scale(1.4)',
			opacity:1,
			filter:'blur(0px)',
			duration:0.7,
		},'<+=0.1')
	}


	useLayoutEffect(() => {

		const tl = gsap.timeline({
		});

		tl.to(heroMainDivRef.current, {
			duration: 2,
			backgroundImage:'radial-gradient(circle at center bottom, black 80%, #2B0A4F 100%, #AF4DC9 160%, #F9A2F0 220%)',
			ease: 'power2.inOut',
			backgroundPosition: 'center top',
			
		}).to(h2Ref.current, {
			
			duration: 1.2,
			transform:'scale(1)',
			filter:'blur(0px)',
			opacity:1,
			ease: 'power3.out',
		},'<+=1.5').to(h1Ref.current, {
			transform:'scale(1)',
			filter:'blur(0px)',
			opacity:1,
			duration: 3,
			backgroundImage:'radial-gradient(circle at center, #FD95FF 0%, #fc3dff 70%, transparent 110%)',
			ease: 'power3.out',
		},'<0.5').to(pRef.current, {
			onComplete:()=>iconsAnimation(),
			duration: 0.8,
			transform:'scale(1)',
			filter:'blur(0px)',
			opacity:1,
			ease: 'power2.out',
		},'<+=0.7').to(ButtonRef.current, {
			opacity:1,
			ease: 'power2.out',
		},'<+=1.25').from(`.${styles.stagger}`, {
			duration: 0.15,
			top:15,
			opacity:0,
			ease: 'power4.out',
		},'<+=0.25');
	}, []);
	


   const handleStackButtonClick = () => {
		//Make the navbar disappear
		toggleIsVisible();
		//Handling of the stack section.I need this to make the stack component know when to appear
		toggleStackIsOnScreen();
		toggleParagraphIsAnimated();	
   } 


   return (
      <div className={styles.heroMainDiv} ref={heroMainDivRef}>

			<h2 className={styles.heroH2} ref={h2Ref}>	
				Hi there, I&apos;m Emanuele 👋🏻
			</h2>
			<h1 className={styles.heroH1} ref={h1Ref}>
				Web developer &<br/>UX/UI designer
			</h1>
			<p className={styles.heroParagraph} ref={pRef}> 
				I&apos;m a full stack web developer based in Italy.
				React and Next JS are the main frameworks I use for my projects.
				I might have a slight obsession for Apple&apos;s way of designing things :)
			</p>

			<IconsHeroGroup ref={iconsHeroGroupRef}/>
			<div className={styles.shadow}/>

			<div className={styles.bottomCtasDiv}>
            <Button
					href='/#contactsSection'
					ref={ButtonRef}
               variant={ButtonVariants.pink}
               label='Contacts'
            />
            <a ref={seeStackRef}
               onClick={handleStackButtonClick} 
               className={`${styles.navLink} ${styles.stagger}`} 
            >See full stack</a>
         </div>
		</div>
   )
}

export default HeroSection