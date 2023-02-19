import { signInWithEmailAndPassword } from 'firebase/auth'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../service/firebaseService.js'
import { useAuthStore } from '../../store/modules/appState.js'
import Button from '../button/button.componet.jsx'
import FormInput from '../form-input/form-input.component.jsx'
import './signIn.styles.scss'

const defaultFormFields = {
    email:'',
    password:''
}


const SignIn = () => {

    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields
    const setUser = useAuthStore(state=>state.setUser)
    let navigate = useNavigate()

    const handleChange = (e) =>{
      const {name,value} = e.target
      setFormFields({...formFields,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
          const result = await signInWithEmailAndPassword(auth, email, password);
          alert("User signed in successfully:" );
          setUser(result.user)
          navigate('/products')
        } catch (error) {
            alert(error.message)
        }
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