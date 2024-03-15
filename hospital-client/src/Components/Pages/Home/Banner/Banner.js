
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import './Banner.css';

const Banner = () => {
    const [autoplay, setAutoplay] = useState(true);

    const handleMouseEnter = () => {
      setAutoplay(false);
    };

    const handleMouseLeave = () => {
      setAutoplay(true);
    };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : false
        }
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://rncjaipur.org/public/front/images/background-banner.jpg')`,
              // backgroundImage: `url(${banner1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
            }}
            className="h-[400px] md:h-[500px] flex items-center"
          >
            {' '}
            <div className=" ml-32 text-start">
              <h1>30 Years of Healing and Wellness</h1>
              <h2 className="text-4xl font-semibold">
                A Legacy of Healing, Hope <br /> and Health
              </h2>
              <p className="text-sm">
                At the heart of our legacy lies a commitment to your well-
                <br />
                being, spanning three decades of exceptional healthcare.
              </p>
              <button className="btn btn-sm btn-primary mt-3">Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://st4.depositphotos.com/9999814/24062/i/450/depositphotos_240620978-stock-photo-male-doctor-standing-hospital-office.jpg')`,
              // backgroundImage: `url(${banner1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
            }}
            className="h-[400px] md:h-[500px] flex items-center "
          >
            <div className=" ml-32 text-start">
              <h1>Transforming to Futuristic Healthcare</h1>
              <h2 className="text-4xl font-semibold">
                Setting Benchmark <br />
                in Clinical Excellence
              </h2>
              <p className="text-sm">
                Investing in skill and experience for a better tomorrow.
              </p>
              <button className="btn btn-sm btn-primary mt-3">Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://cdn.apollohospitals.com/dev-apollohospitals/2023/12/ProHealth-Gift-of-Good-Health-Creatives-Adapts_1920x593_Apollo-Hospitals-banner.png')`,
              // backgroundImage: `url(${banner1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
            }}
            className="h-[400px] md:h-[500px] flex items-center"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://media.istockphoto.com/id/1210031774/photo/scientist-write-a-short-note-and-working-in-laboratory-with-team-medical-healthcare.jpg?s=612x612&w=0&k=20&c=cjohRPxhELd7l0BV-vZfpmMDVoPEZrHdnwIZcXISZ4I=')`,
              // backgroundImage: `url(${banner1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
            }}
            className="h-[400px] md:h-[500px] flex items-center"
          >
            <div className=" ml-32 text-start">
              <h1>30 Years of Healing and Wellness</h1>
              <h2 className="text-4xl font-semibold">
                A Legacy of Healing, Hope <br /> and Health
              </h2>
              <p className="text-sm">
                At the heart of our legacy lies a commitment to your well-
                <br />
                being, spanning three decades of exceptional healthcare.
              </p>
              <button className="btn btn-sm btn-primary mt-3">Know More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;