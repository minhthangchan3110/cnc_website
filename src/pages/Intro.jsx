import React from 'react'
import ArticleCard from '../components/ArticleCard'
import logo from '../assets/images/logo.jpg'
export default function Intro() {
  return (
    <div>
        <div className='bg-[linear-gradient(135deg,#0066CC_0%,#0052a3_100%)] pt-16 pb-8'>
            <div className='max-w-300 mx-auto px-2 text-white text-center'>
                <h2 className='text-[40px] font-bold mb-6'>Giới thiệu</h2>
                <p>Thông tin doanh nghiệp</p>
            </div>
        </div>
        {/* All Content */}
        <div className='text-center my-8 max-w-300 mx-auto px-2'>
            <h2 className='text-[32px] mb-4'>Tất Cả Bài Viết</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard
                image={logo}
                title="Giới Thiệu Về Cơ Khí Bảo Khang"
                excerpt="Trong thời đại công nghiệp 4.0 hiện nay, việc tìm kiếm một đơn vị gia công cơ khí uy tín, chất lượng cao là nhu cầu thiết yếu của nhiều doanh nghiệp. Với hơn 12 năm kinh nghiệm trong lĩnh vực gia công tiện CNC, chúng tôi tự hào là đối tác tin cậy của hàng trăm doanh nghiệp trên toàn quốc."
                link="/Giới thiệu công ty Bảo Khang"
            />
            </div>
        </div>
    </div>
  )
}
