import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
    const navigate = useNavigate();

    const slides = [
        {
            id: 1,
            title: "BISWAJIT DAIMARY",
            subtitle: "Dedicated to the People of Assam",
            desc: "From a humble student leader to the 17th Speaker of the Assam Legislative Assembly. A journey of resilience, peace, and progress.",
            image: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2020%2F11%2F12%2F172609-biswajit-daimary-resigns-from-bpf.webp?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85",
            cta: "Biography",
            ctaPath: "/about"
        },
        {
            id: 2,
            title: "STRENGTHENING DEMOCRACY",
            subtitle: "Speaker, Assam Legislative Assembly",
            desc: "Spearheading the digitization of the assembly and ensuring transparent governance for a stronger future.",
            image: "/src/assets/hero/hero_assembly.png",
            cta: "House Proceedings",
            ctaPath: "/parliament"
        },
        {
            id: 3,
            title: "VOICE OF THE GRASSROOTS",
            subtitle: "Empowering the Communities",
            desc: "Working tirelessly for the welfare of the Bodo community and every citizen from the tea gardens to the hills.",
            image: "/src/assets/hero/hero_culture.png",
            cta: "Latest Initiatives",
            ctaPath: "/projects"
        }
    ];

    return (
        <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-primary-dark">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full flex items-center">
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-contain object-center transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-primary-dark via-primary-dark/60 to-transparent"></div>
                            </div>

                            <div className="container mx-auto px-4 z-10">
                                <div className="max-w-2xl">
                                    <h2 className="text-primary-orange text-sm md:text-xl font-bold uppercase tracking-[0.2em] mb-3 md:mb-4">
                                        {slide.subtitle}
                                    </h2>
                                    <h1 className="text-3xl md:text-8xl font-black mb-4 md:mb-6 leading-tight uppercase drop-shadow-2xl text-white">
                                        {slide.title.includes('DAIMARY') ? (
                                            <>BISWAJIT <br /> <span className="text-primary-orange">DAIMARY</span></>
                                        ) : (
                                            slide.title
                                        )}
                                    </h1>
                                    <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-lg leading-relaxed font-light drop-shadow-lg">
                                        {slide.desc}
                                    </p>
                                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                                        <button
                                            onClick={() => navigate(slide.ctaPath)}
                                            className="bg-primary-orange text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer text-center"
                                        >
                                            {slide.cta}
                                        </button>
                                        <button
                                            onClick={() => window.open('https://www.youtube.com/results?search_query=Assam+Legislative+Assembly+Live', '_blank')}
                                            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold hover:bg-white/20 transition-all cursor-pointer text-center"
                                        >
                                            Watch Live
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-primary-orange rounded-full animate-scroll-indicator"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
