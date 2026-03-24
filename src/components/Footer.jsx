import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import qrCode from '../assets/qr_code.png';
import appStoreBtn from '../assets/app_store_btn.png';
import playStoreBtn from '../assets/play_store_btn.png';

const SOCIAL_URLS = [
    'https://x.com/BiswajitDaimar5',
    'https://www.instagram.com/biswajitdaimary_/',
    'https://www.facebook.com/BiswajitdaimaryMP/',
];

const Footer = () => {
    return (
        <footer className="bg-white pt-6 md:pt-10 pb-4 md:pb-6 border-t-8 border-primary-orange overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-10 mb-6 md:mb-8">
                    <div className="lg:w-1/3 pr-0 lg:pr-8">
                        <h2 className="text-lg md:text-xl font-black text-primary-dark mb-3 tracking-tighter uppercase">BISWAJIT <br /><span className="text-primary-orange">DAIMARY</span></h2>
                        <p className="text-gray-500 mb-4 leading-relaxed font-medium text-[11px] md:text-xs">
                            Serving the people of Assam with dedication and integrity.
                            Towards a future of peace and prosperity for all.
                        </p>
                        <div className="flex space-x-2">
                            {[Twitter, Instagram, Facebook].map((Icon, idx) => (
                                <a key={idx} href={SOCIAL_URLS[idx]} target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 bg-gray-50 rounded-md md:rounded-lg flex items-center justify-center text-primary-dark hover:bg-primary-orange hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <Icon className="w-3 h-3 md:w-4 md:h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div>
                            <h4 className="text-[10px] md:text-xs font-black text-primary-dark mb-3 md:mb-4 uppercase tracking-[0.2em]">
                                Quick Links
                            </h4>
                            <ul className="space-y-1.5 md:space-y-2 text-[10px] md:text-xs font-bold">
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
                            <h4 className="text-[10px] md:text-xs font-black text-primary-dark mb-3 md:mb-4 uppercase tracking-[0.2em]">
                                Connect
                            </h4>
                            <ul className="space-y-1.5 md:space-y-2 text-[10px] md:text-xs font-bold">
                                <li><Link to="/contact" className="text-gray-500 hover:text-primary-orange transition-colors">Write to Speaker</Link></li>
                                <li><Link to="/contact" className="text-gray-500 hover:text-primary-orange transition-colors">Volunteer Program</Link></li>
                                <li><Link to="/contact" className="text-gray-500 hover:text-primary-orange transition-colors">Media Kit</Link></li>
                                <li><Link to="/contact" className="text-gray-500 hover:text-primary-orange transition-colors">Official Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] md:text-xs font-black text-primary-dark mb-3 md:mb-4 uppercase tracking-[0.2em]">
                                Headquarters
                            </h4>
                            <p className="text-gray-500 mb-3 leading-relaxed font-medium text-[10px] md:text-xs">
                                Assam Legislative Assembly,<br />
                                Dispur, Guwahati - 781006,<br />
                                Assam, India
                            </p>
                            <p className="text-primary-orange font-black text-[10px] md:text-xs tracking-tight break-words">
                                office@biswajitdaimary.in
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[10px] md:text-xs font-black text-primary-dark mb-3 md:mb-4 uppercase tracking-[0.2em]">
                                Download App
                            </h4>
                            <div className="flex flex-col space-y-2">
                                <div className="bg-gray-50 p-1.5 rounded-lg inline-block w-fit shadow-inner group hover:shadow-md transition-all duration-300">
                                    <img src={qrCode} alt="Scan QR code" className="w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <p className="text-[8px] text-gray-400 mt-1 text-center font-bold tracking-tight">SCAN</p>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                                        <img src={appStoreBtn} alt="App Store" className="h-6 md:h-8 w-auto object-contain" />
                                    </a>
                                    <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                                        <img src={playStoreBtn} alt="Play Store" className="h-6 md:h-8 w-auto object-contain" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 font-bold text-[9px] md:text-[10px]">
                    <p className="mb-3 md:mb-0 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Biswajit Daimary. Produced by the IT Cell, O/o Speaker.
                    </p>
                    <div className="flex space-x-3 md:space-x-6 uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-primary-orange transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary-orange transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
