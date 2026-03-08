import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-primary-orange py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 blur-3xl -mr-48 -mt-48"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">CONNECT</h1>
                    <div className="w-16 md:w-24 h-1.5 bg-white mx-auto mb-6"></div>
                    <p className="text-sm md:text-xl font-bold uppercase tracking-widest opacity-90">WE ARE HERE TO LISTEN AND SERVE</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-2xl md:text-3xl font-black text-primary-dark mb-8 uppercase tracking-tighter border-b-4 border-primary-orange inline-block">Office Details</h2>
                            <div className="space-y-8 md:space-y-10">
                                <div className="flex gap-4 md:gap-6 items-start">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl md:rounded-2xl flex items-center justify-center text-primary-orange flex-shrink-0">
                                        <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg md:text-xl text-primary-dark mb-1">Location</h4>
                                        <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium">
                                            Assam Legislative Assembly,<br />
                                            Dispur, Guwahati - 781006,<br />
                                            Assam, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 md:gap-6 items-start">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl md:rounded-2xl flex items-center justify-center text-primary-orange flex-shrink-0">
                                        <Mail className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg md:text-xl text-primary-dark mb-1">Email</h4>
                                        <p className="text-primary-orange font-black text-sm md:text-base">office@biswajitdaimary.in</p>
                                        <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Direct inquiries to the Speaker's Cell</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 md:gap-6 items-start">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-xl md:rounded-2xl flex items-center justify-center text-primary-orange flex-shrink-0">
                                        <Phone className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg md:text-xl text-primary-dark mb-1">Phone</h4>
                                        <p className="text-primary-dark font-black text-sm md:text-base">+91 361 226XXXX</p>
                                        <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Available 10 AM - 5 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3">
                            <div className="bg-gray-50 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-gray-100">
                                <h3 className="text-2xl md:text-3xl font-black text-primary-dark mb-8 uppercase tracking-tighter">Write to the Speaker</h3>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em] pl-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white border-2 border-transparent focus:border-primary-orange focus:outline-none rounded-xl md:rounded-2xl p-4 shadow-sm text-sm"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em] pl-2">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white border-2 border-transparent focus:border-primary-orange focus:outline-none rounded-xl md:rounded-2xl p-4 shadow-sm text-sm"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em] pl-2">Subject</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white border-2 border-transparent focus:border-primary-orange focus:outline-none rounded-xl md:rounded-2xl p-4 shadow-sm text-sm"
                                            placeholder="What is this regarding?"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em] pl-2">Your Message</label>
                                        <textarea
                                            rows="5"
                                            className="w-full bg-white border-2 border-transparent focus:border-primary-orange focus:outline-none rounded-xl md:rounded-2xl p-4 shadow-sm text-sm"
                                            placeholder="Tell us what's on your mind..."
                                        ></textarea>
                                    </div>
                                    <div className="md:col-span-2 mt-4 text-center md:text-left">
                                        <button className="w-full md:w-auto bg-primary-dark text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-black flex items-center justify-center space-x-3 hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95 mx-auto md:mx-0 uppercase tracking-widest text-xs md:text-sm">
                                            <span>SEND MESSAGE</span>
                                            <Send className="w-4 h-4 md:w-5 md:h-5" />
                                        </button>
                                    </div>
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
