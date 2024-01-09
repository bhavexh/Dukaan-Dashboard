import React from 'react'
import Que from '../assets/icons/Question.png'
import Search from '../assets/icons/Search.png'
import Menu1 from '../assets/icons/Menu1.png'
import Menu2 from '../assets/icons/Menu2.png'

const Header = () => {
  return (
    <div className='flex flex-row px-8 gap-4 items-center border-b-2'>
        <div className='basis-1/3 flex flex-row items-center gap-4'>
            <div className="font-inter text-black text-[15px] font-normal">
                Payments
            </div>
            <div className='flex flex-row items-center gap-1.5'>
                <div className='h-3.5 w-3.5 flex items-center justify-center '>
                    <img src={Que} alt="" />
                </div>
                <div className="font-inter text-[#4D4D4D] text-[12px] font-normal">
                    How it works
                </div>
            </div>
        </div>
        <div className='basis-1/3 my-3 px-4 py-2.5 bg-grey flex items-center rounded-md'>
            <div className='h-4 w-4 mr-2'>
                <img src={Search} alt="Search" />
            </div>
            <div className='font-inter text-[#808080] text-[15px] font-normal'>
                Search features, tutorials, etc.
            </div>
        </div>
        <div className='basis-1/3 flex flex-row-reverse'>
            <div className='flex flex-row gap-3'>
                <div className='w-10 h-10'>
                    <img src={Menu1} alt="Menu1" />
                </div>
                <div className='w-10 h-10'>
                    <img src={Menu2} alt="Menu2" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header