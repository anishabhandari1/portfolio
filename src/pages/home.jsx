import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <Hero />
      <h2 className="text-black">Home Page</h2>
      <About/>
    </div>
  )
}

export default Home
