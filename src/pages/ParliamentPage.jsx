import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import SEO from '../components/SEO';
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
            <SEO
                title="Parliamentary Record"
                description="Examine the parliamentary performance and debates of Biswajit Daimary during his tenure in the Rajya Sabha."
                keywords="Rajya Sabha MP Biswajit Daimary, Parliamentary Debates, Northeast Voice in Parliament, Bodo Issues in Rajya Sabha"
                url="/parliament"
                type="Organization"
            />
            
            {/* Compact Header Section - Matches News/Projects Style */}
            <section className="bg-primary-dark py-2 md:py-4 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-1 tracking-tighter text-white drop-shadow-2xl uppercase">
                        Parliamentary Record
                    </h1>
                    <div className="w-16 md:w-20 h-0.5 bg-primary-orange mx-auto mb-2 rounded-full shadow-lg"></div>
                    <p className="text-[10px] md:text-xs text-white/90 font-black tracking-[0.4em] uppercase drop-shadow-md">A Voice for the Northeast in Rajya Sabha</p>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    {/* Stats - More Compact Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-gray-50/50 p-4 md:p-6 rounded-xl border border-gray-100 text-center group hover:border-primary-orange transition-all shadow-sm">
                                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <div className="text-xl md:text-3xl font-normal text-primary-dark mb-1 tracking-tight font-serif">{stat.value}</div>
                                <p className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
                        {/* Speeches Timeline */}
                        <div className="w-full lg:w-3/5">
                            <div className="mb-10">
                                <p className="text-primary-orange font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Legislative Journey</p>
                                <h2 className="text-2xl md:text-3xl font-normal text-primary-dark tracking-tight mb-1 font-serif">
                                    Key <span className="italic">Debates & Speeches</span>
                                </h2>
                                <div className="w-12 h-1 bg-primary-orange mt-2"></div>
                            </div>
                            
                            <div ref={speechesRef} className="space-y-8 md:space-y-10">
                                {speeches.map((speech, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative pl-8 md:pl-10 border-l-2 border-orange-100 animate-on-scroll animate-fade-left animate-delay-${Math.min(idx + 1, 4)}`}
                                    >
                                        <div className="absolute -left-[7px] md:-left-[9px] top-0 w-3 h-3 md:w-4 md:h-4 bg-primary-orange rounded-full shadow-md border-2 border-white"></div>
                                        <div className="text-primary-orange font-bold text-[9px] md:text-[10px] uppercase tracking-widest mb-1">{speech.year}</div>
                                        <h3 className="text-lg md:text-xl font-bold text-primary-dark mb-2 uppercase tracking-tight font-serif">{speech.title}</h3>
                                        <p className="text-gray-600 font-medium leading-relaxed mb-4 text-xs md:text-sm">{speech.desc}</p>
                                        {speech.quote && (
                                            <div className="bg-orange-50/50 p-4 rounded-lg border-l-2 border-primary-orange italic text-primary-dark font-medium text-sm md:text-base leading-relaxed">
                                                "{speech.quote}"
                                            </div>
                                        )}
                                        {speech.highlight && (
                                            <div className="inline-flex items-center gap-2 text-primary-orange font-bold text-[8px] md:text-[9px] uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full mt-2 border border-primary-orange/10">
                                                <Mic2 className="w-3 h-3" /> {speech.highlight}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Questions & Issues */}
                        <div className="w-full lg:w-2/5">
                            <div className="lg:sticky lg:top-8">
                                <div className="bg-primary-dark rounded-xl p-6 md:p-10 text-white shadow-2xl relative overflow-hidden">
                                     {/* Subtle Background Accent */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                    
                                    <h3 className="text-xl md:text-2xl font-serif font-normal mb-8 uppercase tracking-tight">
                                        Parliamentary <span className="italic text-primary-orange">Questions</span>
                                    </h3>
                                    
                                    <div className="space-y-6">
                                        {questionCategories.map((cat, idx) => (
                                            <div key={idx} className="group">
                                                <h4 className="text-primary-orange font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                                    <span className="w-1 h-3 bg-primary-orange rounded-full group-hover:h-4 transition-all"></span>
                                                    {cat.title}
                                                </h4>
                                                <ul className="space-y-2.5 ml-3">
                                                    {cat.topics.map((topic, tIdx) => (
                                                        <li key={tIdx} className="text-[11px] md:text-xs font-medium text-white/60 hover:text-white transition-colors flex items-start gap-2 leading-relaxed">
                                                            <ArrowRight className="w-2.5 h-2.5 text-primary-orange/50 mt-0.5 flex-shrink-0" />
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <h4 className="text-sm md:text-base font-bold mb-4 uppercase tracking-[0.1em] text-white/90">Key Focus Areas</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Bodo Rights', 'NE Security', 'Regional Development', 'Federal Governance'].map((tag, idx) => (
                                                <span key={idx} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm hover:bg-primary-orange/10 hover:border-primary-orange/50 transition-all cursor-default">
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
