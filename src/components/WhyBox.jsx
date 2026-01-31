import React from 'react'

export default function WhyBox({title, description}) {
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-lg border-l-4 border-[#0066CC]">
        <div>
        <h4 className="font-semibold mb-1 text-[17px]">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
    </div>
  )
}
