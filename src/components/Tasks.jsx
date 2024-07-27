import React from 'react'
import Task from './Task'
import { useProjects } from '../context/ProjectContextProvider'

export default function Tasks() {
  let { projectState, SelectProject, setProjectState} = useProjects()
  return (
    <section className='mt-3'>  
      {projectState.projects.map(project => <Task key={project.id} title={project.title} id={project.id} SelectProject={SelectProject} setProjectState={setProjectState} />)}
    </section>
  )
}
