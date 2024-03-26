import React, { useState } from 'react'
import { MdPanoramaVerticalSelect } from 'react-icons/md'

export default function TableBooking() {
  const[data,setData]=useState({
    date:"",
    time:"",
    members:"",
    tables:"",
    dishes:""
  })
  function inputHandler(event){
     event.preventDefault()
     const{name,value}=event.target
     setData({
      ...data,
      [name]:value
     })
  }
  console.log(data);
  return (
    <div>
       <div className='w-full bg-yellow-400 flex flex-col py-4 justify-center items-center'>
        <h1 className='text-white text-3xl px-6 font-serif'>Reserved Your Table</h1>
        <form className=' flex flex-col text-white text-lg gap-2 justify-center py-4 '>
           <div className='flex lg:flex-row flex-col lg:gap-4'>
            <div className='check-in-data flex flex-col'>
              <h2 className='text-black'>check-in date</h2>
            <input name='date' onChange={inputHandler} className='check-in-data text-bold text-lg px-2 py-1' type='date'/>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-black'>check-to-Time</h2>
            <input onChange={inputHandler} name='time' type='time' className='px-2 py-1'/>
            </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col lg:flex-row lg:gap-4'>
                <div >
                  <p className='text-black'>Members</p>
                <select onChange={inputHandler} name='members' className='px-2 py-1'>
                  <option>0</option>
                  <option>1</option>
                  <option>2 </option>
                  <option>3 </option>
                  <option>4 </option>
                  <option>5 </option>
                  <option>6 </option>
                  <option>Call for more booking</option>
                </select>
                </div>
                <div>
                <p className='text-black'>Tables</p>
                <select className='px-2 py-1'>
                  <option>0</option>
                  <option>1</option>
                  <option>2 </option>
                  <option>3 </option>
                  <option>4 </option>
                  <option>5 </option>
                  <option>6 </option>
                  <option>Call for more booking</option>
                </select>
                </div>
              </div>
              <div>
               <select onChange={inputHandler} name='dishes' className='w-full px-2 py-1'>
                <option value="Choose dishes">Choose dishes</option>
                <option value="Sahi panir">Sahi panir</option>
                <option value="Chhole chawle">Chhole chawle</option>
                <option value="chicken">chicken</option>
               </select>
              </div>
            </div>
           <div className='flex justify-center'>
           <button className='bg-indigo-700 hover:bg-indigo-900 w-56 px-6 py-2 font-bold text-white'>Booking Confirm</button>
           </div>
        </form>
        </div>
    </div>
  )
}
