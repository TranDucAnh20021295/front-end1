import React from 'react'
import { TaskBar } from '../../../components/TaskBar'
import { shop1Img } from '../../../assets/images'

export function Header() {
  return (
    <div className=''>
        <TaskBar/>
        <div>
            <div className=''>
                <img src={shop1Img} alt="" className='absolute -z-10 w-full'/>
            </div>
        </div>
    </div>
  )
}
