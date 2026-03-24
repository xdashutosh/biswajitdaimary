import React from 'react';
import qrCode from '../assets/qr_code.png';
import appStoreBtn from '../assets/app_store_btn.png';
import playStoreBtn from '../assets/play_store_btn.png';
import appMockup from '../assets/app_mockup.png';

const AppDownloadSection = () => {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-primary-dark to-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>

                    {/* Left Content */}
                    <div className="lg:w-7/12 text-white relative z-10 text-center lg:text-left">
                        <span className="text-primary-orange font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 block">
                            Stay Connected
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight uppercase font-serif">
                            Download the <br />
                            <span className="bg-gradient-to-r from-primary-orange to-orange-400 bg-clip-text text-transparent">Official App</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Get real-time updates on legislative progress, local initiatives, and engage directly with the Office of the Speaker.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            {/* QR Code */}
                            <div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl group transition-all duration-300 hover:bg-white/10">
                                <img src={qrCode} alt="Scan QR code" className="w-20 h-20 md:w-24 md:h-24 rounded-lg" />
                                <p className="text-[9px] text-gray-500 mt-2 text-center font-bold tracking-[0.1em] uppercase">Scan to Download</p>
                            </div>

                            {/* Store Buttons */}
                            <div className="flex flex-col gap-4">
                                <a href="#" className="transform hover:scale-105 transition-all duration-300">
                                    <img src={appStoreBtn} alt="App Store" className="h-14 md:h-16 w-auto" />
                                </a>
                                <a href="#" className="transform hover:scale-105 transition-all duration-300">
                                    <img src={playStoreBtn} alt="Play Store" className="h-14 md:h-16 w-auto" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Image (Mockup) */}
                    <div className="lg:w-5/12 mt-12 lg:mt-0 relative z-10 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <img
                                src={appMockup}
                                alt="App Preview"
                                className="w-[200px] md:w-[300px] h-auto relative z-10 drop-shadow-2xl transform transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
