import React from 'react'
import { Link } from 'react-router-dom'
interface IData {
    title: string,
    to: string
}
interface IProp {
    data: IData[]
}
export const Breadcrumb = ({ data }: IProp) => {
    return (
        <div className='flex items-center gap-3'>
            {
                data.map((item, index) => {
                    const isLastItem = index === data.length - 1;
                    return (
                        <>
                            <Link to={item.to}>
                                <p className={`${isLastItem && "font-bold"} cursor-pointer`}>{item.title}</p>
                            </Link>
                            {!isLastItem &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                                </svg>
                            }
                        </>
                    )
                })
            }
        </div>
    )
}
