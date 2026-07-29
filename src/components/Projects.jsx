import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectsData } from '../assets/assets'

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      id='projects'
      className='py-20 bg-white overflow-x-hidden border-t'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-3 text-black'>Work</h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Click each card to expand and reveal more details while the grid responds.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project, index) => {
            const isExpanded = index === expandedIndex

            return (
              <motion.div
                key={project.title}
                layout
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className='group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-sm transition-all duration-300 hover:border-black hover:shadow-lg hover:shadow-black/10'
              >
                <div className='overflow-hidden'>
                  <motion.img
                    layout
                    src={project.image}
                    alt={project.title}
                    className='h-64 w-full object-cover transition duration-300 group-hover:scale-[1.02]'
                  />
                </div>

                <div className='p-6'>
                  <div className='flex items-center justify-between gap-4'>
                    <h3 className='text-xl font-bold text-black'>{project.title}</h3>
                    <span className='text-sm font-medium text-black/60'>
                      {isExpanded ? 'Hide' : 'View'}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key='details'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className='overflow-hidden'
                      >
                        <p className='mt-5 text-gray-600 text-sm leading-relaxed'>
                          {project.description}
                        </p>
                        {project.link && (
                          <a
                            href={project.link}
                            target='_blank'
                            rel='noreferrer'
                            className='mt-4 inline-flex items-center gap-2 text-black font-semibold transition duration-300 hover:text-gray-700'
                          >
                            View Project →
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
