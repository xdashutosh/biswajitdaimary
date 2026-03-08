import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import qrCode from '../assets/qr_code.png';
import appStoreBtn from '../assets/app_store_btn.png';
import playStoreBtn from '../assets/play_store_btn.png';

const SOCIAL_URLS = [
    'https://twitter.com/BiswajitDaimary',
    'https://instagram.com/BiswajitDaimary',
    'https://facebook.com/BiswajitDaimary',
    'https://youtube.com/@BiswajitDaimary',
];

const Footer = () => {
    return (
        <footer className="bg-white pt-20 md:pt-32 pb-12 md:pb-16 border-t-8 border-primary-orange overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-10 mb-16 md:mb-24">
                    <div className="col-span-1">
                        <h2 className="text-2xl md:text-3xl font-black text-primary-dark mb-6 tracking-tighter uppercase">BISWAJIT <br /><span className="text-primary-orange">DAIMARY</span></h2>
                        <p className="text-gray-500 mb-8 leading-relaxed font-medium text-sm md:text-base">
                            Serving the people of Assam with dedication and integrity.
                            Towards a future of peace and prosperity for all.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Instagram, Facebook, Youtube].map((Icon, idx) => (
                                <a key={idx} href={SOCIAL_URLS[idx]} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center text-primary-dark hover:bg-primary-orange hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs md:text-sm font-black text-primary-dark mb-6 md:mb-8 uppercase tracking-[0.2em] relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-orange mt-2"></span>
                        </h4>
                        <ul className="space-y-4 md:space-y-5 text-xs md:text-sm font-bold">
                            <li><Link to="/" className="text-gray-500 hover:text-primary-orange transition-colors">Home Page</Link></li>
                            <li><Link to="/about" className="text-gray-500 hover:text-primary-orange transition-colors">Full Biography</Link></li>
                            <li><Link to="/news" className="text-gray-500 hover:text-primary-orange transition-colors">Press & Updates</Link></li>
                            <li><Link to="/projects" className="text-gray-500 hover:text-primary-orange transition-colors">Key Projects</Link></li>
                            <li><Link to="/parliament" className="text-gray-500 hover:text-primary-orange transition-colors">Parliamentary Record</Link></li>
                            <li><Link to="/elections" className="text-gray-500 hover:text-primary-orange transition-colors">Election Mandate</Link></li>
                            <li><Link to="/gallery" className="text-gray-500 hover:text-primary-orange transition-colors">Media Gallery</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs md:text-sm font-black text-primary-dark mb-6 md:mb-8 uppercase tracking-[0.2em] relative inline-block">
                            Connect
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-orange mt-2"></span>
                        </h4>
                        <ul className="space-y-4 md:space-y-5 text-xs md:text-sm font-bold">
                            <li><Link to="/contact" className="text-gray-500 hover:text-primary-orange transition-colors">Write to Speaker</Link></li>
                            <li><Link to="/contact" className="text-gray-500 hover:text-primary-orange transition-colors">Volunteer Program</Link></li>
                            <li><Link to="/contact" className="text-gray-500 hover:text-primary-orange transition-colors">Media Kit</Link></li>
                            <li><Link to="/contact" className="text-gray-500 hover:text-primary-orange transition-colors">Official Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs md:text-sm font-black text-primary-dark mb-6 md:mb-8 uppercase tracking-[0.2em] relative inline-block">
                            Headquarters
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-orange mt-2"></span>
                        </h4>
                        <p className="text-gray-500 mb-6 leading-relaxed font-medium text-sm">
                            Assam Legislative Assembly,<br />
                            Dispur, Guwahati - 781006,<br />
                            Assam, India
                        </p>
                        <p className="text-primary-orange font-black text-base md:text-lg tracking-tight">
                            office@biswajitdaimary.in
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-xs md:text-sm font-black text-primary-dark mb-6 md:mb-8 uppercase tracking-[0.2em] relative inline-block">
                            Download App
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-orange mt-2"></span>
                        </h4>
                        <div className="flex flex-col space-y-4">
                            <div className="bg-gray-50 p-3 rounded-2xl inline-block w-fit shadow-inner group hover:shadow-md transition-all duration-300">
                                <img src={qrCode} alt="Scan to Download" className="w-24 h-24 md:w-28 md:h-28 grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <p className="text-[10px] text-gray-400 mt-2 text-center font-bold tracking-tight">SCAN TO DOWNLOAD</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                                    <img src={appStoreBtn} alt="Download on App Store" className="h-14 md:h-16 w-auto object-contain" />
                                </a>
                                <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                                    <img src={playStoreBtn} alt="Get it on Google Play" className="h-14 md:h-16 w-auto object-contain" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-12 md:pt-16 flex flex-col md:flex-row justify-between items-center text-gray-400 font-bold text-[10px] md:text-xs">
                    <p className="mb-6 md:mb-0 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Biswajit Daimary. Produced by the IT Cell, O/o Speaker.
                    </p>
                    <div className="flex space-x-6 md:space-x-10 uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-primary-orange transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary-orange transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
