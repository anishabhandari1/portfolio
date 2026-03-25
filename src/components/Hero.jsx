import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import { assets } from '../assets/assets'


const Hero = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}} 
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{ once: true }}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-white'>
    

      {/*Left Side Content */}
        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
            <div className='md:w-1/2 mb-10 md:mb-0'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 text-black'>
                Hi, I'm <span className='text-[#F5AFAF]'>Anisha Bhandari</span>
            </h1>
            <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Learner</h2>
            <p className='text-lg text-black mb-8'>Passionate about learning, building, and growing in the tech and digital space.</p>
            <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4'>
              <motion.a 
                href='/Anisha_Bhandari_adm(1)-Copy.pdf' 
                download='Anisha_Bhandari_adm(1)-Copy.pdf'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center justify-center gap-2 px-6 py-3 bg-[#F5AFAF] text-black rounded-lg font-medium hover:shadow-lg hover:shadow-[#F5AFAF]/40 transition duration-300'
              >
                <FaDownload size={16} />
                Download CV
              </motion.a>
              <motion.a 
                href='#contact' 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center justify-center px-6 py-3 border-2 border-[#F5AFAF] text-black rounded-lg font-medium hover:bg-[#F5AFAF]/10 transition duration-300'
              >
                Contact Me
              </motion.a>
            </div>
            </div>

            {/*Right Side Content*/}
            <div className='md:w-1/2 flex justify-center'>
            <div className='relative w-64 h-64 md:w-80 md:h-80'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink  opacity-70'></div>
              <motion.img 
              animate={{y: [0, -20, 0]}}

              transition={{duration: 4, repeat: Infinity, repeatType: 'loop', ease:'easeInOut'}}
              className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
              src={assets.profileImg} alt="Profile"  />
              </div>
            </div>
        </div>

      
    </motion.div>
    
     
  )
}

export default Hero
