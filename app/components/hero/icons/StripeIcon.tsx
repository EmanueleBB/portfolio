import React, { forwardRef } from 'react'
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon';



const StripeIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref}  fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M69.3832 14.984C69.3832 10.0281 66.9933 6.11749 62.4256 6.11749C57.8385 6.11749 55.0631 10.0282 55.0631 14.9454C55.0631 20.7724 58.3397 23.715 63.0422 23.715C65.3358 23.715 67.0704 23.1923 68.3809 22.4567V18.5848C67.0705 19.2431 65.5671 19.6497 63.6591 19.6497C61.7895 19.6497 60.132 18.9914 59.9201 16.707H69.3447C69.3447 16.4552 69.3832 15.4486 69.3832 14.984ZM59.8622 13.1449C59.8622 10.9574 61.1922 10.0474 62.4064 10.0474C63.582 10.0474 64.8348 10.9574 64.8348 13.1449H59.8622ZM47.624 6.11749C45.735 6.11749 44.5208 7.00798 43.8464 7.6276L43.5957 6.42729H39.3557V29L44.1739 27.9741L44.1933 22.4954C44.8871 22.9988 45.9085 23.715 47.6046 23.715C51.0545 23.715 54.196 20.9273 54.196 14.7905C54.1767 9.17623 50.9966 6.11749 47.6238 6.11749H47.624ZM46.4675 19.456C45.3304 19.456 44.6557 19.0495 44.1933 18.5462L44.1739 11.3638C44.675 10.8024 45.3689 10.4153 46.4675 10.4153C48.2213 10.4153 49.4355 12.3899 49.4355 14.9259C49.4355 17.5201 48.2406 19.456 46.4675 19.456ZM32.7257 4.97531L37.5633 3.92991V0L32.7257 1.02607V4.97531ZM32.7257 6.44662H37.5633V23.3859H32.7257V6.44662ZM27.5413 7.87914L27.2329 6.44662H23.0699V23.3859H27.8882V11.906C29.0252 10.4153 30.9526 10.6863 31.5501 10.8992V6.44662C30.9334 6.21427 28.6784 5.78835 27.5413 7.87914ZM17.9047 2.2457L13.202 3.2523L13.1828 18.759C13.1828 21.6244 15.3222 23.7344 18.1746 23.7344C19.755 23.7344 20.9113 23.444 21.5473 23.0955V19.1656C20.9307 19.4173 17.8854 20.3078 17.8854 17.4426V10.5701H21.5473V6.44662H17.8854L17.9047 2.2457ZM4.87607 11.3638C4.87607 10.6089 5.49279 10.3184 6.51443 10.3184C7.97907 10.3184 9.82924 10.7638 11.294 11.5575V7.00798C9.6944 6.36917 8.11404 6.11749 6.51443 6.11749C2.60187 6.11749 0 8.16962 0 11.5963C0 16.9393 7.32372 16.0876 7.32372 18.3914C7.32372 19.2817 6.55292 19.5722 5.47355 19.5722C3.87394 19.5722 1.83093 18.9139 0.211944 18.0235V22.631C2.00439 23.4053 3.81607 23.7344 5.47355 23.7344C9.48232 23.7344 12.2384 21.7405 12.2384 18.2751C12.2192 12.5061 4.87607 13.5321 4.87607 11.3638Z" fill="#635BFF"/>
      </svg>
   )
}
export default forwardRef(StripeIcon);