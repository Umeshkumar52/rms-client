import React from 'react'
import Homelayout from './Homelayout'
import {CgProfile} from 'react-icons/cg'
import {VscThreeBars} from 'react-icons/vsc'
import {Link} from "react-router-dom"
import Footer from './Footer'
import {SiWhatsapp} from 'react-icons/si'
export default function Home() {
  const islogiden=true
  function profileOnHandler(){
    document.querySelector('.profile').style.width="20vh"
    document.querySelector('.profile').style.height="30vh"
  }
  function profileCloseHandler(){
    document.querySelector('.profile').style.width="0vh"
   document.querySelector('.profile').style.height="0vh"
  }
  function menuOnHandler(){
    document.querySelector('.menubar').style.width="40vh"
    document.querySelector('.menubar').style.height="85vh"
  }
  function menuCloseHandler(){
    document.querySelector('.menubar').style.width="0"
    document.querySelector('.menubar').style.height="0"
  }
  return (
      <div className='relative w-full text-black overflow-hidden'>
          <div className= 'bg-indigo-800 flex h-14 px-4 items-center justify-between '>
        <h1 onMouseDown={profileCloseHandler} onClick={profileCloseHandler} className='w-full text-white font-bold text-xl'>Booking.com</h1>
        <div className='flex gap-4'>
           {islogiden?<CgProfile onClick={profileOnHandler} className=' relative w-45 text-white'/>:<Link to='/signup' className='text-white'>Signup<br/>Login</Link>} 
            <div className='absolute bg-white right-0 top-10 rounded-lg profile w-0'>
            <ul className=" w-full absolute menu flex top-2 flex-col ">
            <Link to='orders' className='w-full hover:bg-slate-300'>Orders</Link>
            <Link to='admin' className='w-full hover:bg-slate-300'>Dashbord</Link>
             <Link to='profile' className='w-full hover:bg-slate-300'>Profile</Link>
             <Link to='logout' className='w-full hover:bg-slate-300'>Logout</Link>
              </ul>
            </div>
            <VscThreeBars onClick={menuOnHandler} className='relative text-white'/>
            <div className='menubar absolute bg-white right-0 top-14 rounded-lg profile w-0'>
             <ul className="w-full absolute  menu top-2 left-4  flex flex-col">
              <Link className='w-full hover:bg-slate-300'>Dishes Menu</Link>
              <Link className='w-full hover:bg-slate-300'>Order Status</Link>
              <Link className='w-full hover:bg-slate-300'>Order History</Link>
             </ul>
           </div>
        </div>
      </div>
      {/* Add order status */}
      <div className='w-full absolute text-white flex justify-center items-center top-14'>
        <h1 className='font-bold'></h1>
      </div>
      <div onClick={profileCloseHandler} onMouseDown={menuCloseHandler} className='w-full'>
      <img className='w-full h-[19rem]' src='https://png.pngtree.com/background/20230613/original/pngtree-variety-of-indian-food-in-front-of-a-dark-wooden-table-picture-image_3419900.jpg'/>
        <div className='absolute flex gap-3 flex-col items-center justify-center w-full top-28'>
          <h1 className='font-bold text-white px-2 text-3xl '>Welcome Back To <span className='text-[#73f946]'>Tastye</span></h1>
          <div className='flex flex-col gap-3 px-2 items-center justify-center'>
            <p className='text-slate-100 text-lg font-semibold'>Georgian Food And Win <span className='text-[#73f946]'>Experiance in </span>San Francisco Bay Area</p>
            <button className='bg-green-500 hover:bg-green-600 focus-ring text-white font-semibold w-32 rounded-sm py-1'><Link to='menu'>Food Menu</Link></button>
          </div>
        </div>
        </div>
      {/* Table booking form */}
      <div onClick={profileCloseHandler} onMouseDown={menuCloseHandler} className='w-full bg-yellow-400 flex flex-col py-4 justify-center items-center'>
        <h1 className='text-white text-2xl font-bold'>Reserved Your Table</h1>
        <form className=' flex flex-col text-white gap-4 justify-center  py-6 px-3'>
           <div className='flex lg:flex-row flex-col gap-4'>
            <div className='check-in-data flex flex-col  '>
              <h2>check-in date</h2>
            <input className='check-in-data text-bold text-lg px-2 py-1' type='date'/>
            </div>
            <div className='flex flex-col'>
              <h2>check-to-Time</h2>
            <input type='time' className='px-2 py-1'/>
            </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                <div >
                <select className='px-2 py-1'>
                  <option>Members</option>
                  <option>1-2</option>
                  <option>2-3 </option>
                  <option>3-4 </option>
                  <option>4-5 </option>
                  <option>5-6 </option>
                  <option>6-7 </option>
                </select>
                </div>
                <div>
                  <select className='px-2 py-1'>
                <option>Tables</option>
                  <option>1-2</option>
                  <option>2-3 </option>
                  <option>3-4 </option>
                  <option>4-5 </option>
                  <option>5-6 </option>
                  <option>6-7 </option>
                </select>
                </div>
              </div>
              <div>
               <select className='px-2 py-1'>
                <option value="Choose dishes">Choose dishes</option>
                <option value="Sahi panir">Sahi panir</option>
                <option value="Chhole chawle">Chhole chawle</option>
                <option value="chicken">chicken</option>
               </select>
              </div>
            </div>
           <div className='flex justify-center'>
           <button className='bg-indigo-700 hover:bg-indigo-900 w-56 px-6 py-3 rounded-lg font-bold text-white'>Booking Confirm</button>
           </div>
        </form>
        </div>
        {/* Carausel */}
        <div className='w-full px-2 flex justify-center'>
        <div className="carousel flex gap-2  carousel-end py-10">
  <div className="w-[16rem] h-[16rem] carousel-item">
    <img src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.webp?b=1&s=170667a&w=0&k=20&c=RKgGJW8aIINIPpisynZ2x6UWFiMZ0afmEN32gmbYvVI=" className='rounded-lg border-2 border-white' alt="Drink" />
  </div> 
  <div className="w-[16rem] h-[16rem] carousel-item">
    <img src="https://img.freepik.com/free-photo/meat-medallions-with-potatoe-pure_140725-4823.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais" className='w-full rounded-lg border-2 border-white' alt="Drink" />
  </div> 
  <div className="w-[16rem] h-[16rem] carousel-item">
    <img src="https://img.freepik.com/premium-photo/flat-lay-delicious-dinner-table-with-roasted-meat-steak-appetizers-desserts_80013-382.jpg" className='rounded-lg border-2 border-white' alt="Drink" />
  </div> 
  <div className=" w-[16rem] h-[16rem] carousel-item">
    <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-lg border-2 border-white' alt="Drink" />
  </div> 
  <div className=" w-[16rem] h-[16rem] carousel-item">
    <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-lg border-2 border-white' alt="Drink" />
  </div> 
  <div className="w-[16rem] h-[16rem] carousel-item">
    <img src="https://images.pexels.com/photos/1741285/pexels-photo-1741285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='w-full rounded-lg border-2 border-white' alt="Drink" />
  </div> 
  <div className="w-[16rem] h-[16rem] carousel-item">
    <img src="https://images.pexels.com/photos/2463418/pexels-photo-2463418.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className='rounded-lg border-2 border-white' alt="Drink" />
  </div>
       </div>
       </div>
      <Footer/>
      <div className='fixed bottom-4 right-4'>
       <Link to='https://whatsapp.com/dl/'><SiWhatsapp className='text-white w-10 h-10 bg-[#12f712] rounded-full' /></Link>
      </div>
      </div>
  )
}
