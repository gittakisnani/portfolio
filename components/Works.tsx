import React, { useState } from 'react'
import Work from './Work'
import projects from '../config/projects'
import { Fade } from 'react-awesome-reveal'
import Filters from './Filters'

export type FiltersType = ('Back-end' | 'Full-stack' | 'Front-end')
const Works = () => {
  const [filters, setFilters] = useState<FiltersType[]>(['Front-end', 'Back-end', 'Full-stack'])
  const handleFilters = (filter:FiltersType) => {
    setFilters(filters.includes(filter) ? filters.filter(fl => fl !== filter) : [...filters, filter])
  }
  return (
    <div className='works' id='works'>
      <div className="container">
        <h3 className='heading'>
          <span className='hash'>#</span>PROJECTS I{'\''}VE BUILT
        </h3>

        <div className='filters'>
          <Filters filters={filters} handleFilters={handleFilters} text='Front-end' id='fe' />
          <Filters filters={filters} handleFilters={handleFilters} text='Back-end' id='be'/>
          <Filters filters={filters} handleFilters={handleFilters} text='Full-stack' id='fs' />
        </div>
        {filters.length > 0 && <div className="works-wrapper">
          {projects.filter(pr => filters.indexOf(pr.type) !== -1).map((project, index) => {
            project.index = index + 1
            return (
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
                contribute={project.contribute}
              />
            </Fade>
            )})}
        </div>}
        {!filters.length && <div className='noprojects'>No Projects found</div>}
        </div>
    </div>
  )
}

export default Works