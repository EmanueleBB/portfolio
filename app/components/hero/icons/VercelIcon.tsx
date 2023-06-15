import React, { forwardRef } from 'react'
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon';



const VercelIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref}  fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z" fill="#242938"/>
         <path d="M24 6.375L41.8125 37.2849H6.1875L24 6.375Z" fill="white"/>
      </svg>
   )
}
export default forwardRef(VercelIcon);