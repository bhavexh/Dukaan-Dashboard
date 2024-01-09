import React from 'react'

const DataTable = () => {
  return (
    <div className="h-10 px-3 py-2.5 border-b-2 flex flex-row">
        <div className="basis-1/2 flex flex-row gap-10 pr-5" >
            <div className="flex-1 flex items-center font-inter text-[#146EB4] text-[14px] font-medium">
                #281209
            </div>
            <div className="flex-1 flex flex-row items-center gap-1">
                <div className="font-inter text-[#1A181E] text-[14px] font-normal">7 July, 2023</div>
                
            </div>
        </div>
        <div className="basis-1/2 flex flex-row gap-10 pl-5" >
            <div className="flex-1 flex flex-row-reverse items-center font-inter text-[#1A181E] text-[14px] font-normal">
            ₹1278.23
            </div>
            <div className="flex-1 flex flex-row-reverse items-center gap-1">
                
                <div className="font-inter text-[#1A181E] text-[14px] font-normal"> ₹22</div>
            </div>
        </div>
      </div>
  )
}

export default DataTable