import React from 'react'
import wallet from '../../assets/icons/wallet.png'

const NavBottom = () => {
  return (
    <div className ='bg-[#353C53] pl-3 py-1.5 flex items-center rounded' >
      <div className='flex flex-row items-center gap-3'>
        <div className='h-9 w-9 bg-white bg-opacity-10 flex items-center justify-center rounded'>
          <img className='h-5' src={wallet} alt="" />
        </div>
        <div className='flex flex-col'>
          <div className="font-inter text-grey text-[13px] font-normal">
              Available credits
          </div>
          <div className="font-inter text-white text-[16px] font-medium">
              222.10
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBottom