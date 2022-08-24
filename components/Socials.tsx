import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Socials = () => {
  return (
    <div className='socials'>
        <a href='https://github.com/gittakisnani' title='Taki Snani | Github'>
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://twitter.com/yestakisnani' title='Taki Snani | Twitter'>
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='https://www.linkedin.com/in/taki-snani-1ba6ba236/' title='Taki Snani | LinkedIn'>
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
    </div>
  )
}

export default Socials