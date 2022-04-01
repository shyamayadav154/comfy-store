import React,{useState} from 'react'
import Button from '../button/button.componet'
import FormInput from '../form-input/form-input.component'
import './signIn.styles.scss'

const defaultFormFields = {
    email:'',
    password:''
}


const SignIn = () => {

    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields
    

    const handleChange = () =>{

    }
    const handleSubmit=()=>{

    }
    const signInWithGoogle= () =>{
        
    }
  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
      </div>
  )
}

export default SignIn