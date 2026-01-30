import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function TopBar() {
  return (
    <div className='bg-[#0066CC]'>
        <div className="flex font-be  text-[14px] py-3 px-4 max-w-300 mx-auto justify-between">
        <div className='flex text-white items-center gap-8'>
            <span className='flex items-center gap-2'>
            <FaPhone color='red'/>
            0123456789
            </span>
            <span className='flex items-center gap-2'>
                <IoMailSharp color='white'/>
                baokhangcokhi@gmail.com
            </span>
        </div>
        <div className='text-white'>
            Thứ 2 - Thứ 7: 7:00 - 18:00
        </div>
        </div>
    </div>
  )
}
