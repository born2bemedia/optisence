'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductCard } from '@/features/product/components';
import type { Product } from '@/features/product/lib';

import 'swiper/css';
import 'swiper/css/pagination';
import st from './products-slider.module.css';

export const ProductsSlider = ({ products }: { products: Product[] }) => {
  const pagination = {
    clickable: true,
    renderBullet: (_: number, className: string) => {
      const bulletClass = `${className} ${st.paginationBullet}`;
      return `<span class="${bulletClass} !h-1.5 rounded-xl"></span>`;
    },
    bulletActiveClass: st.activePaginationBullet,
  };

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={24}
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1080: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
      wrapperClass={st.swiperWrapper}
      className={st.swiperContainer}
      loop
      grabCursor
    >
      {products.map(item => (
        <SwiperSlide className={st.swiperSlide} key={item.name}>
          <ProductCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
