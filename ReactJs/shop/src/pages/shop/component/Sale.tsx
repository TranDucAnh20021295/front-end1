import React from 'react'

export function Sale() {
  return (
    <div className='bg-cultured flex py-24 pl-24 gap-14'>
        <div className='flex-1'>
            <h1 className='text-3xl font-medium'>Free Delivery</h1>
            <p className='text-xl font-normal text-quickSilver'>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className='flex-1'>
            <h1 className='text-3xl font-medium'>90 Days Return</h1>
            <p className='text-xl font-normal text-quickSilver'>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className='flex-1'>
            <h1 className='text-3xl font-medium'>Secure Payment</h1>
            <p className='text-xl font-normal text-quickSilver'>100% secure payment, consectetur adipim scing elit.</p>
        </div>
    </div>
  )
}
