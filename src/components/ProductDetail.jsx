import React, { useState } from 'react'
import sp1 from '../assets/images/sp-phay-cnc-6.jpg'
import ProductCard from './ProductCard'
export default function ProductDetail() {
     const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    'Mô tả chi tiết',
    'Thông số kỹ thuật',
    'Liên hệ'
  ]

  return (
    <div className='max-w-300 mx-auto px-2 my-8'>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Image */}
        <div className="rounded-xl border-gray-200 border bg-white p-4 flex items-center justify-center">
          <img
            src={sp1}
            alt="Máy Tiện CNC"
            className="w-full h-105 object-cover rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Máy Tiện CNC Precision Pro X-500
          </h1>

          <div className="text-xl font-semibold text-[#0066CC] mb-6">
            Liên hệ báo giá
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-auto">
            <button
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0066CC] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052a3]"
            >
              Yêu cầu báo giá
            </button>

            <a
              href="tel:+84123456789"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#0066CC] px-6 py-3 text-sm font-semibold text-[#0066CC] transition hover:bg-blue-50"
            >
              Gọi tư vấn
            </a>
          </div>
        </div>

      </div>
      <div className="mt-12">
      {/* Tab buttons */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 text-sm font-semibold transition
              ${
                activeTab === index
                  ? 'border-b-2 border-[#0066CC] text-[#0066CC]'
                  : 'text-gray-500 hover:text-[#0066CC]'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content (placeholder) */}
      <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-400 duration-300">
        
      </div>

      <div className='mt-8'>
        <h2 className='text-[28px] mb-4'>Sản phẩm liên quan</h2>
        <div className='flex justify-between'>
        <ProductCard
            icon={sp1}
            category="Trục cơ khí"
            name="Trục Động Cơ"
        />
        <ProductCard
            icon={sp1}
            category="Trục cơ khí"
            name="Trục Động Cơ"
        />
        <ProductCard
            icon={sp1}
            category="Trục cơ khí"
            name="Trục Động Cơ"
        />
        <ProductCard
            icon={sp1}
            category="Trục cơ khí"
            name="Trục Động Cơ"
        />
      </div>
      </div>
    </div>
    </div>
  )
}
