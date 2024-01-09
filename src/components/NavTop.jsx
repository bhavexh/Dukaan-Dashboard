import React from 'react'
import CompanyName from './CompanyName'
import Pages from './Pages'

const NavTop = () => {
  return (
    <div className='flex flex-col w-52 align-middle'>
        <CompanyName />
        <Pages />
    </div>
  )
}

export default NavTop