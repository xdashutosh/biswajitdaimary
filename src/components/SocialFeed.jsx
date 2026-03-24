import React from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';
import { Twitter, Instagram, Facebook, Pin, Heart, Repeat, MessageCircle, ExternalLink, BadgeCheck, Clock, ArrowRight, Share2 } from 'lucide-react';

const SOCIAL_LINKS = {
    twitter: 'https://x.com/BiswajitDaimar5',
    instagram: 'https://www.instagram.com/biswajitdaimary_/',
    facebook: 'https://www.facebook.com/BiswajitdaimaryMP/',
};

const SocialFeed = () => {
    const tweetsRef = useScrollRevealChildren();

    const tweets = [
        { 
            id: 1, 
            text: "Productive meeting with the Bodo Sahitya Sabha today. Discussion on preserving our rich linguistic heritage. <span class='text-primary-orange font-medium'>#Assam #BodoCulture</span>", 
            date: "Mar 11, 2026", 
            pinned: true, 
            likes: "1.2K", 
            retweets: "450",
            replies: "128"
        },
        { 
            id: 2, 
            text: "Congratulations to the youth of Baksa for the successful sports meet. Your energy is contagious! <span class='text-primary-orange font-medium'>#YouthPower #Assam</span>", 
            date: "Mar 11, 2026", 
            pinned: false, 
            likes: "1.2K", 
            retweets: "450",
            replies: "85"
        },
        { 
            id: 3, 
            text: "Chaired the Assembly session today with focused discussions on rural infrastructure development across Assam's districts. <span class='text-primary-orange font-medium'>#AssamAssembly #Development</span>", 
            date: "Mar 10, 2026", 
            pinned: false, 
            likes: "2.1K", 
            retweets: "830",
            replies: "210"
        },
        { 
            id: 4, 
            text: "Honoured to inaugurate the new Community Resource Centre in Kokrajhar. Empowering grassroots communities is central to our governance vision. <span class='text-primary-orange font-medium'>#Kokrajhar #CommunityFirst</span>", 
            date: "Mar 09, 2026", 
            pinned: false, 
            likes: "3.4K", 
            retweets: "1.1K",
            replies: "342"
        }
    ];

    const socialPlatforms = [
        { icon: Twitter, label: 'Official X (Twitter)', handle: '@BiswajitDaimary', href: SOCIAL_LINKS.twitter, color: 'group-hover:text-black' },
        { icon: Facebook, label: 'Official Facebook', handle: '/BiswajitDaimary', href: SOCIAL_LINKS.facebook, color: 'group-hover:text-blue-600' },
        { icon: Instagram, label: 'Official Instagram', handle: '@speaker_assam', href: SOCIAL_LINKS.instagram, color: 'group-hover:text-pink-600' },
    ];

    return (
        <section className="py-8 md:py-10 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div className="mb-6 text-center max-w-2xl mx-auto mt-10">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-dark mb-2 tracking-tight">Official Updates & Communications</h2>
                    <div className="w-12 h-1 bg-primary-orange mx-auto mb-2 rounded-full"></div>
                    <p className="text-gray-600 text-xs md:text-sm font-medium">Stay informed with the latest announcements, activities, and statements from the Office of the Speaker.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    {/* Left Column - Profile & Platforms */}
                    <div className="w-full lg:w-[32%] flex flex-col gap-4">
                        {/* Formal Profile Card */}
                        <div className="bg-white rounded-md p-5 shadow-sm border border-gray-200 relative overflow-hidden">
                            {/* Decorative top border */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary-dark"></div>
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 relative">
                                    <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                                        <span className="text-primary-dark font-serif font-bold text-xl">BD</span>
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm">
                                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                                    </div>
                                </div>
                                
                                <h3 className="text-primary-dark font-bold text-lg font-serif leading-tight mb-0.5">Shri Biswajit Daimary</h3>
                                <p className="text-primary-orange text-[9px] font-bold tracking-[0.2em] uppercase mb-2">Speaker, Assam LA</p>
                                
                                <div className="w-full h-px bg-gray-100 mb-2"></div>
                                
                                <p className="text-gray-600 text-[11px] leading-relaxed mb-4 font-medium">
                                    Official account of the Hon'ble Speaker of the Assam Legislative Assembly. Dedicated to democratic governance and public welfare.
                                </p>
                                
                                <a
                                    href={SOCIAL_LINKS.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[85%] flex items-center justify-center space-x-1.5 bg-primary-dark hover:bg-black text-white px-3 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 shadow-sm"
                                >
                                    <Twitter className="w-3 h-3" fill="currentColor" />
                                    <span>Follow on X</span>
                                </a>
                            </div>
                        </div>

                        {/* Official Channels List */}
                        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/80">
                                <h4 className="text-gray-500 font-bold text-[9px] uppercase tracking-[0.2em]">Official Channels</h4>
                            </div>
                            <div className="flex flex-col">
                                {socialPlatforms.map((platform, idx) => (
                                    <a
                                        key={idx}
                                        href={platform.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-between px-4 py-2.5 border-b border-gray-100 hover:bg-gray-50 transition-colors group ${idx === socialPlatforms.length - 1 ? 'border-b-0' : ''}`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                                                <platform.icon className={`w-3.5 h-3.5 text-gray-500 ${platform.color} transition-colors`} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-primary-dark text-[11px]">{platform.label}</h5>
                                                <p className="text-gray-500 text-[9px] mt-0.5">{platform.handle}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-primary-orange transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Feed List */}
                    <div className="w-full lg:w-[68%] flex flex-col">
                        {/* Feed Filter/Header */}
                        {/* <div className="flex items-center justify-between mb-3 px-1">
                            <h3 className="text-gray-500 font-bold text-[9px] uppercase tracking-[0.2em] flex items-center">
                                <Clock className="w-3 h-3 mr-1.5" />
                                Platform Timeline
                            </h3>
                            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:text-orange-600 text-[9px] font-bold uppercase tracking-wider flex items-center transition-colors">
                                View all <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                        </div> */}

                        {/* Timeline Container */}
                        <div 
                            ref={tweetsRef} 
                            className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden"
                        >
                            {tweets.map((tweet, idx) => (
                                <div
                                    key={tweet.id}
                                    className={`p-4 border-b border-gray-100 hover:bg-gray-50/30 transition-colors ${idx === tweets.length - 1 ? 'border-b-0' : ''} animate-on-scroll animate-fade-up animate-delay-${idx + 1}`}
                                >
                                    {/* Author & Meta */}
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-gray-500 text-[10px] md:text-[11px] font-medium">
                                            {tweet.date}
                                        </div>
                                        {tweet.pinned && (
                                            <div className="flex items-center space-x-1 text-primary-orange bg-orange-50 border border-primary-orange/20 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider shrink-0 mt-1">
                                                <Pin className="w-2.5 h-2.5" />
                                                <span className="hidden sm:inline">Pinned</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <p className="text-gray-800 text-[13px] md:text-[14px] leading-relaxed mb-3 font-medium" dangerouslySetInnerHTML={{ __html: tweet.text }}></p>
                                        
                                        {/* Engagement Metrics */}
                                        <div className="flex items-center space-x-5 text-gray-500">
                                            <button className="flex items-center space-x-1.5 w-10 hover:text-blue-500 transition-colors group">
                                                <MessageCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                                <span className="text-[10px] md:text-[11px] font-medium">{tweet.replies}</span>
                                            </button>
                                            <button className="flex items-center space-x-1.5 w-10 hover:text-green-500 transition-colors group">
                                                <Repeat className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                                <span className="text-[10px] md:text-[11px] font-medium">{tweet.retweets}</span>
                                            </button>
                                            <button className="flex items-center space-x-1.5 w-10 hover:text-pink-500 transition-colors group">
                                                <Heart className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                                <span className="text-[10px] md:text-[11px] font-medium">{tweet.likes}</span>
                                            </button>
                                            <div className="flex-1"></div>
                                            <button className="flex items-center space-x-1.5 hover:text-primary-orange transition-colors group">
                                                <Share2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
