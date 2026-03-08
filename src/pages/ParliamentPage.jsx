import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { MessageSquare, HelpCircle, FileText, Globe, Landmark, Mic2, ShieldCheck, ArrowRight } from 'lucide-react';

const ParliamentPage = () => {
    const speechesRef = useScrollRevealChildren();
    const stats = [
        { label: 'Debates Participated', value: '~75', icon: MessageSquare },
        { label: 'Questions Asked', value: '~40', icon: HelpCircle },
        { label: 'Private Member Bills', value: '0', icon: FileText },
        { label: 'Tenure', value: 'RS MP', icon: Landmark },
    ];

    const speeches = [
        {
            year: '2012',
            title: 'Reservation in Promotion for SC/ST',
            desc: 'Supported reservation policy, arguing that SC/ST professionals perform equally well and are not inferior in merit.',
            quote: 'SC/STs are not inferior to anybody in terms of merit.'
        },
        {
            year: '2014',
            title: 'Telangana State Formation Bill',
            desc: 'Supported the creation of Telangana while strategically raising the long-standing demand for Bodoland statehood.',
            quote: 'Government should take steps for creation of Bodoland.'
        },
        {
            year: '2019',
            title: 'Speech in Bodo Language',
            desc: 'Historically delivered part of the speech in Bodo to highlight the preservation of language and culture in the Northeast.',
            highlight: 'Rare Bodo language address in Rajya Sabha'
        },
        {
            year: '2019',
            title: 'Citizenship (Amendment) Bill',
            desc: 'Emphasized the protection of indigenous communities and proposed exemptions for Sixth Schedule areas.',
        },
        {
            year: '2020',
            title: 'Farm Bills & Agrarian Reforms',
            desc: 'Participated in debates on agriculture market reforms, focusing on their impact on Northeastern farmers.',
        }
    ];

    const questionCategories = [
        { title: 'Environment', topics: ['Kailam Wildlife Sanctuary as eco-sensitive zone'] },
        { title: 'Security', topics: ['Insurgent activities in Northeast', 'Arms Regulation Bill'] },
        { title: 'Governance', topics: ['Article 244A for Autonomous State', 'Constituency Demarcation'] },
        { title: 'Identity', topics: ['Inclusion of Kokborok in 8th Schedule', 'Tribal Rights'] }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-primary-dark py-20 md:py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000"
                        alt="Parliament"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
                        Parliamentary Record
                    </h1>
                    <div className="w-16 md:w-24 h-2 bg-primary-orange mx-auto mb-6"></div>
                    <p className="text-sm md:text-xl text-primary-orange font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">A Voice for the Northeast in Rajya Sabha</p>
                </div>
            </section>

            <section className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-32">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-orange-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-2 border-primary-orange/5 text-center group hover:border-primary-orange transition-all">
                                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-orange mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                                <div className="text-2xl md:text-4xl font-black text-primary-dark mb-1 tracking-tighter">{stat.value}</div>
                                <p className="text-[8px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
                        {/* Speeches Timeline */}
                        <div className="w-full lg:w-3/5">
                            <h2 className="text-3xl md:text-4xl font-black text-primary-dark mb-10 md:mb-16 uppercase tracking-tighter border-b-8 border-primary-orange inline-block">Key Debates & Speeches</h2>
                            <div ref={speechesRef} className="space-y-10 md:space-y-12">
                                {speeches.map((speech, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative pl-8 md:pl-12 border-l-4 border-orange-100 animate-on-scroll animate-fade-left animate-delay-${Math.min(idx + 1, 4)}`}
                                    >
                                        <div className="absolute -left-[10px] md:-left-[14px] top-0 w-4 h-4 md:w-6 md:h-6 bg-primary-orange rounded-full shadow-lg border-2 md:border-4 border-white"></div>
                                        <div className="text-primary-orange font-black text-[10px] md:text-xs uppercase tracking-widest mb-2">{speech.year}</div>
                                        <h3 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">{speech.title}</h3>
                                        <p className="text-gray-500 font-medium leading-relaxed mb-6 text-sm md:text-base">{speech.desc}</p>
                                        {speech.quote && (
                                            <div className="bg-orange-50 p-5 md:p-6 rounded-2xl border-l-4 border-primary-orange italic text-primary-dark font-bold text-base md:text-lg">
                                                "{speech.quote}"
                                            </div>
                                        )}
                                        {speech.highlight && (
                                            <div className="inline-flex items-center gap-2 text-primary-orange font-black text-[9px] md:text-[10px] uppercase tracking-widest bg-orange-100 px-3 md:px-4 py-2 rounded-full mt-2">
                                                <Mic2 className="w-3 h-3" /> {speech.highlight}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Questions & Issues */}
                        <div className="w-full lg:w-2/5">
                            <div className="lg:sticky lg:top-32">
                                <div className="bg-primary-dark rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-white shadow-3xl">
                                    <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 uppercase tracking-tighter">Parliamentary Questions</h3>
                                    <div className="space-y-6 md:space-y-8">
                                        {questionCategories.map((cat, idx) => (
                                            <div key={idx}>
                                                <h4 className="text-primary-orange font-black text-[10px] md:text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                                                    <ShieldCheck className="w-4 h-4" /> {cat.title}
                                                </h4>
                                                <ul className="space-y-3">
                                                    {cat.topics.map((topic, tIdx) => (
                                                        <li key={tIdx} className="text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors flex items-start gap-2">
                                                            <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mt-1.5 flex-shrink-0"></div>
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/10">
                                        <h4 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-tighter">Focus Areas</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Bodo Rights', 'NE Security', 'Regional Development', 'Federal Governance'].map((tag, idx) => (
                                                <span key={idx} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ParliamentPage;
