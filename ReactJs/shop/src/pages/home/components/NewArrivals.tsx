import React from 'react'
import { sofa1Img } from '../../../assets/images'

export function NewArrivals() {
    return (
        <div className='bg-cosmicLatte'>
            <div className='flex container mx-auto'>
                <div className='flex-[2]'>
                    <img src={sofa1Img} alt="" />
                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <p className='text-2xl font-medium'>New Arrivals</p>
                    <h1 className='text-5xl font-bold'>Asgaard sofa</h1>
                    <button className="w-64 h-16 border-solid border-[1px] border-black mt-8">Order Now</button>
                </div>
            </div>
        </div>
    )
}
