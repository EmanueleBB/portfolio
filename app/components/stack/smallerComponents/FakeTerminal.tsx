import React from 'react'
import styles from './fakeTerminal.module.css';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })

const FakeTerminal = () => {
   return (
      <div className={styles.mainContainer}>

         <div className={styles.navbar}>
            <div className={styles.circle}>
            </div>
            <div className={styles.circle}>
            </div>
            <div className={styles.circle}>
            </div>
         </div>
         <p className={`${styles.terminalText} ${sourceCodePro.className}`}>
            ~$  cd desktop
         </p>

         <p className={`${styles.terminalText} ${sourceCodePro.className}`}>
            ~$  npx create-next-app@latest --typescript
         </p>
      </div>
   )
}

export default FakeTerminal