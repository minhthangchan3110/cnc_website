import React from "react";
import { FaCheck } from "react-icons/fa";
import StatBox from "../components/StatBox";
import ServicesBox from "../components/ServicesBox";
import WhyBox from "../components/WhyBox";
import StepBox from "../components/StepBox";
import banner from "../assets/images/test1.jpg";
export default function Home() {
  return (
    <div>
      <div className="bg-[linear-gradient(135deg,#0066CC_0%,#0052a3_100%)] pt-16 pb-12">
        {/* Banner Test */}
        <section className="max-w-300 mx-auto px-2 text-white flex">
          <div className="w-1/2">
            <h2 className="text-[40px] font-bold leading-[1.2] mb-4">
              Xưởng Gia Công Tiện CNC
              <br />
              <span className="text-orange-500">Chính Xác & Uy Tín</span>
            </h2>
            <p className="text-[17px] opacity-95 mb-8">
              Chuyên gia công các chi tiết cơ khí tiện CNC với độ chính xác cao,
              đáp ứng mọi yêu cầu kỹ thuật khắt khe. Cam kết chất lượng và giao
              hàng đúng hẹn.
            </p>
            <div className="flex w-full mb-8">
              <div className="w-1/2 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-normal">
                  <div className="bg-green-500 rounded-full p-1">
                    <FaCheck color="white" size={10} />
                  </div>
                  <p className="font-thin">Độ chính xác 0.01mm</p>
                </div>

                <div className="flex items-center gap-2 text-normal">
                  <div className="bg-green-500 rounded-full p-1">
                    <FaCheck color="white" size={10} />
                  </div>
                  <p className="font-thin">Máy móc hiện đại</p>
                </div>
              </div>

              <div className="w-1/2 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-normal">
                  <div className="bg-green-500 rounded-full p-1">
                    <FaCheck color="white" size={10} />
                  </div>
                  <p className="font-thin">Giao hàng đúng hẹn</p>
                </div>

                <div className="flex items-center gap-2 text-normal">
                  <div className="bg-green-500 rounded-full p-1">
                    <FaCheck color="white" size={10} />
                  </div>
                  <p className="font-thin">Giá cả cạnh tranh</p>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <button className="bg-amber-600 px-8 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer rounded-lg">
                Liên hệ báo giá
              </button>
              <button className="px-8 py-3 border hover:bg-white hover:text-black hover:border-white hover:duration-300 hover:cursor-pointer rounded-lg">
                Xem dịch vụ
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div>
              <img
                src={banner}
                className="w-120 h-[362.5px] rounded-xl"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#f8f9fa]">
        {/* Stats */}
        <section className="max-w-300 mx-auto px-2 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            <StatBox value="3+" label="Năm kinh nghiệm" />
            <StatBox value="2000+" label="Sản phẩm đã làm" />
            <StatBox value="300+" label="Khách hàng tin dùng" />
            <StatBox value="100%" label="Hài lòng" />
          </div>
        </section>
      </div>
      <div className="">
        {/* Services */}
        <section className="max-w-300 mx-auto px-2 text-white pb-8">
          <div className="text-black text-center my-8">
            <h2 className="text-[40px] font-bold mb-2">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-gray-400">
              Đa dạng giải pháp gia công cơ khí đáp ứng mọi nhu cầu của bạn
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-8">
            <ServicesBox
              icon="🔩"
              title="Tiện CNC 3-4 Trục"
              description="Gia công chi tiết phức tạp trên máy CNC hiện đại, phù hợp cho sản xuất hàng loạt và đơn lẻ."
            />
            <ServicesBox
              icon="⚡"
              title="Gia Công Kim Loại"
              description="Chuyên gia công thép, inox, nhôm, đồng với chất lượng cao và bề mặt hoàn thiện tốt."
            />
            <ServicesBox
              icon="📐"
              title="Tư Vấn Kỹ Thuật"
              description="Hỗ trợ thiết kế, tư vấn công nghệ và tối ưu hóa chi tiết phù hợp với yêu cầu."
            />
            <ServicesBox
              icon="🎯"
              title="Gia Công Chính Xác"
              description="Đảm bảo sai số tối thiểu, kiểm tra chất lượng nghiêm ngặt từng sản phẩm."
            />
            <ServicesBox
              icon="⚙️"
              title="Sản Xuất Linh Kiện"
              description="Gia công các loại trục, bu lông, puly, bánh răng theo bản vẽ yêu cầu."
            />
            <ServicesBox
              icon="💎"
              title="Xử Lý Bề Mặt"
              description="Dịch vụ mạ, nhiệt luyện, đánh bóng, phun cát theo tiêu chuẩn."
            />
          </div>
        </section>
      </div>
      {/* Why choose us */}
      <div className="bg-[#f8f9fa]">
        <section className="max-w-300 mx-auto px-2 flex items-center p-12">
          <div className="w-1/2 text-start">
            <h2 className="text-[40px] mb-2 font-bold">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-gray-400">
              Những lý do khách hàng tin tưởng và lựa chọn dịch vụ của chúng tôi
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <WhyBox
              title="Máy móc hiện đại"
              description="Trang bị máy CNC nhập khẩu, đảm bảo độ chính xác và năng suất cao"
            />
            <WhyBox
              title="Đội ngũ lành nghề"
              description="Thợ kỹ thuật có kinh nghiệm lâu năm, tay nghề cao"
            />
            <WhyBox
              title="Giá cả hợp lý"
              description="Báo giá minh bạch, cạnh tranh nhất thị trường"
            />
            <WhyBox
              title="Giao hàng đúng hẹn"
              description="Cam kết tiến độ, giao hàng đúng thời gian đã hứa"
            />
          </div>
        </section>
      </div>
      {/* Process */}
      <div className="">
        <section className="max-w-300 mx-auto px-2 py-12">
          <div className="text-center">
            <h2 className="text-[40px] mb-2 font-bold">Quy Trình Làm Việc</h2>
            <p className="text-gray-400">
              4 bước đơn giản để có sản phẩm hoàn hảo
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepBox
              number="1"
              title="Liên hệ tư vấn"
              description="Gửi bản vẽ và yêu cầu của bạn cho chúng tôi"
            />
            <StepBox
              number="2"
              title="Báo giá chi tiết"
              description="Nhận báo giá và thời gian hoàn thành trong 24h"
            />
            <StepBox
              number="3"
              title="Tiến hành gia công"
              description="Sản xuất theo đúng bản vẽ và kiểm tra chất lượng"
            />
            <StepBox
              number="4"
              title="Giao hàng"
              description="Nhận sản phẩm hoàn thiện đúng yêu cầu"
              isLast
            />
          </div>
        </section>
      </div>

      {/* Contact */}
      <div className="bg-[linear-gradient(135deg,#0066CC_0%,#0052a3_100%)]">
        <section className="max-w-300 mx-auto px-4 py-12 text-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Liên Hệ Với Chúng Tôi</h2>
            <p className="opacity-90">
              Hãy để lại thông tin, chúng tôi sẽ tư vấn và báo giá miễn phí cho
              bạn trong 24h
            </p>
          </div>

          {/* Form */}
          <form className="bg-white text-black rounded-xl p-6 md:p-8 space-y-5 shadow-lg">
            {/* Inputs row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Họ và tên *"
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#0066CC]"
              />

              <input
                type="tel"
                placeholder="Số điện thoại *"
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#0066CC]"
              />

              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#0066CC]"
              />
            </div>

            {/* Textarea */}
            <textarea
              placeholder="Nội dung yêu cầu *"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-30 resize-none focus:outline-none focus:border-[#0066CC]"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full md:w-auto hover:cursor-pointer duration-300 bg-[#FF6B00] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#ff8533] transition"
            >
              Gửi yêu cầu
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
