'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './examples.module.scss'
import ButtonPrev from '../Icons/ButtonPrev'
import Phone from './Phone/Phone'
import ButtonPlay from '../Icons/ButtonPlay'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import ButtonPause from '../Icons/ButtonPause';

const data = {
  subtitle: 'Найдите еще один пример на сайте и попробуйте сами',
  title: 'Примеры некоторых работ',
  list: [
    {
      videoUrl: 'Video/carouselVideo.mp4'
    },
    {
      videoUrl: '/Video/genocyd.mp4'
    },
    {
      videoUrl: '/Video/vera_khoruzhaya.mp4'
    },
    {
      videoUrl: '/Video/betera.mp4'
    },
    {
      videoUrl: 'Video/heroblockVideo.mp4'
    },
    {
      videoUrl: '/Video/narkomany.mp4'
    }
  ]
}

const Examples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(Array(data.list.length).fill(false));
  const videoRefs = useRef<Array<HTMLVideoElement | null>>(Array(data.list.length).fill(null));
  const handlePlayPauseClick = (index: number) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = !newIsPlaying[index];
    setPlaying(newIsPlaying);

    const video = videoRefs.current[index];
    if (video) {
      if (newIsPlaying[index]) {
        video.play();
      } else {
        video.pause();
      }
    }
  };
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    setPlaying(Array(data.list.length).fill(false));
  }, [currentIndex]);

  return (
    <div id='Examples' className={styles.wrapper} >
      <p className={styles.subtitle}>{data.subtitle}</p>
      <h2 className={styles.h2}>{data.title}</h2>
      <Swiper
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
        grabCursor
        freeMode={false}
        loop={false}
        mousewheel={false}
        keyboard={{
          enabled: true
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        breakpoints={{
          772: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }}
      >
        {data.list.map((item, index) => (
          <SwiperSlide key={index}>
            <ul className={`${styles.list} ${styles.activeSlide}`}>
              <li className={styles.slide}>
                <div className={styles.cases}>
                  <div className={styles.icn} onClick={() => handlePlayPauseClick(index)}>
                    {isPlaying[index] ? <ButtonPause /> : <ButtonPlay />}
                  </div>
                  <div className={styles.image}><Phone /></div>
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className={styles.video}
                    src={item.videoUrl}
                    playsInline
                    loop
                    preload=""
                    id={`video-${index}`}
                  />
                </div>
              </li>
            </ul>
          </SwiperSlide>
        ))}
        <span className="swiper-button-prev"></span>
        <span className="swiper-button-next"></span>
      </Swiper>
    </div>
  )
}

export default Examples