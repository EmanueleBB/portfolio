import { forwardRef } from 'react';
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon';

const PrismaIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref} width="59" height="70" viewBox="0 0 59 70" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M52.2932 55.4923L20.8025 64.7793C19.8404 65.0632 18.9183 64.2335 19.1206 63.2654L30.3703 9.54431C30.5808 8.53916 31.9735 8.38015 32.4128 9.31052L53.2425 53.4152C53.6354 54.2478 53.1871 55.2291 52.293 55.4924L52.2932 55.4923ZM57.6932 53.3009L33.5755 2.23206C31.9855 -0.733502 28.2232 -0.625904 26.7533 1.85608L0.596194 44.1009C-0.214138 45.4182 -0.198096 47.0417 0.642263 48.3419L13.4284 68.0921C14.7467 69.6593 15.9658 70.3985 18.0479 69.7844L55.1621 58.839C57.6346 58.1007 58.8261 55.7187 57.6932 53.3009Z" fill="white"/>
      </svg>

   )
}
export default forwardRef(PrismaIcon);