import React from 'react'
import sort from '../assets/icons/Sort.png'

const Sort = () => {
  return (
    <div className='flex flex-row gap-1.5 items-center px-3 py-1.5 border-2 rounded'>
        <div className="font-inter text-[#4D4D4D] text-[16px] font-normal">
            Sort 
        </div>
        <div>   
            <div className='w-4 h-4 flex items-center'>
            <img src={sort} alt="Sort" />
            </div>
        </div>
    </div>
  )
}

export default Sort