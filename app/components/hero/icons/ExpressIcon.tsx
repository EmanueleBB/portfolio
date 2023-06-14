import { forwardRef } from 'react'
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon'

const ExpressIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M53.5938 0H16.4062C7.34533 0 0 7.34533 0 16.4062V53.5938C0 62.6547 7.34533 70 16.4062 70H53.5938C62.6547 70 70 62.6547 70 53.5938V16.4062C70 7.34533 62.6547 0 53.5938 0Z" fill="#FFF6E1"/>
         <path d="M62.3438 50.022C61.5477 50.3234 60.6689 50.3228 59.8733 50.0203C59.0776 49.7177 58.4205 49.1342 58.0259 48.38C55.5477 44.6702 52.8112 41.1279 50.181 37.5095L49.0405 35.9891C45.9085 40.1853 42.7766 44.2141 39.9183 48.3953C39.546 49.1161 38.9244 49.6771 38.1692 49.9736C37.414 50.2701 36.5768 50.2819 35.8135 50.0069L47.5658 34.2408L36.6343 19.9947C37.4212 19.7105 38.2821 19.7066 39.0715 19.9836C39.861 20.2606 40.5306 20.8015 40.9675 21.515C43.5064 25.225 46.3192 28.7674 49.1165 32.5228C51.9293 28.7977 54.7116 25.24 57.3114 21.5607C57.6858 20.8515 58.3078 20.3047 59.0591 20.0244C59.8104 19.7441 60.6385 19.7497 61.3859 20.0403L57.1441 25.6658C55.2437 28.1743 53.3736 30.6981 51.3972 33.1459C51.2379 33.2885 51.1104 33.4631 51.0231 33.6582C50.9358 33.8534 50.8907 34.0648 50.8907 34.2787C50.8907 34.4925 50.9358 34.7039 51.0231 34.8991C51.1104 35.0942 51.2379 35.2688 51.3972 35.4114C55.0309 40.231 58.634 45.0656 62.3438 50.022ZM7.65625 33.9064C7.97562 32.386 8.17305 30.8655 8.6141 29.3148C11.2443 19.9646 21.9628 16.0722 29.3366 21.865C33.6544 25.2556 34.7339 30.0599 34.5212 35.4723H10.1954C9.8 45.1419 16.7784 50.9801 25.7029 48.0002C27.1505 47.4823 28.4465 46.612 29.4737 45.468C30.5009 44.3239 31.2271 42.9421 31.5867 41.4472C32.0581 39.9269 32.8182 39.6685 34.2625 40.1093C34.0247 41.9602 33.3703 43.7331 32.3486 45.2947C31.3269 46.8563 29.9644 48.1659 28.3637 49.1251C25.7189 50.5715 22.6844 51.1445 19.6943 50.7623C16.7042 50.38 13.9115 49.0619 11.7157 46.9966C9.54333 44.5541 8.22981 41.4678 7.97562 38.2089C7.97562 37.6921 7.77793 37.175 7.67156 36.6886C7.6615 35.8068 7.6564 34.7882 7.65625 33.9064ZM10.2257 33.3893H32.2254C32.0884 26.3805 27.6642 21.4089 21.7654 21.3635C15.1974 21.2722 10.4995 26.1372 10.2104 33.3589L10.2257 33.3893Z" fill="#0F0F0F"/>
      </svg>

   )
}

export default forwardRef(ExpressIcon);