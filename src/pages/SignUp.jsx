import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
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
 
  return (
    <div>
      <div className=' w-full py-4 flex justify-center items-center'>
      <form className='flex flex-col items-center gap-2'>
        <h1 className='text-2xl font-bold text-[#41f350]'>Register</h1>
        <div>
        <label for='fullNname'><b>Name</b></label>
        <input onChange={inputHandler} name='fullName' className='block px-2 py-1' autoFocus required type='text' placeholder='Enter your fullName'/>
        </div>
        <div>
        <label for='email'><b>Email</b></label>
        <input onChange={inputHandler} name='email' className='block px-2 py-1' required  type='email' placeholder='Enter your Email Id'/>
        </div>
        <div>
        <label for='number'><b>Phone</b></label>
        <input onChange={inputHandler}name='number'  className='block px-2 py-1' required type='text' placeholder='Enter your phone nubmber'/>
        </div>
        <div>
        <label for='password'><b>Password</b></label>
        <input onChange={inputHandler} name='password' className='block px-2 py-1' required type='password' placeholder='Enter your password'/>
        </div>
        <div className='w-full'>
          <button className=' w-full bg-yellow-400 font-semibold text-white py-1'>Register</button>
        </div>
        <div>
        Allready have an account <Link to='/login' className='text-[#465bf9] '>Login</Link>
        </div>
      </form>
      </div>
    </div>
  )
}
