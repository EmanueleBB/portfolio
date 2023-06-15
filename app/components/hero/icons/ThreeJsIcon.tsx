
import { forwardRef } from 'react';
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon';



const ThreeJsIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      

      <svg className={`${styles.icon} ${className}`} ref={ref} width="70" height="70"  fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0.527528 4.30756e-05C0.446966 0.00131713 0.367728 0.0207369 0.295707 0.0568581C0.223686 0.0929793 0.160734 0.144872 0.111535 0.208678C0.0623351 0.272484 0.028153 0.346561 0.0115306 0.425399C-0.00509169 0.504238 -0.00372657 0.585809 0.0155245 0.664047L5.80356 24.0962C5.80816 24.1233 5.81485 24.1501 5.82356 24.1762L11.6036 47.5923C11.6262 47.6839 11.6726 47.768 11.738 47.8359C11.8035 47.9039 11.8857 47.9533 11.9765 47.9793C12.0672 48.0053 12.1631 48.0068 12.2546 47.9838C12.3461 47.9608 12.4299 47.9141 12.4976 47.8483L47.3718 14.3001C47.4393 14.2348 47.4884 14.1529 47.5143 14.0626C47.5401 13.9723 47.5418 13.8767 47.5191 13.7856C47.4964 13.6944 47.4502 13.6109 47.385 13.5432C47.3199 13.4756 47.2381 13.4262 47.1478 13.4001L35.5798 10.0661C35.5046 10.0233 35.4202 9.99925 35.3338 9.99611L12.5276 3.43006C12.4411 3.37663 12.3412 3.34888 12.2396 3.35006L0.679529 0.0200432C0.630082 0.00612745 0.578891 -0.000608139 0.527528 4.30756e-05ZM1.27553 1.30805L11.1876 4.16007L3.74755 11.3281L1.27553 1.30805ZM12.9876 4.68007L22.7157 7.48009L15.4156 14.5101L12.9876 4.68007ZM11.9436 4.92007L14.3776 14.7721L4.62355 11.9721L11.9436 4.92007ZM24.5037 7.99609L34.2597 10.8041L26.9357 17.8642L24.5037 7.99609ZM23.4637 8.25609L25.8797 18.0562L16.1736 15.2721L23.4637 8.25609ZM36.0638 11.3241L45.9578 14.1721L38.5278 21.3202L36.0638 11.3241ZM35.0157 11.5641L37.4458 21.4162L27.6937 18.6202L35.0157 11.5641ZM4.15155 12.9561L14.0796 15.8041L6.62757 22.9762L4.15155 12.9561ZM15.8616 16.3001L25.6157 19.1002L18.2956 26.1542L15.8616 16.3001ZM14.8256 16.5741L17.2976 26.6082L7.37157 23.7442L14.8256 16.5741ZM27.3737 19.6442L37.3038 22.4942L29.8437 29.6662L27.3737 19.6442ZM26.3337 19.8982L28.8037 29.9222L18.8876 27.0622L26.3337 19.8982ZM7.07357 24.7742L16.8196 27.5862L9.50758 34.6323L7.07357 24.7742ZM18.7816 28.1482L28.5077 30.9542L21.2117 37.9743L18.7816 28.1482ZM17.7016 28.2282L20.1297 38.0823L10.3796 35.2823L17.7016 28.2282ZM9.90959 36.2683L19.9837 39.1523L12.4196 46.4283L9.90959 36.2683Z" fill="white"/>
      </svg>

   )
}
export default forwardRef(ThreeJsIcon);