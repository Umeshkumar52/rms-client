import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

export default function PagesSlide() {
  const form1=document.querySelector('#form1')
  const form2=document.querySelector('#form2')
  const form3=document.querySelector('#form3')
  function formModelHandler(){
    document.querySelector('.formModel').style.width="14rem"
    document.querySelector('.formModel').style.width="16rem"
  }
  function formModelClose(){
    document.querySelector('.formModel').style.width="0rem"
    document.querySelector('.formModel').style.width="0rem"
  }
  return (
    <div className='formModel absolute flex bg-white w-[14rem] h-[16rem] '>
      <MdOutlineCancel onClick={formModelClose} className='absolute -right-5 -top-5 w-6 h-6 text-white hover:text-red-600'/>
   <form id='form1' className=' w-[20rem] flex flex-col gap-4 pt-10 px-4' >
      <h1 className='flex font-bold text-2xl text-green-400 justify-center items-center'>Personal Details</h1>
      <input type='email' placeholder='email'/>
      <input type='password' placeholder='password'/>
      <input type='password' placeholder='confirm password'/>
      <div className='flex justify-end items-center'>
        <p onClick={form2}>Next</p>
      </div>
    </form>
    <form id='form1' className=' w-[20rem] flex flex-col gap-4 pt-10 px-4' >
      <h1 className='flex font-bold text-2xl text-green-400 justify-center items-center'>Qualification</h1>
      <input type='email' placeholder='email'/>
      <input type='password' placeholder='password'/>
      <input type='password' placeholder='confirm password'/>
      <div className='flex justify-between items-center'>
        <button>Back</button>
        <button>Next</button>
      </div>
    </form>
    <form id='form2' className=' w-[20rem] flex flex-col gap-4 pt-10 px-4' >
      <h1 className='flex font-bold text-2xl text-green-400 justify-center items-center'>Skills</h1>
      <input type='email' placeholder='email'/>
      <input type='password' placeholder='password'/>
      <input type='password' placeholder='confirm password'/>
      <div className='flex justify-between items-center'>
      <button>Back</button>
      <button>Next</button>
      </div>
    </form>
   
    </div>
  )
}
