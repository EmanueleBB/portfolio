import React, { forwardRef } from 'react'
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon';

const HtmlIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref} width="66" height="70" viewBox="0 0 66 70" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fillRule="evenodd" clipRule="evenodd" d="M7.42727 63.0011L0 0H65.3425L57.9116 62.9938L32.635 70L7.42727 63.0011ZM22.4452 28.5148L21.7409 20.601H51.3084L51.9981 12.8761H13.3008L15.3845 36.2433H42.1641L41.2674 46.2625L32.6495 48.5931H32.6422L24.0388 46.2698L23.487 40.1094H15.7258L16.8076 52.2413L32.635 56.6338L48.4878 52.2413L50.419 30.5912L50.6078 28.5184H22.4452V28.5148Z" fill="url(#paint0_linear_302_107)"/>
         <defs>
         <linearGradient id="paint0_linear_302_107" x1="32.6713" y1="6.73334e-07" x2="56.875" y2="75.8333" gradientUnits="userSpaceOnUse">
         <stop stopColor="#FF4D35"/>
         <stop offset="1" stopColor="#FF7A00"/>
         </linearGradient>
         </defs>
      </svg>
   )
}
export default forwardRef(HtmlIcon);