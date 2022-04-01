import React, { useState } from 'react'
import Button from '../button/button.componet'
import FormInput from '../form-input/form-input.component'
import './signupForm.styles.scss'

const defaultFormFields = {
    displayName:'',
  email: '',
  password: '',
  confirmPassword:'',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password,displayName,confirmPassword } = formFields

  const handleChange = () => {}
  const handleSubmit = () => {}
 
  return (
    <div className='sign-in-container'>
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
