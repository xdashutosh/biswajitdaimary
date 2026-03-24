import React from 'react';
import SEO from '../components/SEO';
import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal';
import { BookOpen, GraduationCap, Users, Award, Landmark, Building2, Shield, Heart, Globe, Calendar } from 'lucide-react';
import portraitImg from '../assets/daimary_portrait.png';
import bodoCultureImg from '../assets/daimary_bodo_culture.png';
import teaGardenImg from '../assets/daimary_tea_garden.png';
import meetingImg from '../assets/daimary_meeting.png';
import waterSchemeImg from '../assets/rural_water_scheme.png';
import assemblyImg from '../assets/daimary_assembly.png';
import officialEventImg from '../assets/official_event_daimary.png';
import biographyHeaderImg from '../assets/bigraphy_img.png';

const Biography = () => {
    const revealRef = useScrollReveal();
    const timelineRef = useScrollRevealChildren();
    const initiativesRef = useScrollRevealChildren();

    const timelineData = [
        {
            year: '1971',
            title: 'Birth and Roots',
            content: 'Born on February 4, 1971, in Suagpur village, located in the Baksa district of Assam. Coming from a humble background, he was raised by his father, a dedicated mahout who managed elephants, which instilled in him values of hard work and connection to nature from an early age.',
            icon: Heart,
            image: portraitImg
        },
        {
            year: '1988 - 2001',
            title: 'Youth & Student Activism',
            content: 'During the transformative period from 1988 to 2001, he emerged as a powerful voice in the student movement. He served in several key leadership positions within the All Bodo Students\' Union (ABSU), including General Secretary and President of the Sanja Defeli Anchalik Committee. His commitment to the cause of the Bodo people saw him rise to the Presidency of the Kamrup District Committee and eventually serve as the Assistant General Secretary of the ABSU Central Committee.',
            icon: Users,
            image: bodoCultureImg
        },
        {
            year: '1991 - 1996',
            title: 'Early Career as Educator',
            content: 'From 1991 to 1996, before his full-time immersion into politics, he dedicated himself to the field of education. As a teacher at U.N. Brahma Girls M.E. School, he not only imparted knowledge but also worked tirelessly to foster social awareness and empower the youth within his community, laying the groundwork for his future in public service.',
            icon: GraduationCap,
            image: teaGardenImg
        },
        {
            year: '2001',
            title: 'First Legislative Victory',
            content: 'In 2001, he made his mark in electoral politics by contesting the Assam Assembly election from the Tamulpur constituency. Running as an Independent candidate, he secured a historic victory, marking his debut as a Member of the Legislative Assembly (MLA) and beginning his long-standing commitment to representing the people of Assam.',
            icon: Landmark,
            image: meetingImg
        },
        {
            year: '2006 - 2008',
            title: 'Empowering Artisans',
            content: 'Between 2006 and 2008, he took on the role of Chairman of ARTFED (Assam Apex Weavers and Artisans Cooperative Federation). In this capacity, he was instrumental in promoting the rich handloom heritage of the state and creating sustainable rural employment opportunities for local weavers and artisans, strengthening the cooperative movement in Assam.',
            icon: Award,
            image: waterSchemeImg
        },
        {
            year: '2008 - 2020',
            title: 'Voice in Rajya Sabha',
            content: 'Spanning over a decade from 2008 to 2020, he served two terms as a Member of Parliament in the Rajya Sabha. During his tenure, he was an active participant in numerous critical parliamentary committees, including those overseeing Transport, Tourism & Culture, Railways, and Chemicals & Fertilizers, where he advocated for the interests of the Northeast region on a national platform.',
            icon: Building2,
            image: assemblyImg
        },
        {
            year: '2021',
            title: 'Unanimous Speaker',
            content: 'In 2021, following a record-breaking victory in the Panery seat after joining the BJP in 2020, he achieved a new milestone in his career. He was elected unanimously as the 17th Speaker of the Assam Legislative Assembly. In this prestigious role, he continues to uphold the democratic values of the house while guiding legislative proceedings with fairness and vision.',
            icon: Shield,
            image: officialEventImg
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
            <SEO
                title="Biography"
                description="Learn about the inspiring journey of Biswajit Daimary, from a student leader to the Speaker of the Assam Legislative Assembly."
                keywords="Biswajit Daimary Biography, Student Leader, Assam Assembly Speaker, Life of Biswajit Daimary"
                url="/about"
                type="Person"
            />
            {/* Header Section */}
            <section className="relative h-24 md:h-28 lg:h-32 flex items-center justify-center overflow-hidden">
                {/* Background Image with Opacity */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${biographyHeaderImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 45%',
                        opacity: 0.85
                    }}
                ></div>
                
                {/* Overlay for better text contrast - Lightened */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 to-primary-dark/60 z-10"></div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal font-serif mb-2 tracking-tight text-white drop-shadow-xl">
                        Biography
                    </h1>
                    <div className="w-12 md:w-16 h-1 bg-primary-orange mx-auto mb-2 rounded-full shadow-lg"></div>
                    <p className="text-[10px] md:text-xs text-white font-bold tracking-[0.3em] uppercase drop-shadow-md">A Legacy of Resilience</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 md:py-8 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Intro */}
                    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16" ref={revealRef}>
                        <h2 className="text-2xl md:text-3xl font-normal font-serif text-primary-dark mb-3 leading-[1.15]">
                            From Mahout's Son to <span className="italic">Speaker</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-[13px] font-medium opacity-90">
                            The life story of Biswajit Daimary is one of exceptional perseverance and vision. From his roots in Suagpur to the halls of the Parliament, his journey reflects the aspirations of millions in Assam.
                        </p>
                    </div>

                    {/* Timeline Redesign */}
                    <div ref={timelineRef} className="relative space-y-8 md:space-y-0">
                        {/* Vertical line */}
                        <div className="absolute left-[18px] md:left-[100px] top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block"></div>
                        
                        {timelineData.map((item, idx) => (
                            <div key={idx} className="relative flex flex-col sm:flex-row items-start group animate-on-scroll">
                                {/* Date Column */}
                                <div className="hidden sm:flex sm:w-24 md:w-24 lg:w-24 flex-shrink-0 pt-1 text-right pr-4 md:pr-8 pt-4">
                                    <span className="text-xs md:text-sm font-bold text-primary-dark/80 whitespace-nowrap">{item.year}</span>
                                </div>

                                {/* Marker */}
                                <div className="absolute left-[11px] sm:left-[91px] top-4 md:top-5 z-10 hidden sm:block">
                                    <div className="w-3 h-3 rounded-full border-2 border-primary-orange bg-white group-hover:bg-primary-orange transition-colors duration-300 ring-4 ring-white"></div>
                                </div>

                                {/* Content Grid */}
                                <div className="flex-grow sm:pl-8 md:pl-12 pb-6 sm:pb-10 flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start text-center md:text-left">
                                    {/* Mobile Date */}
                                    <div className="sm:hidden flex items-center gap-2 mb-1">
                                        <Calendar className="w-3 h-3 text-primary-orange" />
                                        <span className="text-xs font-bold text-primary-dark">{item.year}</span>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 space-y-1">
                                        <h3 className="text-lg md:text-xl font-normal font-serif text-primary-dark leading-tight group-hover:text-primary-orange transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-[11px] md:text-xs lg:text-[13px] leading-relaxed font-medium opacity-90">
                                            {item.content}
                                        </p>
                                    </div>

                                    {/* Image Section */}
                                    <div className="w-full md:w-32 lg:w-40 flex-shrink-0 overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-24 md:h-28 lg:h-32 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Section: Professional Journey Highlights */}
                    <div className="mt-8">
                        <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange opacity-[0.03] blur-3xl -mr-32 -mt-32"></div>
                            
                            <h3 className="text-xl font-normal font-serif text-primary-dark mb-8 flex items-center gap-3">
                                <Award className="w-6 h-6 text-primary-orange" />
                                Professional Journey & Key Roles
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {positions.map((item, idx) => {
                                    // Assigning icons based on keywords for a more professional look
                                    let RoleIcon = Award;
                                    if (item.role.toLowerCase().includes('teacher')) RoleIcon = GraduationCap;
                                    if (item.role.toLowerCase().includes('speaker')) RoleIcon = Landmark;
                                    if (item.role.toLowerCase().includes('chairman')) RoleIcon = Building2;
                                    if (item.role.toLowerCase().includes('parliament') || item.role.toLowerCase().includes('sabha')) RoleIcon = Shield;

                                    return (
                                        <div key={idx} className="flex gap-4 items-start group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100 group-hover:bg-primary-orange transition-colors duration-300">
                                                <RoleIcon className="w-5 h-5 text-primary-orange group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="text-primary-orange font-bold text-[10px] uppercase tracking-[0.15em] mb-1">{item.period}</div>
                                                <div className="text-primary-dark font-semibold text-xs md:text-[13px] leading-tight break-words">{item.role}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Biography;
