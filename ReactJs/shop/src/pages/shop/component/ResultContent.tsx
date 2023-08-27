import React from 'react'
import { chair3Img, dinningImg, mirror1Img, outdoorImg } from '../../../assets/images'
const ITEMS = [
    {
        image: chair3Img,
        describe: 'Trenton modular sofa_3',
        cost: 'Rs. 25,000.00'
    },
    {
        image: dinningImg,
        describe: 'Granite dining table with dining chair',
        cost: 'Rs. 25,000.00'
    },
    {
        image: outdoorImg,
        describe: 'Outdoor bar table and stool',
        cost: 'Rs. 25,000.00'
    },
    {
        image: mirror1Img,
        describe: 'Plain console with teak mirror',
        cost: 'Rs. 25,000.00'
    },
    {
        image: chair3Img,
        describe: 'Trenton modular sofa_3',
        cost: 'Rs. 25,000.00'
    },
    {
        image: dinningImg,
        describe: 'Granite dining table with dining chair',
        cost: 'Rs. 25,000.00'
    },
    {
        image: outdoorImg,
        describe: 'Outdoor bar table and stool',
        cost: 'Rs. 25,000.00'
    },
    {
        image: mirror1Img,
        describe: 'Plain console with teak mirror',
        cost: 'Rs. 25,000.00'
    },
    {
        image: chair3Img,
        describe: 'Trenton modular sofa_3',
        cost: 'Rs. 25,000.00'
    },
    {
        image: dinningImg,
        describe: 'Granite dining table with dining chair',
        cost: 'Rs. 25,000.00'
    },
    {
        image: outdoorImg,
        describe: 'Outdoor bar table and stool',
        cost: 'Rs. 25,000.00'
    },
    {
        image: mirror1Img,
        describe: 'Plain console with teak mirror',
        cost: 'Rs. 25,000.00'
    },
    {
        image: chair3Img,
        describe: 'Trenton modular sofa_3',
        cost: 'Rs. 25,000.00'
    },
    {
        image: dinningImg,
        describe: 'Granite dining table with dining chair',
        cost: 'Rs. 25,000.00'
    },
    {
        image: outdoorImg,
        describe: 'Outdoor bar table and stool',
        cost: 'Rs. 25,000.00'
    },
    {
        image: mirror1Img,
        describe: 'Plain console with teak mirror',
        cost: 'Rs. 25,000.00'
    }
]
export function ResultContent() {
    return (
        <div>
            <div className='mt-16 ml-24 grid grid-cols-4'>
                {
                    ITEMS.map((item) => (
                        <div className='flex flex-col gap-3'>
                            <img className='w-72 h-72' src={item.image} alt="" />
                            <p className='text-base font-normal max-w-[14rem]'>{item.describe}</p>
                            <p className='text-2xl font-medium'>{item.cost}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center gap-9 my-28'>
                <button className='bg-[#FBEBB5] w-14 h-14 rounded-2xl text-center'>1</button>
                <button className='bg-cosmicLatte w-14 h-14 rounded-2xl text-center'>2</button>
                <button className='bg-cosmicLatte w-14 h-14 rounded-2xl text-center'>3</button>
                <button className='bg-cosmicLatte w-24 h-14 rounded-2xl text-center'>Next</button>
            </div>
        </div>
    )
}
