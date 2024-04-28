// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import '../../Pages/Home/BannerStyle/Banner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import 'animate.css';

const img1 = "https://i.ibb.co/3p77c5H/pexels-souvenirpixels-417074.jpg"
const img2 = "https://i.ibb.co/GdDCf18/pexels-freestockpro-2166553.jpg"
const img3 = "https://i.ibb.co/YfLNcNz/pexels-jaime-reimer-1376930-2662116.jpg"

const Banner = () => {
    return (
        <div>


            <Swiper className="mySwiper h-[500px] mb-24"
                // install Swiper modules
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

            >

                {/* 1 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img1})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Tour Travel & Adventure Camping</h1>
                                <p className="mb-5">It`s not Just Travel. we create Lifelong Adventures</p>
                                <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">{`Let's Booking`}</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img2})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Tour Travel & Adventure Camping</h1>
                                <p className="mb-5">It`s not Just Travel. we create Lifelong Adventures</p>
                                <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">{`Let's Booking`}</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img3})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Tour Travel & Adventure Camping</h1>
                                <p className="mb-5">It`s not Just Travel. we create Lifelong Adventures</p>
                                <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">{`Let's Booking`}</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>




            {/* <div className="p-3 lg:p-6 top-[90%] left-1/2  space-y-6 w-3/4  md:w-2/3  sm:mx-12  bg-white absolute z-10 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md flex flex-col items-center rounded-2xl border-y-4  border-primary ">
            <h1 className="md:text-4xl text-xl font-bold animate__animated animate__backInDown">Find Your Dream Home</h1>

            <p className="text-lg ">Welcome to our premier real estate platform! Whether you are looking for a cozy apartment in the heart of the city, a spacious family home in the suburbs</p>
            <Link to='/contact' className="font-medium text-white text-3xl  md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center flex gap-2 items-center justify-center">

                <span >Contact here</span>
                <BiArrowToRight className='text-3xl font-bold'

                /></Link>
        </div> */}

        </div>
    );
};

export default Banner;

{/* https://i.ibb.co/Gpc3YVT/pexels-sudipta-1603650.jpg
https://i.ibb.co/3p77c5H/pexels-souvenirpixels-417074.jpg
https://i.ibb.co/GdDCf18/pexels-freestockpro-2166553.jpg
https://i.ibb.co/YfLNcNz/pexels-jaime-reimer-1376930-2662116.jpg */}