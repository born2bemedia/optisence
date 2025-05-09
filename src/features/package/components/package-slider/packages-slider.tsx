'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import type { Package } from '../../lib';
import { PackageCard } from '../package-card';
import styles from './packages-slider.module.css';

export const PackageSlider = ({ packages }: { packages: Package[] }) => {
  const pagination = {
    clickable: true,
    renderBullet: (_: number, className: string) => {
      const bulletClass = `${className} ${styles.paginationBullet}`;
      return `<span class="${bulletClass}"></span>`;
    },
    bulletActiveClass: styles.activePaginationBullet,
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
      loop
      grabCursor
      wrapperClass={styles.swiperWrapper}
      className={styles.swiperContainer}
    >
      {packages.map(item => (
        <SwiperSlide className={styles.swiperSlide} key={item.name}>
          <PackageCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
