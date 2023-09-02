import React from 'react'
import { logo1Img, shop1Img } from '../../assets/images'
import { Breadcrumb } from '../Breadcrumb'
interface IData {
    title: string,
    to: string
}
export const Header = ({title, data} : {title: string, data: IData[]}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${shop1Img})`
            }}
            className='py-20 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-3'
        >
            <img src={logo1Img} alt="" />
            <h1 className='text-5xl font-medium'>{title}</h1>
            <Breadcrumb data={data}/>
        </div>
    )
}
