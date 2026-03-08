import React from 'react';
import qrCode from '../assets/qr_code.png';
import appStoreBtn from '../assets/app_store_btn.png';
import playStoreBtn from '../assets/play_store_btn.png';
import appMockup from '../assets/app_mockup.png';

const AppDownloadSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-primary-dark to-black rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-3xl">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>

                    {/* Left Content */}
                    <div className="lg:w-1/2 text-white relative z-10 text-center lg:text-left">
                        <span className="text-primary-orange font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block">
                            Stay Connected
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">
                            Download the <br />
                            <span className="bg-gradient-to-r from-primary-orange to-orange-400 bg-clip-text text-transparent">Official App</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                            Get real-time updates on legislative progress, local initiatives, and engage directly with the Office of the Speaker.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                            {/* QR Code */}
                            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10 shadow-2xl group transition-all duration-500 hover:bg-white/10">
                                <img src={qrCode} alt="Scan QR" className="w-28 h-28 md:w-32 md:h-32 rounded-xl" />
                                <p className="text-[10px] text-gray-500 mt-3 text-center font-bold tracking-widest uppercase">Scan to Download</p>
                            </div>

                            {/* Store Buttons */}
                            <div className="flex flex-col gap-6">
                                <a href="#" className="transform hover:scale-105 transition-all duration-300">
                                    <img src={appStoreBtn} alt="App Store" className="h-20 md:h-24 w-auto drop-shadow-2xl" />
                                </a>
                                <a href="#" className="transform hover:scale-105 transition-all duration-300">
                                    <img src={playStoreBtn} alt="Play Store" className="h-20 md:h-24 w-auto drop-shadow-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Image (Mockup) */}
                    <div className="lg:w-1/2 mt-16 lg:mt-0 relative z-10 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-primary-orange/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <img
                                src={appMockup}
                                alt="App Interface"
                                className="w-[280px] md:w-[380px] h-auto relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform -rotate-6 group-hover:rotate-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
