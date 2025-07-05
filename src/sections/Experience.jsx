import React from 'react'
import { Timeline } from '../components/TimeLine'
import { experiences } from '../constants'

const Experience = () => {
  return (
    <div className='w-full '>
        <Timeline data={experiences}/>
      
    </div>
  )
}

export default Experience
