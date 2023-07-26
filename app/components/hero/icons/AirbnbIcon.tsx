import { forwardRef } from 'react'
import styles from '../heroSection.module.css'
import { IconProps } from './FigmaIcon'

const AirbnbIcon:React.ForwardRefRenderFunction<SVGSVGElement,IconProps> = ({className},ref) => {
   return (
      <svg className={`${styles.icon} ${className}`} ref={ref} width="70" height="76" viewBox="0 0 70 76" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M68.9483 53.2838C68.6117 52.3388 68.2183 51.4244 67.8439 50.5773C67.2678 49.2741 66.6643 47.9684 66.0805 46.7062L66.0343 46.6061C60.8281 35.3323 55.2404 23.9037 49.4263 12.6392L49.1794 12.1607C48.5863 11.0106 47.9732 9.82119 47.3441 8.65251C46.5977 7.17325 45.6923 5.77978 44.6439 4.49682C43.4629 3.08826 41.9874 1.9558 40.3214 1.1792C38.6543 0.402257 36.8373 -0.000236089 34.9981 1.03893e-07C33.1589 0.000236297 31.342 0.403196 29.6751 1.18057C28.0093 1.95759 26.5342 3.09043 25.3537 4.49928C24.3064 5.78251 23.4015 7.17563 22.6549 8.65416C22.0205 9.83349 21.4014 11.0339 20.8029 12.1949L20.5737 12.6392C14.7594 23.9048 9.17169 35.3329 3.96572 46.6059L3.8897 46.7699C3.31603 48.0113 2.72295 49.2954 2.15638 50.5767C1.78177 51.4233 1.38912 52.3368 1.05197 53.2843C0.0866335 55.865 -0.22103 58.6454 0.156737 61.3748C0.557724 64.1337 1.67335 66.7397 3.39287 68.9342C5.1139 71.1304 7.37855 72.8391 9.96274 73.8913C11.9157 74.6814 14.0032 75.0852 16.1099 75.0805C16.7716 75.0805 17.433 75.0417 18.0904 74.9651C20.7545 74.6258 23.3243 73.7588 25.6496 72.4148C28.6989 70.7017 31.7103 68.1913 35 64.6038C38.2897 68.1913 41.3011 70.7017 44.3505 72.4148C46.6757 73.7589 49.2455 74.6259 51.9097 74.9651C52.5671 75.0419 53.2285 75.0804 53.8904 75.0805C55.997 75.0852 58.0845 74.6814 60.0373 73.8913C62.6215 72.839 64.8861 71.1302 66.6072 68.9339C68.3268 66.7396 69.4425 64.1336 69.8436 61.3748C70.2208 58.6453 69.9132 55.8648 68.9483 53.2838ZM35 57.1947C30.9277 52.0328 28.3145 47.2391 27.3974 43.2204C27.0217 41.7147 26.933 40.1516 27.136 38.613C27.2963 37.4848 27.7107 36.4078 28.3478 35.463C29.1325 34.4459 30.1402 33.6225 31.2933 33.0562C32.4471 32.4898 33.7153 32.1954 35.0006 32.1955C36.2859 32.1956 37.5541 32.4902 38.7078 33.0568C39.8608 33.6231 40.8683 34.4466 41.6527 35.4639C42.2898 36.4088 42.7042 37.4861 42.8646 38.6144C43.0673 40.1536 42.9783 41.7172 42.6021 43.2235C41.6839 47.2416 39.0715 52.0339 35 57.1947ZM65.0869 60.6953C64.8065 62.6243 64.0264 64.4464 62.8242 65.9808C61.6208 67.5165 60.0373 68.7114 58.2304 69.4472C56.4023 70.1794 54.4191 70.4388 52.4642 70.2013C50.4324 69.9397 48.4743 69.2709 46.707 68.235C43.9928 66.7101 41.2453 64.3692 38.1538 60.9353C43.0754 54.8664 46.1489 49.2727 47.2866 44.2904C47.7988 42.1954 47.9098 40.0225 47.614 37.8862C47.3454 36.0456 46.6622 34.2901 45.6159 32.7522C44.3894 31.0919 42.7902 29.7427 40.947 28.8133C39.1027 27.8835 37.066 27.3991 35.0005 27.399C32.935 27.3989 30.8983 27.8831 29.0539 28.8128C27.2106 29.7419 25.6114 31.0908 24.3849 32.7511C23.3388 34.2886 22.6555 36.0436 22.3866 37.8838C22.0906 40.0191 22.201 42.1912 22.712 44.2855C23.8495 49.27 26.923 54.8648 31.8465 60.9356C28.7547 64.3692 26.0072 66.7101 23.2931 68.2353C21.5258 69.2711 19.5676 69.9398 17.5359 70.2013C15.5809 70.4388 13.5975 70.1794 11.7693 69.4472C9.96243 68.7114 8.37895 67.5165 7.1756 65.9808C5.97352 64.4464 5.19366 62.6242 4.91345 60.6953C4.64409 58.7349 4.87328 56.7383 5.57982 54.8899C5.84861 54.135 6.16278 53.3939 6.55216 52.5138C7.10314 51.2682 7.68774 50.0022 8.25321 48.7783L8.32923 48.6137C13.5062 37.4039 19.063 26.0393 24.8457 14.8352L25.0759 14.3892C25.6646 13.2468 26.2735 12.0658 26.8877 10.9248C27.4753 9.74841 28.1864 8.63793 29.009 7.61209C29.7385 6.7311 30.6535 6.02206 31.6887 5.5356C33.2498 4.80189 35.0104 4.60759 36.694 4.98325C38.3775 5.35891 39.8885 6.28323 40.9897 7.61099C41.813 8.63608 42.5243 9.74626 43.1115 10.9226C43.7199 12.0535 44.3234 13.2238 44.9072 14.3556L45.1544 14.8357C50.9368 26.0385 56.4935 37.4028 61.6711 48.6148L61.7176 48.7157C62.2929 49.9604 62.8879 51.2469 63.4479 52.514C63.8378 53.3956 64.1525 54.1372 64.4205 54.8894C65.1268 56.738 65.3559 58.7347 65.0869 60.6953Z" fill="black"/>
      </svg>
   )
}

export default forwardRef(AirbnbIcon);


