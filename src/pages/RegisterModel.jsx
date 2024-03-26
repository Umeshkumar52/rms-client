import React, { useState } from 'react'
import {MdOutlineCancel} from 'react-icons/md'
export default function RegisterModel({SendToParent}) {
    const[data,setData]=useState({
        fullName:"",
        email:"",
        number:"",
        password:""
      })
      function inputHandler(event){
          event.preventDefault()
          const {name,value}=event.target
          setData({
            ...data,
            [name]:value
          })
      }
      console.log(data);
  return (
    <div className='absolute w-[18rem] px-2 top-10'>
         <MdOutlineCancel onClick={()=>SendToParent(false)} className='absolute text-white hover:text-red-600 w-6 h-6 -top-6 right-1 '/>
         <form className='w-full flex text-white bg-[#4e4eff] flex-col items-centerp'>
        <div className='w-full flex   flex-col items-center px-4 py-4 gap-1'>
        <h1 className='text-2xl font-bold text-white'>Register</h1>
        <div className='w-full'>
        <label for='name'><b>Name</b></label>
        <input onChange={inputHandler} className='w-full text-black bg-white block px-2 py-1' autoFocus required type='text' name='fullName' placeholder='Enter your fullName'/>
        </div>
        <div className='w-full'>
        <label for='email'><b>Email</b></label>
        <input onChange={inputHandler} className='w-full text-black bg-white block px-2 py-1' required  type='text' name='email' placeholder='Enter your Email Id'/>
        </div>
        <div className='w-full'>
        <label for='number'><b>Phone</b></label>
        <input onChange={inputHandler} className=' w-full text-black bg-white block px-2 py-1' required type='text' name='number' placeholder='Enter your phone nubmber'/>
        </div>
        <div className='w-full'>
        <label for='password'><b>Password</b></label>
        <input onChange={inputHandler} className='w-full text-black bg-white block px-2 py-1' required type='text' name='password' placeholder='Enter your password'/>
        </div>
        </div>
        <div className='w-full pb-3 pt-3 rounded-t-[90%] bg-white flex justify-center items-center '>
          <button className=' bg-indigo-700 hover:bg-indigo-900 w-1/2 font-semibold text-white py-1'>Register</button>
        </div>
      </form>
      {/* <MdOutlineCancel onClick={()=>SendToParent(false)} className='w-7 h-7 text-white'/> */}
    </div>
  )
}
