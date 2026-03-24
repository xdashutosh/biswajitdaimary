import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Construction, Trophy, ArrowRight, Landmark } from 'lucide-react';

const ImpactSection = () => {
    const containerRef = useScrollRevealChildren();

    const items = [
        {
            title: "Development Projects",
            desc: "Exploring mission-critical infrastructure, water, and healthcare initiatives transforming BTR.",
            icon: <Construction className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            color: "bg-primary-dark",
            borderColor: "border-primary-dark",
            path: "/projects"
        },
        {
            title: "Parliamentary Record",
            desc: "A comprehensive archive of speeches, debates, and questions raised in the Rajya Sabha.",
            icon: <Landmark className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            color: "bg-primary-orange",
            borderColor: "border-primary-orange",
            path: "/parliament"
        },
        {
            title: "Election Mandate",
            desc: "A journey through electoral history, winning margins, and public support over two decades.",
            icon: <Trophy className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            color: "bg-primary-dark",
            borderColor: "border-primary-dark",
            path: "/elections"
        }
    ];

    return (
        <section className="py-16 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <div ref={containerRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-stretch">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col group animate-on-scroll h-full">
                            <div className="flex-grow">
                                <div className="flex items-start gap-6 mb-8">
                                    {/* Icon Box */}
                                    <div className={`${item.color} w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center rounded-sm shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <h3 className="text-xl md:text-[22px] font-normal text-primary-dark mb-3 tracking-tight font-serif">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-[13px] mb-4 line-clamp-3">
                                            {item.desc}
                                        </p>
                                        <Link 
                                            to={item.path} 
                                            className="text-primary-orange font-bold text-xs uppercase tracking-[0.2em] hover:text-primary-dark transition-colors flex items-center gap-2 group/btn"
                                        >
                                            Read More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Bottom Divider */}
                            <div className={`w-full h-0.5 ${item.borderColor.replace('border-', 'bg-')} opacity-20 group-hover:opacity-100 transition-opacity duration-500 mt-auto`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
