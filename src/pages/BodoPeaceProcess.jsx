import React from 'react';
import SEO from '../components/SEO';
import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Bird, ShieldCheck, Landmark, Globe, FileText, Users, GraduationCap, Building2, Terminal } from 'lucide-react';
import bodo_culture_background from '../assets/bodo_culture_background.png';

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
            <SEO
                title="Bodo Peace Accord"
                description="Explore Biswajit Daimary's pivotal role in the Bodo Peace Accord and the transition to stability and progress in the Bodoland Territorial Region (BTR)."
                keywords="Bodo Peace Accord, BTR, Bodoland Territorial Region, Peace in Assam, Biswajit Daimary Peace Process"
                url="/bodo-peace-accord"
            />
            {/* Hero Header */}
            <section ref={headerRef} className="bg-primary-dark pt-24 pb-12 md:pb-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img
                        src={bodo_culture_background}
                        alt="Traditional Bodo cultural heritage background representing peace and identity"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full mb-4">
                        <Bird className="w-5 h-5" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">A Legacy of Peace</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-normal font-serif mb-4 tracking-tight leading-tight">
                        Bodo Peace <br />
                        <span className="text-primary-orange italic">Process</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base font-medium leading-relaxed opacity-90">
                        Biswajit Daimary's pivotal role in transitioning Bodoland from decades of insurgency to a new era of stability and constitutional governance.
                    </p>
                </div>
            </section>

            {/* Background Intro */}
            <section className="py-8 md:py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-xl md:text-3xl font-normal font-serif text-primary-dark mb-4 leading-tight">Background of the Conflict</h2>
                            <div className="space-y-3 text-gray-600 font-medium text-sm md:text-[15px] leading-relaxed">
                                <p>The Bodo movement began in the 1980s demanding a separate state, political autonomy, and the protection of tribal land, language, and culture.</p>
                                <p>For decades, the region faced intense conflict, splitting between political organizations like ABSU and militant groups like NDFB and BLT.</p>
                                <div className="p-4 bg-orange-50/50 border-l-4 border-primary-orange italic text-primary-dark font-serif text-base md:text-lg leading-relaxed rounded-r-xl">
                                    "Dialogues were the only path to a sustainable future."
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-primary-orange p-5 md:p-6 rounded-2xl text-white flex flex-col items-center justify-center text-center shadow-lg transform -rotate-2">
                                <span className="text-3xl font-black mb-1">40+</span>
                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Years of Struggle</span>
                            </div>
                            <div className="bg-primary-dark p-5 md:p-6 rounded-2xl text-white flex flex-col items-center justify-center text-center shadow-lg transform rotate-2 mt-4">
                                <span className="text-3xl font-black mb-1">3</span>
                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Major Accords</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Phases */}
            <section className="py-8 md:py-12 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Center Line for Desktop */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden lg:block"></div>
                        <div className="space-y-10 md:space-y-12">
                            {phases.map((phase, idx) => (
                                <div key={idx} ref={phase.ref} className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 animate-on-scroll ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2 lg:px-8">
                                        <div className={`p-5 md:p-8 rounded-3xl bg-white shadow-lg border border-gray-50 relative group hover:border-primary-orange/20 transition-all ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                            <div className="absolute -top-4 left-6 lg:left-auto lg:right-6 flex flex-col items-center">
                                                <span className={`w-8 h-8 md:w-10 md:h-10 ${phase.color} text-white rounded-lg md:rounded-xl flex items-center justify-center text-base md:text-lg font-black shadow-lg`}>
                                                    {phase.number}
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="text-primary-orange font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">{phase.period}</span>
                                                <h3 className="text-lg md:text-xl font-normal font-serif text-primary-dark mb-3 leading-tight">{phase.title}</h3>
                                                <p className="text-gray-500 font-medium leading-relaxed text-[13px] md:text-[14px]">{phase.content}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Icon / Marker Side */}
                                    <div className="relative z-10 flex items-center justify-center lg:w-14">
                                        <div className={`w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border-2 border-gray-50 shadow-md flex items-center justify-center text-gray-300 group-hover:text-primary-orange transition-colors`}>
                                            <phase.icon className="w-5 h-5 md:w-6 md:h-6" />
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
            <section className="py-12 md:py-16 bg-primary-dark">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-xl md:text-3xl font-normal font-serif text-white mb-4 leading-tight">Significance of the 2020 Accord</h2>
                        <div className="w-12 h-0.5 bg-primary-orange mx-auto opacity-60"></div>
                    </div>

                    <div ref={impactRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all group animate-on-scroll">
                            <div className="w-10 h-10 bg-blue-500/20 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-5 h-5" />
                            </div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-3 leading-tight">Institutional Integration</h4>
                            <p className="text-gray-400 font-medium leading-relaxed text-xs md:text-sm">Militant groups surrendered weapons and joined the democratic process, permanently ending large-scale insurgency.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all group animate-on-scroll animate-delay-1">
                            <div className="w-10 h-10 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-3 leading-tight">Political Empowerment</h4>
                            <p className="text-gray-400 font-medium leading-relaxed text-xs md:text-sm">BTAD was renamed to Bodoland Territorial Region (BTR) with expanded seats and greater administrative powers.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all group animate-on-scroll animate-delay-2">
                            <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="w-5 h-5" />
                            </div>
                            <h4 className="text-base md:text-lg font-bold text-white mb-3 leading-tight">Economic Stimulus</h4>
                            <p className="text-gray-400 font-medium leading-relaxed text-xs md:text-sm">A special development package of ₹1500 crore was secured for infrastructure, education, and rural development.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Quote */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Bird className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <h2 className="text-lg md:text-3xl font-normal font-serif text-primary-dark italic leading-snug mb-8">
                            "The 2020 Accord is not just a document; it is a final solution to decades of struggle, ensuring peace and dignity for every single Bodo citizen."
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-8 h-[1px] bg-primary-orange/50"></div>
                            <span className="font-signature text-xl md:text-2xl text-primary-orange">Biswajit Daimary</span>
                            <div className="w-8 h-[1px] bg-primary-orange/50"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BodoPeaceProcess;
