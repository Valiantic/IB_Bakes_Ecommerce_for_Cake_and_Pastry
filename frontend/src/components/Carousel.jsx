import React from 'react';

// Use States
import { useEffect } from 'react';
// Swiperjs
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
// Images
import butterflyCake from '../assets/images/butterfly_cake.jpg';
import loveCake from '../assets/images/love_cake.jpg';
import valentineCake from '../assets/images/valentine_cake.jpg';
import whiteCake from '../assets/images/white_cake.jpg';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';



const Carousel = () => {

  // store image on array 
  const images = [butterflyCake, loveCake, valentineCake, whiteCake];

  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration in milliseconds
      offset: 200,    // distance the element must be scrolled before it animates
    });
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6 rounded-[14px] overflow-hidden">
      {/* Text Overlay */}
      <div data-aos="fade-up" className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white bg-black/50">
        <h1 className="text-7xl font-montserrat">IB  <span className="font-style: italic text-rose-600">Bakes</span></h1>
        <p className="mt-2 text-lg font-semibold">𝙵𝚛𝚎𝚜𝚑 • 𝙳𝚎𝚕𝚒𝚌𝚒𝚘𝚞𝚜 • 𝚂𝚠𝚎𝚎𝚝 • 𝚃𝚊𝚜𝚝𝚢</p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={10}
        slidesPerView={1} // Only one slide at a time
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {/* Image with Blur */}
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;