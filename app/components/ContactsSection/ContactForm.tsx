'use client'

import React, { ChangeEvent, useState } from 'react';
import styles from './contactsSection.module.css';
import { useForm } from 'react-hook-form';


const ContactForm = () => {


   const [nameHasValue, setNameHasValue] = useState(false);
   const [emailHasValue, setEmailHasValue] = useState(false);
   const { register, handleSubmit, watch } = useForm();

   const data = watch('name');

   const handleFieldChange = (event:ChangeEvent<HTMLInputElement>) => {
      const name=event.target.name;
      const string = event.target.value;
      console.log(string);
      
      if(name==='name'){
         setNameHasValue(string.length!==0);
      }else if(name==='email'){
         setEmailHasValue(string.length!==0);
      }
   };




   return (
      <form className={styles.contactForm}>
         <div className={`${styles.formGroup} ${nameHasValue ? styles.hasValue : ''}`}>
            <input {...register('name')} onChange={(event)=>handleFieldChange(event)}/>
            <label htmlFor='name'>Your name here</label>
         </div>
            <div className={`${styles.formGroup} ${emailHasValue ? styles.hasValue : ''}`}>
            <input {...register('email')} onChange={(event)=>handleFieldChange(event)}/>
            <label htmlFor='email'>Your email</label>
         </div>

         <button type='submit'>
            Send
         <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
         >
            <path d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM1 9L15 9V7L1 7L1 9Z' fill='white' />
         </svg>
         </button>
      </form>
   );
};

export default ContactForm;
