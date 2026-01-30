import React from 'react'
import logo from '../assets/images/logo.jpg'
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
export default function Article() {
  return (
    <div className=' max-w-200 mx-auto px-2 py-8'>
        <div className='text-sm mb-4'><span className='hover:underline hover:cursor-pointer duration-300 hover:text-[#0066CC]'>Trang chủ</span> / <span className='hover:underline hover:cursor-pointer duration-300 hover:text-[#0066CC]'>Giới thiệu</span> / <span className='text-[#0066CC]'>Bài viết</span></div>
        <h1 class="text-4xl">Giới Thiệu Cơ Khí Bảo Khang - Đơn Vị Trẻ Đầy Nhiệt Huyết</h1>

        <div className="my-8 rounded-xl overflow-hidden shadow-sm">
            <div className="w-full h-100 bg-linear-to-br flex items-center justify-center">
                <img
                src={logo}
                alt="Logo xưởng CNC"
                className="max-h-[70%] max-w-[70%] object-contain"
                />
            </div>
        </div>
        <div className='text-[17px] leading-8'>
            <p className='mb-6'>Trong thời đại công nghiệp 4.0 hiện nay, việc tìm kiếm một đơn vị gia công cơ khí uy tín, chất lượng cao là nhu cầu thiết yếu của nhiều doanh nghiệp. Mặc dù mới thành lập năm 2023, nhưng với đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi đã nhanh chóng khẳng định được vị thế trong ngành gia công cơ khí.</p>

            <h2 className='text-3xl font-bold mb-6'>Chúng Tôi Là Ai?</h2>
            
            <p className='mb-6'>Xưởng Gia Công CNC được thành lập vào đầu năm 2023 tại Hà Nội bởi một nhóm kỹ sư trẻ có đam mê và kinh nghiệm lâu năm trong lĩnh vực gia công cơ khí. Nhận thấy nhu cầu ngày càng cao về dịch vụ gia công CNC chất lượng với giá cả hợp lý, chúng tôi quyết định khởi nghiệp với mục tiêu mang đến cho khách hàng những sản phẩm chính xác nhất, dịch vụ tốt nhất.</p>

            <p className='mb-6'>Từ những ngày đầu khiêm tốn với 2 máy CNC và 5 nhân viên, chúng tôi đã nhanh chóng phát triển nhờ sự tín nhiệm của khách hàng. Hiện tại, xưởng của chúng tôi đã mở rộng lên diện tích 300m² với 5 máy CNC hiện đại nhập khẩu từ Nhật Bản và Đài Loan, cùng đội ngũ 12 kỹ thuật viên tay nghề cao.</p>
        </div>

        <h2 className='text-3xl font-bold mb-6'>Hành Trình Phát Triển</h2>

            <div className="mb-12">
                <div className="flex gap-8 mb-8 pb-8 border-b border-gray-400">
                    <div class="text-3xl font-bold text-[#0066CC] min-w-25">2023</div>
                    <div className="">
                        <h4 className='text-xl font-semibold text-black mb-2'>Khởi đầu đầy hứa hẹn</h4>
                        <p>Thành lập xưởng vào tháng 3/2023 với 2 máy CNC và 5 nhân viên. Tập trung xây dựng chất lượng và uy tín từ những đơn hàng đầu tiên.</p>
                    </div>
                </div>
                <div class="flex gap-8 mb-8 pb-8 border-b border-gray-400">
                    <div class="text-3xl font-bold text-[#0066CC] min-w-25">2024</div>
                    <div className="">
                        <h4 className='text-xl font-semibold text-black mb-2'>Mở rộng nhanh chóng</h4>
                        <p>Đầu tư thêm 2 máy CNC mới và tuyển dụng thêm 4 kỹ thuật viên. Số lượng khách hàng tăng trưởng ổn định, nhiều khách hàng quay lại đặt hàng lần 2, 3.</p>
                    </div>
                </div>
                <div class="flex gap-8 mb-8 pb-8 border-b border-gray-400">
                    <div class="text-3xl font-bold text-[#0066CC] min-w-25">2025</div>
                    <div className="">
                        <h4 className='text-xl font-semibold text-black mb-2'>Nâng cấp công nghệ</h4>
                        <p>Chuyển sang xưởng rộng hơn (300m²), đầu tư thêm máy CNC 4 trục hiện đại. Bắt đầu nhận các đơn hàng lớn từ các doanh nghiệp sản xuất.</p>
                    </div>
                </div>
                <div class="flex gap-8 mb-8 pb-8 border-b border-gray-400">
                    <div class="text-3xl font-bold text-[#0066CC] min-w-25">2026</div>
                    <div className="">
                        <h4 className='text-xl font-semibold text-black mb-2'>Tiếp tục phát triển</h4>
                        <p>Hiện tại với 5 máy CNC, 12 nhân viên và hơn 150 khách hàng tin dùng. Mục tiêu tiếp tục mở rộng quy mô và nâng cao chất lượng dịch vụ.</p>
                    </div>
                </div>
            </div>

            <section className="max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Trang Thiết Bị & Công Nghệ
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    Dù là đơn vị trẻ, nhưng chúng tôi không ngại đầu tư vào máy móc và công nghệ
                    để đảm bảo chất lượng sản phẩm:
                </p>

                <ul className="space-y-4 text-gray-700">
                    <li className="flex gap-3">
                    <span className="text-[#0066CC] font-bold">✔</span>
                    <span>
                        <strong>5 máy CNC 3–4 trục:</strong> Nhập khẩu từ Nhật Bản và Đài Loan,
                        đảm bảo độ chính xác cao đến <strong>0.01mm</strong>
                    </span>
                    </li>

                    <li className="flex gap-3">
                    <span className="text-[#0066CC] font-bold">✔</span>
                    <span>
                        <strong>Hệ thống đo lường hiện đại:</strong> Thước cặp điện tử, panme
                        vi mét chính xác để kiểm tra sản phẩm
                    </span>
                    </li>

                    <li className="flex gap-3">
                    <span className="text-[#0066CC] font-bold">✔</span>
                    <span>
                        <strong>Phần mềm CAD/CAM:</strong> SolidWorks, Fusion 360 giúp thiết kế
                        và lập trình gia công nhanh chóng
                    </span>
                    </li>

                    <li className="flex gap-3">
                    <span className="text-[#0066CC] font-bold">✔</span>
                    <span>
                        <strong>Thiết bị hỗ trợ:</strong> Máy đánh bóng, máy cắt, máy khoan để
                        hoàn thiện sản phẩm
                    </span>
                    </li>
                </ul>
            </section>
            <section className="max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Tại Sao Chọn Chúng Tôi?
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    Là một đơn vị trẻ, chúng tôi hiểu rằng phải nỗ lực gấp đôi để được khách hàng
                    tin tưởng. Vì vậy:
                </p>

                <ul className="space-y-4 text-gray-700 mb-6">
                    <li className="flex gap-3">
                    
                    <span>
                        <strong>Chất lượng là ưu tiên số 1:</strong> Mỗi sản phẩm là cơ hội để
                        chúng tôi khẳng định năng lực
                    </span>
                    </li>

                    <li className="flex gap-3">
                    
                    <span>
                        <strong>Linh hoạt và nhanh chóng:</strong> Không bị ràng buộc bởi quy
                        trình cứng nhắc, sẵn sàng đáp ứng yêu cầu đặc biệt
                    </span>
                    </li>

                    <li className="flex gap-3">
                    
                    <span>
                        <strong>Giá cả hợp lý:</strong> Chi phí vận hành thấp giúp chúng tôi đưa
                        ra mức giá tốt hơn
                    </span>
                    </li>

                    <li className="flex gap-3">
                    
                    <span>
                        <strong>Tận tâm với khách hàng:</strong> Xem mỗi khách hàng như đối tác
                        lâu dài, luôn cố gắng làm hài lòng
                    </span>
                    </li>

                    <li className="flex gap-3">
                    
                    <span>
                        <strong>Đầu tư công nghệ:</strong> Không ngại chi tiền cho máy móc hiện
                        đại để nâng cao chất lượng
                    </span>
                    </li>
                </ul>

                <p className="text-gray-600 leading-relaxed">
                    Dù mới hoạt động <strong>3 năm</strong>, nhưng với tinh thần học hỏi, không
                    ngừng cải tiến và đặt khách hàng lên hàng đầu, chúng tôi tin rằng sẽ ngày
                    càng phát triển và trở thành đối tác tin cậy của bạn.
                </p>
            </section>
        <div className='bg-[#f8f9fa] flex flex-col gap-4 p-8 rounded-lg border-l-4 border-[#0066CC]'>
            <span className='font-bold'>Liên hệ ngay với chúng tôi:</span>
            <div className='flex items-center gap-2'>
                <FaPhone color='red'/>
                <span>Hotline: 0123456789</span>
            </div>
            <div className='flex items-center gap-2'>
                <IoMailSharp color='green'/>
                <span>Email: baokhangcokhi@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
                <CiMap/>
                <span>Địa chỉ: Số 38 Ngõ 79 Yên Duyên Hoàng Mai Hà Nội</span>
            </div>
            
        </div>

    </div>
  )
}
