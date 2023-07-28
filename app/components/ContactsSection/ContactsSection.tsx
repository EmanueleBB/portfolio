'use client'

import React, { ChangeEvent, EventHandler, useState } from 'react'
import styles from './contactsSection.module.css'
import { useForm, SubmitHandler } from "react-hook-form"
import ContactForm from './ContactForm'

type Inputs = {
  example: string
  exampleRequired: string
}


const ContactsSection = () => {


   return (
      <div className={styles.mainContainer} id="contactsSection">
         <h2>
            Let&apos;s get in touch!<span>😎</span>
         </h2>
         <ContactForm/>
      </div>
   )
}

export default ContactsSection