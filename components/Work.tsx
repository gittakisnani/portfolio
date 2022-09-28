import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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
    contribute: string
}

const Work = ({ workName, workDesc, feature, role, techs, demoLink, index, src, srcCode, contribute }: WorkProps) => {
  return (
    <div className='work'>
        <div className='work-desc'>
        <h3 className='project-name'>
            <span>{index! >= 10 ? "" : 0}{index}.</span>
            <span className='work-name'>{workName}</span>
        </h3>

        <div className='desc-wrapper-work'>
            <h4 className='feature'><u>Features:</u> <br /> {feature}</h4>

            <h5 className='desc'><u>Description:</u> <br /> {workDesc}</h5>

            <p className='role'><u>Role:</u> {role}</p>

            <ul className='techs-wrapper'>
                {techs.map((tech, index) => (
                    <li key={index} className='tech'>{tech}</li>
                ))}
            </ul>

            <div className='buttons-wrapper'>
                <Link href={demoLink || '/'}><a className='demo cta-button' target='_blank' rel="noreferrer noopener">Visit Website</a></Link>
                <Link href={srcCode!} ><a target="_blank" rel="noreferrer" className='case-study'>Source code <FontAwesomeIcon icon={faCode} /></a></Link>
                <Link href={contribute}><a className='contribute'><FontAwesomeIcon icon={faGithub} />Contribute</a></Link>
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