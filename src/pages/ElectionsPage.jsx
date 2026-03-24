import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import SEO from '../components/SEO';
import { Trophy, Users, BarChart, Flag, CheckCircle } from 'lucide-react';

const ElectionsPage = () => {
    const statsRef = useScrollRevealChildren();
    const results = [
        { year: '2001', type: 'Assam Assembly', constituency: 'Tamulpur', party: 'Independent', margin: '16,854', status: 'Won' },
        { year: '2008', type: 'Rajya Sabha', constituency: 'Assam', party: 'BPF', margin: 'N/A', status: 'Won' },
        { year: '2014', type: 'Rajya Sabha', constituency: 'Assam', party: 'BPF', margin: 'N/A', status: 'Won' },
        { year: '2021', type: 'Rajya Sabha', constituency: 'Assam', party: 'BJP', margin: 'N/A', status: 'Won' },
        { year: '2021', type: 'Assam Assembly', constituency: 'Panery', party: 'BJP', margin: '35,852', status: 'Won' },
    ];

    const stats = [
        { label: 'Winning Margin (2021)', value: '35,852', icon: Trophy },
        { label: 'Vote Share (Panery)', value: '~61%', icon: BarChart },
        { label: 'Assembly Terms', value: '2', icon: Flag },
        { label: 'MP Terms', value: '3', icon: Users },
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Election Mandate"
                description="View the election results and public mandates of Biswajit Daimary, reflecting his legacy of public support and victory."
                keywords="Biswajit Daimary Election Results, Panery Constituency, Tamulpur MLA, Rajya Sabha MP Assam"
                url="/elections"
            />
            
            {/* Compact Header Section - Matches News/Projects Style */}
            <section className="bg-primary-dark py-2 md:py-4 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-1 tracking-tighter text-white drop-shadow-2xl uppercase">
                        Election Mandate
                    </h1>
                    <div className="w-16 md:w-20 h-0.5 bg-primary-orange mx-auto mb-2 rounded-full shadow-lg"></div>
                    <p className="text-[10px] md:text-xs text-white/90 font-black tracking-[0.4em] uppercase drop-shadow-md">A Legacy of Public Support & Victory</p>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    {/* Stats Grid - More Compact */}
                    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
                        {stats.map((item, idx) => (
                            <div
                                key={idx}
                                className={`group bg-gray-50/50 p-4 md:p-6 rounded-xl text-center border border-gray-100 shadow-sm hover:border-primary-orange transition-all animate-on-scroll animate-delay-${idx + 1}`}
                            >
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-orange/10 text-primary-orange rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-orange group-hover:text-white transition-all">
                                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <div className="text-xl md:text-3xl font-normal text-primary-dark mb-1 tracking-tight font-serif">{item.value}</div>
                                <div className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Table Section - Optimized Spacing */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden p-4 md:p-10 lg:p-12 mb-16 md:mb-24">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 md:mb-10 px-2">
                             <div>
                                <p className="text-primary-orange font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Victory Records</p>
                                <h3 className="text-2xl md:text-3xl font-normal text-primary-dark tracking-tight mb-1 font-serif">
                                    Results <span className="italic">Archive</span>
                                </h3>
                            </div>
                            <div className="flex items-center gap-2 text-primary-orange font-bold text-[9px] uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full border border-primary-orange/10">
                                <CheckCircle className="w-3.5 h-3.5" /> Verified Data
                            </div>
                        </div>

                        <div className="overflow-x-auto -mx-4 md:-mx-0">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b-2 border-primary-orange/30">
                                        <th className="py-4 md:py-6 font-bold text-primary-dark uppercase tracking-widest text-[9px] md:text-[10px] px-4">Year</th>
                                        <th className="py-4 md:py-6 font-bold text-primary-dark uppercase tracking-widest text-[9px] md:text-[10px] px-4">Election Type</th>
                                        <th className="py-4 md:py-6 font-bold text-primary-dark uppercase tracking-widest text-[9px] md:text-[10px] px-4">Constituency</th>
                                        <th className="py-4 md:py-6 font-bold text-primary-dark uppercase tracking-widest text-[9px] md:text-[10px] px-4 text-center">Party</th>
                                        <th className="py-4 md:py-6 font-bold text-primary-dark uppercase tracking-widest text-[9px] md:text-[10px] px-4">Margin</th>
                                        <th className="py-4 md:py-6 font-bold text-primary-dark uppercase tracking-widest text-[9px] md:text-[10px] px-4">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((row, idx) => (
                                        <tr key={idx} className="border-b border-gray-50 hover:bg-orange-50/20 transition-colors group">
                                            <td className="py-5 md:py-7 font-serif font-normal text-primary-orange text-lg md:text-xl px-4">{row.year}</td>
                                            <td className="py-5 md:py-7 font-bold text-primary-dark uppercase tracking-tight text-[11px] md:text-xs px-4">{row.type}</td>
                                            <td className="py-5 md:py-7 text-gray-500 font-medium text-[11px] md:text-xs px-4">{row.constituency}</td>
                                            <td className="py-5 md:py-7 text-center px-4">
                                                <span className={`inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest shadow-sm ${row.party === 'BJP' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-600'
                                                    }`}>
                                                    {row.party}
                                                </span>
                                            </td>
                                            <td className="py-5 md:py-7 font-bold text-primary-dark tabular-nums text-[11px] md:text-xs px-4">{row.margin}</td>
                                            <td className="py-5 md:py-7 px-4">
                                                <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-[8px] md:text-[9px]">
                                                    <Trophy className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                                    {row.status}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Summary Footer - More Compact & Vibrant */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-dark rounded-3xl -rotate-0.5 transform scale-[1.01] opacity-5"></div>
                        <div className="relative bg-primary-dark rounded-2xl p-8 md:p-16 lg:p-20 text-center text-white shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-primary-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            
                            <h3 className="text-2xl md:text-4xl font-serif font-normal mb-10 md:mb-12 uppercase tracking-tight">The Three Pillars of <span className="italic text-primary-orange">Leadership</span></h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                <div className="p-6 md:p-8 border border-white/10 rounded-xl hover:border-primary-orange/50 transition-all bg-white/5 backdrop-blur-sm group">
                                    <span className="text-primary-orange font-serif italic text-2xl md:text-3xl mb-4 block group-hover:scale-110 transition-transform">01</span>
                                    <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 text-white">Student Activist</h5>
                                    <p className="text-white/40 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em]">All Bodo Students' Union</p>
                                </div>
                                <div className="p-6 md:p-8 border border-white/10 rounded-xl hover:border-primary-orange/50 transition-all bg-white/5 backdrop-blur-sm group text-center">
                                    <span className="text-primary-orange font-serif italic text-2xl md:text-3xl mb-4 block group-hover:scale-110 transition-transform text-center">02</span>
                                    <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 text-white text-center">Regional Voice</h5>
                                    <p className="text-white/40 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-center">Bodoland People's Front</p>
                                </div>
                                <div className="p-6 md:p-8 border border-primary-orange/50 rounded-xl bg-primary-orange/5 shadow-xl group border-2">
                                    <span className="text-primary-orange font-serif italic text-2xl md:text-3xl mb-4 block group-hover:scale-110 transition-transform">03</span>
                                    <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 text-primary-orange">Statesman</h5>
                                    <p className="text-white/70 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em]">BJP & Speaker Office</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ElectionsPage;
