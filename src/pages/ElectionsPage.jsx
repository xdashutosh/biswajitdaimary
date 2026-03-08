import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
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
            {/* Hero Section */}
            <section className="bg-primary-dark py-20 md:py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <img
                        src="https://images.hindustantimes.com/img/2021/02/15/550x309/PTI23-11-2020_000169A_1613377454396_1613377460332.jpg"
                        alt="Victory Moment"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
                        ELECTION MANDATE
                    </h1>
                    <div className="w-16 md:w-24 h-2 bg-primary-orange mx-auto mb-6"></div>
                    <p className="text-sm md:text-xl text-primary-orange font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">A Legacy of Public Support & Victory</p>
                </div>
            </section>

            <section className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    {/* Stats Grid */}
                    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
                        {stats.map((item, idx) => (
                            <div
                                key={idx}
                                className={`group bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-center border border-gray-100 shadow-xl hover:border-primary-orange transition-all animate-on-scroll animate-delay-${idx + 1}`}
                            >
                                <div className="w-10 h-10 md:w-14 md:h-14 bg-primary-orange/10 text-primary-orange rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-primary-orange group-hover:text-white transition-all">
                                    <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                                </div>
                                <div className="text-2xl md:text-4xl font-black text-primary-dark mb-1 md:mb-2 tracking-tighter">{item.value}</div>
                                <div className="text-[8px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] border border-gray-100 shadow-3xl overflow-hidden p-6 md:p-20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 md:mb-16 px-4">
                            <h3 className="text-2xl md:text-3xl font-black text-primary-dark uppercase tracking-tighter">Results Archive</h3>
                            <div className="flex items-center gap-2 text-primary-orange font-black text-[10px] uppercase tracking-widest">
                                <CheckCircle className="w-4 h-4" /> Verified Data
                            </div>
                        </div>

                        <div className="overflow-x-auto -mx-6 px-6">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b-4 border-primary-orange">
                                        <th className="py-6 md:py-8 font-black text-primary-dark uppercase tracking-widest text-[10px] md:text-xs px-4">Year</th>
                                        <th className="py-6 md:py-8 font-black text-primary-dark uppercase tracking-widest text-[10px] md:text-xs px-4">Election Type</th>
                                        <th className="py-6 md:py-8 font-black text-primary-dark uppercase tracking-widest text-[10px] md:text-xs px-4">Constituency</th>
                                        <th className="py-6 md:py-8 font-black text-primary-dark uppercase tracking-widest text-[10px] md:text-xs px-4 text-center">Party</th>
                                        <th className="py-6 md:py-8 font-black text-primary-dark uppercase tracking-widest text-[10px] md:text-xs px-4">Margin</th>
                                        <th className="py-6 md:py-8 font-black text-primary-dark uppercase tracking-widest text-[10px] md:text-xs px-4">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((row, idx) => (
                                        <tr key={idx} className="border-b border-gray-50 hover:bg-orange-50/30 transition-colors group">
                                            <td className="py-8 md:py-10 font-black text-primary-orange text-base md:text-lg px-4">{row.year}</td>
                                            <td className="py-8 md:py-10 font-black text-primary-dark uppercase tracking-tight text-xs md:text-sm px-4">{row.type}</td>
                                            <td className="py-8 md:py-10 text-gray-500 font-bold text-xs md:text-sm px-4">{row.constituency}</td>
                                            <td className="py-8 md:py-10 text-center px-4">
                                                <span className={`inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-sm ${row.party === 'BJP' ? 'bg-orange-600 text-white shadow-orange-200' : 'bg-gray-100 text-gray-600'
                                                    }`}>
                                                    {row.party}
                                                </span>
                                            </td>
                                            <td className="py-8 md:py-10 font-black text-primary-dark tabular-nums text-xs md:text-sm px-4">{row.margin}</td>
                                            <td className="py-8 md:py-10 px-4">
                                                <div className="flex items-center gap-2 text-green-600 font-black uppercase tracking-widest text-[9px] md:text-[10px]">
                                                    <Trophy className="w-3 h-3 md:w-4 md:h-4" />
                                                    {row.status}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Summary Footer */}
                    <div className="mt-20 md:mt-32 relative">
                        <div className="absolute inset-0 bg-primary-dark rounded-[3.5rem] md:rounded-[5rem] -rotate-1 transform scale-105 opacity-5"></div>
                        <div className="relative bg-primary-dark rounded-[3.5rem] md:rounded-[5rem] p-10 md:p-32 text-center text-white shadow-3xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary-orange opacity-10 blur-3xl -mr-32 md:-mr-48 -mt-32 md:-mt-48 transition-all duration-1000"></div>
                            <h3 className="text-2xl md:text-5xl font-black mb-12 md:mb-16 uppercase tracking-tight">The Three Pillars of Leadership</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
                                <div className="p-8 md:p-10 border-2 border-white/5 rounded-[2.5rem] md:rounded-[3rem] hover:border-primary-orange/50 transition-colors bg-white/5 backdrop-blur-sm">
                                    <span className="text-primary-orange font-black text-xl md:text-2xl mb-4 block">01</span>
                                    <h5 className="font-black uppercase tracking-widest text-xs mb-3 md:mb-4">Student Activist</h5>
                                    <p className="text-white/40 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em]">All Bodo Students' Union</p>
                                </div>
                                <div className="p-8 md:p-10 border-2 border-white/5 rounded-[2.5rem] md:rounded-[3rem] hover:border-primary-orange/50 transition-colors bg-white/5 backdrop-blur-sm">
                                    <span className="text-primary-orange font-black text-xl md:text-2xl mb-4 block">02</span>
                                    <h5 className="font-black uppercase tracking-widest text-xs mb-3 md:mb-4">Regional Voice</h5>
                                    <p className="text-white/40 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em]">Bodoland People's Front</p>
                                </div>
                                <div className="p-8 md:p-10 border-2 border-primary-orange rounded-[2.5rem] md:rounded-[3rem] bg-primary-orange/5 shadow-2xl shadow-primary-orange/10">
                                    <span className="text-primary-orange font-black text-xl md:text-2xl mb-4 block">03</span>
                                    <h5 className="font-black uppercase tracking-widest text-xs mb-3 md:mb-4 text-primary-orange">Statesman</h5>
                                    <p className="text-white/60 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em]">BJP & Speaker Office</p>
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
