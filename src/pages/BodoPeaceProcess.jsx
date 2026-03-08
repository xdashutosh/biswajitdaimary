import React from 'react';
import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Bird, ShieldCheck, Landmark, Globe, FileText, Users, GraduationCap, Building2, Terminal } from 'lucide-react';

const BodoPeaceProcess = () => {
    const headerRef = useScrollReveal();
    const phase1Ref = useScrollReveal();
    const phase2Ref = useScrollReveal();
    const phase3Ref = useScrollReveal();
    const phase4Ref = useScrollReveal();
    const impactRef = useScrollRevealChildren();

    const phases = [
        {
            number: '01',
            title: 'Early Political Involvement',
            period: '1987–1999',
            content: 'As a young activist, Daimary joined the Bodo movement inspired by Upendra Nath Brahma. He mobilized youth through ABSU, participated in demonstrations for tribal rights, and helped build grassroots awareness of the Bodoland demand.',
            icon: Users,
            color: 'bg-blue-500',
            ref: phase1Ref
        },
        {
            number: '02',
            title: 'The 2003 Peace Accord',
            period: '1999–2003',
            content: 'Daimary served as a key political mediator during the peak of the insurgency, pushing militant groups toward dialogue. This culminated in the creation of the Bodoland Territorial Council (BTC) under the Sixth Schedule.',
            icon: Landmark,
            color: 'bg-orange-500',
            ref: phase2Ref
        },
        {
            number: '03',
            title: 'Parliamentary Advocacy',
            period: '2008–2020',
            content: 'During his tenure in the Rajya Sabha, he repeatedly raised Bodo issues at the national level, advocating for greater autonomy, land protection, and sustainable development funding for the region.',
            icon: Building2,
            color: 'bg-purple-500',
            ref: phase3Ref
        },
        {
            number: '04',
            title: 'The 2020 Final Solution',
            period: '2020–Present',
            content: 'A historic breakthrough that ended decades of insurgency. Daimary publicly supported the agreement, renaming BTAD to BTR and securing a ₹1500 crore development package for the people.',
            icon: ShieldCheck,
            color: 'bg-green-500',
            ref: phase4Ref
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Header */}
            <section ref={headerRef} className="bg-primary-dark pt-32 pb-20 md:pb-40 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img
                        src="/src/assets/bodo_culture_background.png"
                        alt="Cultural Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full mb-8 animate-bounce">
                        <Bird className="w-5 h-5" />
                        <span className="text-[10px] md:text-sm font-black uppercase tracking-widest">A Legacy of Peace</span>
                    </div>
                    <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                        BODO PEACE <br />
                        <span className="text-primary-orange">PROCESS</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-xl font-medium leading-relaxed">
                        Biswajit Daimary's pivotal role in transitioning Bodoland from decades of insurgency to a new era of stability and constitutional governance.
                    </p>
                </div>
            </section>

            {/* Background Intro */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black text-primary-dark mb-8 uppercase tracking-tighter">Background of the Conflict</h2>
                            <div className="space-y-6 text-gray-500 font-medium text-base md:text-lg leading-relaxed">
                                <p>The Bodo movement began in the 1980s demanding a separate state, political autonomy, and the protection of tribal land, language, and culture.</p>
                                <p>For decades, the region faced intense conflict, splitting between political organizations like ABSU and militant groups like NDFB and BLT.</p>
                                <div className="p-6 bg-orange-50 border-l-4 border-primary-orange italic text-primary-dark font-black tracking-tight rounded-r-2xl">
                                    "Dialogues were the only path to a sustainable future."
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-primary-orange p-8 rounded-[2rem] text-white flex flex-col items-center justify-center text-center shadow-lg transform -rotate-3">
                                <span className="text-4xl font-black mb-2">40+</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">Years of Struggle</span>
                            </div>
                            <div className="bg-primary-dark p-8 rounded-[2rem] text-white flex flex-col items-center justify-center text-center shadow-lg transform rotate-3 mt-8">
                                <span className="text-4xl font-black mb-2">3</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">Major Accords</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Phases */}
            <section className="py-20 md:py-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Center Line for Desktop */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden lg:block"></div>

                        <div className="space-y-20 md:space-y-32">
                            {phases.map((phase, idx) => (
                                <div key={idx} ref={phase.ref} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 animate-on-scroll ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2 lg:px-20">
                                        <div className={`p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-3xl border border-gray-50 relative group hover:border-primary-orange/20 transition-all ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                            <div className="absolute -top-6 left-10 lg:left-auto lg:right-10 flex flex-col items-center">
                                                <span className={`w-12 h-12 md:w-16 md:h-16 ${phase.color} text-white rounded-2xl md:rounded-3xl flex items-center justify-center text-xl md:text-2xl font-black shadow-xl`}>
                                                    {phase.number}
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <span className="text-primary-orange font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block">{phase.period}</span>
                                                <h3 className="text-2xl md:text-3xl font-black text-primary-dark mb-6 uppercase tracking-tighter">{phase.title}</h3>
                                                <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">{phase.content}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Icon / Marker Side */}
                                    <div className="relative z-10 flex items-center justify-center lg:w-20">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center text-gray-300 group-hover:text-primary-orange transition-colors`}>
                                            <phase.icon className="w-8 h-8 md:w-10 md:h-10" />
                                        </div>
                                    </div>

                                    {/* Spacer for Desktop */}
                                    <div className="hidden lg:block lg:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Cards */}
            <section className="py-20 md:py-40 bg-primary-dark">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20 md:mb-32">
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Significance of the 2020 Accord</h2>
                        <div className="w-20 h-2 bg-primary-orange mx-auto"></div>
                    </div>

                    <div ref={impactRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                        <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] hover:bg-white/10 transition-all group animate-on-scroll">
                            <div className="w-16 h-16 bg-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-black text-white mb-6 uppercase tracking-tight">Institutional Integration</h4>
                            <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">Militant groups surrendered weapons and joined the democratic process, permanently ending large-scale insurgency.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] hover:bg-white/10 transition-all group animate-on-scroll animate-delay-1">
                            <div className="w-16 h-16 bg-orange-500/20 text-orange-500 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-black text-white mb-6 uppercase tracking-tight">Political Empowerment</h4>
                            <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">BTAD was renamed to Bodoland Territorial Region (BTR) with expanded seats and greater administrative powers.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] hover:bg-white/10 transition-all group animate-on-scroll animate-delay-2">
                            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-black text-white mb-6 uppercase tracking-tight">Economic Stimulus</h4>
                            <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">A special development package of ₹1500 crore was secured for infrastructure, education, and rural development.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Quote */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
                            <Bird className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <h2 className="text-2xl md:text-5xl font-black text-primary-dark italic leading-tight mb-12">
                            "The 2020 Accord is not just a document; it is a final solution to decades of struggle, ensuring peace and dignity for every single Bodo citizen."
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-10 h-0.5 bg-primary-orange"></div>
                            <span className="font-black uppercase tracking-widest text-primary-dark text-lg md:text-xl">Biswajit Daimary</span>
                            <div className="w-10 h-0.5 bg-primary-orange"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BodoPeaceProcess;
