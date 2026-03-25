import React, { useState } from 'react'
import { FaBars, FaTimes,  } from 'react-icons/fa'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className='fixed w-full z-50 bg-white/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href='#' className= 'text-3xl font-bold text-black'>
                    Anisha 
                    <span className='text-[#F5AFAF]'>Bhandari</span>
                    <div className='w-4 h-4 bg-[#F5AFAF] rounded-full'></div>
                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href='#home' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Home</span>
                    <span className= 'absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F5AFAF] transition-all duration-300 group-hover:w-full'></span>


                </a>
                 <a href='#about' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>About</span>
                    <span className= 'absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F5AFAF] transition-all duration-300 group-hover:w-full'></span>
            
                </a>

                 <a href='#Skills' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Skills</span>
                    <span className= 'absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F5AFAF] transition-all duration-300 group-hover:w-full'></span>
                </a>
                
                 <a href='#experience' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Experience</span>
                    <span className= 'absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F5AFAF] transition-all duration-300 group-hover:w-full'></span>
                </a>
                
                 <a href='#education' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Education</span>
                    <span className= 'absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F5AFAF] transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href='#contact' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Contact</span>
                    <span className= 'absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F5AFAF] transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>
               {/* Mobile Button */}
            <div className='md:hidden'>
                {
                    showMenu ?
                     <FaTimes onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />:
                      <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
                }
            </div>
        </div>
        {/* Mobile Menus */}
        {
            showMenu && (
                <div className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a onClick={()=>setShowMenu(!showMenu)}  href='#home' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Home</span>
                    


                </a>
                 <a onClick={()=>setShowMenu(!showMenu)} href='#about' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>About</span>
                    
                </a>

                 <a onClick={()=>setShowMenu(!showMenu)} href='#Skills' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Skills</span>
                    
                </a>
                
                 <a onClick={()=>setShowMenu(!showMenu)} href='#experience' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Experience</span>
                    
                </a>
                
                 <a onClick={()=>setShowMenu(!showMenu)} href='#education' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Education</span>
                    
                </a>
            
                 

                <a onClick={()=>setShowMenu(!showMenu)} href='#contact' className='relative text-black/80 transition-duration-300 hover:text-[#F5AFAF] group'>
                    <span>Contact</span>
                    
                </a>
            

                </div>
            )
        }



    </nav>
  )
}

export default Navbar
