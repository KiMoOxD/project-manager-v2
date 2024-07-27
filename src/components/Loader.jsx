import React from 'react'
import '../index.css'

export default function Loader() {
  return (
    <div className='absolute flex flex-col justify-center items-center text-white text-3xl h-full w-full bg-stone-950 loader'>
      <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">

        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="heavy">Project Manager</text>
      </svg>

    </div>
  )
}
