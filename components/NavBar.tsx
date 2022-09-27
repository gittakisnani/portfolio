import React, { useRef } from 'react'
import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
                <a aria-label='About Taki Snani' onClick={handleNav} className=''>
                    <li className='navbar-li'><span className='hash'>#</span>About</li>
                </a>
            </Link>
            <Link href='/#skills'>
                <a aria-label='Taki Snani Skills' onClick={handleNav} className=''>
                    <li className='navbar-li'><span className='hash'>#</span>Skills</li>
                </a>
            </Link>
            <Link href='/#works'>
                <a aria-label='Taki Snani Works' onClick={handleNav} className=''>
                    <li className='navbar-li'><span className='hash'>#</span>Works</li>
                </a>
            </Link>
            <Link href='/#contact'>
                <a aria-label='Contact Taki Snani' onClick={handleNav} className=''>
                    <li className='navbar-li'><span className='hash'>#</span>Contact</li>
                </a>
            </Link>
            <a aria-label='GitHub account' target='_blank' rel='noreferrer noopener'  href='https://github.com/gittakisnani' className='github' title='GitHub'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </ul>
    </nav>
  )
}

export default NavBar