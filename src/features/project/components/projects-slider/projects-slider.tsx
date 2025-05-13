'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { projects } from '../../lib';
import { ProjectCard } from '../project-card';
import styles from './projects-slider.module.css';

export const ProjectsSlider = ({
  projectsRange,
}: {
  projectsRange: [number, number];
}) => {
  const [start, end] = projectsRange;

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
      {projects.slice(start, end).map(item => (
        <SwiperSlide className={styles.swiperSlide} key={item.name}>
          <ProjectCard project={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
