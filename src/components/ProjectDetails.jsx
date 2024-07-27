import React, { useRef } from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import Input from './Input';
import { useProjects } from '../context/ProjectContextProvider';


export default function ProjectDetails() {
  let { projectState, setProjectState } = useProjects()
  let pro = projectState.projects.find(pro => pro.id === projectState.SelectedProjectId)
  let newTask = useRef()
  let Tasks = projectState.tasks?.filter(task => task.pId === projectState.SelectedProjectId)
  let TasksC = Tasks?.map(task => {
    return (
      <div key={task.tId} className='flex flex-col md:flex-row gap-2 md:gap-0 items-center p-2 hover:bg-stone-200 rounded transition cursor-pointer'>
        <p className='flex-1 text-sm md:text-md'>{task.title}</p>
        <button 
        className='font-bold size-6 bg-stone-700 text-sm rounded-full flex justify-center items-center text-stone-50'
        onClick={() => setProjectState(prev => {
          return {
            ...prev,
            tasks: prev.tasks.filter(taskk => {return  taskk.tId !== task.tId})
          }
        })}
        >
          <HiOutlineTrash />
        </button>
    </div>
    )
  })


  return (
    <div className='flex-1 flex justify-center items-center'>
      <div className='bg-stone-100 shadow rounded p-2 w-[90%] md:w-1/2 max-w-full'>
        <h1 className='text-lg md:text-3xl font-sans flex items-center justify-between'>{pro?.title} <span className='bg-stone-700 flex justify-center items-center rounded-full text-stone-50 w-16 p-[1.5px] text-sm'>Project</span></h1>
        <p className='bg-stone-200 min-h-44 text-sm md:text-md font-light break-all p-2 mt-6 mb-2 max-w-full'>
          {pro?.desc}
        </p>
        <div className='flex flex-wrap gap-3'>
          <Input label='Add New Task' ref={newTask} />
          <button 
          className='self-end py-1.5 px-4 md:px-8 rounded text-slate-100 bg-stone-700'
          onClick={() => 
            setProjectState(prev => {
              return {
                ...prev,
                tasks: [...prev.tasks, {pId: projectState.SelectedProjectId,tId: Math.floor(Math.random() * 10000) , title: newTask.current.value}]
              }
            })
          }
          >
            Add
          </button>
        </div>
        <p className="text-lg mt-2">TASKS</p>
        <div className='flex flex-col gap-2'>
          {Tasks?.length > 0 ? TasksC : <p className='mt-2 text-sm'>There are no tasks...</p>}
        </div>
      </div>
    </div>
  )
}
