import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5"; 
export default function Footer() {
  return (
    <footer className='bg-black'>
        <div className='max-w-300 mx-auto text-white py-12 flex justify-between'>
            <div className='flex flex-col gap-4'>
                <span className='text-3xl font-bold'>Cơ Khí Bảo Khang</span>
                <div className='flex flex-col gap-4 opacity-80'>
                    <div className='flex items-center gap-2'>
                        <CiMap size={24}/>
                        <span>Số 38 Ngõ 79 Yên Duyên Hoàng Mai Hà Nội</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPhone size={24}/>
                        <span>0123456789</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoMailSharp size={24}/>
                        <span>baokhangcokhi@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='text-3xl font-bold'>Dịch vụ</span>
                <div className='flex flex-col gap-2 opacity-80'>
                    <span>Tiện CNC</span>
                    <span>Gia công kim loại</span>
                    <span>Sản xuất linh kiện</span>
                    <span>Xử lý bề mặt</span>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='text-3xl font-bold'>Hỗ trợ</span>
                <div className='flex flex-col gap-2 opacity-80'>
                    <span>Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage</span>
                    <a className='hover:cursor-pointer' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/co.khi.bao.khang"><MdOutlineFacebook size={32}/></a>
                </div>
            </div>
        </div>
    </footer>
  )
}
