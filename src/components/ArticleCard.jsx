import React from "react";

export default function ArticleCard({
  
  image,
  title,
  excerpt,
  link,
}) {
  return (
    <article className="bg-white rounded-xl text-start overflow-hidden border border-gray-200 hover:shadow-xl transition hover:-translate-y-1 hover:duration-300 hover:cursor-pointer">
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
        />
        </div>

      {/* Content */}
      <div className="p-6">
       
        {/* Title */}
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 hover:text-[#0066CC] transition">
          {title}
        </h3>
        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        {/* Read more */}
        <a
          href={link}
          className="inline-flex items-center gap-1 text-[#0066CC] font-semibold hover:gap-2 transition-all"
        >
          Đọc thêm →
        </a>
      </div>
    </article>
  );
}
