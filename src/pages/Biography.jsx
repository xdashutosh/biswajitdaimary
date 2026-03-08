import React from 'react';
import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal';
import { BookOpen, GraduationCap, Users, Award, Landmark, Globe, Heart, Shield, Building2 } from 'lucide-react';

const Biography = () => {
    const revealRef = useScrollReveal();
    const timelineRef = useScrollRevealChildren();
    const initiativesRef = useScrollRevealChildren();

    const timelineData = [
        {
            year: '1971',
            title: 'Birth and Roots',
            content: 'Born on 4 February 1971 in Suagpur village, Baksa district, Assam. Hailing from a modest background, his father was a dedicated mahout (elephant handler).',
            icon: Heart
        },
        {
            year: '1988 - 2001',
            title: 'Youth & Student Activism',
            content: 'A pivotal decade of leadership within the All Bodo Students\' Union (ABSU). Served as General Secretary and President of Sanja Defeli Anchalik Committee, and later as President of Kamrup District Committee. Culminated as Assistant General Secretary of the ABSU Central Committee.',
            icon: Users
        },
        {
            year: '1991 - 1996',
            title: 'Early Career as Educator',
            content: 'Before entering electoral politics, he served as a teacher at U.N. Brahma Girls M.E. School, fostering social awareness and youth empowerment in the community.',
            icon: GraduationCap
        },
        {
            year: '2001',
            title: 'First Legislative Victory',
            content: 'Contested and won the Assam Assembly election as an Independent candidate from Tamulpur constituency, marking his debut as a Member of the Legislative Assembly (MLA).',
            icon: Landmark
        },
        {
            year: '2006 - 2008',
            title: 'Empowering Artisans',
            content: 'Served as Chairman of ARTFED (Assam Apex Weavers and Artisans Cooperative Federation), promoting handloom heritage and rural employment for local artisans.',
            icon: Award
        },
        {
            year: '2008 - 2020',
            title: 'Voice in Rajya Sabha',
            content: 'Elected twice to the Rajya Sabha. Served on critical parliamentary committees including Transport, Tourism & Culture, Railways, and Chemicals & Fertilizers.',
            icon: Building2
        },
        {
            year: '2021',
            title: 'Unanimous Speaker',
            content: 'After joining the BJP in 2020, he won the Panery seat by a record margin and was elected unanimously as the 17th Speaker of the Assam Legislative Assembly.',
            icon: Shield
        }
    ];

    const positions = [
        { period: '1991–1996', role: 'School Teacher' },
        { period: '2001–2006', role: 'MLA, Assam Legislative Assembly' },
        { period: '2006–2008', role: 'Chairman, ARTFED' },
        { period: '2008–2020', role: 'Member of Parliament, Rajya Sabha' },
        { period: 'Feb–May 2021', role: 'Rajya Sabha MP (BJP)' },
        { period: '2021–Present', role: 'MLA, Panery' },
        { period: '2021–Present', role: 'Speaker, Assam Legislative Assembly' }
    ];

    const initiatives = [
        {
            title: 'Healthcare Accessibility',
            desc: 'Spearheaded ambulance services in Baksa district to bridge the emergency care gap in remote border areas.',
            icon: Heart
        },
        {
            title: 'Urban Infrastructure',
            desc: 'Advocated for scientific drainage systems to address the long-standing Guwahati flooding issues.',
            icon: Building2
        },
        {
            title: 'Decentralized Governance',
            desc: 'Overseeing the construction of a new Assembly complex in Dibrugarh to bring administration closer to the Upper Assam region.',
            icon: Landmark
        },
        {
            title: 'Cultural Heritage',
            desc: 'President of the International Bodo Race Festival, promoting Bodo identity and tribal youth development globally.',
            icon: Globe
        }
    ];

    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-primary-dark py-16 md:py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-orange opacity-5 blur-3xl -mr-48 -mt-48 transition-all duration-1000"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter text-white">
                        BIOGRAPHY
                    </h1>
                    <div className="w-16 md:w-24 h-2 bg-primary-orange mx-auto mb-6"></div>
                    <p className="text-sm md:text-xl text-primary-orange font-black uppercase tracking-[0.3em]">A Legacy of Resilience</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-1/3">
                            <div className="lg:sticky lg:top-32 space-y-12">
                                <div ref={revealRef} className="relative animate-on-scroll animate-fade-left">
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-orange/5 rounded-full blur-3xl"></div>
                                    <img
                                        src="https://newslivetv.com/wp-content/uploads/2021/02/Assam-Biswajit-Daimary-to-be-BJP-candidate-for-Rajya-Sabha-by-polls.jpg"
                                        alt="Biswajit Daimary"
                                        className="w-full rounded-[2.5rem] md:rounded-[3rem] shadow-3xl border-[10px] md:border-[20px] border-orange-50 relative z-10"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 shadow-sm">
                                    <h3 className="text-xl md:text-2xl font-black text-primary-dark mb-8 md:mb-10 uppercase tracking-tighter border-b-4 border-primary-orange inline-block">Key Milestones</h3>
                                    <div className="space-y-6 md:space-y-8">
                                        {positions.map((item, idx) => (
                                            <div key={idx} className="flex gap-4 md:gap-6 items-start">
                                                <div className="text-primary-orange font-black text-[10px] md:text-xs uppercase tracking-widest pt-1 min-w-[80px] md:min-w-[100px]">{item.period}</div>
                                                <div className="text-primary-dark font-black text-xs md:text-sm uppercase leading-tight tracking-tight">{item.role}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Timeline and Details */}
                        <div className="w-full lg:w-2/3">
                            <div className="prose prose-lg md:prose-2xl prose-orange max-w-none mb-12 text-primary-dark">
                                <h2 className="text-3xl md:text-5xl font-black text-primary-dark mb-8 md:mb-12 tracking-tighter uppercase">From Mahout's Son to Speaker</h2>
                                <p className="text-gray-500 leading-relaxed font-medium mb-12 text-lg md:text-2xl">
                                    The life story of Biswajit Daimary is one of exceptional perseverance and vision. From his roots in Suagpur to the halls of the Parliament, his journey reflects the aspirations of millions in Assam.
                                </p>
                            </div>

                            <div ref={timelineRef} className="space-y-6 mb-16 md:mb-24">
                                {timelineData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`group flex flex-col sm:flex-row gap-6 md:gap-10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:bg-orange-50 transition-all border border-transparent hover:border-primary-orange/10 animate-on-scroll animate-delay-${Math.min(idx + 1, 4)}`}
                                    >
                                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-primary-orange/10 text-primary-orange rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:bg-primary-orange group-hover:text-white transition-all transform group-hover:rotate-6">
                                            <item.icon className="w-7 h-7 md:w-8 md:h-8" />
                                        </div>
                                        <div>
                                            <div className="text-primary-orange font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">{item.year}</div>
                                            <h4 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Public Initiatives */}
                            <div ref={initiativesRef} className="bg-primary-dark rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-white overflow-hidden relative animate-on-scroll">
                                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary-orange opacity-10 blur-3xl -mr-32 md:-mr-48 -mt-32 md:-mt-48 transition-all duration-1000"></div>
                                <h2 className="text-3xl md:text-5xl font-black mb-12 md:mb-16 uppercase tracking-tighter relative z-10 text-white">Public Initiatives</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                                    {initiatives.map((item, idx) => (
                                        <div key={idx} className="space-y-3 md:space-y-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-orange/20 text-primary-orange rounded-xl md:rounded-2xl flex items-center justify-center">
                                                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                            <h4 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">{item.title}</h4>
                                            <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Biography;
