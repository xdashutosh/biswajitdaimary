import React from 'react';

const GovernanceSection = () => {
    const initiatives = [
        {
            title: 'Bodo Peace Accord',
            desc: 'Significant role in bringing stability and peace to the Bodoland Territorial Region.',
        },
        {
            title: 'Digital Assembly',
            desc: 'Spearheading the digitization of Assam Legislative Assembly for better transparency.',
        },
        {
            title: 'Baksa Education Initiative',
            desc: 'Focusing on improving infrastructure in schools across the Baksa district.',
        },
        {
            title: 'Assam Weavers Welfare',
            desc: 'Programs designed to support traditional weavers and artisans of Assam.',
           
        }
    ];

    return (
        <section
            id="governance"
            className="bg-primary-dark text-white relative overflow-hidden"
        >
            {/* Subtle glow accents matching site style */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl -ml-36 -mb-36 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Section label */}
                <div className="text-center mb-4">
                    
                    <h2 className="text-2xl md:text-3xl font-normal text-white mt-0 mb-2 font-serif">
                        Building a Stronger Assam
                    </h2>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed font-medium">
                        Dedicated efforts towards sustainable development, peaceful co-existence,
                        and empowering the grassroots through effective policy and governance.
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-6" />

                {/* Horizontal stats-bar grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/10 border border-white/10 rounded-xl overflow-hidden">
                    {initiatives.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center px-6 py-7 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <span className="text-3xl mb-3">{item.icon}</span>
                            <h4 className="text-primary-orange font-normal text-sm uppercase tracking-wide mb-2 font-serif">
                                {item.title}
                            </h4>
                            <p className="text-gray-400 text-xs leading-relaxed font-light">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GovernanceSection;