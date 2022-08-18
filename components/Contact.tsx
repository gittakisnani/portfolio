import React from 'react'
import Image from 'next/image'
import ContactImage from '../public/assets/Contact.png'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h3 className='heading'><span className='hash'>#</span>CONTACT</h3>
        <div className="contact-wrapper">
        <div className='text'>
           <div className='text-wrapper'>
           <span className='emoji'>
            <Image src={ContactImage} alt='Contact me' width={400} height={400} />
           </span>
            <p className='text-desc'>I am interested in <span className='interest'>freelance or remote jobs opportunities</span>, but if you have any suggestion, question or request don't hesitate to Contact me </p>
           </div>
        </div>
        <div className='form-wrapper'>
            <form className='form'>
                <div className='input-label'>
                    <label htmlFor="fullname">Full name</label>
                    <input autoCapitalize='true' required className='fullname' type="text" />
                </div>
                <div className='input-label'>
                    <label htmlFor="fullname">Email</label>
                    <input required className='email' type="email" />
                </div>
                <div className='input-label textarea'>
                    <label htmlFor="message">Message</label>
                    <textarea className='email' placeholder='Hello Taki...' />
                </div>
                <button className='send-msg'>Send Message</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact