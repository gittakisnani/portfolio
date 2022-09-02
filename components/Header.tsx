import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'
import Container from './Container'
import NavBar from './NavBar'
import useWindowSize from '../hooks/useWindowSize'
import { WindowSize } from '../hooks/useWindowSize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'


const Header = () => {
  const { width }: WindowSize = useWindowSize();
  const scrollRef = useRef<null | HTMLSpanElement>(null!)


  const [navBar, setNavBar] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [spanWidth, setSpanWidth] = useState('0%')
  // const router = useRouter()

  useEffect(() => setNavBar(width! > 768 ? true : false ),[width])

  const handleNavBar = () => {
    setNavBar(!navBar)
    setTimeout(() => setOpenNav(!openNav), 50)
  }

  if(typeof window !== 'undefined') {
    const handleScroll = () => {
      const percent = window.scrollY / document.body.clientHeight || window.scrollY / window.innerHeight
      setSpanWidth(percent * 100 + '%')
    }
  
    window.addEventListener('scroll', handleScroll)
  }


  return (
    <header className='header'>
      <div className="container">
      <span 
       style={{width: spanWidth}}
       className='scroll-feature'></span>
          <Logo />
          {navBar && <NavBar openNav={openNav} handleNavBar={handleNavBar} />}
          {width! <= 768 && !navBar &&
          <button onClick={handleNavBar} className='menu-bars'>
            <FontAwesomeIcon icon={faBars} size='2x' />
          </button>
          }
          {width! <= 768 && navBar &&
          <button onClick={handleNavBar} className='menu-bars'>
            <FontAwesomeIcon icon={faTimes} size='2x' />
          </button>
          }
        </div>
    </header>
  )
}

export default Header