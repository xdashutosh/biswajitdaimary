import React from 'react';
import { Link } from 'react-router-dom';

import daimary_assembly from '../assets/daimary_assembly.png';
import daimary_tea_garden from '../assets/daimary_tea_garden.png';
import daimary_bodo_culture from '../assets/daimary_bodo_culture.png';
import daimary_meeting from '../assets/daimary_meeting.png';
import official_event_daimary from '../assets/official_event_daimary.png';

const Gallery = () => {
    const items = [
        { id: 1, img: daimary_assembly, title: 'Assembly Session', span: 'md:col-span-2 md:row-span-2 col-span-2 row-span-1' },
        { id: 2, img: daimary_tea_garden, title: 'Rural Outreach', span: 'col-span-1 row-span-1' },
        { id: 3, img: daimary_bodo_culture, title: 'Cultural Heritage', span: 'col-span-1 row-span-1' },
        { id: 4, img: daimary_meeting, title: 'Public Meeting', span: 'md:col-span-1 md:row-span-2 col-span-1 row-span-1' },
        { id: 5, img: official_event_daimary, title: 'Official Event', span: 'col-span-1 row-span-1' }
    ];

    return (
        <section id="gallery" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-primary-orange text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Moments</h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Gallery in Motion</h2>
                    <div className="w-16 md:w-20 h-1 bg-primary-orange mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-3 md:gap-4 h-auto md:h-[800px]">
                    {items.map((item) => (
                        <Link
                            to="/gallery"
                            key={item.id}
                            className={`relative group overflow-hidden rounded-xl md:rounded-2xl ${item.span} block aspect-square md:aspect-auto`}
                        >
                            <div className="w-full h-full hover:scale-[0.98] transition-transform duration-300">
                                <img
                                    src={item.img}
                                    alt={`Biswajit Daimary Gallery: ${item.title}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-8">
                                    <div>
                                        <h4 className="text-white font-bold text-sm md:text-xl">{item.title}</h4>
                                        <p className="text-primary-orange text-[10px] md:text-sm font-bold uppercase tracking-widest mt-1">View Album</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/gallery" className="inline-block border-2 border-primary-dark text-primary-dark px-10 md:px-12 py-3 md:py-4 rounded-full font-bold hover:bg-primary-dark hover:text-white transition-all uppercase tracking-widest text-[10px] md:text-sm">
                        View All Media
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
