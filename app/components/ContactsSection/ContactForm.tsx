import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './contactsSection.module.css';
import { useForm } from 'react-hook-form';


const ContactForm = () => {
   const { register, setError, formState, clearErrors} = useForm();
   const [nameHasValue, setNameHasValue] = useState(false);
   const [emailHasValue, setEmailHasValue] = useState(false);
   const [textAreaHasValue, setTextAreaHasValue] = useState(false);
   const [textAreaIsValid, setTextAreaIsValid] = useState(false);
   const [isButtonDisabled,setIsButtonDisabled]=useState(true);
   const [isValidEmail, setIsValidEmail] = useState(false); 



   const isEmailValid = (email: string) => {
      // Regex per verificare l'indirizzo email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   };
   

   const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nameOfTheInput = event.target.name;
      const value = event.target.value.trim();
      

      if (nameOfTheInput === 'name') {
         setNameHasValue(value !== '');
         if (value !== '') {
            clearErrors('name');
         }  
      } else if (nameOfTheInput === 'email') {
         setEmailHasValue(value !== '');
         setIsValidEmail(isEmailValid(value)); 
         if (emailHasValue && isValidEmail) {
            clearErrors('email');
         }  
      }else if (nameOfTheInput === 'message') {
         setTextAreaHasValue(value !== '');
         setTextAreaIsValid(value.length>=20);
         if (textAreaHasValue && textAreaIsValid) {
            clearErrors('message');
         }  
      }
   };

   

   const handleBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nameOfTheInput = event.target.name;
      const value = event.target.value.trim();

      if(nameOfTheInput==='name' && !nameHasValue){
         setError('name', {
            type: 'required',
            message: 'I need your name to contact you back :)',
         });
      }
      if(nameOfTheInput==='email'){
         if(!emailHasValue){
            setError('email', {
               type: 'required',
               message: 'This is a required field',
            });
         }
         if(!isEmailValid(value)){
            setError('email', {
               type: 'invalidEmail',
               message: 'Make sure to insert a valid email',
            });
         }
         if (emailHasValue && isValidEmail) {
            clearErrors('email');
         }  
      }
      if(nameOfTheInput==='message'){
         if(!textAreaHasValue){
            setError('message', {
               type: 'required',
               message: 'This is also a required field',
            });
         }
         if(value.length<20){
            setError('message', {
               type: 'tooShortMessage',
               message: 'The message needs to be at least 20 characters long',
            });
         }
         if (textAreaHasValue && value.length>=20) {
            clearErrors('message');
         }  
      }
   };

   useEffect(() => {
      // console.log(nameHasValue,emailHasValue,isValidEmail)
      setIsButtonDisabled(!(nameHasValue && emailHasValue && isValidEmail && textAreaIsValid));
      
   }, [nameHasValue, emailHasValue,isValidEmail, textAreaIsValid]);

   

   return (
      <form className={styles.contactForm} action="https://formsubmit.co/11b841bfb61d4d7e5270a6084630e6b2" method="POST">
         <div className={`${styles.formGroup} ${nameHasValue ? styles.hasValue : ''} ${formState.errors?.name ? styles.hasError : ''}`}>
            <input {...register('name')} onChange={handleFieldChange} onBlur={handleBlur} autoComplete='off'/>
            <label htmlFor='name'>Your name</label>
            {formState.errors.name && (
               <span className={styles.errorMessage}>{String(formState.errors.name?.message)}</span>
            )}
         </div>
         <div className={`${styles.formGroup} ${emailHasValue ? styles.hasValue : ''} ${formState.errors?.email ? styles.hasError : ''}`}>
            <input {...register('email')} onChange={handleFieldChange} onBlur={handleBlur} autoComplete='off'/>
            <label htmlFor='email'>Your email</label>
            {formState.errors.email && (
               <span className={styles.errorMessage}>{String(formState.errors.email.message)}</span>
            )}
         </div>
         <div className={`${styles.formGroup} ${textAreaHasValue ? styles.hasValue : ''} ${formState.errors?.message ? styles.hasError : ''}`}>
            <textarea {...register('message')} onChange={handleFieldChange} onBlur={handleBlur}/>
            <label htmlFor='message'>Message</label>
            {formState.errors.message && (
               <span className={`${styles.errorMessage} ${styles.textAreaSpan}`} >{String(formState.errors.message.message)}</span>
            )}
         </div>
         <input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>

         <button type='submit' disabled={isButtonDisabled}>
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
}

export default ContactForm;
