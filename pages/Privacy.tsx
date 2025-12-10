import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Privacy: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-28 md:pt-32 lg:pt-44 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <h1 className="text-3xl font-serif font-bold text-brand-dark mb-8 border-b pb-4">{t.privacyPage.title}</h1>
          
          <div className="prose prose-green max-w-none text-gray-700">
            <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.intro}</h3>
            <p className="mb-4">{t.privacyPage.introText}</p>

            <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.data}</h3>
            <p className="mb-4">{t.privacyPage.dataText}</p>

            <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.use}</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              {t.privacyPage.useList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.security}</h3>
            <p className="mb-4">{t.privacyPage.securityText}</p>

            <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.cookies}</h3>
            <p className="mb-4">{t.privacyPage.cookiesText}</p>

            <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.thirdParty}</h3>
            <p className="mb-4">{t.privacyPage.thirdPartyText}</p>

            <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.rights}</h3>
            <p className="mb-4">{t.privacyPage.rightsText}</p>

            <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.changes}</h3>
            <p className="mb-4">{t.privacyPage.changesText}</p>

             <h3 className="font-bold text-xl text-gray-900 mt-6 mb-2">{t.privacyPage.contact}</h3>
            <p className="mb-4">{t.privacyPage.contactText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;