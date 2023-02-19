import React from 'react'
import Button from '../button/button.componet.jsx'
import './hero.styles.scss'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="h-c">
      <section className="hero">
        <div className="left">
          <p>
            <i>Spring - Summer 2022</i>
          </p>
          <h1>Design Your Comfort Zone </h1>
          <p>
            Fashion is part of the daily air and it changes all the time, with
            all the events. You can see and feel everything in clothes. Start
            shopping now to enjoy exclusive offers!
          </p>
          <Button onClick={() => navigate("/products")}>Shop Now</Button>
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1564849744694-348ecd00c279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="flash sale"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero