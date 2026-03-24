import React from 'react';
import { Calendar, Newspaper, Globe, MessageSquare, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import bjp_flags from '../assets/bjp_flags.png';

const NewsPage = () => {
    const containerRef = useScrollRevealChildren();
    const news = [
        {
            id: 1,
            date: 'March 20, 2026',
            title: "NDA candidate Biswajit Daimary files nomination in Assam's Tamulpur amid massive show of support",
            snippet: 'NDA candidate Biswajit Daimary on March 20, filed his nomination at the Tamulpur District Autonomous Council office for Assam Assembly polls, amid a large gathering of supporters.',
            image: 'https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/656202228_1407480807732114_4392878851602369300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=w9yiy1KSq58Q7kNvwGowr2q&_nc_oc=Adok22_GMFaQXGltpNodFsiA4KXEjSSjAiJHN1zAzs6vr0E5NiafvctVr22Mp_bkhBSztow5DWSE3YyXm--yNmYb&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=UVjsPG0qcyAYgXQgXR_T2g&_nc_ss=7a30f&oh=00_AfxSTp6FJG3jSHHmt8cgKISybzCokbxbxNpnDpZIo-SDIQ&oe=69C84838',
            category: 'POLITICS',
            icon: Newspaper,
            url: 'https://www.indiatodayne.in/assam/video/nda-candidate-biswajit-daimary-files-nomination-in-assams-tamulpur-amid-massive-show-of-support-1362614-2026-03-20'
        },
        {
            id: 2,
            date: 'March 13, 2026',
            title: 'PM Modi launches railway, road projects for Kokrajhar, flags off new trains for Northeast',
            snippet: 'Prime Minister Narendra Modi virtually launched several transformative infrastructure projects for Kokrajhar and the Northeast, focusing on enhanced connectivity and economic growth.',
            image: 'https://scontent-bom5-2.xx.fbcdn.net/v/t39.30808-6/645077547_1393091492504379_5022286741624813042_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=b7G2knsAh4UQ7kNvwFDhRpg&_nc_oc=Adpexwf9u3oyqY8C8GUF6DwToXETc8-bKKgnIYYAHUESsDK_GskTIl2gOa3lG98cF32a-SRNKyAQdZxXRw4xN86Y&_nc_zt=23&_nc_ht=scontent-bom5-2.xx&_nc_gid=fvkAFR3hyDSPVF1jpxxIpg&_nc_ss=7a30f&oh=00_AfwDrJeFio6V2_83Zi-_-u8kQ7K2BOAEQCXZupnTfee25A&oe=69C855EA',
            category: 'DEVELOPMENT',
            icon: TrendingUp,
            url: 'https://www.indiatodayne.in/assam/story/pm-modi-launches-railway-road-projects-for-kokrajhar-flags-off-new-trains-for-northeast-1359143-2026-03-13'
        },
        {
            id: 3,
            date: 'March 11, 2026',
            title: 'Assam Assembly seeks status report from NHAI, NHIDCL regarding delay in highway projects',
            snippet: 'Speaker Biswajit Daimary has asked the officials of NHAI and NHIDCL to submit a comprehensive status report on the progress of various highway projects across the state, addressing concerns over delays.',
            image: 'https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/577664618_1306920681121461_5959429653180006936_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=x_j2ZD49iXQQ7kNvwEBVIa0&_nc_oc=AdqICZJ0-quTf8Kg9P-aatcv67ktSRuUqIz8zeb0Lgrh3Lpl4plSNyEaQ2wQ-s9ljv4rI0Pa8iB5k_zGaeYqDFRG&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=OAIpMhmZNJu0Pyd3SwH0Vw&_nc_ss=7a30f&oh=00_AfzvaZZNOqafnHQc_jhfJkBCe-opGoZLGwOlg8CAkSqYOg&oe=69C84509',
            category: 'GOVERNANCE',
            icon: Globe,
            url: 'https://nenow.in/north-east-news/assam-assembly-seeks-report-from-nhai-nhidcl-delay-highway-projects.html'
        },
        {
            id: 4,
            date: 'March 05, 2024',
            title: 'Digital Assembly: Speaker Daimary inaugurates the Paperless Legislative System.',
            snippet: 'A revolutionary step towards transparent and efficient governance in the Assam Legislative Assembly.',
            image: 'https://images.hindustantimes.com/img/2021/02/15/550x309/PTI23-11-2020_000169A_1613377454396_1613377460332.jpg',
            category: 'GOVERNANCE',
            icon: Globe,
            url: '#'
        },
        {
            id: 5,
            date: 'February 28, 2024',
            title: 'Bodo Accord Progress: High-level meeting held in Kokrajhar.',
            snippet: 'Key milestones achieved in land rights and administrative autonomy for the BTR region.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesFUUp9BdTVJOtkEyIem_s4fESLZWmcC_iw&s',
            category: 'PEACE',
            icon: Newspaper,
            url: '#'
        },
        {
            id: 6,
            date: 'February 15, 2024',
            title: 'Empowering Women Weavers: New financial grant announced for Baksa artisans.',
            snippet: 'Over 5,000 weavers to benefit from the direct benefit transfer scheme inaugurated today.',
            image: 'https://pbs.twimg.com/media/GUyIwXNWAAI30zv.jpg',
            category: 'DEVELOPMENT',
            icon: TrendingUp,
            url: '#'
        },
        {
            id: 7,
            date: 'February 10, 2024',
            title: 'Speaker Daimary addresses Global Investors Summit on Assam\'s potential.',
            snippet: 'Focusing on organic farming and eco-tourism opportunities in the foothills of Bhutan.',
            image: 'https://cf-img-a-in.tosshub.com/lingo/itne/images/story/202206/untitled-1-201.jpg?size=948:533',
            category: 'ECONOMY',
            icon: MessageSquare,
            url: '#'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="News & Updates"
                description="Stay updated with the latest news, press releases, and official announcements from the office of Speaker Biswajit Daimary."
                keywords="Biswajit Daimary News, Assam Assembly Updates, BTR News, Official Announcements"
                url="/news"
            />
            
            {/* Header Section - Matches Projects Page */}
            <section className="bg-primary-dark py-2 md:py-4 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 z-0">
                    <img
                        src={bjp_flags}
                        alt="BJP Flags Background"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-1 tracking-tighter text-white drop-shadow-2xl uppercase">
                        News & Updates
                    </h1>
                    <div className="w-16 md:w-20 h-0.5 bg-primary-orange mx-auto mb-2 rounded-full shadow-lg"></div>
                    <p className="text-[10px] md:text-xs text-white/90 font-black tracking-[0.4em] uppercase drop-shadow-md">Official Communications & Press Releases</p>
                </div>
            </section>


            <section className="pt-2 md:pt-4 pb-12 md:pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {news.map((item, idx) => (
                            <a 
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block bg-white rounded-sm overflow-hidden shadow-xl border border-gray-100 group transition-all hover:border-primary-orange animate-on-scroll animate-scale animate-delay-${Math.min(idx + 1, 4)}`}
                            >
                                <article className="h-full flex flex-col">
                                    <div className="h-44 relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={`News: ${item.title}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-lg">
                                                <item.icon className="w-4 h-4 text-primary-orange" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 left-3">
                                            <span className="bg-primary-dark/80 backdrop-blur-sm text-white text-[8px] font-bold py-0.5 px-2 rounded-full uppercase tracking-widest">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-gray-400 font-bold text-[9px] uppercase tracking-widest mb-2">
                                            <Calendar className="w-2.5 h-2.5" />
                                            {item.date}
                                        </div>
                                        <h4 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary-orange transition-colors font-serif uppercase tracking-tight leading-tight line-clamp-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500 line-clamp-2 text-xs leading-relaxed mb-4 font-medium">
                                            {item.snippet}
                                        </p>
                                        <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                                            <span className="text-primary-orange font-bold text-[10px] uppercase tracking-widest hover:underline flex items-center gap-2 group">
                                                Read Full Story <span className="group-hover:translate-x-2 transition-transform">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </a>
                        ))}
                    </div>

                    {/* Pagination - Matching Footer/Projects Tone */}
                    <div className="mt-20 flex justify-center">
                        <div className="flex gap-3">
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    className={`w-10 h-10 rounded-sm font-bold flex items-center justify-center transition-all text-xs ${page === 1 ? 'bg-primary-dark text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-primary-orange hover:text-white'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsPage;
