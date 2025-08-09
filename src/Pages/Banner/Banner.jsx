import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    img: "https://i.ibb.co/qYWpQz3m/image.jpg",
    title: "Join Master Group Study",
    desc: "Collaborate & complete assignments together with StudyHub.",
  },
  {
    img: "https://i.ibb.co.com/3YC1C0WB/depositphotos-38774981-stock-photo-group-of-students.webp",
    title: "Share Knowledge",
    desc: "Learn, discuss, and grow with your peers online.",
  },
  {
    img: "https://i.ibb.co.com/TxhMhDY2/focused-study-group-stockcake.jpg",
    title: "Track Your Progress",
    desc: "Submit assignments, get feedback, and improve continuously.",
  },
];

const Banner = () => {
  return (
    <div className="relative mt-15">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[65vh] md:h-[75vh]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Text content */}
              <div className="relative z-10 text-center text-white px-6 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl mb-6">{slide.desc}</p>
                <Link
                  to="/assignments"
                  className="inline-block bg-[#86e57d] hover:bg-[#86e57d] text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
