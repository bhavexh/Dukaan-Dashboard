import React from 'react'
import download from '../../assets/icons/download.png'

const Download = () => {
  return (
    <div className='flex flex-row gap-1.5 items-center px-3 py-1.5 border-2 rounded hover:bg-grey'>
        <div className='w-5 h-5'>
            <img src= {download} alt="Download" />
        </div>
    </div>
  )
}

export default Download