import React from 'react';

const GovernanceSection = () => {
    const initiatives = [
        {
            title: 'Bodo Peace Accord',
            desc: 'Significant role in bringing stability and peace to the Bodoland Territorial Region.',
            icon: '🕊️'
        },
        {
            title: 'Digital Assembly',
            desc: 'Spearheading the digitization of Assam Legislative Assembly for better transparency.',
            icon: '💻'
        },
        {
            title: 'Baksa Education Initiative',
            desc: 'Focusing on improving infrastructure in schools across the Baksa district.',
            icon: '🎓'
        },
        {
            title: 'Assam Weavers Welfare',
            desc: 'Programs designed to support traditional weavers and artisans of Assam.',
            icon: '🧶'
        }
    ];

    return (
        <section id="governance" className="py-20 bg-primary-dark text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-primary-orange font-bold uppercase tracking-widest mb-2">Governance</h3>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Building a Stronger Assam</h2>
                    <p className="text-gray-400 text-lg">
                        Dedicated efforts towards sustainable development, peaceful co-existence,
                        and empowering the grassroots through effective policy and governance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {initiatives.map((item, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-2">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h4 className="text-xl font-bold mb-4 text-primary-orange">{item.title}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">
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
