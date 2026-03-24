import React, { useState, useEffect, useCallback } from 'react';
import SEO from '../components/SEO';
import { Grid, List, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { galleryPhotos, galleryMonths } from '../data/galleryData';

const GalleryPage = () => {
    const revealRef = useScrollRevealChildren();
    const [lightbox, setLightbox] = useState(null); // selected photo for lightbox
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    // Group by month for display
    const grouped = galleryPhotos.reduce((acc, photo) => {
        if (!acc[photo.month]) acc[photo.month] = [];
        acc[photo.month].push(photo);
        return acc;
    }, {});

    const openLightbox = (photo) => {
        setLightbox(photo);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
    };

    const closeLightbox = () => {
        setLightbox(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = useCallback((e) => {
        if (e) e.stopPropagation();
        if (lightbox) {
            const images = lightbox.images || [lightbox.img];
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    }, [lightbox]);

    const prevImage = useCallback((e) => {
        if (e) e.stopPropagation();
        if (lightbox) {
            const images = lightbox.images || [lightbox.img];
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    }, [lightbox]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightbox) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightbox, nextImage, prevImage]);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Gallery"
                description="Browse through the visual story of Biswajit Daimary's leadership, cultural engagements, and public life — one photo per date from the last 4 months."
                keywords="Biswajit Daimary Gallery, Photos of Biswajit Daimary, Assam Politics Gallery, Bodo Cultural Events Photos"
                url="/gallery"
            />

            {/* Lightbox Modal */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 md:p-6 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 bg-white/10 hover:bg-primary-orange hover:text-white rounded-full p-2 transition-all duration-300 z-[60]"
                        onClick={closeLightbox}
                    >
                        <X className="w-5 h-5 md:w-7 md:h-7" />
                    </button>

                    <div
                        className="max-w-7xl w-full h-full md:h-auto bg-primary-dark/50 rounded-lg overflow-hidden shadow-2xl relative border border-white/10 flex flex-col max-h-[98vh]"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Image Container */}
                        <div className="relative flex-1 flex items-center justify-center min-h-[50vh] bg-black/50 group/slider">
                            
                            {/* Navigation Arrows (Show only if multiple images) */}
                            {((lightbox.images && lightbox.images.length > 1) || false) && (
                                <>
                                    <button 
                                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary-orange text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/slider:opacity-100 focus:opacity-100 z-10 border border-white/10"
                                        onClick={prevImage}
                                    >
                                        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                                    </button>
                                    <button 
                                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary-orange text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/slider:opacity-100 focus:opacity-100 z-10 border border-white/10"
                                        onClick={nextImage}
                                    >
                                        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                                    </button>
                                </>
                            )}

                            {/* Current Image */}
                            <img
                                src={lightbox.images ? lightbox.images[currentImageIndex] : lightbox.img}
                                alt={`${lightbox.title} - Image ${currentImageIndex + 1}`}
                                className="w-full h-full max-h-[85vh] object-contain shadow-2xl"
                                onError={(e) => { e.target.src = lightbox.fallbackImg; }}
                            />

                            {/* Image Counter Badge */}
                            {((lightbox.images && lightbox.images.length > 1) || false) && (
                                <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md tracking-widest uppercase border border-white/10">
                                    {currentImageIndex + 1} / {lightbox.images.length}
                                </div>
                            )}
                        </div>

                        {/* Details Footer */}
                        <div className="p-4 md:p-6 bg-gradient-to-t from-black/90 to-black/60 shrink-0">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-white font-serif text-lg md:text-xl xl:text-2xl mb-1 leading-tight">{lightbox.title}</h3>
                                    <p className="text-white/70 text-xs md:text-sm">{lightbox.caption}</p>
                                </div>
                                <div className="text-left md:text-right flex-shrink-0 flex md:flex-col items-center md:items-end gap-3 md:gap-1">
                                    <span className="bg-primary-orange/20 border border-primary-orange/30 text-primary-orange text-[10px] font-bold py-1.5 px-3 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                                        {lightbox.displayDate}
                                    </span>
                                    <span className="bg-white/10 border border-white/10 text-white/70 text-[9px] font-bold py-1.5 px-3 rounded-full uppercase tracking-widest">
                                        {lightbox.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <section className="py-5 md:py-8 bg-white">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mb-6 md:mb-8">
                        <div className="flex flex-col gap-1 mb-2">
                            <span className="text-primary-orange font-bold text-[8px] md:text-[10px] uppercase tracking-[0.3em]">
                                Visual Story
                            </span>
                            <div className="w-8 md:w-12 h-0.5 bg-primary-orange rounded-full"></div>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal font-serif text-primary-dark tracking-tight leading-none uppercase">
                            Media <span className="italic text-primary-orange/80">Gallery</span>
                        </h2>
                        <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">
                            One photo per date · Last 4 months · {galleryPhotos.length} photos
                        </p>
                    </div>


                    {/* Photos grouped by month */}
                    <div ref={revealRef} className="space-y-10">
                        {Object.entries(grouped).map(([month, photos]) => (
                            <div key={month}>
                                {/* Month header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-primary-dark font-serif text-lg font-normal">{month}</h3>
                                    <div className="flex-1 h-px bg-gray-100"></div>
                                    <span className="text-gray-400 text-[9px] uppercase tracking-widest">{photos.length} photo{photos.length !== 1 ? 's' : ''}</span>
                                </div>

                                {/* Photo grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    {photos.map((photo, idx) => (
                                        <div
                                            key={photo.id}
                                            onClick={() => openLightbox(photo)}
                                            className={`bg-white rounded-sm overflow-hidden shadow-md border border-gray-100 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer animate-on-scroll animate-scale animate-delay-${Math.min(idx + 1, 4)} relative`}
                                        >
                                            <div className="h-36 md:h-44 relative overflow-hidden">
                                                <img
                                                    src={photo.img}
                                                    alt={photo.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    loading="lazy"
                                                    onError={(e) => { e.target.src = photo.fallbackImg; }}
                                                />
                                                {/* Date badge */}
                                                <div className="absolute top-2 left-2 z-10">
                                                    <span className="bg-primary-orange/90 text-white text-[7px] font-bold py-0.5 px-1.5 rounded-full uppercase tracking-wider flex items-center gap-0.5 shadow-md backdrop-blur-sm">
                                                        {photo.displayDate}
                                                    </span>
                                                </div>
                                                {/* Album Badge indicator if multiple images */}
                                                {((photo.images && photo.images.length > 1) || false) && (
                                                    <div className="absolute top-2 right-2 z-10">
                                                        <span className="bg-black/60 text-white text-[7px] font-bold py-0.5 px-1.5 rounded-full uppercase tracking-wider shadow-md backdrop-blur-sm border border-white/20">
                                                            {photo.images.length} Photos
                                                        </span>
                                                    </div>
                                                )}
                                                {!(photo.images && photo.images.length > 1) && (
                                                    <div className="absolute top-2 right-2 z-10">
                                                        <span className="bg-white/90 text-primary-dark text-[7px] font-bold py-0.5 px-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                                            {photo.category}
                                                        </span>
                                                    </div>
                                                )}
                                                
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center">
                                                    <span className="text-white text-[9px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                                                        {(photo.images && photo.images.length > 1) ? 'View Album' : 'View Photo'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <h4 className="text-primary-dark font-serif text-xs font-normal leading-tight group-hover:text-primary-orange transition-colors line-clamp-2">
                                                    {photo.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Facebook link */}
                    <div className="mt-16 flex justify-center">
                        <a
                            href="https://www.facebook.com/BiswajitdaimaryMP/photos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-dark text-white px-10 py-3 rounded-sm font-bold hover:bg-primary-orange transition-all shadow-xl uppercase tracking-[0.2em] hover:scale-105 active:scale-95 text-xs flex items-center gap-3"
                        >
                            View All on Facebook
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
