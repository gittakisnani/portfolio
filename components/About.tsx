import React from 'react'
import Image from 'next/image'
import AboutImage from '../public/assets/About.jpg'
import useWindowSize from '../hooks/useWindowSize'
const About = () => {
    const { width } = useWindowSize()
  return (
    <div className='about' id='about'>
        { width! > 768 && 
        <div className='image-wrapper'>
            <Image src={AboutImage} alt='Develop. Preview. Ship' height={500} width={400} />
        </div>
        }
        <div className='about-wrapper'>
            <h4 className='heading'><span className='hash'>#</span>ABOUT_ME</h4>
            <div className='desc-wrapper'>
                <p className='desc desc-about'>
                Hello and Welcome! I am Taki Snani, a Med School Student & a Beginner Front-End Developer located in Algeria,
                I am interested about Web development, I started my journey with FE Development back in October 2021, July 2022 i started Learning Back-End Development using NodeJS

                Here are few Technologies i have been working with recently:
                </p>
                <ul className='techs'>
                    <li className=''><p>Javascript (ES6+)</p></li>
                    <li className=''><p>React Js (Next Js)</p></li>
                    <li className=''><p>Typescript (TS)</p></li>
                    <li className=''><p>Tailwindcss</p></li>
                    <li className=''><p>Node JS (Express)</p></li>
                </ul>
                <p className='desc desc-about'>If You need a Developer for your project, Than i may be the Developer you{"'"}re looking for!
                <a href='mailto:takisnbusiness@gmail.com' className='cta'>. If so let{"'"}s make something Special!</a></p>
            </div>
        </div>
    </div>
  )
}

export default About