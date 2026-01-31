import React from 'react'
import SidebarProduct from '../components/SidebarProduct'
import ProductCard from '../components/ProductCard'
import sp1 from '../assets/images/sp-phay-cnc-6.jpg'
import ProductList from '../components/ProductList'
export default function Products() {
  return (
    <div>
        <div className="bg-[linear-gradient(135deg,#0066CC_0%,#0052a3_100%)] pt-16 pb-8">
            <div className="max-w-300 mx-auto px-2 text-white text-center">
                <h2 className="text-[40px] font-bold mb-6">Sản Phẩm</h2>
                <p>Các sản phẩm chất lượng cao, đáp ứng mọi yêu cầu kỹ thuật</p>
            </div>
        </div>
        <div className="text-center my-8 max-w-300 mx-auto px-2 flex gap-10">
            <div className='w-1/4'>
                <SidebarProduct/>
            </div>
            <div className='w-3/4'>
                <ProductList/>
            </div>
        </div>
    </div>
  )
}
