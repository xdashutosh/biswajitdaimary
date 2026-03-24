import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import New Project Assets
import road_inauguration from '../assets/projects/road_inauguration.png';
import water_supply from '../assets/projects/water_supply.png';
import bridge_construction from '../assets/projects/bridge_construction.png';
import community_building from '../assets/projects/community_building.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const RunningProjects = () => {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('running');
    const [isEndReached, setIsEndReached] = useState(false);

    const projectData = {
        done: [
            {
                id: "proj-1",
                title: "Malmura → Jagannathjhar Road",
                subtitle: "Roads & Connectivity",
                description: "A large-scale transformation of road infrastructure connecting villages, tea estates, and markets across the constituency.",
                image: "https://etimg.etb2bimg.com/photo/116820446.cms",
                path: "/projects/proj-1"
            },
            {
                id: "proj-191",
                title: "Nonai Multi-Village PWSS",
                subtitle: "Water Supply Expansion",
                description: "One of the largest drinking water initiatives, ensuring piped water supply to households across villages and tea gardens.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJq3gLbvjpk9HAN43rnatJHLHSFSSpr2N9Q&s",
                path: "/projects/proj-191"
            },
            {
                id: "proj-125",
                title: "Dimakuchi Mini Stadium",
                subtitle: "Sports & Youth",
                description: "Development of sports infrastructure to promote youth engagement, discipline, and talent development.",
                image: "https://content3.jdmagicbox.com/comp/darrang/x7/9999p3713.3713.171230191708.c6x7/catalogue/dimakuchi-mini-stadium-dimakuchi-darrang-stadiums-jgpj75lxrz.jpg",
                path: "/projects/proj-125"
            },
            {
                id: "proj-132",
                title: "Healthcare Strengthening",
                subtitle: "Hospital Upgrades",
                description: "Upgradation and expansion of healthcare services to ensure medical facilities reach even remote areas.",
                image: "https://medicaldrafts.com/storage/dd50fcd0-6450-4db4-bee3-d39d053eaa70.png",
                path: "/projects/proj-132"
            },
            {
                id: "proj-30",
                title: "Bhergaon Higher Secondary",
                subtitle: "Education Revolution",
                description: "Major investment in modern education infrastructure including new school buildings and digital learning facilities.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStmVA3EUgxNp6iaEVF0sKH82o3Z85pDNfsA&s",
                path: "/projects/proj-30"
            },
            {
                id: "proj-53",
                title: "RCC Bridges Network",
                subtitle: "Connectivity",
                description: "Strategic construction of bridges and culverts to ensure uninterrupted connectivity, especially in flood-prone areas.",
                image: "https://5.imimg.com/data5/SELLER/Default/2024/10/458488152/QL/IM/KI/21348691/rcc-bridge-girder-services.jpg",
                path: "/projects/proj-53"
            }
        ],
        running: [
            {
                id: "proj-51",
                title: "Asom Mala 3.0 Mega Road",
                subtitle: "Upcoming Corridor",
                description: "A high-value mega road project aimed at building high-quality, long-lasting road networks across the region.",
                image: "https://www.constructionworld.in/assets/uploads/15683b84f32a26a520f9ddc1dc86986d73233.webp",
                path: "/projects/proj-51"
            },
            {
                id: "proj-189",
                title: "Bhergaon Govt. College",
                subtitle: "Education Expansion",
                description: "Expansion of higher education facilities to provide better opportunities for youth within the constituency.",
                image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/Baramulla_government_medical_c.jpeg?size=690:388",
                path: "/projects/proj-189"
            },
            {
                id: "proj-188",
                title: "Khagrabari Indoor Hall",
                subtitle: "Sports Expansion",
                description: "Expansion of sports infrastructure to support indoor games and events for comprehensive youth development.",
                image: "https://www.designboom.com/twitterimages/uploads/2025/10/vertical-timber-construction-twin-stacked-sports-halls-switzerland-kit-designboom-1200-1.jpg",
                path: "/projects/proj-188"
            },
            {
                id: "proj-78",
                title: "Flood Recovery Projects",
                subtitle: "NDRF Resilience",
                description: "Large-scale restoration of infrastructure damaged by floods, ensuring resilience and long-term protection.",
                image: water_supply,
                path: "/projects/proj-78"
            }
        ],
        news: [
            {
                id: 1,
                title: "NDA candidate Biswajit Daimary files nomination in Assam's Tamulpur amid massive show of support",
                subtitle: "POLITICS",
                description: "March 20, 2026",
                image: "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/656202228_1407480807732114_4392878851602369300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=w9yiy1KSq58Q7kNvwGowr2q&_nc_oc=Adok22_GMFaQXGltpNodFsiA4KXEjSSjAiJHN1zAzs6vr0E5NiafvctVr22Mp_bkhBSztow5DWSE3YyXm--yNmYb&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=UVjsPG0qcyAYgXQgXR_T2g&_nc_ss=7a30f&oh=00_AfxSTp6FJG3jSHHmt8cgKISybzCokbxbxNpnDpZIo-SDIQ&oe=69C84838",
                url: "https://www.indiatodayne.in/assam/video/nda-candidate-biswajit-daimary-files-nomination-in-assams-tamulpur-amid-massive-show-of-support-1362614-2026-03-20"
            },
            {
                id: 2,
                title: "PM Modi launches railway, road projects for Kokrajhar, flags off new trains for Northeast",
                subtitle: "DEVELOPMENT",
                description: "March 13, 2026",
                image: "https://scontent-bom5-2.xx.fbcdn.net/v/t39.30808-6/645077547_1393091492504379_5022286741624813042_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=b7G2knsAh4UQ7kNvwFDhRpg&_nc_oc=Adpexwf9u3oyqY8C8GUF6DwToXETc8-bKKgnIYYAHUESsDK_GskTIl2gOa3lG98cF32a-SRNKyAQdZxXRw4xN86Y&_nc_zt=23&_nc_ht=scontent-bom5-2.xx&_nc_gid=fvkAFR3hyDSPVF1jpxxIpg&_nc_ss=7a30f&oh=00_AfwDrJeFio6V2_83Zi-_-u8kQ7K2BOAEQCXZupnTfee25A&oe=69C855EA",
                url: "https://www.indiatodayne.in/assam/story/pm-modi-launches-railway-road-projects-for-kokrajhar-flags-off-new-trains-for-northeast-1359143-2026-03-13"
            },
            {
                id: 3,
                title: "Assam Assembly seeks status report from NHAI, NHIDCL regarding delay in highway projects",
                subtitle: "GOVERNANCE",
                description: "March 11, 2026",
                image: "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/577664618_1306920681121461_5959429653180006936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=x_j2ZD49iXQQ7kNvwEBVIa0&_nc_oc=AdqICZJ0-quTf8Kg9P-aatcv67ktSRuUqIz8zeb0Lgrh3Lpl4plSNyEaQ2wQ-s9ljv4rI0Pa8iB5k_zGaeYqDFRG&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=OAIpMhmZNJu0Pyd3SwH0Vw&_nc_ss=7a30f&oh=00_AfzvaZZNOqafnHQc_jhfJkBCe-opGoZLGwOlg8CAkSqYOg&oe=69C84509",
                url: "https://nenow.in/north-east-news/assam-assembly-seeks-report-from-nhai-nhidcl-delay-highway-projects.html"
            }
        ]
    };

    const currentProjects = projectData[activeCategory];

    return (
        <section className="py-20 md:py-30 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-baseline justify-between mb-8 gap-6">
                    <div className="max-w-xl">
                        <p className="text-primary-orange font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
                             The vision translates into reality
                         </p>
                        <div className="flex items-center justify-between gap-4">
                            <h2 className="text-2xl md:text-3xl font-normal text-primary-dark tracking-tight mb-1 font-serif">
                                His <span className="italic">Presence</span>
                            </h2>
                            
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 flex items-center gap-6 border-l-2 border-primary-orange/30 pl-4">
                        <p className="text-gray-600 font-medium leading-relaxed text-sm italic opacity-90">
                            "Tracking every brick laid and every milestone reached in our journey towards a developed Assam."
                        </p>
                    </div>
                </div>

                {/* Main Content: Sidebar + Swiper */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    
                    {/* Left Sidebar: Vertical Category Buttons */}
                    <div className="lg:w-[220px] xl:w-[260px] flex-shrink-0 self-stretch bg-gradient-to-b from-[#1a2744] to-[#243058] rounded-sm p-4 shadow-xl border-l-4 border-primary-orange flex flex-col gap-3 relative">
                        <div className="space-y-3 flex-grow">
                            <button 
                                onClick={() => setActiveCategory('running')}
                                className={`w-full text-left px-5 py-3.5 rounded-sm font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${activeCategory === 'running' ? 'bg-primary-orange text-white shadow-lg shadow-primary-orange/30 scale-[1.02]' : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white border border-white/10'}`}
                            >
                                Running Projects
                            </button>
                            <button 
                                onClick={() => setActiveCategory('done')}
                                className={`w-full text-left px-5 py-3.5 rounded-sm font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${activeCategory === 'done' ? 'bg-primary-orange text-white shadow-lg shadow-primary-orange/30 scale-[1.02]' : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white border border-white/10'}`}
                            >
                                Projects Done
                            </button>
                            <button 
                                onClick={() => setActiveCategory('news')}
                                className={`w-full text-left px-5 py-3.5 rounded-sm font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${activeCategory === 'news' ? 'bg-primary-orange text-white shadow-lg shadow-primary-orange/30 scale-[1.02]' : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white border border-white/10'}`}
                            >
                                News & Media
                            </button>
                        </div>
                        
                        {/* New Sidebar See All Button */}
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <button 
                                onClick={() => navigate(activeCategory === 'news' ? '/news' : '/projects')}
                                className={`w-full flex items-center justify-between group/sidebtn transition-all duration-500 p-2 rounded-sm ${
                                    isEndReached 
                                    ? 'text-primary-orange ring-2 ring-primary-orange/50 shadow-[0_0_20px_rgba(255,103,0,0.4)] bg-primary-orange/5 translate-x-1' 
                                    : 'text-white/40 hover:text-primary-orange'
                                }`}
                            >
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isEndReached ? 'animate-pulse' : ''}`}>
                                    Explore More
                                </span>
                                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                                    isEndReached 
                                    ? 'border-primary-orange bg-primary-orange text-white' 
                                    : 'border-white/10 group-hover/sidebtn:border-primary-orange group-hover/sidebtn:bg-primary-orange/10'
                                }`}>
                                    <ChevronRight className={`w-4 h-4 ${isEndReached ? 'translate-x-0.5' : ''}`} />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Swiper Section */}
                    <div className="flex-1 min-w-0 relative group">
                        {/* 
                          Outer wrapper clips horizontally (so sliding cards don't bleed into buttons),
                          but allows vertical overflow so hover lift (-translate-y) is never cut.
                          px-14 reserves space for the nav buttons on both sides.
                        */}
                        <div style={{ overflowX: 'clip', overflowY: 'visible', paddingLeft: '56px', paddingRight: '56px' }}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                                1280: { slidesPerView: 3 }
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setIsEndReached(swiper.isEnd)}
                            onReachEnd={() => setIsEndReached(true)}
                            onActiveIndexChange={(swiper) => {
                                if (!swiper.isEnd) setIsEndReached(false);
                            }}
                            className="pb-12 pt-3"
                            style={{ overflow: 'visible' }}
                            key={activeCategory}
                        >
                            {currentProjects.map((project, index) => (
                                <SwiperSlide
                                    key={`${project.id}-${index}`}
                                    // overflow-visible on each slide prevents internal clipping
                                    style={{ overflow: 'visible', height: 'auto' }}
                                    className="flex flex-col bg-white rounded-lg group/card border-2 border-primary-dark/10 hover:border-primary-orange/40 p-4 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div 
                                        onClick={() => {
                                            if (project.url) {
                                                window.open(project.url, '_blank', 'noopener,noreferrer');
                                            } else {
                                                navigate(project.path || `/projects/${project.id}`);
                                            }
                                        }}
                                        className="relative h-48 md:h-56 overflow-hidden rounded-lg cursor-pointer mb-4 group/image"
                                    >
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-90 group-hover:opacity-100"
                                        />
                                        
                                        {/* Overlay Effect on Image */}
                                        <div className="absolute inset-0 bg-primary-dark/40 group-hover/image:bg-primary-dark/70 transition-all duration-500 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover/image:opacity-100">
                                            <div className="w-px h-4 bg-white/60 mb-3 transform scale-y-0 group-hover/image:scale-y-100 transition-transform duration-500 origin-top delay-100"></div>
                                            <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary-dark transition-colors">
                                                {activeCategory === 'news' ? 'Read More' : 'View Project'}
                                            </span>
                                            <div className="w-px h-4 bg-white/60 mt-3 transform scale-y-0 group-hover/image:scale-y-100 transition-transform duration-500 origin-bottom delay-300"></div>
                                        </div>

                                        <div className="absolute bottom-3 left-3 opacity-100 transition-opacity duration-300 group-hover/image:opacity-0">
                                             <span className="bg-primary-orange text-white px-2 py-0.5 rounded-[1px] text-[8px] font-bold uppercase tracking-[0.15em] shadow-lg">
                                                 {project.subtitle}
                                             </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col flex-grow px-1 pb-1">
                                         <h3
                                             className="text-lg font-normal text-primary-dark mb-1.5 group-hover/card:text-primary-orange transition-colors cursor-pointer font-serif leading-tight"
                                             onClick={() => {
                                                if (project.url) {
                                                    window.open(project.url, '_blank', 'noopener,noreferrer');
                                                } else {
                                                    navigate(project.path || `/projects/${project.id}`);
                                                }
                                             }}
                                         >
                                             {project.title}
                                         </h3>
                                        
                                         <p className="text-gray-600 text-[11px] md:text-xs mb-4 line-clamp-2 leading-relaxed flex-grow font-medium opacity-90">
                                             {project.description}
                                         </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>

                        {/* Navigation Buttons — outside the clip wrapper, always visible */}
                        <button 
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary-dark text-white flex items-center justify-center hover:bg-black transition-all hover:scale-110 shadow-2xl group/nav"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover/nav:-translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={() => swiperRef.current?.slideNext()}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary-orange text-white flex items-center justify-center hover:bg-accent-orange transition-all hover:scale-110 shadow-2xl group/nav"
                        >
                            <ChevronRight className="w-6 h-6 group-hover/nav:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-16 text-center lg:hidden">
                    <button 
                        onClick={() => navigate(activeCategory === 'news' ? '/news' : '/projects')}
                        className="bg-primary-dark text-white rounded-sm px-10 py-4 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-primary-orange transition-all shadow-xl hover:scale-[1.05]"
                    >
                        Explore All {activeCategory === 'news' ? 'News' : 'Projects'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RunningProjects;