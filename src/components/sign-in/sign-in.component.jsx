import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in-styles.scss'



const blankSignin = {
  email: '',
  password: '',
}

const SignIn = () => {


  const [signIn, setSignIn] = useState(blankSignin)
  // console.log(signIn);


  const handleSubmit = e => {
    e.preventDefault()
    setSignIn(blankSignin)
  }



  return (
    <div className = 'sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit = {handleSubmit}>
        <FormInput
          name = 'email'
          value = {signIn.email}
          type = 'email'
          label = 'email'
          setSignIn = {setSignIn}
          signin = {signIn}
          required />

        <FormInput
          name = 'password'
          value = {signIn.password}
          type = 'password'
          label = 'password'
          setSignIn = {setSignIn}
          signin = {signIn}
          required />

          <CustomButton type = 'submit'> Sign in </CustomButton>
          <CustomButton onClick = {signInWithGoogle}> Sign in with Google </CustomButton>

      </form>
    </div>

  );
}


export default SignIn ;