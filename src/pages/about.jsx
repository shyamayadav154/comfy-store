import React from 'react'
import styled from 'styled-components'
import BreadScrum from '../components/breadCrumbs/breadCrumbs.component'
import { motion } from 'framer-motion'



const AboutPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BreadScrum title='About' />
      <Wrapper className='page section section-center'>
        <img
          src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg'
          alt='nice desk'
        />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
            doloribus veritatis dolorem unde ipsum, voluptatibus totam.
            Explicabo, quas libero! Laborum incidunt minima consequatur ratione?
          </p>
        </article>
      </Wrapper>
    </motion.main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  width:80vw;
  margin: 0 auto;
  img {
    width: 100%;
    display: block;
    border-radius: 3px;
    height: 500px;
    @media only screen and (max-width: 768px) {
      height:300px
    }
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
    text-transform: uppercase;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
