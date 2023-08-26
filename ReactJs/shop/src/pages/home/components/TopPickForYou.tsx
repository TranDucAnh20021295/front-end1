import React from 'react'
import { chair3Img, dinningImg, mirror1Img, outdoorImg } from '../../../assets/images'
import { UnderlineButton } from '../../../components/buttons'
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
    }
]
export function TopPickForYou() {
    return (
        <div className='my-14'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-4xl font-medium'>Top Picks For You</h1>
                <p className='text-base font-medium text-quickSilver'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <div className='mt-16 container mx-auto flex'>
                {
                    ITEMS.map((item) => (
                        <div className='flex-1'>
                            <div className='flex flex-col gap-3'>
                                <img className='w-72 h-72' src={item.image} alt="" />
                                <p className='text-base font-normal'>{item.describe}</p>
                                <p className='text-2xl font-medium'>{item.cost}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mt-16 flex justify-center'>
                <UnderlineButton onClick={() => {}}/>
            </div>
        </div>
    )
}
