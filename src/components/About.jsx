import React from 'react'
import { motion

 } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}} 
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{ once: true }}
    id='about'
    className='py-20 bg-white'>
    
    <div className= 'container mx-auto px-6'>
        {/* Heading */}
        <h2 className= 'text-3xl font-bold text-center mb-4'>About
            <span className='text-[#F5AFAF]'>Me</span></h2>
        <p className='text-center'>Get to know me better</p>

    </div>
    
    
    
    
      
    </motion.div>
  )
}

export default About
