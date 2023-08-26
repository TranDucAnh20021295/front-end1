import React from 'react'
import { arrow1Img, logo1Img, shop1Img } from '../../../assets/images'

export function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${shop1Img})`
      }}
      className='py-20 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-3'
    >
      <img src={logo1Img} alt="" />
      <h1 className='text-5xl font-medium'>Shop</h1>
      <div className='flex'>
        <p className='text-base font-medium'>Home</p>
        <img src={arrow1Img} alt="" />
        <p className='text-base font-light'>Shop</p>
      </div>
    </div>
  )
}
