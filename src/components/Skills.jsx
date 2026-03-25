import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaServer, FaDatabase, FaSearch, FaChartLine, FaUsers, FaLightbulb} from 'react-icons/fa'


const Skills = () => {
  const skills = [
    { 
      title: 'Frontend Development', 
      icon: FaReact, 
      description: 'Building responsive and interactive user interfaces with modern web technologies.', 
      tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] 
    },
    { 
      title: 'Digital Marketing', 
      icon: FaChartLine, 
      description: 'Planning and executing digital marketing campaigns to drive engagement and growth.', 
      tags: [ 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Content Writing','Google Analytics','Keyword Research'] 
    },
    { 
      title: 'Project Management', 
      icon: FaUsers, 
      description: 'Coordinating teams and managing projects efficiently.', 
      tags: ['Clickup', 'Trello', 'Notion'] 
    },
    
  ]

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
      id='skills'
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
            <span className='text-[#F5AFAF]'> Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants} className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Technologies I work with to bring innovative ideas to life. Constantly learning and growing.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto'
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className='bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 lg:p-10 transition duration-300 hover:border-[#F5AFAF] hover:shadow-lg hover:shadow-[#F5AFAF]/10 cursor-pointer group'
            >
              {/* Icon */}
              <div className='flex justify-center mb-4'>
                <div className='w-16 h-16 bg-[#F5AFAF]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F5AFAF]/20 transition duration-300'>
                  <skill.icon className='text-3xl text-[#F5AFAF]' />
                </div>
              </div>

              {/* Title */}
              <h3 className='text-lg font-bold text-black text-center mb-3'>
                {skill.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 text-sm text-center mb-4 leading-relaxed'>
                {skill.description}
              </p>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 justify-center'>
                {skill.tags.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className='bg-[#F5AFAF]/10 text-black px-3 py-1 rounded-full text-xs font-medium border border-[#F5AFAF]/20 hover:bg-[#F5AFAF]/20 transition duration-300'
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
