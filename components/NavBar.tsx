import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'
type NavBarProps = {
    openNav: boolean
    handleNavBar: () => void
}

const NavBar = ({ openNav, handleNavBar }: NavBarProps) => {
    const { width } = useWindowSize()

    const handleNav = () => width! <= 768 && handleNavBar()
    const navRef = useRef<HTMLElement | null>(null)
  return (
    <nav ref={navRef} className={openNav ? 'open-nav' : ''}>
        <ul className='navbar-list'>
            <Link href='/#about'>
                <a onClick={handleNav} className=''>
                    <li className='navbar-li'><span className='hash'>#</span>About</li>
                </a>
            </Link>
            <Link href='/#skills'>
                <a onClick={handleNav} className=''>
                    <li className='navbar-li'><span className='hash'>#</span>Skills</li>
                </a>
            </Link>
            <Link href='/#works'>
                <a onClick={handleNav} className=''>
                    <li className='navbar-li'><span className='hash'>#</span>Works</li>
                </a>
            </Link>
            <Link href='/#contact'>
                <a onClick={handleNav} className=''>
                    <li className='navbar-li'><span className='hash'>#</span>Contact</li>
                </a>
            </Link>
            <Link href='/resume'>
                <a onClick={handleNav} className=''>
                    <li className='navbar-li special'>Get Resume!</li>
                </a>
            </Link>
        </ul>
    </nav>
  )
}

export default NavBar