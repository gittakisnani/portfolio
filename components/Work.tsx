import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
export type WorkProps = {
    workName: string
    workDesc: string
    feature: string
    role: string
    techs: string[]
    demoLink?: string
    index?: number
    src: (StaticImageData | string)[]
    srcCode?: string
}

const Work = ({ workName, workDesc, feature, role, techs, demoLink, index, src, srcCode }: WorkProps) => {
  return (
    <div className='work'>
        <div className='work-desc'>
        <h3 className='project-name'>
            <span>{index! >= 10 ? "" : 0}{index}.</span>
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
                <Link href={demoLink || '/'}><a className='demo cta-button' target='_blank' rel="noreferrer noopener">Visit Website</a></Link>
                <a className='case-study' href={srcCode!} target="_blank" rel="noreferrer">Source code <FontAwesomeIcon icon={faCode} /></a>
            </div>
        </div>
        </div>
        <div className='work-image'>
            {src.map((source, index) => (
                <Link key={index} href={demoLink || ''}>
                    <Image  src={source} alt={workName} />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Work