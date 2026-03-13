import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaServer, FaDatabase, FaSearch,  } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    { title: 'FRONTEND DEVELOPMENT', icon: FaReact },
    { title: 'BACKEND DEVELOPMENT', icon: FaServer },
    { title: 'DATABASE MANAGEMENT', icon: FaDatabase },
    { title: 'SEO', icon: FaSearch },
    // Add more skills as needed
  ]

  return (
    <motion.div
    initial={{opacity:0, y:50}} 
    whileInView={{opacity:1, y:0}}
    transition={{duration: 1, ease: 'easeOut'}}
    viewport={{ once: false, amount: 0.2 }}
    id='skills'
    className='py-20 bg-white overflow-x-hidden'>
    
     <div className="container mx-auto px-6 border-t mb-8">
        <h2 className='text-3xl font-bold text-center mb-4'>
            My
            <span className="text-[#F5AFAF]">Skills
                </span>
                
        </h2>
        <p className='text-black text-center max-w-2xl mx-auto mb-16'>
                   Technologies I work with to bring ideas to life. 
                </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full' >
                {
                    skills.map((skill, index)=>(
                        <div key={index} className='bg-white text-black border border-black rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                            <div className='flex flex-col items-center mb-4'>
                                <skill.icon className='text-4xl text-[#F5AFAF] mb-2 w-12 h-12' />
                                <h3 className='text-xl font-semibold'>
                                    {skill.title}
                                </h3>
                            </div>
                            <p className= 'text-2xl'>{skill.description}</p>
                            
                            
                    </div>
                ))}
                    
                
                


            </div>
        </div>
    </motion.div>
  )
}

export default Skills
