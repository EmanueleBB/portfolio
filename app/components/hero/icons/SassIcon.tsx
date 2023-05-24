import styles from '../heroSection.module.css'

const SassIcon = () => {
   return (
      <svg className={styles.icon} width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M69.7928 33.8266C69.5923 32.201 68.7687 30.791 67.3381 29.6304C67.3204 29.6088 67.3007 29.5887 67.2795 29.5704L67.2072 29.5186L67.184 29.5023L66.4245 28.9568L66.3986 28.9377L66.3017 28.8695C66.2662 28.8488 66.2282 28.8327 66.1885 28.8218C63.7857 27.3912 59.8078 26.3889 53.7216 28.5368C52.2692 26.093 52.1042 24.1347 53.0765 21.1346C53.2497 20.6123 53.0888 20.2673 52.5706 20.0436C51.5287 19.6004 50.1023 19.8268 49.0904 20.0941C48.6186 20.2168 48.3349 20.4841 48.2449 20.8891C47.604 23.8893 45.7412 26.6303 43.9397 29.2759L43.8334 29.4313C42.7233 27.0776 42.9538 25.2543 43.727 22.9701C43.8811 22.5146 43.7597 22.2119 43.3329 21.9855C42.141 21.3705 40.3532 21.7932 39.6413 22.0033C38.7386 22.2665 37.7703 24.7061 36.6889 27.6272C36.4162 28.3622 36.1816 28.9909 36.0412 29.2841C35.7071 29.9659 35.388 30.7432 35.0498 31.5683C34.2861 33.4352 33.4256 35.5366 32.1955 36.8567C31.7482 35.868 32.4519 34.3093 33.1351 32.797C33.9438 31.0091 34.7075 29.3195 33.8279 28.2408C33.6888 28.0703 33.5162 27.93 33.3209 27.8287C33.1255 27.7274 32.9114 27.6672 32.6919 27.6517C32.4055 27.6299 32.118 27.6767 31.8532 27.7881C31.9446 27.0176 31.9487 26.4094 31.7237 25.6743C31.4018 24.6257 30.5659 24.0379 29.4149 24.0693C26.7939 24.1456 24.5765 26.0985 23.176 27.724C22.2432 28.815 20.1758 29.6468 18.3608 30.3764C17.6435 30.6805 16.9616 30.9532 16.3929 31.226C15.4861 30.4596 14.3337 29.6864 13.1201 28.8695C9.71079 26.5812 5.84742 23.9861 5.71378 20.4677C5.52286 15.2707 11.4413 11.5846 16.607 8.95398C20.5222 6.96298 23.926 5.64291 27.0135 4.92152C31.35 3.90828 35.0129 4.11284 37.8985 5.527C39.4777 6.30022 40.2168 7.98166 39.7477 9.71084C38.5204 14.2042 33.4351 17.2835 29.0863 18.669C26.4666 19.5036 24.237 19.8527 22.2678 19.7381C19.7995 19.595 17.7839 18.3567 16.9221 17.829C16.784 17.7347 16.638 17.6525 16.4857 17.5835L16.4461 17.574C16.3681 17.5545 16.2862 17.557 16.2095 17.581C16.1327 17.6051 16.0641 17.6498 16.0111 17.7103C15.8338 17.9217 15.8965 18.2558 15.9606 18.4249C16.7993 20.6164 18.5312 22.0005 21.1073 22.5392C21.9503 22.708 22.8085 22.7898 23.6683 22.7833C29.6972 22.7833 37.3899 19.3072 40.2155 16.4448C42.1424 14.4947 43.5456 12.4901 44.1266 9.03308C44.7334 5.41245 42.2787 2.89642 39.7777 1.73727C33.6997 -1.06787 26.7966 0.0408229 22.0755 1.46453C16.5525 3.12961 10.8386 6.15703 6.40109 9.77357C0.929913 14.2288 -1.04746 18.3649 0.520801 22.081C2.13133 25.8898 6.0588 28.2722 9.85671 30.5769C11.084 31.3201 12.2514 32.0278 13.3028 32.7588C12.9864 32.9129 12.6632 33.0697 12.3346 33.2265C9.14622 34.7716 5.52968 36.5103 3.52367 39.3836C2.06724 41.4769 1.7945 43.5607 2.71364 45.5776C3.20457 46.6508 4.07734 47.379 5.28967 47.7418C5.92032 47.9205 6.57343 48.0073 7.22886 47.9995C9.58942 47.9995 12.1873 47.0449 13.6014 46.1626C16.0997 44.5944 17.7185 42.4888 18.4139 39.9046C19.0331 37.6054 18.8844 35.3212 17.9844 33.2824L21.0459 31.7387C19.569 36.6481 20.7009 39.58 21.9446 41.1974C22.4028 41.7933 23.2292 42.152 24.1524 42.1683C25.0756 42.1847 25.9252 41.837 26.4052 41.2451C27.3135 40.12 27.9844 38.8041 28.6022 37.4881C28.5694 38.3472 28.6103 39.2173 28.9035 39.955C29.1667 40.6192 29.6004 41.0596 30.1595 41.2287C30.7541 41.4101 31.4509 41.2574 32.1219 40.7992C35.1452 38.7304 37.2126 33.7652 38.8736 29.7736C39.1095 29.2063 39.3359 28.6609 39.5554 28.1508C39.9664 29.6215 40.538 31.0424 41.2601 32.3879C41.421 32.6797 41.4073 32.8079 41.1891 33.0479C40.8605 33.4079 40.4023 33.8429 39.9168 34.3039C38.4467 35.6989 36.6167 37.4404 36.3712 38.9718C36.2757 39.5855 36.6985 40.1446 37.3544 40.2714C39.3277 40.6642 41.7046 40.09 43.7147 38.7373C45.5421 37.5099 46.2294 35.7985 45.7603 33.6656C45.3062 31.6119 46.3426 29.0618 48.8409 26.0807C49.25 27.7894 49.7955 29.1709 50.5482 30.3805L50.5278 30.3969C48.7086 31.9856 46.2158 34.1607 46.603 36.7994C46.6355 37.0504 46.72 37.2918 46.851 37.5083C46.982 37.7248 47.1567 37.9116 47.364 38.0568C47.5855 38.2063 47.8355 38.3085 48.0983 38.3568C48.3612 38.4051 48.6311 38.3986 48.8913 38.3377C51.2737 37.8372 53.067 36.8294 54.3707 35.2598C55.6744 33.6902 55.1985 31.9501 54.7594 30.6C58.1686 29.6755 61.2042 29.6986 64.0462 30.6682C65.6417 31.2137 66.7858 32.1097 67.4459 33.3465C68.2764 34.9025 67.8277 36.3385 66.179 37.3899C65.6731 37.7131 65.429 37.9109 65.414 38.1604C65.4106 38.2183 65.4213 38.2762 65.445 38.3291C65.4687 38.3821 65.5049 38.4285 65.5503 38.4645C65.7413 38.6213 66.3304 38.8941 67.6627 38.0554C68.89 37.2849 69.6101 36.2362 69.7942 34.9189C69.8312 34.5557 69.8308 34.1897 69.7928 33.8266ZM15.2815 37.244L15.2679 37.4186C15.0551 39.415 14.0406 41.1551 12.2473 42.6006C11.1209 43.5089 9.89762 44.0666 8.80393 44.173C8.04026 44.2466 7.48523 44.143 7.15522 43.8634C6.90838 43.6548 6.77611 43.3425 6.7461 42.9088C6.52246 39.4341 11.9718 35.9812 15.0388 34.8452C15.2577 35.6248 15.3398 36.4364 15.2815 37.244ZM29.239 27.4444C28.7344 30.3205 27.263 35.7494 24.9502 37.8563C24.8397 37.9572 24.747 37.9927 24.7047 37.9831C24.6624 37.9736 24.6297 37.9231 24.5956 37.8468C23.8238 36.0576 24.1088 33.0356 25.2775 30.6614C26.1761 28.8313 27.4594 27.619 28.894 27.2521C28.9535 27.2357 29.015 27.227 29.0767 27.2262C29.125 27.2228 29.1731 27.2358 29.2131 27.2631C29.23 27.2897 29.241 27.3197 29.2455 27.351C29.25 27.3822 29.2477 27.4141 29.239 27.4444ZM40.6246 37.9286C40.1896 38.3827 39.5936 38.3213 39.7341 38.155L41.9487 35.8039C41.7701 36.6126 41.2423 37.2822 40.6246 37.9286ZM49.8118 35.8953C49.6012 35.9991 49.3733 36.0633 49.1395 36.0849C49.0768 34.848 50.2755 33.4556 51.4578 32.527C51.7756 33.817 51.1251 35.1807 49.8118 35.8953Z" fill="#FA11FF"/>
      </svg>
   )
}

export default SassIcon;