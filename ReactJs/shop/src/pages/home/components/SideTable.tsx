import React from 'react'
import { chair1Img, chair2Img } from '../../../assets/images'
import { UnderlineButton } from '../../../components/buttons'

export function SideTable() {
    return (
        <div className='bg-cultured py-52'>
            <div className='flex mx-52'>
                <div className='flex-1'>
                    <img src={chair1Img} alt="" />
                    <h1 className='text-4xl font-medium'>Side table</h1>
                    <UnderlineButton onClick={() => { }} />
                </div>
                <div className='flex-1'>
                    <img src={chair2Img} alt="" />
                    <h1 className='text-4xl font-medium'>Side table</h1>
                    <UnderlineButton onClick={() => { }} />
                </div>
            </div>
        </div>
    )
}
