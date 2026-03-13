import React from 'react';
import { getProducts } from '../data';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const ProductCard: React.FC<{ product: Product, packagingLabel: string, inquireLabel: string }> = ({ product, packagingLabel, inquireLabel }) => (
  <div 
    id={product.id}
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col h-full scroll-mt-40"
  >
    <div className="h-56 overflow-hidden relative group">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">
        {product.category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
      {product.packaging && (
        <div className="text-sm font-medium text-brand-green mb-4 bg-brand-lightGreen inline-block px-3 py-1 rounded-lg self-start">
          📦 {product.packaging}
        </div>
      )}
      <a 
        href="https://wa.link/qrj860"
        target="_blank"
        rel="noreferrer"
        className="block w-full text-center bg-brand-dark text-white py-3 rounded-lg hover:bg-brand-green transition-colors font-medium mt-auto"
      >
        {inquireLabel}
      </a>
    </div>
  </div>
);

const Products: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const products = getProducts(language);

  // Helper to find product details safely
  const findProd = (id: string) => products.find(p => p.id === id);
  // Helper to find any product that matches a part of name
  const findProdByName = (partialName: string) => products.find(p => p.name.toLowerCase().includes(partialName.toLowerCase()));

  // Define the 9 highlights requested
  // 1. Corns, 2. Sweet Potato, 3. Ubi Kayu, 4. Yam Bean, 5. Local Yam, 
  // 6. Amra Fruit, 7. Chili Kulai, 8. Pumpkin, 9. Pineapple
  const highlights = [
    { 
      key: 'corns',
      label: language === 'bm' ? 'Jagung' : language === 'cn' ? '玉米' : 'Corns', 
      image: findProd('c1')?.image, 
      targetId: 'c1' 
    },
    { 
      key: 'sweetpotato',
      label: findProd('f3')?.name, 
      image: findProd('f3')?.image, 
      targetId: 'f3' 
    },
    { 
      key: 'cassava',
      label: findProd('f4')?.name, 
      image: findProd('f4')?.image, 
      targetId: 'f4' 
    },
    { 
      key: 'yambean',
      label: findProd('f1')?.name, 
      image: findProd('f1')?.image, 
      targetId: 'f1' 
    },
    { 
      key: 'localyam',
      label: findProd('rt4')?.name, 
      image: findProd('rt4')?.image, 
      targetId: 'rt4' 
    },
    { 
      key: 'amra',
      label: findProd('f2')?.name, 
      image: findProd('f2')?.image, 
      targetId: 'f2' 
    },
    { 
      key: 'chilikulai',
      label: findProd('v4')?.name, 
      image: findProd('v4')?.image, 
      targetId: 'v4' 
    },
    { 
      key: 'pumpkin',
      label: findProd('v2')?.name, 
      image: findProd('v2')?.image, 
      targetId: 'v2' 
    },
    { 
      key: 'pineapple',
      label: findProd('fr3')?.name, 
      image: findProd('fr3')?.image, 
      targetId: 'fr3' 
    }
  ];

  const sections = [
    { 
      id: 'corn', 
      title: language === 'bm' ? 'SIRI JAGUNG' : language === 'cn' ? '玉米系列' : 'CORN SERIES',
      items: products.filter(p => p.id.startsWith('c')) 
    },
    { 
      id: 'roots', 
      title: language === 'bm' ? 'UBI & AKAR' : language === 'cn' ? '根茎类' : 'ROOTS & TUBERS',
      items: products.filter(p => ['f3', 'f4', 'f1', 'rt4'].includes(p.id))
    },
    { 
      id: 'fruits', 
      title: language === 'bm' ? 'BUAH-BUAHAN' : language === 'cn' ? '水果系列' : 'FRUITS',
      items: products.filter(p => ['f2', 'fr3'].includes(p.id))
    },
    { 
      id: 'veg', 
      title: language === 'bm' ? 'SAYUR-SAYURAN & LAIN-LAIN' : language === 'cn' ? '蔬菜与其他' : 'VEGETABLES & OTHERS',
      items: products.filter(p => ['v2', 'v3', 'v4', 'v5', 'v6'].includes(p.id))
    }
  ];

  const handleScrollTo = (id: string | undefined) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    // Responsive padding: pt-28 (tablet) to pt-44 (desktop)
    <div className="pt-28 md:pt-32 lg:pt-44 pb-20 bg-gradient-to-b from-emerald-50 to-amber-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">{t.productsPage.title}</h1>
          <p className="text-lg text-gray-600">
            {t.productsPage.subtitle}
          </p>
        </div>

        {/* Product Highlights Section - 9 Circles */}
        {/* Mobile: Grid 3 cols. Tablet/Desktop: Flex */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-8 md:flex md:flex-wrap md:justify-center md:gap-8 mb-20 px-0 md:px-2">
          {highlights.map((item) => (
            <div 
              key={item.key} 
              onClick={() => handleScrollTo(item.targetId)}
              className="flex flex-col items-center group cursor-pointer w-full md:w-32"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-brand-yellow bg-white">
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="mt-3 md:mt-4 text-xs md:text-sm font-bold text-center text-gray-800 leading-tight group-hover:text-brand-green transition-colors px-1 h-auto md:h-10 flex items-start justify-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Product List */}
        {sections.map((section) => {
          if (section.items.length === 0) return null;

          return (
            <div key={section.id} id={section.id} className="mb-20 scroll-mt-40">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-300 flex-grow"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-green uppercase tracking-wider text-center">{section.title}</h2>
                <div className="h-px bg-gray-300 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    packagingLabel={t.productsPage.packaging} 
                    inquireLabel={t.productsPage.inquire} 
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;