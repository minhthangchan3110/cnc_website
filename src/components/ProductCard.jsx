import React from 'react'

export default function ({ icon, badge, category, name }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#0066CC] hover:shadow-lg hover:shadow-blue-100">
      
      {/* Image */}
      <div className="relative flex h-60 items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
        {badge && (
          <span className="absolute left-3 top-3 rounded-md bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}

        <img
          src={icon}
          alt={name}
          className="w-full h-full"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col items-start p-4 mt-3.5">
        <span className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#0066CC]">
          {category}
        </span>

        <h3 className="mb-4 line-clamp-2 text-sm font-semibold text-slate-800">
          {name}
        </h3>

        <button className="mt-auto rounded-md bg-[#0066CC] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0052a3]">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
