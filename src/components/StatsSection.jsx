import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Users, Award, Calendar, MapPin } from 'lucide-react';

const StatsSection = () => {
    const containerRef = useScrollRevealChildren();

    const stats = [
        { label: 'Years in Public Life', value: '25+', icon: <Calendar className="w-4 h-4 md:w-6 md:h-6" /> },
        { label: 'Constituency Workers', value: '10K+', icon: <Users className="w-4 h-4 md:w-6 md:h-6" /> },
        { label: 'Bodo Accord Architect', value: '2020', icon: <Award className="w-4 h-4 md:w-6 md:h-6" /> },
        { label: 'Assam Districts Served', value: '35', icon: <MapPin className="w-4 h-4 md:w-6 md:h-6" /> }
    ];

    return (
        <section className="py-5 md:py-3 bg-primary-orange relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center text-white animate-on-scroll animate-delay-${index + 1}`}
                        >
                            <div className="bg-white/20 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-1 backdrop-blur-sm">
                                {stat.icon}
                            </div>
                             <h3 className="text-lg md:text-xl font-normal mb-0 text-white leading-tight font-serif">{stat.value}</h3>
                             <p className="text-white/70 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
