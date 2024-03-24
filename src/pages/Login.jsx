import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
        <div className=' w-full py-4 flex justify-center items-center'>
      <form className='flex flex-col items-center gap-2'>
        <h1 className='text-2xl font-bold text-[#41f350]'>Login</h1>
        <div>
        <label for='email'><b>Email</b></label>
        <input  className=' block px-2 py-1' autoFocus  type='text' name='email' required placeholder='Enter Email or number'/>
        </div>
        <div>
        <label for='password'><b>Password</b></label>
        <input  className='block px-2 py-1' type='text' required name='password' placeholder='Enter your password'/>
        </div>
        <div className='w-full'>
          <button className=' w-full bg-yellow-400 font-semibold text-white py-1'>Login</button>
        </div>
        <div>
          I have't an account ? <Link to='/signup' className='text-indigo-600 cursor-pointer'>Register</Link>
        </div>
      </form>
      </div>
    </div>
  )
}
