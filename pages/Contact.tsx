import React from 'react';
import { Phone, Mail, MapPin, Clock, CreditCard, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-28 md:pt-32 lg:pt-44 pb-20 bg-gradient-to-b from-emerald-50 to-amber-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-brand-dark mb-16">{t.contactPage.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Info Side */}
          <div className="h-full">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-brand-green h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-brand-green mb-6">{t.contactPage.infoTitle}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-3 rounded-full text-brand-green">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.contactPage.phone}</p>
                    <p className="text-gray-600">+604-611-8825 / +6012-492-9882</p>
                    <p className="text-gray-600">WhatsApp: 012-492 9882</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-emerald-50 p-3 rounded-full text-brand-green">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.contactPage.email}</p>
                    <a href="mailto:sales@wonderfulvf.com" className="text-gray-600 hover:text-brand-green">sales@wonderfulvf.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-emerald-50 p-3 rounded-full text-brand-green">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-4 w-full">
                    <div>
                        <p className="font-bold text-gray-900 mb-1">{t.contactPage.address} (Penang HQ)</p>
                        <p className="text-gray-600">
                        22, 24, 26 & 28 Solok Kekabu 1, Taman Desa Jelita, <br/>
                        11960 Bayan Lepas, Pulau Pinang
                        </p>
                    </div>
                    <div className="border-t border-gray-100 pt-3">
                        <p className="font-bold text-gray-900 mb-1">{t.contactPage.address} (Johor)</p>
                        <p className="text-gray-600">
                        No. 21, Jalan Perdagangan 16, Taman University, <br/>
                        81300 Skudai, Johor
                        </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-emerald-50 p-3 rounded-full text-brand-green">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.contactPage.hours}</p>
                    <p className="text-gray-600">{t.contactPage.hoursDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side - Set to h-full to match contact info height */}
          <div className="h-full min-h-[450px] lg:min-h-0 rounded-2xl overflow-hidden shadow-lg bg-gray-100 border-4 border-white/50 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4192.984143420075!2d100.27219962098502!3d5.279264785688625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304abf3ae1041d03%3A0xd1e6f1aeb64c142!2sWonderful%20V%26F%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1765203236253!5m2!1sen!2smy" 
               className="w-full h-full"
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Wonderful V&F Penang HQ"
             ></iframe>
          </div>
        </div>

        {/* Payment Info - Full Width */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-brand-green mb-20">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CreditCard className="text-brand-yellow" /> {t.contactPage.paymentTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Public Bank */}
              <div className="space-y-3 text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p><span className="font-semibold block text-brand-green">{t.contactPage.bank}:</span> Public Bank Berhad</p>
                <p><span className="font-semibold block text-brand-green">{t.contactPage.accName}:</span> WONDERFUL V&F SDN. BHD.</p>
                <p><span className="font-semibold block text-brand-green">{t.contactPage.accNo}:</span> 3210203703</p>
              </div>

              {/* CIMB Bank */}
              <div className="space-y-3 text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p><span className="font-semibold block text-brand-green">{t.contactPage.bank}:</span> CIMB Bank</p>
                <p><span className="font-semibold block text-brand-green">{t.contactPage.accName}:</span> WONDERFUL V&F SDN. BHD.</p>
                <p><span className="font-semibold block text-brand-green">{t.contactPage.accNo}:</span> 8605692815</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 font-medium">{t.contactPage.regNo}: 201801030640 (1292666-X)</p>
            </div>
        </div>

        {/* Facebook Section */}
        <div className="max-w-4xl mx-auto text-center border-t border-brand-green/10 pt-12">
           <h2 className="text-3xl font-bold text-brand-dark mb-8 flex items-center justify-center gap-3">
             <div className="bg-blue-600 rounded-full p-2 text-white shadow-lg">
                <Facebook size={24} fill="currentColor" />
             </div>
             {t.contactPage.facebookTitle}
           </h2>
           
           <p className="text-gray-500 mb-6 max-w-lg mx-auto">
             {language === 'en' ? "Stay updated with our latest harvests, delivery schedules, and news by following us on Facebook." : 
              language === 'bm' ? "Kekal kemas kini dengan tuaian terkini, jadual penghantaran, dan berita kami dengan mengikuti kami di Facebook." : 
              "关注我们的Facebook，了解最新的收获、送货时间表和新闻。"}
           </p>

           <div className="flex justify-center">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 inline-block overflow-hidden">
                 <iframe 
                   src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FWonderful-VF-Sdn-Bhd-100067877714757%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                   width="500" 
                   height="600" 
                   style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }} 
                   scrolling="no" 
                   frameBorder="0" 
                   allowFullScreen={true} 
                   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                   title="Facebook Page"
                 ></iframe>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;