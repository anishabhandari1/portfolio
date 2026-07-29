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
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-black'>Experience</h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>A snapshot of digital marketing experience and the tools used.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='max-w-4xl mx-auto'
        >
          <motion.div
            variants={itemVariants}
            className='rounded-3xl border border-black/10 bg-gradient-to-br from-white to-gray-50 p-10 shadow-lg shadow-black/5'
          >
            <div className='flex items-center gap-4 mb-6'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-black/10'>
                <FaBriefcase className='text-black text-lg' />
              </div>
              <div>
                <p className='text-sm uppercase tracking-[0.3em] text-black/50'>Experience</p>
                <h3 className='text-3xl font-bold text-black'>1+ Year Experience in Digital Marketing</h3>
              </div>
            </div>

            <div className='rounded-3xl border border-black/10 bg-white p-6'>
              <h4 className='text-xl font-semibold text-black mb-4'>Works Done on</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-black/80'>
                <span className='rounded-full border border-black/10 bg-black/5 px-4 py-3 text-sm'>Web Content Writing</span>
                <span className='rounded-full border border-black/10 bg-black/5 px-4 py-3 text-sm'>SEO</span>
                <span className='rounded-full border border-black/10 bg-black/5 px-4 py-3 text-sm'>Social Media Marketing</span>
                <span className='rounded-full border border-black/10 bg-black/5 px-4 py-3 text-sm'>Project Management</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
