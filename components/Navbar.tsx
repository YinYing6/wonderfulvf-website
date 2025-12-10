import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NavItem, Language } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navItems: NavItem[] = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.products, path: '/products' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.faq, path: '/faq' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  // Fallback function if user hasn't uploaded images yet
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, type: 'logo' | 'text') => {
    const target = e.currentTarget;
    if (type === 'logo') {
      target.src = "https://placehold.co/100x100/transparent/transparent?text=Logo";
    } else {
      target.src = "https://placehold.co/200x50/transparent/transparent?text=Wonderful";
    }
  };

  const LangButton = ({ lang, label }: { lang: Language, label: string }) => (
    <span 
      onClick={() => setLanguage(lang)}
      className={`cursor-pointer transition-colors ${language === lang ? 'font-bold text-brand-yellow' : 'hover:text-gray-300'}`}
    >
      {label}
    </span>
  );

  return (
    <header className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-brand-green text-white text-[10px] md:text-xs lg:text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <a href="tel:+60124929882" className="flex items-center gap-1 hover:text-brand-yellow transition-colors">
              <Phone size={14} /> +6012-492 9882
            </a>
            <a href="mailto:sales@wonderfulvf.com" className="hidden sm:flex items-center gap-1 hover:text-brand-yellow transition-colors">
              <Mail size={14} /> sales@wonderfulvf.com
            </a>
          </div>
          <div className="flex gap-3">
            <LangButton lang="en" label="EN" />
            <LangButton lang="bm" label="BM" />
            <LangButton lang="cn" label="CN" />
          </div>
        </div>
      </div>

      {/* Main Nav - Responsive Padding: Smaller on Tablet (py-3), Larger on Desktop (py-5) */}
      <div className="container mx-auto px-4 py-2 md:py-3 lg:py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            {/* 1. Logo Icon Image - Responsive Size */}
            <div className="relative">
                 <img 
                  src="/assets/images/logo.png" 
                  onError={(e) => handleImageError(e, 'logo')}
                  alt="Wonderful V&F Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain group-hover:scale-105 transition-transform"
                />
            </div>
           
            {/* Side-by-side Layout for Text Image and Company Name */}
            <div className="flex items-center gap-2 md:gap-2 lg:gap-3">
              {/* 2. Rainbow "Wonderful" Text Image - Responsive Height */}
              <img 
                src="/assets/images/wonderful_text.png" 
                onError={(e) => handleImageError(e, 'text')}
                alt="Wonderful" 
                className="h-6 md:h-8 lg:h-10 w-auto object-contain" 
              />
              {/* 3. V&F Text - Responsive Font Size */}
              <span className="text-xs md:text-base lg:text-xl font-extrabold text-gray-700 tracking-widest uppercase leading-none ml-1 mt-1">
                V&F Sdn. Bhd.
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Responsive Gap and Font Size */}
          {/* hidden on mobile (<md), flex on tablet (md+). 
              Text is text-sm on tablet, text-base on desktop (lg+). 
              Gap is gap-5 on tablet, gap-10 on desktop. */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`md:text-sm lg:text-base font-medium transition-colors hover:text-brand-green ${
                  isActive(item.path) ? 'text-brand-green font-bold' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="https://wa.link/qrj860"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 lg:px-6 lg:py-3 bg-brand-green text-white rounded-full md:text-sm lg:text-base font-medium hover:bg-emerald-900 transition-colors shadow-md hover:shadow-lg"
            >
              {t.nav.getQuote}
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen left-0 top-full pb-20 overflow-y-auto">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={closeMenu}
                className={`text-xl py-3 border-b border-gray-50 ${
                  isActive(item.path) ? 'text-brand-green font-bold' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
             <Link
                to="/privacy"
                onClick={closeMenu}
                className={`text-xl py-3 border-b border-gray-50 ${
                  isActive('/privacy') ? 'text-brand-green font-bold' : 'text-gray-600'
                }`}
              >
                {t.nav.privacy}
              </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;