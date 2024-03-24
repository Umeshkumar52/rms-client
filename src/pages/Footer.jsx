import React from 'react'
import {FaFacebook, FaLinkedin, FaPhoneAlt, FaRegCopyright, FaTwitter, FaVoicemail, FaWhatsapp} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {CiLocationOn} from 'react-icons/ci'
import {TfiEmail} from 'react-icons/tfi'
export default function Footer() {

  return (
    <div className='w-full bottom-0 py-2 gap-6 lg:flex-row lg:justify-evenly bg-black text-white flex flex-col px-4 '>
        <div>
            <div className='flex flex-col'>
                <h1 className='text-yellow-500 font-bold text-xl'>Marble</h1>
                <p className='text-yellow-600'>Meat & Flame Enthusiasts</p>
            </div>
            <p className='lg:w-[300px]'>
                "Marble is a celebration of quitessential south indian fare. It embolies south indian's love of cooking with fare, a quality that makes our food culture different from the rest of the world"
            </p>
        </div>
        {/* contact info */}
      <div className=' flex flex-col gap-4'>
        <h2 className='font-semibold text-yellow-500'>Social Media</h2>
        <ul className='flex gap-4'>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaTwitter/></li>
            <li><FaWhatsapp/></li>
            <li><FaLinkedin/></li>
        </ul>
        <ul className=' flex flex-col gap-4'>
            <li className='flex gap-2'><CiLocationOn/><p>Agra Uttar Pradesh 282003</p></li>
            <li className='flex gap-2'><FaPhoneAlt/><p>+917247800984</p> </li>
            <li className='flex gap-2'><TfiEmail/><p>info@marble.restaurant</p></li>
        </ul>
      </div>
      <ul>
        <p className='text-yellow-500'>More information</p>
      <li><a href='#'>Privacy Policy</a></li>
      <li><a href='#'>Terms of use</a></li>
      <li><a href='#'>impressum</a></li>
      <li><a href='#'>Cookies and interest-Based Ads</a></li>
      <p className='flex text-slate-300'>
      Copyright <FaRegCopyright/>  2024 OpenTable, Inc 
      </p>
      </ul>
    </div>
  )
}
