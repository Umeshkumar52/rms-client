import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
export default function FoodMenu() {
  let arr=[]
  for(let i=0;i<20;i++){
    arr.push(i)
  }  
  console.log("vxfdgdf");
  return (
    <div className='w-full px-4 py-4'>
      <input placeholder='Search...' className='w-full px-2 py-1 border-2 border-slate-300' />
      <div>
        
      </div>
    </div>
  )
}
