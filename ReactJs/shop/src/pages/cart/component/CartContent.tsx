import React from 'react'
import { sofa1Img } from '../../../assets/images'

export const CartContent = () => {
    return (
        <div className='mx-24 flex my-16 gap-8'>
            <div className='flex-[2]'>
                <div className='bg-cosmicLatte flex py-4 text-base font-medium gap-10'>
                    <div className='flex-[2]'></div>
                    <div className='flex-[2]'>Product</div>
                    <div className='flex-[2]'>Price</div>
                    <div className='flex-[2] flex justify-center'>Quantity</div>
                    <div className='flex-[2]'>Subtotal</div>
                    <div className='flex-1'></div>
                </div>
                <div className='flex mt-16 items-center gap-10'>
                    <div className='flex-[2] bg-cosmicLatte'>
                        <img src={sofa1Img} className='h-24' alt="" />
                    </div>
                    <div className='flex-[2]'>Asgaard sofa</div>
                    <div className='flex-[2]'>Rs. 250,000.00</div>
                    <div className='flex-[2] flex justify-center'>
                        <p className='border-solid border-quickSilver border-[1px] px-1'>1</p>
                    </div>
                    <div className='flex-[2]'>Rs. 250,000.00</div>
                    <div className='flex-1 flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#FBEBB5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex-1 bg-cosmicLatte flex flex-col items-center'>
                <h1 className='mt-4 text-[32px] font-semibold'>Cart Totals</h1>
                <div className='mt-16 flex gap-16'>
                    <p className='text-base font-medium'>Subtotal</p>
                    <p className='text-base font-normal text-quickSilver'>Rs. 250,000.00</p>
                </div>
                <div className='mt-8 flex gap-16'>
                    <p className='text-base font-medium'>Total</p>
                    <p className='text-xl font-medium text-[#B88E2F]'>Rs. 250,000.00</p>
                </div>
                <div className='mt-11 mb-20'>
                    <button className='border-black border-solid border-[1px] rounded-2xl w-56 h-14'>Check Out</button>
                </div>
            </div>
        </div>
    )
}
