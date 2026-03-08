import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 relative text-center">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-orange/10 rounded-full -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-orange/10 rounded-full -z-10 animate-pulse delay-700"></div>
                        <div className="relative inline-block border-[10px] border-primary-orange p-2 rounded-2xl shadow-2xl">
                            <img
                                src="https://newslivetv.com/wp-content/uploads/2021/02/Assam-Biswajit-Daimary-to-be-BJP-candidate-for-Rajya-Sabha-by-polls.jpg"
                                alt="Biswajit Daimary"
                                className="w-full rounded-lg max-h-[600px] object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop';
                                }}
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-primary-orange font-bold uppercase tracking-widest mb-2">The Journey</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-primary-dark mb-6 leading-tight uppercase tracking-tighter">A Leader Rooted in Reality</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg font-medium">
                            <p>
                                Born in 1971 in Suagpur, Baksa, Biswajit Daimary's journey is a testament to the power of resilience. From supporting his modest farming family to serving as the 17th Speaker of the Assam Legislative Assembly, his path has always been connected to the soil.
                            </p>
                            <p>
                                His career began as an educator at U.N. Brahma Girls M.E. School (1991–1996), while simultaneously leading the student movement through the All Bodo Students' Union (ABSU). This foundation of social service and youth empowerment paved the way for decades of legislative service.
                            </p>
                            <p className="bg-orange-50 border-l-4 border-primary-orange p-6 italic font-black text-primary-dark tracking-tight">
                                "My transition from a mahout's son and a teacher to the Speaker's chair is a victory for every common man in Assam."
                            </p>
                            <ul className="grid grid-cols-2 gap-6 mt-10">
                                <li className="flex items-center space-x-3">
                                    <span className="w-3 h-3 bg-primary-orange rounded-full shadow-lg"></span>
                                    <span className="font-black text-sm uppercase tracking-widest text-primary-dark">20+ Years in Service</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-3 h-3 bg-primary-orange rounded-full shadow-lg"></span>
                                    <span className="font-black text-sm uppercase tracking-widest text-primary-dark">Educator & Activist</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-3 h-3 bg-primary-orange rounded-full shadow-lg"></span>
                                    <span className="font-black text-sm uppercase tracking-widest text-primary-dark">Voice of the Tribe</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-3 h-3 bg-primary-orange rounded-full shadow-lg"></span>
                                    <span className="font-black text-sm uppercase tracking-widest text-primary-dark">Speaker of the House</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link to="/about" className="inline-block bg-primary-dark text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl hover:scale-105 active:scale-95">
                                    Read Full Biography
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
