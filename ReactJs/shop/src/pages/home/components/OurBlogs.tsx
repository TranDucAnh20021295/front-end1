import React from 'react'
import { rectangle1Img, rectangle2Img, rectangle3Img } from '../../../assets/images'
import { UnderlineButton } from '../../../components/buttons'
const BLOGS = [
    {
        image: rectangle1Img,
        describe: 'Going all-in with millennial design',
        time: '5 min',
        date: '12th Oct 2022'
    },
    {
        image: rectangle2Img,
        describe: 'Going all-in with millennial design',
        time: '5 min',
        date: '12th Oct 2022'
    },
    {
        image: rectangle3Img,
        describe: 'Going all-in with millennial design',
        time: '5 min',
        date: '12th Oct 2022'
    }
]
export function OurBlogs() {
    return (
        <div>
            <div className='flex flex-col items-center gap-3 mt-14'>
                <h1 className='text-4xl font-medium'>Our Blogs</h1>
                <p className='text-base font-medium text-quickSilver'>Find a bright ideal to suit your taste with our great selection</p>
            </div>
            <div className='mt-16 flex gap-8 justify-center'>
                {
                    BLOGS.map((blog) => (
                        <div className='flex flex-col items-center'>
                            <img src={blog.image} alt="" />
                            <p className='mt-8'>{blog.describe}</p>
                            <UnderlineButton onClick={() => { }} title='Read More' />
                            <div className="flex mt-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 18.8306C14.9706 18.8306 19 14.8391 19 9.91529C19 4.99151 14.9706 1 10 1C5.02944 1 1 4.99151 1 9.91529C1 14.8391 5.02944 18.8306 10 18.8306Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.7 13.4815L10.5274 11.3293C10.1898 10.995 10.0001 10.5415 10 10.0687V4.56616" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="ml-1 mr-5">5 min</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M17.4167 3.66659H15.5833V2.74992C15.5833 2.5068 15.4868 2.27365 15.3149 2.10174C15.143 1.92983 14.9098 1.83325 14.6667 1.83325C14.4236 1.83325 14.1904 1.92983 14.0185 2.10174C13.8466 2.27365 13.75 2.5068 13.75 2.74992V3.66659H8.25001V2.74992C8.25001 2.5068 8.15343 2.27365 7.98152 2.10174C7.80962 1.92983 7.57646 1.83325 7.33334 1.83325C7.09023 1.83325 6.85707 1.92983 6.68516 2.10174C6.51325 2.27365 6.41668 2.5068 6.41668 2.74992V3.66659H4.58334C3.854 3.66659 3.15452 3.95632 2.6388 4.47204C2.12307 4.98777 1.83334 5.68724 1.83334 6.41658V17.4166C1.83334 18.1459 2.12307 18.8454 2.6388 19.3611C3.15452 19.8769 3.854 20.1666 4.58334 20.1666H17.4167C18.146 20.1666 18.8455 19.8769 19.3612 19.3611C19.8769 18.8454 20.1667 18.1459 20.1667 17.4166V6.41658C20.1667 5.68724 19.8769 4.98777 19.3612 4.47204C18.8455 3.95632 18.146 3.66659 17.4167 3.66659ZM18.3333 17.4166C18.3333 17.6597 18.2368 17.8929 18.0649 18.0648C17.893 18.2367 17.6598 18.3333 17.4167 18.3333H4.58334C4.34023 18.3333 4.10707 18.2367 3.93516 18.0648C3.76325 17.8929 3.66668 17.6597 3.66668 17.4166V10.9999H18.3333V17.4166ZM18.3333 9.16658H3.66668V6.41658C3.66668 6.17347 3.76325 5.94031 3.93516 5.7684C4.10707 5.5965 4.34023 5.49992 4.58334 5.49992H6.41668V6.41658C6.41668 6.6597 6.51325 6.89286 6.68516 7.06477C6.85707 7.23667 7.09023 7.33325 7.33334 7.33325C7.57646 7.33325 7.80962 7.23667 7.98152 7.06477C8.15343 6.89286 8.25001 6.6597 8.25001 6.41658V5.49992H13.75V6.41658C13.75 6.6597 13.8466 6.89286 14.0185 7.06477C14.1904 7.23667 14.4236 7.33325 14.6667 7.33325C14.9098 7.33325 15.143 7.23667 15.3149 7.06477C15.4868 6.89286 15.5833 6.6597 15.5833 6.41658V5.49992H17.4167C17.6598 5.49992 17.893 5.5965 18.0649 5.7684C18.2368 5.94031 18.3333 6.17347 18.3333 6.41658V9.16658Z" fill="black" />
                                </svg>
                                <p className="ml-1">12th Oct 2022</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center my-14'>
                <UnderlineButton onClick={() => { }} title='View All Post' />
            </div>
        </div>
    )
}
