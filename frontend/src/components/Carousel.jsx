import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

// Images
import butterflyCake from '../assets/images/butterfly_cake.jpg';
import loveCake from '../assets/images/love_cake.jpg';
import valentineCake from '../assets/images/valentine_cake.jpg';
import whiteCake from '../assets/images/white_cake.jpg';


const Carousel = () => {
  const images = [butterflyCake, loveCake, valentineCake, whiteCake];

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
        spaceBetween={10}
        slidesPerView={1}  // Display only one slide at a time
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover rounded-md shadow-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
