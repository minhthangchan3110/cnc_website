import React from 'react'

export default function ServicesBox({icon, title, description}) {
  return (
    <div className="bg-white flex flex-col rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 border border-gray-200 hover:border-[#0066CC] transition-all duration-300">
      <div className="w-fit text-3xl mb-6 bg-[#0066CC] p-3 rounded-lg">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-4 text-black">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
