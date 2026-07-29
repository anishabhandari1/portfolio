import React from 'react'
import Hero from '../components/Hero'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Tools from '../components/Tools'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <Education/>
      <Projects/>
      <Experience/>
      <Tools />
      <Contact/>
    </div>
  )
}

export default Home
