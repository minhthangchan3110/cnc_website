import React from 'react'

export default function StepBox({ number, title, description, isLast }) {
  return (
    <div className="flex items-center justify-between bg-white py-6">
      
      {/* Nội dung step */}
      <div className="text-center flex-1">
        <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#0066CC] text-white font-bold text-lg">
          {number}
        </div>

        <h4 className="font-semibold mb-2 text-xl">{title}</h4>

        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Mũi tên */}
      {!isLast && (
        <div className="text-[40px] text-[#0066CC] ml-6 hidden md:block">
          →
        </div>
      )}
    </div>
  )
}
