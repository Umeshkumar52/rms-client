import React, { useEffect } from 'react'
import {CgProfile} from 'react-icons/cg'
import {VscThreeBars} from 'react-icons/vsc'
import {Link} from "react-router-dom"
import Footer from './Footer'
import {SiWhatsapp} from 'react-icons/si'
import { useState } from 'react'
import RegisterModel from './RegisterModel'
import {MdOutlineCancel} from 'react-icons/md'
import TableBooking from './TableBooking'
import Carausel from './Carausel'
import PagesSlide from './PagesSlide'
import FoodMenu from './FoodMenu'
export default function Home() {
  const [regModel,setRegModel]=useState()
  const[cancel,setCancel]=useState(false)
  const islogiden=true
  function regPopup(value){
    setRegModel(value)
  }
  function profileOnHandler(){
    document.querySelector('.profile').style.width="30vh"
    document.querySelector('.profile').style.height="40vh"
  }
  function profileCloseHandler(){
    document.querySelector('.profile').style.width="0vh"
   document.querySelector('.profile').style.height="0vh"
  }
  function menuOnHandler(){
    document.querySelector('.menubar').style.width="40vh"
    document.querySelector('.menubar').style.height="60vh"
  }
  function menuCloseHandler(){
    document.querySelector('.menubar').style.width="0"
    document.querySelector('.menubar').style.height="0"
  }
if(regModel==undefined)
  setTimeout(()=>{
    setRegModel(true)
  },3000)
  return (
      <div className='relative overflow-hidden  w-full text-black'>       
      {/* Add order status */}
      <div onMouseDown={menuCloseHandler} className='w-full'>
      <img className='relative w-full h-screen' src='https://png.pngtree.com/background/20230613/original/pngtree-variety-of-indian-food-in-front-of-a-dark-wooden-table-picture-image_3419900.jpg'/>
      <div className= 'absolute top-0 w-full bg-indigo-800 flex h-10 px-4 items-center justify-between '>
        <h1 onMouseDown={profileCloseHandler} onClick={profileCloseHandler} className='w-full text-white font-bold text-xl'>Booking.com</h1>
        <div className='flex gap-4'>
           {islogiden?<CgProfile onClick={profileOnHandler} className=' relative w-45 text-white'/>:<Link to='/signup' className='text-white'>Signup<br/>Login</Link>}
            <VscThreeBars onClick={menuOnHandler} className='relative text-white'/>
        </div>
          </div>
        <div onClick={profileCloseHandler} className='h-screen w-full absolute flex gap-3 top-12 flex-col items-center justify-center'>
          <h1 className='font-bold text-white px-2 text-3xl xl:text-5xl 2xl:text-6xl '>Welcome Back To <span className='text-[#73f946]'>Tastye</span></h1>
          <div className='flex flex-col gap-3 px-2 items-center justify-center'>
            <p className='text-slate-100 text-lg xl:text-2xl 2xl:text-3xl font-semibold'>Georgian Food And Win <span className='text-[#73f946]'>Experiance in </span>San Francisco Bay Area</p>
            <button className='bg-green-500 hover:bg-green-600 focus-ring text-white font-semibold w-32 rounded-sm py-1'><Link to='menu'>Food Menu</Link></button>
          </div>
          <div className='profile absolute bg-white right-0 -top-1 rounded-lg w-0'>
            <ul className="font-semibold w-full absolute flex left-2 top-2 flex-col ">
            <Link to='orders' className='w-full hover:bg-slate-300'>Orders</Link>
            <Link to='admin' className='w-full hover:bg-slate-300'>Dashbord</Link>
             <Link to='profile' className='w-full hover:bg-slate-300'>Profile</Link>
             <Link to='logout' className='w-full hover:bg-slate-300'>Logout</Link>
              </ul>
            </div> 
          <div className='menubar font-semibold absolute bg-white right-0 -top-1 rounded-lg w-0'>
             <ul className="w-full font-semibold absolute top-2 left-4  flex flex-col">
              <Link className='w-full hover:bg-slate-300'>Dishes Menu</Link>
              <Link className='w-full hover:bg-slate-300'>Order Status</Link>
              <Link className='w-full hover:bg-slate-300'>Order History</Link>
             </ul>
           </div>
          {/* <PagesSlide/> */}
          {regModel?<RegisterModel SendToParent={regPopup}/>:""}       
        </div>
        
        </div>       
      {/* Table booking form */}
     <TableBooking/>
        {/* Carausel */}
      <Carausel/>
      <Footer/>
      <div className='fixed bottom-4 right-4'>
       <Link to='https://whatsapp.com/dl/'><SiWhatsapp className='text-white w-10 h-10 bg-[#12f712] rounded-full' /></Link>
      </div>
      </div>
  )
}
