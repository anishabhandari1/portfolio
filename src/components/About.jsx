import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDesktop, FaLightbulb } from 'react-icons/fa'

const aboutInfo = [
  { icon: FaCode, title: 'Development', description: 'Building responsive web applications' },
  { icon: FaDesktop, title: 'Design', description: 'Creating beautiful user interfaces' },
  { icon: FaLightbulb, title: 'Innovation', description: 'Innovative solutions for complex problems' }
]

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}} 
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{ once: true }}
    id='about'
    className='py-20 bg-white border-gray border-t'>
    
    <div className= 'container mx-auto px-6 '>
        {/* Heading */}
        <h2 className= 'text-3xl font-bold text-center mb-8'>About
            <span className='text-[#F5AFAF]'>Me</span></h2>
        
         {/* Contents on Aboutme */}
        <div className= 'max-w-3xl mx-auto text-center'>
          <p className= 'mt-4 text-black-400 mb-12'>I am a passionate developer with a love for creating innovative solutions. With a background in both design and development, I bring a unique perspective to every project I work on.</p>
          
          {/* Cards*/}
          <div className = 'grid grid-cols-1 md:grid-rows-1 lg:grid-cols-3  gap-10'>
            {
              aboutInfo.map((data, index) => (
                <div key={index} className='bg-white text-black border border-black-200 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                  <div className='text-black text-4xl mb-4'>
                    <div className= 'text-[#F5AFAF] text-4xl mb-4'>
                    <data.icon/>
                    </div>
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
                  <p className='text-gray-600'>{data.description}</p>
                </div>
              ))
            }

          </div>

        </div>






    </div>
    
    
    
    
      
    </motion.div>
  )
}

export default About
