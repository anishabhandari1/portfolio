import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-black/10 py-4'>
      <div className='container mx-auto px-6 flex items-center justify-between'>
        <a href='#home' className='flex items-center gap-3 text-2xl font-bold text-black'>
          <span>Anisha</span>
          <span className='text-black'>Bhandari</span>
          <span className='w-3 h-3 rounded-full bg-black inline-block' />
        </a>

        <div className='hidden lg:flex items-center gap-4'>
          <a
            href='#contact'
            className='text-black/80 hover:text-black transition duration-300'
          >
            Contact
          </a>
          <a
            href='/resume.pdf'
            download
            className='inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-black/90'
          >
            CV
          </a>
        </div>

        <div className='lg:hidden'>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className='text-black text-2xl focus:outline-none'
            aria-label='Toggle menu'
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {showMenu && (
        <div className='lg:hidden absolute inset-x-0 top-full bg-white border-t border-black/10 shadow-lg'>
          <div className='container mx-auto px-6 py-6 space-y-4'>
            <div className='flex flex-col gap-3'>
              <a
                href='#contact'
                onClick={() => setShowMenu(false)}
                className='block text-black/80 hover:text-black transition duration-300'
              >
                Contact
              </a>
              <a
                href='/resume.pdf'
                download
                className='inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-black/90'
              >
                CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
