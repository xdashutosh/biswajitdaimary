import React from 'react';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="py-4 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Side: Image with Quote Overlay */}
                    <div className="lg:w-[45%] relative ml-12 lg:ml-36">
                        {/* Background Decoration */}
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl -z-10"></div>
                        
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.01]">
                                <img
                                    src="https://newslivetv.com/wp-content/uploads/2021/02/Assam-Biswajit-Daimary-to-be-BJP-candidate-for-Rajya-Sabha-by-polls.jpg"
                                    alt="Biswajit Daimary, honorable Speaker of the Assam Legislative Assembly"
                                    className="w-full h-auto object-cover min-h-[400px] lg:min-h-[500px]"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop';
                                    }}
                                />
                            </div>

                            {/* Overlapping Quote Box - More compact and further offset */}
                            <div className="absolute -bottom-12 lg:-bottom-8 -left-20 lg:-left-50 w-[280px] lg:w-[320px] bg-primary-dark p-5 lg:p-6 rounded-lg shadow-2xl z-20 border-b-4 border-primary-orange">
                                <Quote className="text-primary-orange w-6 h-6 mb-3 opacity-80" fill="currentColor" />
                                <p className="text-white text-sm lg:text-sm font-medium leading-relaxed mb-4 font-serif italic">
                                    "My transition from a mahout's son and a teacher to the Speaker's chair is a victory for every common man in Assam."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="h-[1px] w-5 bg-primary-orange/50"></div>
                                    <p className="text-primary-orange font-signature text-lg lg:text-xl">
                                        Biswajit Daimary
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-[55%] mt-16 lg:mt-0">
                        <div className="relative inline-block mb-3">
                             <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
                                 THE JOURNEY
                             </span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-5xl font-normal text-primary-dark mb-6 leading-[1.15] font-serif">
                            A Leader <span className="italic">Rooted</span> in Reality
                        </h2>
                        
                        <div className="w-12 h-1 bg-primary-orange/30 mb-6 rounded-full"></div>
                        
                        <div className="space-y-5 text-gray-600 leading-relaxed text-base lg:text-[14px] font-medium">
                            <p className="opacity-90">
                                Born in 1971 in Suagpur, Baksa, Biswajit Daimary's journey is a testament to the power of resilience. From supporting his modest farming family to serving as the 17th Speaker of the Assam Legislative Assembly, his path has always been connected to the soil.
                            </p>
                            <p className="opacity-90">
                                His career began as an educator at U.N. Brahma Girls M.E. School (1991–1996), while simultaneously leading the student movement through the All Bodo Students' Union (ABSU). This foundation of social service and youth empowerment paved the way for decades of legislative service.
                            </p>
                            
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-1">
                                {[
                                    "20+ Years in Service",
                                    "Educator & Activist",
                                    "Voice of the Tribe",
                                    "Speaker of the House"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-primary-orange rounded-full group-hover:scale-125 transition-transform"></span>
                                        <span className="font-bold text-[10px] uppercase tracking-wider text-primary-dark/70 whitespace-nowrap">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-2">
                                <Link 
                                    to="/about" 
                                    className="inline-flex items-center justify-center bg-primary-orange text-white px-8 py-3.5 rounded-md font-black uppercase tracking-widest text-[12px] hover:bg-primary-orange/90 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
