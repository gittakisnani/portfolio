import { useState} from 'react'
import Image from 'next/image'
import ContactImage from '../public/assets/Contact.png'
const Contact = () => {
    const [body, setBody] = useState('')
    const [subject, setSubject] = useState('')
  return (
    <div className='contact' id='contact'>
        <div className="container">
        <h3 className='heading'><span className='hash'>#</span>CONTACT</h3>
        <div className="contact-wrapper">
        <div className='text'>
           <div className='text-wrapper'>
           <span className='emoji'>
            <Image src={ContactImage} alt='Contact me' width={450} height={450} />
           </span>
            <p className='text-desc'>I am interested in <span className='interest'>freelance or remote jobs opportunities</span>, but if you have any suggestion, question or request don't hesitate to Contact me </p>
           </div>
        </div>
        <div className='form-wrapper'>
            <form className='form'>
                <div className='input-label'>
                    <label htmlFor="fullname">Full name</label>
                    <input autoCapitalize='true' autoComplete='off' id='fullname' required className='fullname' type="text" />
                </div>
                <div className='input-label'>
                    <label htmlFor="subject">Subject</label>
                    <input 
                    required 
                    className='subject' 
                    type="text" 
                    id='subject'
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    />
                </div>
                <div className='input-label textarea'>
                    <label htmlFor="message">Message</label>
                    <textarea 
                    id='message'
                    className='email' 
                    placeholder='Hello Taki...'
                    title='Message body' 
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    />
                </div>
                <a 
                className='send-msg'
                aria-label='Send message'
                href={`mailto:takisnbusiness@gmail.com?subject=${encodeURI(subject)}&body=${encodeURI(body)}`}
                >Send Message</a>
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Contact