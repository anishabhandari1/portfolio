import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      id='contact'
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
            Contact<span className='text-[#F5AFAF]'>Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Let's collaborate and bring your ideas to life. Feel free to reach out through any of the methods below.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className='bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100'
            >
              <h3 className='text-2xl font-bold text-black mb-6'>Send me a message</h3>
              
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Input */}
                <motion.div variants={itemVariants}>
                  <label htmlFor='name' className='block text-black font-medium mb-2'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Enter your name'
                    className='w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5AFAF] focus:border-transparent transition duration-300 hover:border-gray-300'
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div variants={itemVariants}>
                  <label htmlFor='email' className='block text-black font-medium mb-2'>
                    Your Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5AFAF] focus:border-transparent transition duration-300 hover:border-gray-300'
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div variants={itemVariants}>
                  <label htmlFor='message' className='block text-black font-medium mb-2'>
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    placeholder='Any Message?'
                    className='w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5AFAF] focus:border-transparent transition duration-300 hover:border-gray-300 resize-none'
                  />
                </motion.div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center'
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center'
                  >
                    ✗ Failed to send message. Please try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full px-6 py-3 bg-[#F5AFAF] text-black font-semibold rounded-lg transition duration-300 hover:shadow-lg hover:shadow-[#F5AFAF]/40 disabled:opacity-70 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col justify-between'
          >
            {/* Contact Methods */}
            <div className='space-y-6'>
              {/* Email */}
              <motion.a
                variants={itemVariants}
                href='mailto:anishabhandari012@gmail.com'
                whileHover={{ x: 10 }}
                className='flex items-start gap-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-[#F5AFAF] transition duration-300 group cursor-pointer'
              >
                <div className='w-14 h-14 bg-[#F5AFAF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F5AFAF]/20 transition duration-300'>
                  <FaEnvelope className='text-[#F5AFAF] text-xl' />
                </div>
                <div>
                  <h4 className='text-black font-semibold mb-1'>Email</h4>
                  <p className='text-gray-600'>anishabhandari012@gmail.com</p>
                </div>
              </motion.a>

              {/* Social Links */}
              <div className='space-y-4'>
                <h4 className='text-black font-semibold mb-4'>Connect with me</h4>

                {/* GitHub */}
                <motion.a
                  variants={itemVariants}
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-[#F5AFAF] transition duration-300 group'
                >
                  <div className='w-12 h-12 bg-[#F5AFAF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F5AFAF]/20 transition duration-300'>
                    <FaGithub className='text-[#F5AFAF] text-lg' />
                  </div>
                  <div>
                    <p className='text-black font-medium'>GitHub</p>
                    <p className='text-gray-600 text-sm'>github.com/anishabhandari_1</p>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  variants={itemVariants}
                  href='https://www.linkedin.com/in/anisha-bhandari-9175b7282 '
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-[#F5AFAF] transition duration-300 group'
                >
                  <div className='w-12 h-12 bg-[#F5AFAF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F5AFAF]/20 transition duration-300'>
                    <FaLinkedin className='text-[#F5AFAF] text-lg' />
                  </div>
                  <div>
                    
                    <p className='text-black font-medium'>LinkedIn</p>
                    <p className='text-gray-600 text-sm'>linkedin.com/in/anisha</p>
                  </div>
                  </motion.a>
                  <motion.a
                  variants={itemVariants}
                  href='https://'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-[#F5AFAF] transition duration-300 group'
                >
                  <div className='w-12 h-12 bg-[#F5AFAF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F5AFAF]/20 transition duration-300'>
                    <FaInstagram className='text-[#F5AFAF] text-lg' />
                  </div>
                  <div>
                    <p className='text-black font-medium'>Instagram</p>
                    <p className='text-gray-600 text-sm'>https://www.instagram.com/anisha_bhandari1/?hl=en</p>
                  </div>
                  </motion.a>
                  <motion.a
                  variants={itemVariants}
                  href='https://www.facebook.com/anisa.bhandari.39/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:border-[#F5AFAF] transition duration-300 group'
                >
                  <div className='w-12 h-12 bg-[#F5AFAF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F5AFAF]/20 transition duration-300'>
                    <FaFacebook className='text-[#F5AFAF] text-lg' />
                  </div>
                  <div>
                    <p className='text-black font-medium'>Facebook</p>
                    <p className='text-gray-600 text-sm'>https://www.facebook.com/anisa.bhandari.39/</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Response Time Info */}
            <motion.div
              variants={itemVariants}
              className='mt-8 p-6 bg-[#F5AFAF]/5 border border-[#F5AFAF]/20 rounded-xl'
            >
              <p className='text-black font-medium mb-2'>📧 Response Time</p>
              <p className='text-gray-600 text-sm'>
                I typically respond to messages within 24-48 hours. Looking forward to connecting with you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
