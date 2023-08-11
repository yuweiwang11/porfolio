import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'

export default function SwiperProject() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <ProjectOne />
        </SwiperSlide>
        {/* <SwiperSlide>
          <ProjectTwo />
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
        ...
      </Swiper>
    </>
  )
}
