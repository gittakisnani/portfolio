import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
type WorkProps = {
    workName: string
    workDesc: string
    feature: string
    role: string
    techs: string[]
    demoLink?: string
    index: number
    src: StaticImageData | string
}

const Work = ({ workName, workDesc, feature, role, techs, demoLink, index, src }: WorkProps) => {
  return (
    <div className='work'>
        <div className='work-desc'>
        <h3 className='project-name'>
            <span>0{index}.</span>
            <span className='work-name'>{workName}</span>
        </h3>

        <div className='desc-wrapper-work'>
            <h4 className='feature'>{feature}</h4>

            <h5 className='desc'>{workDesc}</h5>

            <p className='role'>{role}</p>

            <ul className='techs-wrapper'>
                {techs.map((tech, index) => (
                    <li key={index} className='tech'>{tech}</li>
                ))}
            </ul>

            <div className='buttons-wrapper'>
                <a className='demo' href={demoLink || '/'}>Visit Website</a>
                <Link href={`/${workName}`}><a className='case-study'>Case study</a></Link>
            </div>
        </div>
        </div>
        <div className='work-image'>
            <Image src={src} alt={workName} />
            <Image src={src} alt={workName} />
        </div>
    </div>
  )
}

export default Work