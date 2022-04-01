import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='cont'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam
            vero?
          </p>
          <form
            className='contact-form'
            action='your form spree id'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding:5rem 0;
  .section-center {
    width: 80vw;
    margin: 0 auto;
    text-align:center;
  }


  h3 {
    text-transform: none;
    align-item:center;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: hsl(209, 23%, 60%);
  }
  .contact-form {
    

    display: flex;
    align-items:center;
    justify-content:center;
    
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid black;
  }
  .form-input {
    border-right: none;
    color: grey;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .submit-btn {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .form-input::placeholder {
    color: black;
    text-transform: capitalize;
  }
  .submit-btn {
    background: hsl(22, 31%, 52%);
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
    color: black;
  }
  .submit-btn:hover {
    color: white;
  }
  @media (min-width: 992px) {
    .cont {
      padding:2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
     
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
  
@media only screen and (max-width: 768px) {

}
`

export default Contact
