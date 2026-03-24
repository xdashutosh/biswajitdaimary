import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import banner images from the newly captured screenshots
import banner1 from '../assets/banners/Banner.svg';
import banner2 from '../assets/banners/banner2.svg';
import banner3 from '../assets/banners/banner3.svg';
import banner4 from '../assets/banners/banner4.svg';
import banner5 from '../assets/banners/banner5.svg';

const BannerCarousel = () => {
    const banners = [
        { id: 1, image: banner1, alt: 'Banner 1' },
        { id: 2, image: banner2, alt: 'Banner 2' },
        { id: 3, image: banner3, alt: 'Banner 4' },
        { id: 4, image: banner4, alt: 'Banner 3' },
        { id: 5, image: banner5, alt: 'Banner 5' },
    ];

    const [selectedBanner, setSelectedBanner] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (banner) => {
        setSelectedBanner(banner);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedBanner(null), 300); // Wait for transition
    };

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <section className="py-6 md:py-8 md:pt-15 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif text-primary-dark">Latest Updates</h2>
                        <p className="text-gray-500 text-sm mt-1">Official highlights and announcements</p>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <div className="banner-prev cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary-orange hover:text-white hover:border-primary-orange transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </div>
                        <div className="banner-next cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary-orange hover:text-white hover:border-primary-orange transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    centeredSlides={false}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.banner-pagination',
                    }}
                    navigation={{
                        nextEl: '.banner-next',
                        prevEl: '.banner-prev',
                    }}
                    className="banner-swiper !pb-12"
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id} style={{ width: '500px' }}>
                            <div 
                                onClick={() => openModal(banner)}
                                className="relative group overflow-hidden rounded-md shadow-lg bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="w-[500px] h-[400px] relative overflow-hidden">
                                    <img
                                        src={banner.image}
                                        alt={banner.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{ objectPosition: 'center' }}
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="flex justify-center ">
                    <div className="banner-pagination !w-auto"></div>
                </div>
            </div>
            
            {/* Modal for Banner View */}
            {selectedBanner && (
                <div 
                    className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                >
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>
                    
                    {/* Modal Content */}
                    <div 
                        className={`relative max-w-[95vw] max-h-[95vh] bg-transparent rounded-lg overflow-hidden transition-all duration-500 flex items-center justify-center ${isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={closeModal}
                            className="absolute top-2 right-2 md:top-4 md:right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center">
                            <img 
                                src={selectedBanner.image} 
                                alt={selectedBanner.alt} 
                                className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                            />
                        </div>
                    </div>
                </div>
            )}

            <style jsx="true">{`
                .banner-pagination .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #CBD5E1;
                    opacity: 1;
                    margin: 0 6px !important;
                    transition: all 0.3s ease;
                }
                .banner-pagination .swiper-pagination-bullet-active {
                    background: #ff4d00;
                    width: 28px;
                    border-radius: 5px;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </section>
    );
};

export default BannerCarousel;
