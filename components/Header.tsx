import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import useWindowSize from '../hooks/useWindowSize'
import { WindowSize } from '../hooks/useWindowSize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const { width }: WindowSize = useWindowSize();
  const headerRef = useRef<null | HTMLHeadElement>(null!)
  useEffect(() => {
    window.scrollY >= 68 ? headerRef.current?.classList.add('header-bg') : headerRef.current?.classList.remove('header-bg')
  }, [typeof window !== "undefined" && window.scrollY])

  const [navBar, setNavBar] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [spanWidth, setSpanWidth] = useState('0%')

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
    <header ref={headerRef} className='header'>
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