'use client'

import React, { ChangeEvent, EventHandler, useState } from 'react'
import styles from './contactsSection.module.css'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}


const ContactsSection = () => {

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Inputs>()

   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
   console.log(watch("example")) // watch input value by passing the name of it

   const [nameHasValue, setNameHasValue] = useState(false);
   const [emailHasValue, setEmailHasValue] = useState(false);
   const [serviceHasValue, setServiceHasValue] = useState(false);
   const [howFoundHasValue, setHowFoundHasValue] = useState(false);
   const [fakepthcaHasValue, setFakepthcaHasValue] = useState(false);


   const handleInputChange = (e:ChangeEvent<HTMLInputElement>,setHasValue:React.Dispatch<React.SetStateAction<boolean>>) => {
      const inputValue = e.target.value;
      setHasValue(inputValue !== '');
      
   };


   return (
      <div className={styles.mainContainer}>
         <h2>
            Let's get in touch!<span>😎</span>
         </h2>

         <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>

            <div className={`${styles.formGroup} ${nameHasValue ? styles.hasValue : ''}`}>
               <input {...register("example")} id='name' onChange={(e) => handleInputChange(e, setNameHasValue)}/>
               <label htmlFor="name">Your name here</label>
            </div>
            <div className={`${styles.formGroup} ${emailHasValue ? styles.hasValue : ''}`}>
               <input {...register("exampleRequired", { required: true })} id='email' onChange={(e) => handleInputChange(e, setEmailHasValue)}/>
               <label htmlFor="email">Your email</label>
            </div>
            <div className={`${styles.formGroup} ${serviceHasValue ? styles.hasValue : ''}`}>
               <input {...register("exampleRequired", { required: true })} id='service' onChange={(e) => handleInputChange(e, setServiceHasValue)}/>
               <label htmlFor="service">What are you looking for?</label>
            </div>
            <div className={`${styles.formGroup} ${howFoundHasValue ? styles.hasValue : ''}`}>
               <input {...register("exampleRequired", { required: true })} id='howFound' onChange={(e) => handleInputChange(e, setHowFoundHasValue)}/>
               <label htmlFor="howFound">How did you find me?</label>
            </div>
            <div className={`${styles.formGroup} ${fakepthcaHasValue ? styles.hasValue : ''}`}>
               <textarea {...register("exampleRequired", { required: true })} id='fakepthca' onChange={(e) => handleInputChange(e as any, setHowFoundHasValue)}/>
               <label htmlFor="fakepthca">13+28?</label>
            </div>

            {errors.exampleRequired && <span>This field is required</span>}
            
      
            <button type="submit">
               Send
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM1 9L15 9V7L1 7L1 9Z" fill="white"/>
               </svg>
            </button>
         </form>
         
      </div>
   )
}

export default ContactsSection