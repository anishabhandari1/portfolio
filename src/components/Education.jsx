import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      id='education'
      className='py-20 bg-white overflow-x-hidden border-t'
    >
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='text-center mb-16'
        >
          <motion.h2 variants={itemVariants} className='text-4xl md:text-5xl font-bold mb-4'>
            My
            <span className='text-[#F5AFAF]'> Education</span>
          </motion.h2>
          <motion.p variants={itemVariants} className='text-gray-600 text-lg max-w-2xl mx-auto'>
            My educational journey and academic achievements
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='max-w-3xl mx-auto'
        >
          <div className='space-y-8'>
            {workData.map((data, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className='relative pl-12 before:content-[""] before:absolute before:left-0 before:top-8 before:w-[2px] before:h-[calc(100%-32px)] before:bg-gradient-to-b before:from-[#F5AFAF] before:to-[#F5AFAF]/30'
              >
                {/* Timeline Dot */}
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className='absolute left-[-8px] top-6 w-5 h-5 rounded-full bg-[#F5AFAF] border-4 border-white shadow-lg cursor-pointer'
                ></motion.div>

                {/* Card */}
                <div className='bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#F5AFAF] transition-all duration-300 hover:shadow-lg hover:shadow-[#F5AFAF]/10 group'>
                  {/* Top Section */}
                  <div className='flex justify-between items-start gap-4 mb-3'>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-black group-hover:text-[#F5AFAF] transition duration-300'>
                        {data.schoolname}
                      </h3>
                    </div>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className='px-4 py-2 bg-[#F5AFAF] text-black rounded-lg text-sm font-semibold whitespace-nowrap'
                    >
                      {data.duration}
                    </motion.span>
                  </div>

                  {/* Details */}
                  <div className='space-y-2 mb-3'>
                    <p className='text-[#F5AFAF] font-semibold text-sm'>
                      {data.degree}
                    </p>
                    <p className='text-gray-600 text-sm'>
                      📍 {data.location}
                    </p>
                  </div>

                  {/* Description */}
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {data.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Education
