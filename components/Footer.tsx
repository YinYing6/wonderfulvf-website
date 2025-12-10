import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Wonderful V&F</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Wonderful-VF-Sdn-Bhd-100067877714757/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/wonderful.vf/#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-brand-yellow mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">{t.nav.products}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">{t.nav.faq}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t.nav.contact}</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">{t.nav.privacy}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-brand-yellow mb-6">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-green mt-1 flex-shrink-0" size={20} />
                <div className="text-gray-400 text-sm space-y-3">
                  <div>
                    <span className="block font-bold text-white mb-1">Penang (HQ):</span>
                    22, 24, 26 & 28 Solok Kekabu 1,<br/> Taman Desa Jelita, <br />
                    11960 Bayan Lepas, Pulau Pinang
                  </div>
                  <div>
                    <span className="block font-bold text-white mb-1">Johor:</span>
                    No. 21, Jalan Perdagangan 16,<br/> Taman University, <br />
                    81300 Skudai, Johor
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-green flex-shrink-0" size={20} />
                <a href="tel:+60124929882" className="text-gray-400 hover:text-white">012-492 9882</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-green flex-shrink-0" size={20} />
                <a href="mailto:sales@wonderfulvf.com" className="text-gray-400 hover:text-white">sales@wonderfulvf.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Wonderful V&F Sdn. Bhd. (1292666-X). {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;