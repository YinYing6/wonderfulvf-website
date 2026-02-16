import React, { useRef } from 'react';
import { getTimeline } from '../data';
import { ShieldCheck, Handshake, Thermometer, Eye, Camera, Clock, Sprout, ChevronRight, ChevronsRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

// --- Custom "Growth" Icons ---

// 1. The Seed (2001) - Redesigned to be simpler
const SeedIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* Ground Line */}
    <line x1="15" y1="80" x2="85" y2="80" className="text-amber-900/30" />
    {/* The Seed (Teardrop shape) */}
    <path d="M50 80 C 30 80, 30 50, 50 25 C 70 50, 70 80, 50 80 Z" className="fill-amber-700 text-amber-900" />
  </svg>
);

// 2. The Sapling (2011)
const SaplingIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    {/* Stem */}
    <path d="M50 90 L 50 45" className="text-emerald-700" />
    {/* Left Leaf */}
    <path d="M50 70 Q 20 60 20 40 Q 35 40 50 60" className="fill-emerald-500 text-emerald-700" />
    {/* Right Leaf */}
    <path d="M50 55 Q 80 45 80 25 Q 65 25 50 45" className="fill-emerald-500 text-emerald-700" />
  </svg>
);

// 3. The Corn Harvest (2019)
const CornHarvestIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
     {/* Husks (Outer Leaves) */}
     <path d="M50 90 Q 25 60 35 20" className="fill-emerald-600 text-emerald-800" />
     <path d="M50 90 Q 75 60 65 20" className="fill-emerald-600 text-emerald-800" />
     {/* Corn Cob Body */}
     <ellipse cx="50" cy="45" rx="12" ry="30" className="fill-brand-yellow text-orange-400" />
     {/* Kernels Detail */}
     <path d="M42 25 L 42 65" className="text-orange-300 opacity-60" strokeWidth="2" />
     <path d="M50 20 L 50 70" className="text-orange-300 opacity-60" strokeWidth="2" />
     <path d="M58 25 L 58 65" className="text-orange-300 opacity-60" strokeWidth="2" />
     {/* Silk */}
     <path d="M50 15 L 45 5" className="text-amber-300" />
     <path d="M50 15 L 55 5" className="text-amber-300" />
  </svg>
);

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  // Timeline Order: 2001 (Start) -> 2011 -> 2019 (End)
  const timeline = getTimeline(language);

  // ----------------------------------------------------------------------------------
  // GALLERY SETTINGS
  // ----------------------------------------------------------------------------------
  // HOW TO ADD YOUR OWN PHOTOS:
  // 1. Upload your image files (e.g., 'warehouse.jpg') to the 'public/images/' folder.
  // 2. Edit the list below.
  //    - Change 'src' to: "/images/your_filename.jpg"
  //    - Change 'alt' to: "Your Description"
  // ----------------------------------------------------------------------------------
  const galleryImages = [
    { 
      src: "/images/penang-company.png", // Example: "/images/warehouse.jpg"
      alt: "Penang Company"                          // Description shown on hover
    },
    { 
      src: "/images/wonderful-lorry.png",   
      alt: "Delivery Fleet" 
    },
    { 
      src: "/images/johor-company.png", 
      alt: "Johor Company" 
    },
  ];

  const farmImages = [
    { 
      src: "/images/farm/yambean-farm.png", 
      alt: "Yam Bean Farm" 
    },
    { 
      src: "/images/farm/sweetpotato-farm.png", 
      alt: "Sweet Potato Farm" 
    },
    { 
      src: "/images/farm/pineapple-farm.png", 
      alt: "Pineapple Farm" 
    },
    { 
      src: "/images/farm/pumpkin-bulk.png", 
      alt: "Pumpkin Bulk" 
    },
    { 
      src: "/images/farm/sweetcorn-farm.png", 
      alt: "Sweet Corn Farm" 
    },
  ];

  const pillars = [
    {
      icon: <Handshake size={32} />,
      title: t.aboutPage.pillars.farm,
      desc: t.aboutPage.pillars.farmDesc,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Thermometer size={32} />,
      title: t.aboutPage.pillars.postHarvest,
      desc: t.aboutPage.pillars.postHarvestDesc,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Eye size={32} />,
      title: t.aboutPage.pillars.inspection,
      desc: t.aboutPage.pillars.inspectionDesc,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Clock size={32} />,
      title: t.aboutPage.pillars.coldChain,
      desc: t.aboutPage.pillars.coldChainDesc,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const getEventIcon = (index: number) => {
    // Smaller icon classes
    const iconClass = "w-8 h-8 md:w-12 md:h-12"; 
    if (index === 0) return <SeedIcon className={iconClass} />; 
    if (index === 1) return <SaplingIcon className={iconClass} />;
    return <CornHarvestIcon className={iconClass} />;
  };

  return (
    <div className="pt-28 md:pt-32 lg:pt-44 pb-20 bg-gradient-to-b from-emerald-50 to-amber-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">{t.aboutPage.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t.aboutPage.subtitle}
          </p>
        </div>

        {/* Timeline Section - Growing Pattern Visualization */}
        <div className="mb-32 relative">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-16">{t.aboutPage.journey}</h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* The Stalk (Central Line) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-b from-amber-700 via-emerald-600 to-brand-green rounded-full transform md:-translate-x-1/2 z-0"></div>
            
            {/* Decoration Leaves */}
            <div className="absolute left-8 md:left-1/2 top-1/4 w-6 h-6 bg-emerald-600 rounded-tr-full rounded-bl-full transform md:-translate-x-1/2 -translate-x-1/2 rotate-45 hidden md:block"></div>
            <div className="absolute left-8 md:left-1/2 top-3/4 w-8 h-8 bg-brand-green rounded-tl-full rounded-br-full transform md:-translate-x-1/2 -translate-x-1/2 -rotate-45 hidden md:block"></div>

            <div className="space-y-12 md:space-y-12 py-4">
              {timeline.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full pl-24 md:pl-0 md:text-right">
                    <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl border-b-4 border-brand-green transition-all duration-300 relative group ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      <span className="inline-block px-4 py-1 bg-brand-lightGreen text-brand-green font-bold rounded-full text-sm mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      
                      {/* Connector Arrow */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-8 border-transparent ${index % 2 === 0 ? '-left-4 border-r-white' : '-right-4 border-l-white'}`}></div>
                    </div>
                  </div>

                  {/* The Icon (Center) */}
                  {/* Reduced size: w-14 h-14 mobile, w-20 h-20 desktop */}
                  <div className="absolute left-8 md:left-1/2 w-14 h-14 md:w-20 md:h-20 bg-white rounded-full border-4 border-emerald-100 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg">
                    {getEventIcon(index)}
                  </div>
                  
                  {/* Spacer for layout balance */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Existing Gallery Section: Our Operations in Action */}
        <div className="mb-20">
           <div className="flex items-center justify-center gap-3 mb-10">
             <Camera className="text-brand-green w-8 h-8" />
             <h2 className="text-3xl font-bold text-center text-brand-dark">{t.aboutPage.galleryTitle}</h2>
           </div>
           
           <div className="relative">
             {/* Right-aligned Vertical Scroll Indicator */}
             <div className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none flex items-center justify-end w-20 bg-gradient-to-l from-white/60 to-transparent rounded-r-2xl">
                <div className="bg-white/90 backdrop-blur-md py-4 px-1.5 rounded-l-xl shadow-lg border-y border-l border-emerald-50 flex flex-col items-center gap-2 animate-pulse mr-2">
                   <ChevronsRight className="text-brand-green w-5 h-5" />
                   <span className="text-[10px] font-bold text-emerald-900 tracking-widest uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                     {t.hero.scroll} &gt;&gt;
                   </span>
                </div>
             </div>

             {/* Horizontal Scroll Container */}
             <div 
               className="flex overflow-x-auto gap-6 pb-12 px-4 snap-x snap-mandatory no-scrollbar"
               style={{ scrollBehavior: 'smooth' }}
             >
               {galleryImages.map((img, idx) => (
                 <motion.div 
                   key={idx}
                   className="flex-shrink-0 w-[85vw] sm:w-80 md:w-96 h-64 md:h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl snap-center relative group border border-gray-100"
                   whileHover={{ scale: 1.02 }}
                   transition={{ duration: 0.3 }}
                 >
                   <img 
                     src={img.src} 
                     alt={img.alt} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     onError={(e) => {
                       // Fallback if image not found
                       e.currentTarget.src = `https://placehold.co/600x400/e2e8f0/166534?text=${encodeURIComponent(img.alt)}`;
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <p className="text-white font-bold">{img.alt}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>

        {/* NEW: Farm Gallery Section */}
        <div className="mb-32">
           <div className="flex items-center justify-center gap-3 mb-10">
             <Sprout className="text-brand-green w-8 h-8" />
             <h2 className="text-3xl font-bold text-center text-brand-dark">{t.aboutPage.farmGalleryTitle}</h2>
           </div>
           
           <div className="relative">
             {/* Right-aligned Vertical Scroll Indicator */}
             <div className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none flex items-center justify-end w-20 bg-gradient-to-l from-white/60 to-transparent rounded-r-2xl">
                <div className="bg-white/90 backdrop-blur-md py-4 px-1.5 rounded-l-xl shadow-lg border-y border-l border-emerald-50 flex flex-col items-center gap-2 animate-pulse mr-2">
                   <ChevronsRight className="text-brand-green w-5 h-5" />
                   <span className="text-[10px] font-bold text-emerald-900 tracking-widest uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                     {t.hero.scroll} &gt;&gt;
                   </span>
                </div>
             </div>

             {/* Horizontal Scroll Container */}
             <div 
               className="flex overflow-x-auto gap-6 pb-12 px-4 snap-x snap-mandatory no-scrollbar"
               style={{ scrollBehavior: 'smooth' }}
             >
               {farmImages.map((img, idx) => (
                 <motion.div 
                   key={idx}
                   className="flex-shrink-0 w-[85vw] sm:w-80 md:w-96 h-64 md:h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl snap-center relative group border border-gray-100"
                   whileHover={{ scale: 1.02 }}
                   transition={{ duration: 0.3 }}
                 >
                   <img 
                     src={img.src} 
                     alt={img.alt} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     onError={(e) => {
                       e.currentTarget.src = `https://placehold.co/600x400/e2e8f0/166534?text=${encodeURIComponent(img.alt)}`;
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <p className="text-white font-bold">{img.alt}</p>
                   </div>
                 </motion.div>
               ))}
               
               {/* Placeholder for adding more */}
               <div className="flex-shrink-0 w-24 h-64 md:h-72 flex items-center justify-center rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 snap-center">
                   <span className="text-gray-400 font-medium rotate-90 whitespace-nowrap">Wonderful V&F</span>
               </div>
             </div>
           </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative border border-gray-100 mb-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark mb-4 flex items-center justify-center gap-2">
                <ShieldCheck className="text-brand-green" size={32} />
                {t.aboutPage.qualityTitle}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.aboutPage.qualityDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${pillar.color}`}>
                    {pillar.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-500">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;