import { forwardRef } from 'react'
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon'

const SanityIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 4C0 1.79086 1.79086 0 4 0H66C68.2091 0 70 1.79086 70 4V66C70 68.2091 68.2091 70 66 70H4C1.79086 70 0 68.2091 0 66V4Z" fill="#F03E2F"/>
         <path d="M21.5595 18.136C21.5595 24.1505 25.34 27.7298 32.9093 29.6166L40.9298 31.4437C48.0933 33.0602 52.4552 37.0748 52.4552 43.616C52.5083 46.4732 51.5638 49.2595 49.7842 51.4954C49.7842 44.9695 46.3482 41.4438 38.0598 39.323L30.1848 37.5638C23.8782 36.1501 19.011 32.8497 19.011 25.7447C18.9802 22.994 19.8781 20.3133 21.5595 18.136Z" fill="white"/>
         <path d="M44.8558 42.0148C48.2771 44.1651 49.7766 47.1724 49.7766 51.4883C46.9454 55.0517 41.9705 57.0517 36.1239 57.0517C26.2818 57.0517 19.3939 52.2927 17.8632 44.0224H27.3148C28.5316 47.8193 31.7538 49.5786 36.0544 49.5786C41.3044 49.5786 44.7946 46.8267 44.8635 41.9995M26.4726 27.0528C24.9166 26.1468 23.6351 24.8362 22.7643 23.2602C21.9002 21.695 21.4834 19.9223 21.5595 18.136C24.2917 14.6021 29.044 12.4447 34.8376 12.4447C44.8635 12.4447 50.6642 17.6471 52.0959 24.9703H43.0036C42.0011 22.0828 39.491 19.8352 34.9142 19.8352C30.024 19.8352 26.687 22.6319 26.4956 27.0528" fill="#F9B1AB"/>
      </svg>  
   )
}

export default forwardRef(SanityIcon);