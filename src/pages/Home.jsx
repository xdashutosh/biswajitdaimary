import React, { useState } from 'react';
import HeroSlider from '../components/Hero';
import ImpactSection from '../components/ImpactSection';
import AboutSection from '../components/AboutSection';
import NewsSection from '../components/NewsSection';
import GovernanceSection from '../components/GovernanceSection';
import StatsSection from '../components/StatsSection';
import Gallery from '../components/Gallery';
import ParallaxBanner from '../components/ParallaxBanner';
import SocialFeed from '../components/SocialFeed';

function Home() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        alert(`Thank you for subscribing with ${email}! You will receive updates soon.`);
        setEmail('');
    };

    return (
        <>
            <HeroSlider />
            <StatsSection />
            <ImpactSection />
            <AboutSection />
            <ParallaxBanner />
            <GovernanceSection />
            <Gallery />
            <NewsSection />
            <SocialFeed />

            {/* Quote Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto bg-orange-50 p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border-2 border-primary-orange/20 relative overflow-hidden">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-orange/10 rounded-full blur-3xl"></div>
                        <span className="text-6xl md:text-8xl text-primary-orange opacity-40 font-serif leading-none italic block mb-4">"</span>
                        <h2 className="text-2xl md:text-5xl font-black text-primary-dark italic leading-tight mb-8">
                            Our vision is a developed Assam where every citizen has equal opportunity and lives with dignity.
                        </h2>
                        <div className="flex items-center justify-center space-x-3 md:space-x-4">
                            <div className="w-8 md:w-12 h-1 bg-primary-orange"></div>
                            <p className="text-primary-orange font-black uppercase tracking-widest text-sm md:text-lg text-nowrap">Biswajit Daimary</p>
                            <div className="w-8 md:w-12 h-1 bg-primary-orange"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 md:py-24 bg-gray-900 overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="/src/assets/daimary_assembly.png"
                        alt="Decorative"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="bg-primary-orange rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-24 flex flex-col lg:flex-row items-center justify-between text-white shadow-3xl overflow-hidden relative">
                        <div className="z-10 text-center lg:text-left mb-10 lg:mb-0 max-w-lg">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">JOIN OUR MISSION</h2>
                            <p className="text-white/80 text-base md:text-lg">Receive direct updates on legislative decisions and local initiatives.</p>
                        </div>
                        <div className="z-10 w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                                className="bg-white text-primary-dark rounded-full px-6 md:px-8 py-4 md:py-5 w-full lg:w-96 focus:outline-none shadow-inner text-sm md:text-base"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-primary-dark text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest text-xs md:text-sm cursor-pointer whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
