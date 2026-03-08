import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Droplets, Building2, Heart, Construction, GraduationCap, Factory, ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
    const containerRef = useScrollRevealChildren();
    const projectCategories = [
        {
            title: 'Water & Rural Security',
            icon: Droplets,
            image: '/src/assets/rural_water_scheme.png',
            projects: [
                { name: 'Nanoi Multi-Village Water Scheme', cost: '₹175 Crore', detail: 'Gravity-based supply from Samrang River (Bhutan) serving 1.5 lakh people in Panery.' },
                { name: 'Dimakuchi Water Supply Scheme', cost: '₹1000 Crore (Proposed)', detail: 'Comprehensive infrastructure for Bhutan border areas to ensure rural water security.' }
            ]
        },
        {
            title: 'Governance Infrastructure',
            icon: Building2,
            image: 'https://pbs.twimg.com/media/GUyIwXNWAAI30zv.jpg',
            projects: [
                { name: 'Assam Legislative Assembly Complex', location: 'Khanikar, Dibrugarh', detail: 'MLAs quarters for 126 legislators and 800-seat auditorium to decentralize governance.' }
            ]
        },
        {
            title: 'Roads & Connectivity',
            icon: Construction,
            image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200',
            projects: [
                { name: 'Pagladiya River Bridge', location: 'Tamulpur-Baksa', detail: 'Connects Barama-Dhamdhama-Tamulpur road, benefiting 25,000+ residents.' },
                { name: 'BTR Road Development Package', cost: '₹500 Crore', detail: 'Major regional connectivity program announced for BTR districts.' }
            ]
        },
        {
            title: 'Sports & Healthcare',
            icon: Heart,
            image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1200',
            projects: [
                { name: 'Mushalpur District Sports Complex', cost: '₹43 Crore', detail: 'Features synthetic tracks, Olympic-size pool, and indoor stadiums.' },
                { name: 'Border Area Ambulance Service', location: 'Dhanshripur', detail: 'Critical emergency care access for remote Bhutan border villages.' }
            ]
        },
        {
            title: 'Skill & Education',
            icon: GraduationCap,
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
            projects: [
                { name: 'BTR Technical Institutes', detail: 'New polytechnics at Gobardhana & Parbatjhora to empower youth.' },
                { name: 'Healthcare Education', detail: 'Paramedical and nursing institutes established at Tamulpur & Kochpara.' }
            ]
        },
        {
            title: 'Culture & Economy',
            icon: Factory,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesFUUp9BdTVJOtkEyIem_s4fESLZWmcC_iw&s',
            projects: [
                { name: 'Tribal Food Park', location: 'Chirang', detail: 'Promoting local produce and ethnic food processing industries.' },
                { name: 'Birsa Munda Cultural Complex', detail: 'Preserving Adivasi heritage and promoting regional cultural diversity.' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-primary-dark py-20 md:py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000"
                        alt="Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-8xl font-black mb-6 tracking-tighter uppercase">IMPACT & DEVELOPMENT</h1>
                    <div className="w-16 md:w-24 h-2 bg-primary-orange mx-auto mb-6"></div>
                    <p className="text-base md:text-xl text-primary-orange font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Transforming BTR Through Visionary Projects</p>
                </div>
            </section>

            <section className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {projectCategories.map((cat, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 group transition-all animate-on-scroll animate-scale animate-delay-${Math.min(idx + 1, 4)}`}
                            >
                                <div className="h-48 md:h-64 relative overflow-hidden">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute bottom-4 md:bottom-6 left-6 md:left-8 flex items-center gap-3 md:gap-4">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-orange text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                                            <cat.icon className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter">{cat.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 space-y-6">
                                    {cat.projects.map((proj, pIdx) => (
                                        <div key={pIdx} className="group/item">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-base md:text-lg font-black text-primary-dark leading-tight group-hover/item:text-primary-orange transition-colors">{proj.name}</h4>
                                                {proj.cost && <span className="text-primary-orange font-black text-[9px] md:text-[10px] bg-orange-50 px-2 md:px-3 py-1 rounded-full whitespace-nowrap ml-2">{proj.cost}</span>}
                                            </div>
                                            <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed">{proj.detail}</p>
                                        </div>
                                    ))}
                                    <div className="pt-4 border-t border-gray-100">
                                        <button className="flex items-center gap-2 text-primary-orange font-black text-[10px] md:text-xs uppercase tracking-widest group-hover:gap-4 transition-all pr-4">
                                            View Progress <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
