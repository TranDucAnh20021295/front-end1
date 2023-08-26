import React from 'react'

export function Footer() {
    return (
        <div className='flex flex-col gap-13 mx-24 mt-24'>
            <div className='flex '>
                <div className='flex items-center   flex-1 text-base font-normal text-quickSilver'>
                    400 University Drive Suite 200 Coral <br />
                    Gables, <br />
                    FL 33134 USA
                </div>
                <div className='flex-1 flex'>
                    <div className='flex flex-col gap-14 flex-1 text-base font-medium'>
                        <p className='text-quickSilver'>Links</p>
                        <p>Home</p>
                        <p>Shop</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className='flex flex-col gap-14 flex-1 text-base font-medium'>
                        <p className='text-quickSilver'>Help</p>
                        <p>Payment Options</p>
                        <p>Returns</p>
                        <p>Privacy Policies</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-14'>
                    <p className='text-base font-medium text-quickSilver'>Newsletter</p>
                    <div>
                        <input type="email" placeholder="Enter Your Email Address" className="placeholder-[#9F9F9F] border-b border-black" />
                        <button>
                            <p className="text-sm font-medium underline  underline-offset-[5px] ml-3">SUBSCRIBE</p>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <hr className="border-t border-black my-10" />
                <p className="text-base font-normal my-9">2022 Meubel House. All rights reverved</p>
            </div>
        </div>
    )
}
