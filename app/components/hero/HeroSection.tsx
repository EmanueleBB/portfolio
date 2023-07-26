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
	const ButtonRef=useRef<HTMLButtonElement>(null);
	const iconsHeroGroupRef = useRef<HTMLDivElement>(null);

	const {toggleIsVisible}=useNavbarStore();
	const {toggleStackIsOnScreen,toggleParagraphIsAnimated}=useStackStore();

	
	// if(1===2){


	useLayoutEffect(() => {

		const iconsSongSyncAnimation = () => {
			const tl = gsap.timeline();
			const icons = Array.from(iconsHeroGroupRef.current?.childNodes || []);
			tl.to(icons[9],{
				duration:0.187,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			}).to(icons[10],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<0.57').to(icons[8],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.187').to(icons[11],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.57').to(icons[12],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.187').to(icons[7],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=1.5').to(icons[6],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<0.57').to(icons[13],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.187').to(icons[14],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.57').to(icons[15],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.187').to(icons[5],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=1.5').to(icons[3],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<0.57').to(icons[4],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.187').to(icons[17],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.57').to(icons[16],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.187').to(icons[2],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=1.5').to(icons[1],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<0.57').to(icons[0],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.187').to(icons[18],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.57').to(icons[19],{
				duration:2,
				opacity:1,
				stagger:0.5,
				ease:'elastic',
			},'<+=0.187')

		}

		const tl = gsap.timeline({
			
		});
		
		
		tl.from(heroMainDivRef.current, {
			duration: 2,
			backgroundImage:'radial-gradient(circle at center bottom, black 30%, #2B0A4F 60%, #AF4DC9 90%, #F9A2F0 120%)',
			ease: 'power2.inOut',
			backgroundPosition: 'center top',
			onComplete:()=>{iconsSongSyncAnimation()}
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
	// }


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

			<div className={styles.bottomCtasDiv}>
            <Button
					ref={ButtonRef}
               variant={ButtonVariants.pink}
               label='Contacts'
            />
            <a
               onClick={handleStackButtonClick} 
               className={`${styles.navLink} stagger`} 
            >See full stack</a>
         </div>
		</div>
   )
}

export default HeroSection