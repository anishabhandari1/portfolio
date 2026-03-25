import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa'

const aboutInfo = [
  { icon: FaCode, title: 'Development', description: 'Building responsive web applications' },
  { 
    icon: FaChartLine, 
    title: 'Digital Marketing', 
    description: 'Planning and executing marketing campaigns to grow engagement' 
  },
  { 
    icon: FaUsers, 
    title: 'Project Management', 
    description: 'Coordinating teams and managing projects efficiently' 
  },
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
        <h2 className= 'text-3xl font-bold text-center mb-8 border-b-2 border-[#F5AFAF]'>About
            <span className='text-[#F5AFAF]'>Me</span></h2>
        
         {/* Contents on Aboutme */}
        <div className= 'max-w-6xl mx-auto text-center'>
          <p className= 'mt-4 text-gray-600 mb-8'>Computer Science graduate focused on web development and digital solutions. Engaged in tech programs, hackathons, and community initiatives, with experience in digital marketing and strong problem-solving skills.</p>
          
          
          {/* Cards*/}
          <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10'>
            {
              aboutInfo.map((data, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className='bg-gradient-to-br from-white to-gray-50 text-black border border-gray-100 rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:border-[#F5AFAF] hover:shadow-lg hover:shadow-[#F5AFAF]/10 cursor-pointer group'
                >
                  <div className='w-14 h-14 bg-[#F5AFAF]/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[#F5AFAF]/20 transition duration-300'>
                    <data.icon className='text-[#F5AFAF] text-2xl' />
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
                  <p className='text-gray-600'>{data.description}</p>
                </motion.div>
              ))
            }

          </div>

        </div>






    </div>
    
    
    
    
      
    </motion.div>
  )
}

export default About
