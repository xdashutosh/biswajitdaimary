import React from 'react';

const TermsConditions = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <section className="bg-gray-50 py-16 md:py-20 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-black text-primary-dark mb-4 uppercase tracking-tighter">TERMS & CONDITIONS</h1>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-sm">Effective Date: March 2024</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-sm md:prose-lg prose-orange text-gray-600 space-y-8 font-medium">
                        <p className="text-base md:text-lg leading-relaxed">
                            By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use,
                            all applicable laws, and regulations, and agree that you are responsible for compliance with any
                            applicable local laws.
                        </p>

                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">1. Use License</h2>
                            <p className="leading-relaxed">
                                Permission is granted to temporarily download one copy of the materials (information or media)
                                on Shri Biswajit Daimary's website for personal, non-commercial transitory viewing only.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">2. Disclaimer</h2>
                            <p className="leading-relaxed">
                                The materials on this website are provided "as is". The office of the Speaker makes no warranties,
                                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
                                implied warranties or conditions of merchantability.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">3. Accuracy of Materials</h2>
                            <p className="leading-relaxed">
                                The materials appearing on the website could include technical, typographical, or photographic errors.
                                We do not warrant that any of the materials on its website are accurate, complete, or current.
                                We may make changes to the materials at any time without notice.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">4. Governing Law</h2>
                            <p className="leading-relaxed">
                                Any claim relating to this website shall be governed by the laws of the State of Assam and the
                                Republic of India without regard to its conflict of law provisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsConditions;
