import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';
import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal';
import contact_bg from '../assets/contact_us.png';

const Contact = () => {
    const infoRef = useScrollReveal();
    const formRef = useScrollReveal();
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-primary-dark">
            <SEO
                title="Contact"
                description="Connect with the office of Speaker Biswajit Daimary. Reach out for inquiries, feedback, or engagement."
                keywords="Contact Biswajit Daimary, Assam Speaker Office, Connect with Biswajit Daimary"
                url="/contact"
            />
            
            <section className="relative min-h-[calc(100vh-80px)] pt-8 md:pt-14 pb-12 md:pb-20 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={contact_bg} 
                        alt="Contact Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-dark/65"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        
                        {/* Left Column: Information */}
                        <div ref={infoRef} className="h-full animate-on-scroll">
                            <div className="h-full flex flex-col justify-between space-y-10 px-2 lg:px-0">
                                <div className="space-y-10">
                                    <div>
                                        <h1 className="text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight uppercase leading-tight font-serif drop-shadow-lg">
                                            CONNECT
                                        </h1>
                                        <p className="text-[10px] md:text-xs font-bold text-primary-orange uppercase tracking-[0.3em] mb-12">
                                            WE ARE HERE TO LISTEN AND SERVE
                                        </p>
                                        
                                        <div className="space-y-8">
                                            <div className="flex gap-4 md:gap-5 items-start">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-primary-orange flex-shrink-0 shadow-lg border border-gray-100">
                                                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-base md:text-lg text-white mb-0.5 font-serif uppercase tracking-wider">Location</h4>
                                                    <p className="text-white leading-relaxed text-xs md:text-sm font-medium drop-shadow-sm">
                                                        Assam Legislative Assembly,<br />
                                                        Dispur, Guwahati - 781006,<br />
                                                        Assam, India
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 md:gap-5 items-start">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-primary-orange flex-shrink-0 shadow-lg border border-gray-100">
                                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-base md:text-lg text-white mb-0.5 font-serif uppercase tracking-wider">Email</h4>
                                                    <p className="text-primary-orange font-bold text-xs md:text-sm drop-shadow-sm">office@biswajitdaimary.in</p>
                                                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-0.5 opacity-100">Direct inquiries to the Speaker's Cell</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 md:gap-5 items-start">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-primary-orange flex-shrink-0 shadow-lg border border-gray-100">
                                                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-base md:text-lg text-white mb-0.5 font-serif uppercase tracking-wider">Phone</h4>
                                                    <p className="text-primary-orange font-bold text-xs md:text-sm drop-shadow-sm">+91 361 226XXXX</p>
                                                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-0.5 opacity-100">Available 10 AM - 5 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Integrated Get Directions Card */}
                                <div className="bg-primary-dark/95 rounded-xl p-8 md:p-5 text-white shadow-2xl relative overflow-hidden group mt-2 border border-white/5">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
                                    <div className="relative z-10 flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between items-center gap-6">
                                        <div className="text-center md:text-left lg:text-center xl:text-left">
                                            <p className="text-primary-orange font-bold uppercase tracking-widest text-[10px] mb-2">Quick Nav</p>
                                            <h4 className="text-xl font-normal uppercase tracking-tight font-serif text-white drop-shadow-sm">Get Directions</h4>
                                        </div>
                                        <a 
                                            href="https://maps.google.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-full md:w-auto xl:w-auto bg-white text-primary-dark px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg text-center hover:scale-105 active:scale-95"
                                        >
                                            Find us on map
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Elevation Card Form */}
                        <div ref={formRef} className="h-full animate-on-scroll">
                            <div className="h-full bg-white p-6 md:p-8 lg:p-10 rounded-[2.5rem] shadow-[0_15px_45px_-12px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col">
                                <h3 className="text-xl md:text-2xl font-normal text-primary-dark mb-6 uppercase tracking-wider font-serif">Write to the Speaker</h3>
                                
                                <form className="space-y-4 flex-grow flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary-orange/20 focus:outline-none rounded-xl p-3 text-xs font-medium transition-all shadow-sm"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary-orange/20 focus:outline-none rounded-xl p-3 text-xs font-medium transition-all shadow-sm"
                                                    placeholder="Enter phone number"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary-orange/20 focus:outline-none rounded-xl p-3 text-xs font-medium transition-all shadow-sm"
                                                    placeholder="name@example.com"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Subject</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary-orange/20 focus:outline-none rounded-xl p-3 text-xs font-medium transition-all shadow-sm"
                                                    placeholder="What is this regarding?"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Constituency</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary-orange/20 focus:outline-none rounded-xl p-3 text-xs font-medium transition-all shadow-sm"
                                                    placeholder="Constituency name"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">District</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary-orange/20 focus:outline-none rounded-xl p-3 text-xs font-medium transition-all shadow-sm"
                                                    placeholder="District name"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Your Message</label>
                                            <textarea
                                                rows="3"
                                                className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary-orange/20 focus:outline-none rounded-xl p-3 text-xs font-medium transition-all shadow-sm resize-none"
                                                placeholder="Tell us what's on your mind..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button className="w-full bg-primary-orange text-white py-3.5 rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-black transition-all shadow-lg hover:shadow-primary-orange/20 uppercase tracking-widest text-[10px] md:text-xs mt-2">
                                        <span>SEND MESSAGE</span>
                                        <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
