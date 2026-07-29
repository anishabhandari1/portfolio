import React from 'react'
import { motion } from 'framer-motion'
import { toolsData } from '../assets/assets'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' }
  }
}

const Tools = () => {
  return (
    <motion.section
      id='tools'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className='py-20 bg-white overflow-x-hidden border-t'
      variants={containerVariants}
    >
      <div className='container mx-auto px-6'>
        <motion.div variants={itemVariants} className='text-center mb-16'>
           <h2 className='text-4xl md:text-5xl font-bold mb-3 text-black'>Tools</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className='grid grid-cols-2 sm:grid-cols-4 gap-6'
        >
          {toolsData.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              className='group overflow-hidden rounded-xl border border-gray-100 bg-white p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-black'
            >
              <div className='flex h-16 items-center justify-center'>
                <img src={tool.logo} alt={tool.name} className='h-16 object-contain' />
              </div>
              <p className='mt-4 text-sm text-gray-600'>{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Tools
