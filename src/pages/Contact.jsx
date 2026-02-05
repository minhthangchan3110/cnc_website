import React from 'react'

export default function Contact() {
  return (
    <div>
        <div className="bg-[linear-gradient(135deg,#0066CC_0%,#0052a3_100%)] pt-16 pb-8">
            <div className="max-w-300 mx-auto px-2 text-white text-center">
                <h2 className="text-[40px] font-bold mb-6">Liên hệ</h2>
                <p>Kết nối với chúng tôi</p>
            </div>
        </div>
        <div className='my-4 max-w-300 mx-auto px-2 w-full flex'>
            <div className='w-1/2'>
                <h2 className='text-2xl text-[#0066CC] font-semibold mb-4'>Công ty TNHH Cơ Khí Bảo Khang</h2>
                <div className='flex flex-col gap-4'>
                    <p className='font-semibold'>MST: <span className='ml-2 font-light'>1212121212</span></p>
                    <p className='font-semibold'>Địa chỉ: <span className='ml-2 font-light'>Số 38 Ngõ 79 Yên Duyên Hoàng Mai Hà Nội</span></p>
                    <p className='font-semibold'>Email: <span className='ml-2 font-light'>baokhangcokhi@gmail.com</span></p>
                    <p className='font-semibold'>Điện thoại: <span className='ml-2 font-light'>0123456789</span></p>
                    <p className='font-semibold'>Hotline: <span className='ml-2 font-light'>0123456789</span></p>
                </div>
            </div>
            <div className='w-1/2'>
                <span className='italic text-xs'>Xin vui lòng để lại địa chỉ email, chúng tôi sẽ cập nhật những tin tức quan trọng tới quý khách.</span>
                <div>
                    <form className=" text-black rounded-xl p-6 md:p-8 space-y-5">
                        {/* Inputs row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        </div>
                        <div className='w-full'>
                            <input
                            type="email"
                            placeholder="Email"
                            className="border w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#0066CC]"
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
                </div>
            </div>
        </div>
        <section className="my-4">
          <div className="my-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.1595464120755!2d105.86801207502978!3d20.972830880662542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac2670602d25%3A0x2cb1fc685d44d179!2zMzggTmcuIDc5IFAuIFnDqm4gRHV5w6puLCBZw6puIFPhu58sIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1725061508945!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              className="w-full h-75"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
    </div>
  )
}
