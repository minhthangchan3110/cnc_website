import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarProduct() {
  return (
    <aside className="sticky top-25 space-y-6">
      {/* Danh mục */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 border-b-2 border-blue-600 pb-3 text-lg font-bold text-slate-800">
          Danh Mục
        </h3>

        <ul className="space-y-1">
          <li className=''>
            <a
              href="#"
              data-filter="all"
              className="flex items-center justify-between rounded-lg bg-[#0066CC] p-4 text-sm font-medium text-white transition"
            >
              <span>Tất cả</span>
              <span className="rounded-full  text-xs">
                14
              </span>
            </a>
          </li>

          {[
            { key: "truc", label: "Trục cơ khí", count: 3 },
            { key: "banhrong", label: "Bánh răng & Puly", count: 3 },
            { key: "bulong", label: "Bu lông & Ốc vít", count: 2 },
            { key: "otoxemay", label: "Phụ tùng ô tô & xe máy", count: 3 },
            { key: "xuongdong", label: "Phụ kiện xây dựng", count: 2 },
            { key: "nhomdong", label: "Sản phẩm nhôm", count: 1 },
          ].map((item) => (
            <li key={item.key}>
              <a
                href="#"
                data-filter={item.key}
                className="flex items-center justify-between rounded-lg p-4 text-sm text-slate-700 transition hover:bg-[#0066CC] hover:text-white"
              >
                <span>{item.label}</span>
                <span>
                    {item.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Báo giá */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-3 text-lg font-bold text-slate-800">
          Cần Báo Giá?
        </h3>

        <p className="mb-4 text-sm text-gray-600">
          Liên hệ với chúng tôi để được tư vấn và báo giá miễn phí.
        </p>

        <Link
          to="/lien-he"
          className="block w-full rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Liên hệ ngay
        </Link>
      </div>
    </aside>
  )
}
