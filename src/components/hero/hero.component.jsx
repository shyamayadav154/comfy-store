import React from 'react'
import Button from '../button/button.componet.jsx'
import './hero.styles.scss'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='h-c'>
      <section className='hero'>
        <div className='left'>
          <p>
            <i>Spring - Summer 2022</i>
          </p>
          <h1>Design Your Comfort Zone </h1>
          <p>
            Fashion is part of the daily air and it changes all the time, with
            all the events. You can see and feel everything in clothes. Start
            shopping now to enjoy exclusive offers!
          </p>
          <Button onClick={() => navigate('/products')}>Shop Now</Button>
        </div>
        <div className='right'>
          <img
            src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg'
            alt='flash sale'
          />
        </div>
      </section>
    </div>
  )
}

export default Hero