import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle, Sprout, MapPin, ChevronRight, TrendingUp, Smile, ChevronDown } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

// Counter Component for rolling numbers
const Counter = ({ to, suffix = "", decimals = 0 }: { to: number, suffix?: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        const formatted = value.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        node.textContent = formatted + suffix;
      },
    });

    return () => controls.stop();
  }, [to, inView, suffix, decimals]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

// Component for Interactive Region Display
const RegionCard = ({ 
  title, 
  desc, 
  iconColor, 
  borderColor,
  hoverBorder
}: { 
  title: string, 
  desc: string, 
  iconColor: string, 
  borderColor: string,
  hoverBorder: string
}) => {
  // Split comma-separated string into array
  const items = desc.split(',').map(s => s.trim());
  
  return (
    <div className={`relative bg-gray-800/60 backdrop-blur-md rounded-xl p-3 md:p-4 border border-gray-700 ${hoverBorder} transition-all duration-300 group hover:bg-gray-800/80 hover:shadow-lg`}>
      {/* Side Accent Line */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${borderColor} rounded-l-xl`}></div>
      
      <div className="pl-3 md:pl-4">
        <div className="flex items-center gap-2 mb-2 md:mb-3">
           <MapPin className={`${iconColor} group-hover:scale-110 transition-transform duration-300 w-4 h-4 md:w-5 md:h-5`} />
           <h3 className="text-lg md:text-xl font-serif font-bold text-white tracking-wide group-hover:text-white/90">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-1.5 md:gap-2">
           {items.map((item, i) => (
             <span 
               key={i} 
               className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 bg-gray-900/50 rounded-md border border-gray-600 text-gray-200 text-xs md:text-sm lg:text-base font-medium hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all shadow-sm cursor-default"
             >
               {item}
             </span>
           ))}
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="/assets/images/hero_bg.png" 
            onError={(e) => e.currentTarget.src = "https://picsum.photos/seed/cornfield/1920/1080"}
            alt="Fresh Corn Field" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Responsive padding top to clear navbar: pt-24 mobile, pt-28 tablet, pt-44 desktop */}
        <div className="container mx-auto px-4 z-10 text-white pt-24 md:pt-28 lg:pt-44">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-brand-yellow/90 text-brand-dark px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              {t.hero.tag}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
              {t.hero.title1} <br />
              <span className="text-brand-yellow">{t.hero.title2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light max-w-3xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-brand-green hover:bg-emerald-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                {t.hero.ctaPrice} <Truck size={20} />
              </Link>
              <Link 
                to="/products" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full font-bold text-lg transition-all border border-white/30 flex items-center justify-center"
              >
                {t.hero.ctaProducts}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Changed to Arrow */}
        {/* Wrapped in a div for positioning to avoid conflict between Tailwind transform and Framer Motion transform */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="text-white flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest opacity-80 whitespace-nowrap">{t.hero.scroll}</span>
            <ChevronDown size={32} className="text-white/80 hover:text-brand-yellow transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] p-[3px] bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green shadow-xl"
          >
            <div className="bg-white rounded-[1.8rem] p-8 md:p-12 relative overflow-hidden">
              {/* Subtle patterned background inside the card */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                
                {/* Stat 1 */}
                <div className="text-center group cursor-default pt-6 md:pt-0 flex flex-col items-center justify-center">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div className="p-3 md:p-4 bg-brand-lightGreen rounded-full text-brand-green group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm">
                      <TrendingUp size={28} className="md:w-8 md:h-8" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 font-serif tabular-nums tracking-tight">
                    <Counter to={2132988} />
                  </div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs lg:text-sm group-hover:text-brand-green transition-colors">
                    {t.stats.corns}
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center group cursor-default pt-6 md:pt-0 flex flex-col items-center justify-center">
                   <div className="flex justify-center mb-3 md:mb-4">
                    <div className="p-3 md:p-4 bg-yellow-100 rounded-full text-brand-yellow group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300 shadow-sm">
                      <Smile size={28} className="md:w-8 md:h-8" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 font-serif tabular-nums tracking-tight">
                    <Counter to={99.8} suffix="%" decimals={1} />
                  </div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs lg:text-sm group-hover:text-brand-yellow transition-colors">
                    {t.stats.satisfaction}
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="text-center group cursor-default pt-6 md:pt-0 flex flex-col items-center justify-center">
                   <div className="flex justify-center mb-3 md:mb-4">
                    <div className="p-3 md:p-4 bg-emerald-100 rounded-full text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Sprout size={28} className="md:w-8 md:h-8" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 font-serif tabular-nums tracking-tight">
                    <Counter to={100} suffix="%" />
                  </div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs lg:text-sm group-hover:text-emerald-600 transition-colors">
                    {t.stats.freshness}
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-green rounded-full opacity-10"></div>
              <img 
                src="/assets/images/wonderful-lorry.png" 
                onError={(e) => e.currentTarget.src = "https://picsum.photos/seed/delivery/800/600"}
                alt="Delivery Truck" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
              />
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg z-20 hidden md:block max-w-xs border-l-4 border-brand-green">
                <p className="font-serif italic text-gray-700">"Direct from farm to your business."</p>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sprout className="text-brand-green" />
                  <span className="text-brand-green font-bold uppercase tracking-wider text-sm">{t.commitment.tag}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                  {t.commitment.title1} <br/>
                  <span className="text-brand-green">{t.commitment.title2}</span>
                </h2>
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <CheckCircle className="text-brand-yellow fill-brand-yellow text-white" /> 
                  {t.commitment.subtitle}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t.commitment.desc1}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-gray-200 pl-4">
                  {t.commitment.desc2}
                </p>
                
                <Link to="/about" className="text-brand-green font-bold hover:text-brand-dark transition-colors inline-flex items-center gap-2 group">
                  {t.commitment.learnMore}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Delivery Section */}
      <section className="py-16 bg-brand-dark relative text-white overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-brand-dark z-0"></div>
        
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent opacity-50 z-0"></div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="lg:w-5/12">
              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-brand-yellow/20 rounded-full text-brand-yellow mb-6">
                  <Truck size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">{t.delivery.title}</h2>
                <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                  {t.delivery.desc}
                </p>

                <div className="space-y-4">
                  {/* Northern Region */}
                  <RegionCard 
                    title={t.delivery.north} 
                    desc={t.delivery.northDesc}
                    iconColor="text-emerald-400"
                    borderColor="bg-emerald-500"
                    hoverBorder="hover:border-emerald-500/50"
                  />

                  {/* Southern Region */}
                  <RegionCard 
                    title={t.delivery.south} 
                    desc={t.delivery.southDesc}
                    iconColor="text-yellow-400"
                    borderColor="bg-yellow-500"
                    hoverBorder="hover:border-yellow-500/50"
                  />

                  {/* East Coast */}
                  <RegionCard 
                    title={t.delivery.east} 
                    desc={t.delivery.eastDesc}
                    iconColor="text-blue-400"
                    borderColor="bg-blue-500"
                    hoverBorder="hover:border-blue-500/50"
                  />
                </div>

                <div className="mt-10">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-yellow text-brand-dark rounded-full font-bold text-base md:text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
                  >
                    <span>{t.delivery.check}</span>
                    <ChevronRight size={22} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="lg:w-7/12 w-full flex justify-center lg:justify-end relative">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="w-full max-w-xl relative z-10"
              >
                <img 
                  src="/assets/images/delivery_map.png"
                  onError={(e) => e.currentTarget.src = "https://placehold.co/600x750/111827/facc15?text=Map+Placeholder"}
                  alt="Delivery Map" 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
                />
              </motion.div>
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 blur-[80px] rounded-full z-0 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;