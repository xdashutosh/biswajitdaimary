import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Users, Award, Calendar, MapPin } from 'lucide-react';

const StatsSection = () => {
    const containerRef = useScrollRevealChildren();

    const stats = [
        { label: 'Years in Public Life', value: '25+', icon: <Calendar className="w-6 h-6 md:w-8 md:h-8" /> },
        { label: 'Constituency Workers', value: '10K+', icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
        { label: 'Bodo Accord Architect', value: '2020', icon: <Award className="w-6 h-6 md:w-8 md:h-8" /> },
        { label: 'Assam Districts Served', value: '35', icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" /> }
    ];

    return (
        <section className="py-12 md:py-16 bg-primary-orange relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center text-white animate-on-scroll animate-delay-${index + 1}`}
                        >
                            <div className="bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 backdrop-blur-sm">
                                {stat.icon}
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold mb-1 text-white">{stat.value}</h3>
                            <p className="text-white/80 text-[10px] md:text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
