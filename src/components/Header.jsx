import React from 'react'
import TopBar from './TopBar'
import Logo from '../assets/images/logo.jpg'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <section className=' shadow-xs'>
       <TopBar/>
       <header className='max-w-300 mx-auto py-2 ' >
          <nav className='flex justify-between pr-4 items-center'>
            <div className='flex gap-2'>
              <div>
                <img src={Logo} alt="" className='w-14 h-14'/>
              </div>
              <div className='flex flex-col justify-between py-1'>
                <h1 className=' text-xl text-[#0066CC] font-bold'>Cơ Khí Bảo Khang</h1>
                <p className='text-xs text-gray-400'>Chính xác - Uy tín - Chuyên nghiệp</p>
              </div>
            </div>
            <ul className="flex gap-8">
                <li><Link to="/" className="hover:text-[#0066CC] duration-300">
                  Trang chủ
                </Link></li>
                <li><Link to="/Intro" className="hover:text-[#0066CC] duration-300">
                  Giới thiệu
                </Link></li>
                <li><a href="#why-us" className='hover:text-[#0066CC] duration-300'>Sản phẩm</a></li>
                <li><a href="#contact" className='hover:text-[#0066CC] duration-300'>Liên hệ</a></li>
            </ul>
          </nav>
       </header>
    </section>
  )
}
