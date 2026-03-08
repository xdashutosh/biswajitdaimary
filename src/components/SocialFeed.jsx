import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const SOCIAL_LINKS = {
    twitter: 'https://twitter.com/BiswajitDaimary',
    instagram: 'https://instagram.com/BiswajitDaimary',
    facebook: 'https://facebook.com/BiswajitDaimary',
    youtube: 'https://youtube.com/@BiswajitDaimary',
};

const SocialFeed = () => {
    const tweetsRef = useScrollRevealChildren();

    const tweets = [
        { id: 1, text: "Productive meeting with the Bodo Sahitya Sabha today. Discussion on preserving our rich linguistic heritage. #Assam #BodoCulture", time: "2h ago" },
        { id: 2, text: "Congratulations to the youth of Baksa for the successful sports meet. Your energy is contagious! #YouthPower #Assam", time: "5h ago" },
        { id: 3, text: "Reviewing the progress of the Digital Assembly initiative. Transparency is our priority. #GoodGovernance", time: "1d ago" }
    ];

    const socialPlatforms = [
        { icon: Twitter, label: 'X (Twitter)', href: SOCIAL_LINKS.twitter, color: 'text-[#1DA1F2]' },
        { icon: Instagram, label: 'Instagram', href: SOCIAL_LINKS.instagram, color: 'text-[#E1306C]' },
        { icon: Facebook, label: 'Facebook', href: SOCIAL_LINKS.facebook, color: 'text-[#4267B2]' },
        { icon: Youtube, label: 'YouTube', href: SOCIAL_LINKS.youtube, color: 'text-[#FF0000]' },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/3">
                        <h3 className="text-primary-orange text-xs md:text-sm font-bold uppercase tracking-widest mb-4">Live Connect</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Social Stream</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                            Stay connected with daily updates, live sessions, and public addresses directly from the Speaker's official platforms.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {socialPlatforms.map((platform, idx) => (
                                <a
                                    key={idx}
                                    href={platform.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 bg-white p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md transition-all group"
                                >
                                    <platform.icon className={`w-5 h-5 md:w-6 md:h-6 ${platform.color} group-hover:scale-110 transition-transform`} />
                                    <span className="font-bold text-[10px] md:text-sm">{platform.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col h-[500px]">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">BD</div>
                                <div>
                                    <h4 className="font-bold text-primary-dark text-sm md:text-base">@BiswajitDaimary</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400 font-bold">Speaker, Assam LA</p>
                                </div>
                            </div>
                            <a
                                href={SOCIAL_LINKS.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-orange font-black text-xs md:text-sm hover:underline uppercase tracking-tighter"
                            >
                                Follow
                            </a>
                        </div>

                        <div ref={tweetsRef} className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                            {tweets.map((tweet, idx) => (
                                <div
                                    key={tweet.id}
                                    className={`bg-gray-50 p-5 md:p-6 rounded-2xl hover:bg-orange-50 transition-colors animate-on-scroll animate-fade-right animate-delay-${idx + 1}`}
                                >
                                    <p className="text-gray-700 mb-4 text-xs md:text-sm leading-relaxed font-medium">{tweet.text}</p>
                                    <div className="flex justify-between items-center text-[10px] md:text-xs text-gray-400 font-bold">
                                        <span>{tweet.time}</span>
                                        <div className="flex space-x-4">
                                            <span>❤️ 1.2K</span>
                                            <span>🔄 450</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 text-center">
                            <a
                                href={SOCIAL_LINKS.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-dark font-black text-xs md:text-sm hover:underline uppercase tracking-widest"
                            >
                                Show more activity
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
