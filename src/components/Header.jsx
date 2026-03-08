import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, User, Image, Construction, Landmark, Trophy, Newspaper, Mail, Menu, X, ChevronRight, Bird } from 'lucide-react';
import LanguageTranslator from './LanguageTranslator';


const NavItem = ({ title, items, isActiveSub }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative group py-4"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] transition-colors cursor-pointer ${isOpen ? 'text-primary-orange' : 'text-primary-dark hover:text-primary-orange'}`}>
                {title} <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 z-50 overflow-hidden dropdown-enter ${isOpen ? 'dropdown-active' : ''}`}>
                <div className="space-y-1">
                    {items.map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.path}
                            className={`flex items-center gap-4 p-4 rounded-2xl transition-all hover:bg-orange-50 group/link ${isActiveSub(item.path) ? 'bg-orange-50' : ''}`}
                        >
                            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary-dark group-hover/link:bg-primary-orange group-hover/link:text-white transition-colors">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary-dark">{item.label}</p>
                                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter mt-0.5">{item.sub}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);
    const isActive = (path) => location.pathname === path;

    // Close menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navCategories = [
        {
            title: 'The Leader',
            items: [
                { label: 'Full Biography', sub: 'Journey & Legacy', path: '/about', icon: User },
                { label: 'Media Gallery', sub: 'Visual Archives', path: '/gallery', icon: Image },
            ]
        },
        {
            title: 'Work & Impact',
            items: [
                { label: 'Peace Accord', sub: 'The Bodo Legacy', path: '/bodo-peace-accord', icon: Bird },
                { label: 'Key Projects', sub: 'Development Works', path: '/projects', icon: Construction },
                { label: 'Parliament', sub: 'Rajya Sabha Record', path: '/parliament', icon: Landmark },
                { label: 'Election Mandate', sub: 'Voter Trust', path: '/elections', icon: Trophy },
            ]
        },
        {
            title: 'Connect',
            items: [
                { label: 'Press & News', sub: 'Latest Updates', path: '/news', icon: Newspaper },
                { label: 'Get In Touch', sub: 'Office Contact', path: '/contact', icon: Mail },
            ]
        }
    ];

    const toggleCategory = (title) => {
        setOpenCategory(openCategory === title ? null : title);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b-4 border-primary-orange transition-all duration-300">
                <div className="container mx-auto px-4 flex justify-between items-center h-20 md:h-24">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <img src="/logo.svg" alt="BD Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform" />
                        <div>
                            <h1 className="text-lg md:text-xl font-black text-primary-dark leading-none tracking-tighter">BISWAJIT DAIMARY</h1>
                            <p className="text-[8px] md:text-[10px] text-primary-orange font-black uppercase tracking-[0.2em] mt-1">Speaker, Assam Legislative Assembly</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-12 h-full items-center">
                        <Link
                            to="/"
                            className={`text-xs font-black uppercase tracking-[0.15em] transition-colors ${isActive('/') ? 'text-primary-orange' : 'text-primary-dark hover:text-primary-orange'}`}
                        >
                            Home
                        </Link>
                        {navCategories.map((cat, idx) => (
                            <NavItem
                                key={idx}
                                title={cat.title}
                                items={cat.items}
                                isActiveSub={isActive}
                            />
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-6">
                        <LanguageTranslator />
                        <Link to="/contact" className="bg-primary-dark text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:scale-105 active:scale-95">
                            Connect
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-primary-dark hover:text-primary-orange transition-colors z-[100]"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Move out of the main header tag to prevent clipping */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] bg-white animate-in slide-in-from-right duration-500">
                    <div className="flex flex-col h-screen bg-white">
                        {/* Menu Header Area (Matches Header Height) */}
                        <div className="h-20 md:h-24 border-b-4 border-primary-orange flex justify-between items-center px-4 bg-white sticky top-0 z-[110]">
                            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                                <img src="/logo.svg" alt="BD Logo" className="w-10 h-10 rounded-2xl shadow-lg" />
                                <div>
                                    <h1 className="text-sm font-black text-primary-dark tracking-tighter uppercase leading-none">BISWAJIT DAIMARY</h1>
                                    <p className="text-[7px] text-primary-orange font-black uppercase tracking-[0.2em] mt-1">Speaker, Assam</p>
                                </div>
                            </Link>
                            <div className="flex items-center gap-4">
                                <LanguageTranslator />
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-primary-dark hover:text-primary-orange transition-colors"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </div>
                        </div>

                        {/* Menu Content */}
                        <div className="flex-1 overflow-y-auto px-6 py-12 space-y-12 pb-32">
                            {/* Home Link */}
                            <div>
                                <Link
                                    to="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-6xl font-black uppercase tracking-tighter transition-colors ${isActive('/') ? 'text-primary-orange' : 'text-primary-dark'}`}
                                >
                                    Home
                                </Link>
                                <div className={`h-1.5 w-16 mt-4 rounded-full ${isActive('/') ? 'bg-primary-orange' : 'bg-transparent'}`}></div>
                            </div>

                            {/* Nav Categories */}
                            <nav className="space-y-16">
                                {navCategories.map((cat, idx) => (
                                    <div key={idx} className="space-y-10">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[12px] font-black text-gray-300 uppercase tracking-[0.4em]">{cat.title}</span>
                                            <div className="h-px flex-1 bg-gray-100"></div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-8">
                                            {cat.items.map((item, itemIdx) => (
                                                <Link
                                                    key={itemIdx}
                                                    to={item.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="flex items-center group gap-6"
                                                >
                                                    <div className={`w-14 h-14 rounded-3xl flex items-center justify-center transition-all shadow-sm ${isActive(item.path) ? 'bg-primary-orange text-white' : 'bg-orange-50 text-primary-orange group-hover:bg-primary-orange group-hover:text-white'}`}>
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className={`text-lg font-black uppercase tracking-widest ${isActive(item.path) ? 'text-primary-orange' : 'text-primary-dark'}`}>{item.label}</span>
                                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{item.sub}</span>
                                                    </div>
                                                    <ChevronRight className="w-5 h-5 ml-auto text-gray-200 group-hover:text-primary-orange group-hover:translate-x-1 transition-all" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Menu Footer */}
                        <div className="mt-auto p-8 bg-gray-50 border-t border-gray-100 safe-area-bottom">
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full bg-primary-dark text-white py-6 rounded-3xl font-black flex items-center justify-center gap-4 shadow-2xl hover:bg-black transition-all uppercase tracking-[0.2em] text-sm"
                            >
                                <span>LET'S CONNECT</span>
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <div className="mt-8 flex justify-between px-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                <Link to="/privacy" className="hover:text-primary-orange">Privacy Policy</Link>
                                <Link to="/terms" className="hover:text-primary-orange">Terms & Conditions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
