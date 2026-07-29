import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <motion.section
      id='home'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='min-h-screen flex items-center pt-24 pb-16 bg-white'
    >
      <div className='container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12'>
        <div className='lg:w-1/2'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 text-black'>
            Hi, I'm <span className='text-black'>Anisha Bhandari</span>
          </h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 text-black'>SEO Specialist</h2>
          <p className='text-lg text-black/80 mb-8'>
            Passionate about learning, building, and growing in the tech and digital space.
          </p>
        </div>

        <div className='lg:w-1/2 flex justify-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative max-w-[360px] w-full'
          >
            <div className='absolute inset-x-0 bottom-0 h-[300px] rounded-[36px] bg-slate-100/90 shadow-[0_24px_80px_rgba(15,23,42,0.12)]' />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className='relative z-10 mx-auto w-[92%] overflow-hidden rounded-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.08)] -translate-y-10'
            >
              <motion.img
                src={assets.profileImg}
                alt='Anisha Bhandari| SEO Specialist'
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='block h-full w-full object-cover rounded-[32px]'
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
