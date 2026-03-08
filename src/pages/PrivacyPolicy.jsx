import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <section className="bg-gray-50 py-16 md:py-20 border-b">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-black text-primary-dark mb-4 uppercase tracking-tighter">PRIVACY POLICY</h1>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-sm">Last Updated: March 2024</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-sm md:prose-lg prose-orange text-gray-600 space-y-8 font-medium">
                        <p className="text-base md:text-lg leading-relaxed">
                            Welcome to the official website of Shri Biswajit Daimary, Speaker of the Assam Legislative Assembly.
                            We are committed to protecting your personal information and your right to privacy.
                        </p>

                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">1. Information We Collect</h2>
                            <p className="leading-relaxed">
                                We may collect personal information that you voluntarily provide to us when you subscribe to our newsletter,
                                contact the Speaker's office, or register for public events. This may include your name, email address,
                                and phone number.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">2. How We Use Your Information</h2>
                            <p className="leading-relaxed">
                                The information we collect is used to:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-500">
                                <li>Provide you with updates on legislative activities and public initiatives.</li>
                                <li>Respond to your inquiries and feedback.</li>
                                <li>Improve the functional and user experience of this website.</li>
                                <li>Ensure compliance with legal and administrative requirements.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">3. Security of Data</h2>
                            <p className="leading-relaxed">
                                We implement a variety of security measures to maintain the safety of your personal information.
                                However, please note that no method of transmission over the internet is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-4 uppercase tracking-tight">4. Third-Party Links</h2>
                            <p className="leading-relaxed">
                                Our website may contain links to government portals or social media platforms. We do not have control
                                over their privacy practices and encourage you to review their policies.
                            </p>
                        </div>

                        <div className="bg-orange-50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-primary-orange/20 mt-12 shadow-sm">
                            <h3 className="text-lg md:text-xl font-black text-primary-dark mb-3 uppercase tracking-tight">Need Clarification?</h3>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">If you have any questions about this Privacy Policy, please contact the official IT cell of the Speaker's Office.</p>
                            <p className="font-black text-primary-orange tracking-tight">it-cell@biswajitdaimary.in</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
