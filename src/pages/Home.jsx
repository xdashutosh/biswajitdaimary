import React, { useState } from 'react';
import HeroSlider from '../components/Hero';
import ImpactSection from '../components/ImpactSection';
import AboutSection from '../components/AboutSection';
import RunningProjects from '../components/RunningProjects';
import NewsSection from '../components/NewsSection';
import GovernanceSection from '../components/GovernanceSection';
import StatsSection from '../components/StatsSection';
import HomeGallery from '../components/HomeGallery';
import ParallaxBanner from '../components/ParallaxBanner';
import SocialFeed from '../components/SocialFeed';
import AppDownloadSection from '../components/AppDownloadSection';
import daimary_assembly from '../assets/daimary_assembly.png';
import SEO from '../components/SEO';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import BannerCarousel from '../components/BannerCarousel';

function Home() {
    const [email, setEmail] = useState('');
    const revealRef = useScrollRevealChildren();

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
            <SEO
                title="Home"
                description="Welcome to the official website of Biswajit Daimary, honorable Speaker of the Assam Legislative Assembly. Discover his vision for a prosperous and peaceful Assam."
                keywords="Biswajit Daimary, Assam Speaker, Bodo Leader, Assam Politics, BTR Development"
                url="/"
                type="Organization"
            />
            <h1 className="sr-only">Biswajit Daimary | Speaker of Assam Legislative Assembly</h1>
            <HeroSlider />
            <StatsSection />
            <BannerCarousel />
            <ImpactSection />
            <AboutSection />
            <RunningProjects />
            <ParallaxBanner />
            <HomeGallery />
            <GovernanceSection />
            <SocialFeed />
            <AppDownloadSection />

            {/* Merged Vision & Mission Section (UI inspired by Image 2) */}
            <section ref={revealRef} className="py-3 md:py-5 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-primary-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 animate-on-scroll">
                            What We Stand For
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-2xl font-normal italic text-primary-dark leading-[1.15] mb-8 animate-on-scroll font-serif">
                            "Our vision is a developed Assam where every citizen has equal opportunity and lives with dignity."
                        </h2>
                        <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-10 animate-on-scroll">
                            <div className="w-8 md:w-12 h-1 bg-primary-orange"></div>
                            <p className="text-primary-orange font-normal tracking-[0.3em] text-[10px] md:text-xs uppercase font-serif">Biswajit Daimary</p>
                            <div className="w-8 md:w-12 h-1 bg-primary-orange"></div>
                        </div>

                        {/* Interaction Area (Inspired by Image 2 pill style) */}
                        <div className="max-w-xl mx-auto flex flex-col gap-4 animate-on-scroll">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Please Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                                    className="w-full bg-white text-primary-dark border-2 border-gray-200 rounded-full px-8 py-5 md:py-4 focus:outline-none focus:border-primary-orange/30 shadow-xl text-center text-lg font-medium placeholder:text-gray-200"
                                />
                            </div>
                            
                            <button
                                onClick={handleSubscribe}
                                className="w-full bg-primary-orange text-white rounded-full py-5 md:py-4 font-normal tracking-[0.3em] text-[10px] uppercase hover:bg-black transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                            >
                                JOIN OUR MISSION
                            </button>
                        </div>
                        
                        <p className="mt-6 mb-5 text-gray-400 text-xs md:text-xs max-w-lg mx-auto animate-on-scroll">
                            Receive direct updates on legislative decisions and local initiatives for a better Assam.
                        </p>
                    </div>
                </div>
                
                {/* Subtle background element */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-[0.03] pointer-events-none">
                    <img
                        src={daimary_assembly}
                        alt=""
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
            </section>
        </>
    );
}

export default Home;
