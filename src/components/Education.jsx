import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { workData } from '../assets/assets'

const Education = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const nextIndex = Math.min(
        workData.length - 1,
        Math.max(0, Math.floor(latest * workData.length))
      )
      setActiveIndex(nextIndex)
    })
  }, [scrollYProgress])

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      id='education'
      className='min-h-[100vh] py-20 bg-white overflow-x-hidden border-t'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-14'>
          <h2 className='text-4xl md:text-5xl font-bold mb-3 text-black'>Education</h2>
        </div>

        <div className='grid gap-6 lg:grid-cols-3'>
          {workData.map((item, index) => {
            const isActive = index === activeIndex
            return (
              <motion.article
                key={item.schoolname}
                initial={{ opacity: 0.7, y: 30 }}
                animate={{
                  opacity: isActive ? 1 : 0.65,
                  y: 0,
                  scale: isActive ? 1.04 : 0.98,
                  filter: isActive ? 'blur(0px)' : 'blur(2px)'
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className={`relative overflow-hidden rounded-[2rem] border px-6 py-8 transition-all duration-500 ${
                  isActive
                    ? 'border-indigo-300 bg-white shadow-[0_30px_60px_-30px_rgba(79,70,229,0.55)]'
                    : 'border-transparent bg-slate-100/80 text-slate-500'
                }`}
              >
                <div className='flex h-full flex-col justify-between gap-4'>
                  <div className='space-y-3'>
                    <h3 className={`text-2xl font-semibold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{item.schoolname}</h3>
                    <p className='text-sm tracking-wide text-slate-500'>{item.location}</p>
                  </div>

                  <div className='space-y-1 text-right'>
                    <p className={`text-sm uppercase tracking-[0.18em] ${isActive ? 'text-indigo-700' : 'text-slate-400'}`}>
                      {item.degree}
                    </p>
                    <p className={`text-xs ${isActive ? 'text-slate-500' : 'text-slate-400'}`}>{item.duration}</p>
                  </div>

                  
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Education
