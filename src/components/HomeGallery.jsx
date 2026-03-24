import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { homeGalleryHighlights } from '../data/galleryData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HomeGallery = () => {
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    return (
        <section className="bg-primary-dark py-6 md:py-8 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-[100px] -ml-48 -mt-48 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
                {/* Header with Navigation */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-6 gap-6">
                    <div>
                        <div className="flex flex-col gap-1 mb-1">
                            <span className="text-primary-orange font-bold text-[7px] md:text-[8px] uppercase tracking-[0.3em]">
                                Moments Captured
                            </span>
                            <div className="w-8 md:w-12 h-0.5 bg-primary-orange rounded-full"></div>
                        </div>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-normal font-serif text-white tracking-tight leading-none">
                            EXPLORE <span className="text-primary-orange/80">GALLERY</span> HIGHLIGHTS
                        </h2>
                        <p className="text-white/40 text-[9px] mt-1 uppercase tracking-widest">
                            Last 4 months · One photo per date
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <button 
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-7 h-7 md:w-9 md:h-9 border border-white/20 text-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-all duration-300 rounded-sm group/nav"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover/nav:scale-110 transition-transform" />
                        </button>
                        <button 
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-7 h-7 md:w-9 md:h-9 border border-white/20 text-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-all duration-300 rounded-sm group/nav"
                        >
                            <ChevronRight className="w-4 h-4 group-hover/nav:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        centeredSlides={false}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 20 }
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="pb-6"
                    >
                        {homeGalleryHighlights.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div 
                                    onClick={() => navigate('/gallery')}
                                    className="relative h-44 md:h-[220px] overflow-hidden rounded-sm group cursor-pointer border border-white/5"
                                >
                                    <img 
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        loading="lazy"
                                        onError={(e) => { e.target.src = item.fallbackImg; }}
                                    />
                                    {/* Date badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-primary-orange/90 text-white text-[8px] font-bold py-0.5 px-2 rounded-full uppercase tracking-widest flex items-center gap-1">
                                            <Calendar className="w-2.5 h-2.5" />
                                            {item.displayDate}
                                        </span>
                                    </div>
                                    {/* Category badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-primary-dark/80 text-white/80 text-[7px] font-bold py-0.5 px-2 rounded-full uppercase tracking-widest backdrop-blur-sm">
                                            {item.category}
                                        </span>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h4 className="text-white font-serif text-sm italic mb-1 leading-tight">{item.title}</h4>
                                            <p className="text-primary-orange text-[9px] font-bold uppercase tracking-widest">View Full Gallery</p>
                                        </div>
                                    </div>
                                    
                                    {/* Accent corner for premium feel */}
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                {/* View All Button */}
                <div className="mt-4 flex justify-center md:justify-start">
                    <button 
                         onClick={() => navigate('/gallery')}
                         className="flex items-center gap-4 text-white hover:text-primary-orange transition-colors group"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">View All Media</span>
                        <div className="w-10 h-px bg-white/30 group-hover:w-16 group-hover:bg-primary-orange transition-all duration-500"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeGallery;
