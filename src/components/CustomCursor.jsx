import { useEffect, useRef, useState } from 'react'
import { FaRocket } from 'react-icons/fa'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [cursorColor, setCursorColor] = useState('#0A0A0A')

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      cursor.style.left = `${x}px`
      cursor.style.top = `${y}px`

      // Check element under cursor
      const elementUnderCursor = document.elementFromPoint(x, y)
      if (elementUnderCursor) {
        const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor
        const hasDataPink = elementUnderCursor.closest('[data-pink-bg]')
        
        // If element has pink background or data-pink-bg attribute, use white cursor
        if (bgColor.includes('245, 175, 175') || bgColor.includes('rgb(245, 175, 175)') || hasDataPink) {
          setCursorColor('white')
        } else {
          setCursorColor('#0A0A0A')
        }
      }
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={cursorRef}
      className='custom-cursor fixed w-6 h-6 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2'
      style={{ 
        transform: 'translate3d(-50%, -50%, 0)', 
        transition: 'transform 0.05s ease',
        color: cursorColor,
      }}
    >
      <FaRocket className='w-full h-full' />
    </div>
  )
}

export default CustomCursor
