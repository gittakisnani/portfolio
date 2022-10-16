import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'
const Socials = () => {
  return (
    <div className='socials'>
        <a href='https://github.com/gittakisnani' title='Taki Snani | Github'>
            <BsGithub />
        </a>
        <a href='https://twitter.com/yestakisnani' title='Taki Snani | Twitter'>
            <BsTwitter />
        </a>
        <a href='https://www.linkedin.com/in/taki-snani-1ba6ba236/' title='Taki Snani | LinkedIn'>
            <BsLinkedin />
        </a>
    </div>
  )
}

export default Socials