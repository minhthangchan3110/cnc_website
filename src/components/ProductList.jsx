import React from 'react'
import sp1 from '../assets/images/sp-phay-cnc-6.jpg'
import ProductCard from './ProductCard'
export default function ProductList() {
  return (
    <div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
            
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
            <ProductCard
                icon={sp1}
                category="Trục cơ khí"
                name="Trục Động Cơ"
            />
        </div>    
    </div>
  )
}
