import { forwardRef } from 'react';
import styles from '../heroSection.module.css'


export interface IconProps{
   className?:string;
   ref?:React.Ref<SVGSVGElement>;
}

const FigmaIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref} viewBox="0 0 48 74"  width="48" height="74"  fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M11.6667 70.0001C18.1067 70.0001 23.3333 64.7734 23.3333 58.3334V46.6667H11.6667C5.22667 46.6667 0 51.8934 0 58.3334C0 64.7734 5.22667 70.0001 11.6667 70.0001Z" fill="#0ACF83"/>
         <path d="M0 34.9999C0 28.5599 5.22667 23.3333 11.6667 23.3333H23.3333V46.6666H11.6667C5.22667 46.6666 0 41.4399 0 34.9999Z" fill="#A259FF"/>
         <path d="M0 11.6667C0 5.22667 5.22667 0 11.6667 0H23.3333V23.3333H11.6667C5.22667 23.3333 0 18.1067 0 11.6667Z" fill="#F24E1E"/>
         <path d="M23.3334 0H35C41.44 0 46.6667 5.22667 46.6667 11.6667C46.6667 18.1067 41.44 23.3333 35 23.3333H23.3334V0Z" fill="#FF7262"/>
         <path d="M46.6667 34.9999C46.6667 41.4399 41.44 46.6666 35 46.6666C28.56 46.6666 23.3334 41.4399 23.3334 34.9999C23.3334 28.5599 28.56 23.3333 35 23.3333C41.44 23.3333 46.6667 28.5599 46.6667 34.9999Z" fill="#1ABCFE"/>
      </svg>
   )
}

export default forwardRef(FigmaIcon);