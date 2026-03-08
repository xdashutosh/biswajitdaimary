import React from 'react';

const GalleryPage = () => {
    const albums = [
        { id: 1, title: 'Legislative Sessions', count: '45 Photos', img: 'https://pbs.twimg.com/media/GUyIwXNWAAI30zv.jpg' },
        { id: 2, title: 'Constituency Visits', count: '120 Photos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTZAwbgqUQkDSaSHOOfFWigB4aBCRx8FAcw&s' },
        { id: 3, title: 'Bodo Cultural Events', count: '85 Photos', img: '/src/assets/daimary_bodo_culture.png' },
        { id: 4, title: 'Official Engagements', count: '60 Photos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesFUUp9BdTVJOtkEyIem_s4fESLZWmcC_iw&s' },
        { id: 5, title: 'Public Meetings', count: '30 Photos', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTZAwbgqUQkDSaSHOOfFWigB4aBCRx8FAcw&s' },
        { id: 6, title: 'State Events', count: '55 Photos', img: 'https://images.hindustantimes.com/img/2021/02/15/550x309/PTI23-11-2020_000169A_1613377454396_1613377460332.jpg' }
    ];

    return (
        <div>
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-primary-orange text-xs md:text-sm font-bold uppercase tracking-widest mb-4">Visual Story</h3>
                    <h1 className="text-4xl md:text-7xl font-black text-primary-dark mb-8 md:mb-12 uppercase tracking-tighter">MEDIA GALLERY</h1>
                    <div className="w-16 md:w-24 h-2 bg-primary-orange mx-auto"></div>
                </div>
            </section>

            <section className="pb-16 md:pb-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {albums.map((album) => (
                            <div
                                key={album.id}
                                className="group cursor-pointer hover-lift"
                            >
                                <div className="relative h-64 md:h-80 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-xl">
                                    <img
                                        src={album.img}
                                        alt={album.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white">
                                        <p className="text-primary-orange text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">{album.count}</p>
                                        <h4 className="text-xl md:text-2xl font-black uppercase leading-tight tracking-tight">{album.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-20 text-center">
                        <button className="bg-primary-dark text-white px-10 md:px-16 py-4 md:py-5 rounded-full font-black hover:bg-black transition-all shadow-2xl uppercase tracking-widest hover:scale-105 active:scale-95 text-xs md:text-base">
                            Load More Albums
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
