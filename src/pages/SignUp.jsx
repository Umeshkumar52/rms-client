import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <div className=' w-full py-4 flex justify-center items-center'>
      <form className='flex flex-col items-center gap-2'>
        <h1 className='text-2xl font-bold text-[#41f350]'>Register</h1>
        <div>
        <label for='name'><b>Name</b></label>
        <input  className='block px-2 py-1' autoFocus required type='text' name='name' placeholder='Enter your fullName'/>
        </div>
        <div>
        <label for='email'><b>Email</b></label>
        <input  className='block px-2 py-1' required  type='text' name='email' placeholder='Enter your Email Id'/>
        </div>
        <div>
        <label for='number'><b>Phone</b></label>
        <input  className='block px-2 py-1' required type='text' name='number' placeholder='Enter your phone nubmber'/>
        </div>
        <div>
        <label for='password'><b>Password</b></label>
        <input  className='block px-2 py-1' required type='text' name='password' placeholder='Enter your password'/>
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
