import { forwardRef } from 'react'
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon'

const CssIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref} width="66" height="70" viewBox="0 0 66 70" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g opacity="1">
         <path fillRule="evenodd" clipRule="evenodd" d="M32.6386 70L7.4309 63.0011L0 0H65.3425L57.9153 62.9938L32.6386 70ZM14.6912 28.5184L15.3845 36.2433H42.1641L41.2674 46.2625L32.6495 48.5931H32.6422L24.0388 46.2698L23.487 40.1094H15.7294L16.8112 52.2413L32.6386 56.6338L48.4914 52.2413L50.4226 30.5912L50.6114 28.5184L52.0054 12.8761H13.3008L14.0051 20.6047H43.5399L42.8357 28.5184H14.6912Z" fill="url(#paint0_linear_302_113)"/>
         </g>
         <defs>
         <linearGradient id="paint0_linear_302_113" x1="6.65525" y1="6.31944" x2="38.0726" y2="78.7122" gradientUnits="userSpaceOnUse">
         <stop stopColor="#3888FF"/>
         <stop offset="1" stopColor="#00C2FF"/>
         </linearGradient>
         </defs>
</svg>
   )
}

export default forwardRef(CssIcon)