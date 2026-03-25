import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Skills/>

      <Education/>
      <Experience/>
      <Contact/>

    </div>
  )
}

export default Home
