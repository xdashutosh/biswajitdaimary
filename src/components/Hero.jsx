import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero_assembly from '../assets/hero/assemblybanner.png';
import hero_culture from '../assets/hero/hero_culture.png';
import diamaryimg from '../assets/hero/diamary_poster3.png';

const HeroSlider = () => {
    const navigate = useNavigate();

    const slides = [
        {
            id: 1,
            title: "Biswajit Daimary",
            subtitle: "Welcome to Politician TNC",
            desc: "From a humble student leader to the 17th Speaker of the Assam Legislative Assembly. A journey of resilience, peace, and progress.",
            image: diamaryimg,
            cta: "Biography",
            ctaPath: "/about"
        },
        {
            id: 2,
            title: "Strengthening Democracy",
            subtitle: "Speaker, Assam Legislative Assembly",
            desc: "Spearheading the digitization of the assembly and ensuring transparent governance for a stronger future.",
            image: hero_assembly,
            cta: "House Proceedings",
            ctaPath: "/parliament"
        },
        
    ];

    return (
        <section className="relative h-[400px] md:h-[450px] lg:h-[520px] overflow-hidden bg-[#f4f6f8] font-sans">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="h-full hero-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full flex items-center">
                            {/* Right Side Background (Image without color overlay) */}
                            <div className="absolute inset-0 z-0 flex">
                                <div className="w-full h-full relative">
                                    <img
                                        src={slide.image}
                                        alt={`Biswajit Daimary - ${slide.title}`}
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>


                            {/* Content Container */}
                            <div className="container mx-auto px-6 md:px-12 z-20 h-full flex items-center">
                                <div className="max-w-md md:max-w-lg w-full md:w-[45%] lg:w-[40%] pt-16 md:pt-10">
                                    <h3 className="text-red-500 font-bold tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 uppercase inline-block bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                        {slide.subtitle}
                                    </h3>
                                    
                                    <h2 className="text-3xl md:text-5xl lg:text-[56px] font-normal text-white leading-[1.1] mb-4 md:mb-6 tracking-tight font-serif drop-shadow-lg">
                                        {slide.title.toLowerCase().includes('daimary') ? (
                                            <>Biswajit <br /> <span className="text-white">Daimary</span></>
                                        ) : (
                                            slide.title
                                        )}
                                    </h2>
                                    
                                    <p className="text-white/90 text-sm md:text-base lg:text-lg mb-8 md:mb-10 leading-relaxed font-medium max-w-[90%] md:max-w-[95%] drop-shadow-sm">
                                        {slide.desc}
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => navigate(slide.ctaPath)}
                                            className="group flex items-center justify-center gap-3 bg-transparent border border-white/60 text-white px-8 py-3.5 rounded-sm font-medium hover:bg-white hover:text-[#1c2e4a] transition-all duration-300 w-fit"
                                        >
                                            {slide.cta}
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Scroll Indicator positioned slightly right to avoid the blue shape on mobile if needed, but middle is fine */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-red-500 rounded-full animate-scroll-indicator"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
