import React from 'react'
import SignIn from '../components/signIn/signIn.component.jsx'
import styled from 'styled-components'
import SignUp from '../components/sign-up-form/signupForm.component.jsx'
import { motion } from 'framer-motion'

const Authentication = () => {
  return (
    <AuthContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SignIn />
      <SignUp />
    </AuthContainer>
  )
}

const AuthContainer = styled(motion.section)`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
  @media only screen and (max-width: 768px) {
    padding:5px;
    gap:2rem;
    flex-direction:column;
    width:100%;
    margin:0 auto;
  }
`

export default Authentication