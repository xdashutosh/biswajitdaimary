import React from 'react';
import { Calendar, Search } from 'lucide-react';

const NewsPage = () => {
    const news = [
        {
            id: 1,
            date: 'March 05, 2024',
            title: 'Digital Assembly: Speaker Daimary inaugurates the Paperless Legislative System.',
            snippet: 'A revolutionary step towards transparent and efficient governance in the Assam Legislative Assembly.',
            image: 'https://images.hindustantimes.com/img/2021/02/15/550x309/PTI23-11-2020_000169A_1613377454396_1613377460332.jpg',
            category: 'GOVERNANCE'
        },
        {
            id: 2,
            date: 'February 28, 2024',
            title: 'Bodo Accord Progress: High-level meeting held in Kokrajhar.',
            snippet: 'Key milestones achieved in land rights and administrative autonomy for the BTR region.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesFUUp9BdTVJOtkEyIem_s4fESLZWmcC_iw&s',
            category: 'PEACE'
        },
        {
            id: 3,
            date: 'February 15, 2024',
            title: 'Empowering Women Weavers: New financial grant announced for Baksa artisans.',
            snippet: 'Over 5,000 weavers to benefit from the direct benefit transfer scheme inaugurated today.',
            image: 'https://pbs.twimg.com/media/GUyIwXNWAAI30zv.jpg',
            category: 'DEVELOPMENT'
        },
        {
            id: 4,
            date: 'February 10, 2024',
            title: 'Speaker Daimary addresses Global Investors Summit on Assam\'s potential.',
            snippet: 'Focusing on organic farming and eco-tourism opportunities in the foothills of Bhutan.',
            image: 'https://cf-img-a-in.tosshub.com/lingo/itne/images/story/202206/untitled-1-201.jpg?size=948:533',
            category: 'ECONOMY'
        }
    ];

    return (
        <div>
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div className="max-w-xl">
                            <h3 className="text-primary-orange text-xs md:text-sm font-bold uppercase tracking-widest mb-4">Press Room</h3>
                            <h1 className="text-4xl md:text-7xl font-black text-primary-dark mb-4 leading-tight uppercase">NEWS & UPDATES</h1>
                            <p className="text-gray-500 text-sm md:text-lg">Official announcements, press releases, and media coverage of the Speaker's office.</p>
                        </div>
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search updates..."
                                className="w-full bg-white rounded-full py-4 px-12 border-2 border-transparent focus:border-primary-orange focus:outline-none shadow-sm text-sm"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
                        {news.map((item) => (
                            <article
                                key={item.id}
                                className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch md:items-center bg-gray-50 p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover-lift"
                            >
                                <div className="w-full md:w-1/2 h-48 md:h-64 overflow-hidden rounded-[2rem] shadow-lg flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-primary-orange font-bold text-[10px] uppercase tracking-widest mb-4">
                                        <span>{item.category}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <Calendar className="w-3 h-3" />
                                            {item.date}
                                        </div>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-black text-primary-dark leading-tight mb-4 uppercase tracking-tighter">{item.title}</h4>
                                    <p className="text-gray-500 line-clamp-2 text-xs md:text-sm leading-relaxed mb-6 font-medium">{item.snippet}</p>
                                    <button className="text-primary-orange font-black text-xs md:text-sm uppercase tracking-widest hover:underline flex items-center gap-2 group mt-auto">
                                        Read Story <span className="group-hover:translate-x-2 transition-transform">→</span>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 md:mt-20 border-t pt-16 md:pt-20 flex justify-center">
                        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 px-4 max-w-full">
                            {[1, 2, 3, '...', 10].map((page, i) => (
                                <button
                                    key={i}
                                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold flex-shrink-0 transition-all text-xs md:text-sm ${page === 1 ? 'bg-primary-orange text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-orange-100'}`}
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
