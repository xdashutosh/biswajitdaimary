import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ParallaxBanner = () => {
    const ref = useScrollReveal();

    return (
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-scroll md:bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url("/src/assets/daimary_tea_garden.png")' }}
            >
                <div className="absolute inset-0 bg-primary-dark/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <div ref={ref} className="animate-on-scroll animate-scale">
                    <h2 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 leading-tight text-white uppercase tracking-tighter">
                        "FOR A PROSPEROUS AND <br className="hidden md:block" /> <span className="text-primary-orange">PEACEFUL ASSAM</span>"
                    </h2>
                    <div className="flex justify-center items-center space-x-4">
                        <div className="w-8 md:w-12 h-1 bg-primary-orange"></div>
                        <p className="text-xs md:text-xl font-bold uppercase tracking-widest text-primary-orange">Our Commitment</p>
                        <div className="w-8 md:w-12 h-1 bg-primary-orange"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParallaxBanner;
