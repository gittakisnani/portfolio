import React from 'react'
import Work from './Work'
import projects from '../config/projects'
import { Fade } from 'react-awesome-reveal'
const Works = () => {
  return (
    <div className='works' id='works'>
      <div className="container">
        <h3 className='heading'>
          <span className='hash'>#</span>PROJECTS I{'\''}VE BUILT
        </h3>
        <div className="works-wrapper">
          {projects.map(project => (
            <Fade key={project.index} triggerOnce >
              <Work 
                index={project.index}
                src={project.src}
                workName={project.workName}
                feature={project.feature}
                techs={project.techs}
                role={project.role}
                workDesc={project.workDesc}
                demoLink={project.demoLink || '/'}
                srcCode={project.srcCode}
              />
            </Fade>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Works