import React from 'react'
import { rectangle4Img } from '../../../assets/images'

export function OurInstargram() {
  return (
    <div
      style={{
        backgroundImage: `url(${rectangle4Img})`
      }}
      className='py-32 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center'
    >
      <h1 className='text-6xl font-bold'>Our Instagram</h1>
      <p className="text-xl font-normal mt-5">Follow our store on Instagram</p>
      <button className="w-64 h-16 rounded-[50px] shadow-2xl mt-5">Follow Us</button>
    </div>
  )
}
