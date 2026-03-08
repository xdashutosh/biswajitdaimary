import React, { useState, useEffect, useRef } from 'react';
import { Languages, ChevronDown, Check } from 'lucide-react';

const LANGUAGES = [
    { code: '', label: 'English', short: 'EN' },
    { code: 'hi', label: 'हिन्दी (Hindi)', short: 'HI' },
    { code: 'as', label: 'অসমীয়া (Assamese)', short: 'AS' },
    { code: 'bn', label: 'বাংলা (Bengali)', short: 'BN' },
    { code: 'ta', label: 'தமிழ் (Tamil)', short: 'TA' },
    { code: 'te', label: 'తెలుగు (Telugu)', short: 'TE' },
    { code: 'mr', label: 'मराठी (Marathi)', short: 'MR' },
    { code: 'gu', label: 'ગુજરાતી (Gujarati)', short: 'GU' },
    { code: 'kn', label: 'ಕನ್ನಡ (Kannada)', short: 'KN' },
    { code: 'ml', label: 'മലയാളം (Malayalam)', short: 'ML' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ (Punjabi)', short: 'PA' },
    { code: 'ur', label: 'اردو (Urdu)', short: 'UR' },
    { code: 'fr', label: 'Français (French)', short: 'FR' },
    { code: 'es', label: 'Español (Spanish)', short: 'ES' },
    { code: 'de', label: 'Deutsch (German)', short: 'DE' },
    { code: 'zh-CN', label: '中文 (Chinese)', short: 'ZH' },
    { code: 'ja', label: '日本語 (Japanese)', short: 'JA' },
    { code: 'ar', label: 'العربية (Arabic)', short: 'AR' },
];

function setGoogTransCookie(langCode) {
    const value = langCode ? `/en/${langCode}` : '';
    document.cookie = `googtrans=${value};path=/;`;
    document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname}`;
}

const LanguageTranslator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(LANGUAGES[0]);
    const dropdownRef = useRef(null);

    // Detect current language from cookie on mount
    useEffect(() => {
        const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
        if (match) {
            const found = LANGUAGES.find(l => l.code === match[1]);
            if (found) setSelected(found);
        }
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (lang) => {
        if (lang.code === selected.code) {
            setIsOpen(false);
            return;
        }
        setSelected(lang);
        setIsOpen(false);

        // Try the combo approach first (if Google widget loaded)
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
            combo.value = lang.code;
            combo.dispatchEvent(new Event('change'));
            return;
        }

        // Fallback: set cookie and reload
        setGoogTransCookie(lang.code);
        window.location.reload();
    };

    return (
        <div className="relative notranslate" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-orange-50 rounded-2xl border border-orange-100/50 hover:bg-orange-100 transition-all cursor-pointer group"
                aria-label="Select Language"
            >
                <Languages className="w-4 h-4 text-primary-orange group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark hidden sm:inline">
                    {selected.short}
                </span>
                <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[200] max-h-80 overflow-y-auto custom-scrollbar">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code || 'en'}
                            onClick={() => handleSelect(lang)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-orange-50 cursor-pointer ${selected.code === lang.code ? 'bg-orange-50 text-primary-orange' : 'text-primary-dark'
                                }`}
                        >
                            <span className="text-xs font-bold tracking-wide">{lang.label}</span>
                            {selected.code === lang.code && (
                                <Check className="ml-auto w-4 h-4 text-primary-orange flex-shrink-0" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageTranslator;
