import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {VscThreeBars} from 'react-icons/vsc'
import Home from './Home'
export default function Homelayout() {
  return (
    <div>
      <div className='bg-indigo-600 flex px-3 justify-between '>
        <h1 className='text-white font-bold text-xl'>Booking.com</h1>
        <div className='flex justify-between '>
            <CgProfile/>
            <VscThreeBars/>
        </div>
      </div>
      <Home/>
    </div>
  )
}
