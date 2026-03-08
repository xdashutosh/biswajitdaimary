import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Construction, Trophy, ArrowRight, Landmark } from 'lucide-react';

const ImpactSection = () => {
    const containerRef = useScrollRevealChildren();

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-gray-100 group hover:border-primary-orange transition-all relative overflow-hidden animate-on-scroll hover-lift">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity"></div>
                        <Construction className="w-12 h-12 md:w-16 md:h-16 text-primary-orange mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl md:text-3xl font-black text-primary-dark mb-4 uppercase tracking-tighter">Development Projects</h3>
                        <p className="text-gray-500 font-medium mb-8 md:mb-10 leading-relaxed text-base md:text-lg">Exploring mission-critical infrastructure, water, and healthcare initiatives transforming BTR.</p>
                        <Link to="/projects" className="flex items-center gap-3 text-primary-orange font-black uppercase tracking-widest text-[10px] md:text-sm group-hover:gap-5 transition-all">
                            View All Projects <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-gray-100 group hover:border-primary-orange transition-all relative overflow-hidden animate-on-scroll animate-delay-1 hover-lift">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity"></div>
                        <Landmark className="w-12 h-12 md:w-16 md:h-16 text-primary-orange mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl md:text-3xl font-black text-primary-dark mb-4 uppercase tracking-tighter">Parliamentary Record</h3>
                        <p className="text-gray-500 font-medium mb-8 md:mb-10 leading-relaxed text-base md:text-lg">A comprehensive archive of speeches, debates, and questions raised in the Rajya Sabha.</p>
                        <Link to="/parliament" className="flex items-center gap-3 text-primary-orange font-black uppercase tracking-widest text-[10px] md:text-sm group-hover:gap-5 transition-all">
                            Explore Speeches <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-gray-100 group hover:border-primary-orange transition-all relative overflow-hidden animate-on-scroll animate-delay-2 hover-lift">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity"></div>
                        <Trophy className="w-12 h-12 md:w-16 md:h-16 text-primary-orange mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl md:text-3xl font-black text-primary-dark mb-4 uppercase tracking-tighter">Election Mandate</h3>
                        <p className="text-gray-500 font-medium mb-8 md:mb-10 leading-relaxed text-base md:text-lg">A journey through electoral history, winning margins, and public support over two decades.</p>
                        <Link to="/elections" className="flex items-center gap-3 text-primary-orange font-black uppercase tracking-widest text-[10px] md:text-sm group-hover:gap-5 transition-all">
                            Explore Performance <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
