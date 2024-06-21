import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProjectsLayout = () => {
  const textParallax = useRef(null);

  return (
    <div
      id="projects"
      className="relative mx-auto w-full max-w-7xl px-6 py-10 md:py-28 flex flex-col gap-y-20"
    >
      <div className="w-full gap-x-5 flex flex-row items-center justify-center z-10">
        <span className="w-28 md:w-64 h-0.5 bg-secondary rounded-full"></span>
        <h1 className="text-xl md:text-4xl font-bold">Projects</h1>
        <span className="w-28 md:w-64 h-0.5 bg-secondary rounded-full"></span>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
      <h1
        id="textParallax"
        className={`absolute left-0 top-20 text-7xl md:text-9xl font-frank font-bold text-transparent font-outline z-[1]`}
        ref={textParallax}
      >
        My Projects
      </h1>
    </div>
  );
};

export default ProjectsLayout;
