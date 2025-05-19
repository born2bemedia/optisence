'use client';

import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './industries-slider.css';

const slides = [
  '/images/home/slide-1.jpg',
  '/images/home/slide-2.jpg',
  '/images/home/slide-3.jpg',
  '/images/home/slide-4.jpg',
  '/images/home/slide-5.jpg',
  '/images/home/slide-6.jpg',
  '/images/home/slide-7.jpg',
  '/images/home/slide-8.jpg',
];

export const IndustriesSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: (_: number, className: string) =>
      `<span class="${className} !h-1.5 rounded-xl"></span>`,
  };

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={24}
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
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
      loop
      grabCursor
    >
      {slides.map(item => (
        <SwiperSlide key={item}>
          <SliderCard imgUrl={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SliderCard = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <section className="relative h-[334px] w-[334px]">
      <Image
        className="object-cover"
        src={imgUrl}
        alt="slide"
        fill
        unoptimized
      />
    </section>
  );
};
