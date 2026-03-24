import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
    const newsItems = [
        {
            id: 1,
            date: 'March 05, 2024',
            title: 'Biswajit Daimary chairs the 15th Assembly session on budget highlights.',
            image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop',
            category: 'Assembly'
        },
        {
            id: 2,
            date: 'February 28, 2024',
            title: 'Speaker Daimary emphasizes on digital literacy in rural Assam.',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
            category: 'Inspiration'
        },
        {
            id: 3,
            date: 'February 15, 2024',
            title: 'Foundation stone laid for new Skill Development center in Baksa.',
            image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=800&auto=format&fit=crop',
            category: 'Development'
        }
    ];

    return (
        <section id="news" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h3 className="text-primary-orange font-bold uppercase tracking-widest mb-2">Updates</h3>
                        <h2 className="text-3xl font-bold text-primary-dark">Latest News & Media</h2>
                    </div>
                    <Link to="/news" className="text-primary-orange font-bold hover:underline mb-1">View All News →</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((news) => (
                        <Link to="/news" key={news.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group block">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={news.image}
                                    alt={`News: ${news.title}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-primary-orange text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full">
                                    {news.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                                <h4 className="text-xl font-bold text-primary-dark line-clamp-2 mb-4 group-hover:text-primary-orange transition-colors">
                                    {news.title}
                                </h4>
                                <span className="flex items-center text-primary-orange font-bold text-sm">
                                    Read More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
