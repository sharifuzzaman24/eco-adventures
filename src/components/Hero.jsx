import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Hero = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://img.freepik.com/premium-photo/rainforest-trekking-adventure_964851-112242.jpg?w=826"
                            alt="Rainforest Trekking"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                            <h3 className="text-lg font-semibold">Rainforest Trekking</h3>
                            <p className="text-sm">Explore the lush rainforests and witness exotic wildlife.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://img.freepik.com/free-photo/people-taking-part-sustainable-travel-movement_23-2151049485.jpg?t=st=1732189274~exp=1732192874~hmac=acd6a68514eaa6a7ad8f752781af110a0423372091789a95d6101f666bf50e38&w=740"
                            alt="Rainforest Trekking"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                            <h3 className="text-lg font-semibold">Kayaking Through Mangroves</h3>
                            <p className="text-sm">Paddle through serene mangrove forests and discover their rich ecosystem.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://img.freepik.com/free-photo/close-up-person-doing-mountain-biking_23-2151850192.jpg?t=st=1732189357~exp=1732192957~hmac=e4a27f586b9d0f32eb3417df02a34d01075a798c5a57a2d3b8ca241f1e7d10c4&w=826"
                            alt="Rainforest Trekking"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                            <h3 className="text-lg font-semibold">Mountain Biking in the Alps</h3>
                            <p className="text-sm">Ride through the stunning Alpine trails and experience breathtaking views.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://img.freepik.com/free-photo/young-woman-mountains-observing-beautiful-starry-night-comet_651396-3445.jpg?semt=ais_hybrid"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                            <h3 className="text-lg font-semibold">Stargazing in a Dark Sky Reserve</h3>
                            <p className="text-sm">Experience the wonder of the night sky in an eco-protected area.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://img.freepik.com/free-photo/traveling-with-off-road-car_23-2151472951.jpg?t=st=1732189511~exp=1732193111~hmac=66e90e6906520fdbc00c97d86db9226d5fe5ae7014b12d287d948853b45ac511&w=826"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                            <h3 className="text-lg font-semibold">Safari on Solar-Powered Jeeps</h3>
                            <p className="text-sm">Experience the savannah with minimal environmental impact.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;