import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experienceData = [
  {
    role: 'Digital Marketing Intern',
    company: 'Kharaayo Inc.',
    duration: 'April 2025 - November 2025',
    details: 'Assisted in developing and executing digital marketing strategies, including social media campaigns, project management and keyword research.'
  },
  {
    role: 'Content Writer',
    company: 'Business Insights Daily',
    duration: ' December 2024 - 2025 ',
    details: 'Produced engaging articles on technology trends, startup stories, and web development topics, contributing to an increase in website traffic.'
  },
  {
    role: 'Executive Member',
    company: 'Developers Association Jhapa',
    duration: '2025 - Present',
    details: 'Organized tech events, workshops, and hackathons to foster a collaborative environment for developers in the Jhapa region.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      id='experience'
      className='py-20 bg-white overflow-x-hidden border-t'
    >
      <div className='container mx-auto px-6'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Expe
            <span className='text-[#F5AFAF]'>rience</span>
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            A curated snapshot of your professional and freelance work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='grid gap-6 md:grid-cols-2'
        >
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
            >
              <div className='flex items-center gap-3 mb-3'>
                <div className='p-2 bg-[#F5AFAF]/20 rounded-lg'>
                  <FaBriefcase className='text-[#F5AFAF] w-5 h-5' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold'>{item.role}</h3>
                  <p className='text-sm text-gray-500'>{item.company}</p>
                </div>
              </div>
              <p className='text-sm text-[#F5AFAF] font-medium mb-2'>{item.duration}</p>
              <p className='text-gray-600'>{item.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
