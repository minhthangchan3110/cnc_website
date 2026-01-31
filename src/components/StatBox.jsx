import React from 'react'

export default function StatBox({ value, label }) {
  return (
    <div className="text-center border shadow-[0_2px_8px_rgba(0,0,0,0.08)] py-8 px-4 bg-white rounded-lg">
      <div className="text-[40px] font-bold text-[#0066CC] mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-400 mt-1">
        {label}
      </div>
    </div>
  )
}
