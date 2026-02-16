import { Product, FAQItem, TimelineEvent, Language } from './types';
import React from 'react';

// Categories translations map
const categoriesMap: Record<Language, Record<string, string>> = {
  en: {
    'CORN SERIES': 'CORN SERIES',
    'ROOTS & TUBERS': 'ROOTS & TUBERS',
    'FRUITS': 'FRUITS',
    'VEGETABLES': 'VEGETABLES & OTHERS'
  },
  bm: {
    'CORN SERIES': 'SIRI JAGUNG',
    'ROOTS & TUBERS': 'UBI & AKAR',
    'FRUITS': 'BUAH-BUAHAN',
    'VEGETABLES': 'SAYUR-SAYURAN & LAIN-LAIN'
  },
  cn: {
    'CORN SERIES': '玉米系列',
    'ROOTS & TUBERS': '根茎类',
    'FRUITS': '水果系列',
    'VEGETABLES': '蔬菜与其他'
  }
};

export const getProducts = (lang: Language): Product[] => {
  const t = (en: string, bm: string, cn: string) => {
    if (lang === 'bm') return bm;
    if (lang === 'cn') return cn;
    return en;
  };
  
  const cat = (c: string) => categoriesMap[lang][c] || c;

  return [
  // --- 1. CORN SERIES ---
  
  {
    id: 'c1',
    name: t('Sweet Corn (Bulk)', 'Jagung Manis (Pukal)', '甜玉米 (散装)'),
    category: cat('CORN SERIES') as any,
    description: t('Sweet Corn Grades A, B, and C. High quality fresh harvest.', 'Jagung Manis Gred A, B, dan C. Tuai segar berkualiti tinggi.', '甜玉米 A、B 和 C 级。优质新鲜收获。'),
    packaging: t('Sold in quantity of gunny sack', 'Dijual dalam kuantiti guni', '以麻袋数量出售'),
    image: '/images/sweet-corn-bulk.png'
  },
  {
    id: 'c2',
    name: t('Pearl Corn (Bulk)', 'Jagung Mutiara (Pukal)', '珍珠玉米 (散装)'),
    category: cat('CORN SERIES') as any,
    description: t('Pearl Corn Grades A and B. Premium quality.', 'Jagung Mutiara Gred A dan B. Kualiti premium.', '珍珠玉米 A 和 B 级。优质品质。'),
    packaging: t('Sold in quantity of gunny sack', 'Dijual dalam kuantiti guni', '以麻袋数量出售'),
    image: '/images/pearl-corn-bulk.png'
  },
  {
    id: 'c3',
    name: t('Ready-Cut Corn', 'Jagung Siap Potong', '切块玉米'),
    category: cat('CORN SERIES') as any,
    description: t('Corn cobs cut into smaller chunks for your convenience.', 'Tongkol jagung dipotong menjadi ketulan kecil untuk keselesaan anda.', '玉米棒切成小块，方便您使用。'),
    image: '/images/ready-cut-corn.png'
  },
  {
    id: 'c4',
    name: t('Sweet Corn (3 Pcs Pack)', 'Jagung Manis (Pek 3 Kpg)', '甜玉米 (3个装)'),
    category: cat('CORN SERIES') as any,
    description: t('Fresh Sweet Corn pre-packed.', 'Jagung Manis Segar siap dibungkus.', '新鲜甜玉米预包装。'),
    packaging: t('3 pcs pack', 'Pek 3 keping', '3个装'),
    image: '/images/sweet-corn-3pcs.png'
  },
  {
    id: 'c5',
    name: t('Pearl Corn (3 Pcs Pack)', 'Jagung Mutiara (Pek 3 Kpg)', '珍珠玉米 (3个装)'),
    category: cat('CORN SERIES') as any,
    description: t('Fresh Pearl Corn pre-packed.', 'Jagung Mutiara Segar siap dibungkus.', '新鲜珍珠玉米预包装。'),
    packaging: t('3 pcs pack', 'Pek 3 keping', '3个装'),
    image: '/images/pearl-corn-3pcs.png'
  },
  {
    id: 'c6',
    name: t('Sweet Corn Whole Kernel (2kg)', 'Isi Jagung Manis (2kg)', '甜玉米粒 (2公斤)'),
    category: cat('CORN SERIES') as any,
    description: t('Whole kernel, non-cut made in Malaysia kernel.', 'Isi penuh, bukan potong, buatan Malaysia.', '全粒，非切块，马来西亚制造。'),
    packaging: t('2kg pack', 'Pek 2kg', '2公斤装'),
    image: '/images/sweet-corn-2kg.png'
  },
  {
    id: 'c7',
    name: t('Sweet Corn (2 Pcs Pack)', 'Jagung Manis (Pek 2 Kpg)', '甜玉米 (2个装)'),
    category: cat('CORN SERIES') as any,
    description: t('Fresh Sweet Corn pre-packed.', 'Jagung Manis Segar siap dibungkus.', '新鲜甜玉米预包装。'),
    packaging: t('2 pcs pack', 'Pek 2 keping', '2个装'),
    image: '/images/sweet-corn-2pcs.png'
  },
  {
    id: 'c8',
    name: t('Pearl Corn (2 Pcs Pack)', 'Jagung Mutiara (Pek 2 Kpg)', '珍珠玉米 (2个装)'),
    category: cat('CORN SERIES') as any,
    description: t('Fresh Pearl Corn pre-packed.', 'Jagung Mutiara Segar siap dibungkus.', '新鲜珍珠玉米预包装。'),
    packaging: t('2 pcs pack', 'Pek 2 keping', '2个装'),
    image: '/images/pearl-corn-2pcs.png'
  },
  {
    id: 'c9',
    name: t('Sweet Corn Whole Kernel (500g)', 'Isi Jagung Manis (500g)', '甜玉米粒 (500克)'),
    category: cat('CORN SERIES') as any,
    description: t('Whole kernel, non-cut made in Malaysia kernel.', 'Isi penuh, bukan potong, buatan Malaysia.', '全粒，非切块，马来西亚制造。'),
    packaging: t('500g pack', 'Pek 500g', '500克装'),
    image: '/images/sweet-corn-500g.png'
  },

  // --- 2. ROOTS & TUBERS ---

  {
    id: 'f3',
    name: t('Sweet Potato', 'Ubi Keledek', '番薯'),
    category: cat('ROOTS & TUBERS') as any,
    description: t('Known for many health benefits and high Vitamin A content.', 'Diketahui mempunyai banyak manfaat kesihatan dan kandungan Vitamin A yang tinggi.', '以其众多健康益处和高维生素A含量而闻名。'),
    image: '/images/sweetpotato.png'
  },
  {
    id: 'f4',
    name: t('Ubi Kayu (Cassava)', 'Ubi Kayu', '木薯 (Ubi Kayu)'),
    category: cat('ROOTS & TUBERS') as any,
    description: t('Fresh cassava roots, excellent for frying, boiling, or making traditional kuih.', 'Ubi kayu segar, sangat baik untuk digoreng, direbus, atau membuat kuih tradisional.', '新鲜木薯，非常适合油炸、煮食或制作传统糕点。'),
    image: '/images/ubikayu.png'
  },
  {
    id: 'f1',
    name: t('Yam Bean (Sengkuang)', 'Sengkuang', '沙葛 (Sengkuang)'),
    category: cat('ROOTS & TUBERS') as any,
    description: t('Crispy and sweet, suitable for rojak or cooking.', 'Renyah dan manis, sesuai untuk rojak atau masakan.', '脆甜可口，适合制作啰喏或烹饪。'),
    image: '/images/yambean.png'
  },
  {
    id: 'rt4',
    name: t('Local Yam (Keledek Mawar)', 'Keledek Mawar', '本地番薯 (Keledek Mawar)'),
    category: cat('ROOTS & TUBERS') as any,
    description: t('A local favorite, known for its smooth texture and sweetness.', 'Kegemaran tempatan, terkenal dengan tekstur halus dan kemanisannya.', '深受当地喜爱，以其口感顺滑和甜味著称。'),
    image: '/images/local-yam.png'
  },

  // --- 3. FRUITS ---

  {
    id: 'f2',
    name: t('Amra Fruit (Kedondong)', 'Buah Kedondong', '沙梨果 (Kedondong)'),
    category: cat('FRUITS') as any,
    description: t('Crunchy and sour-sweet, perfect for juice or pickles.', 'Rangup dan masam-manis, sesuai untuk jus atau jeruk.', '口感爽脆，酸甜适中，非常适合榨汁或腌制。'),
    image: '/images/amra.png'
  },
  // Jackfruit Removed
  {
    id: 'fr3',
    name: t('Pineapple', 'Nanas', '黄梨'),
    category: cat('FRUITS') as any,
    description: t('Juicy and sweet local pineapples. Perfect for fresh cuts, juices, or cooking.', 'Nanas tempatan yang berjus dan manis. Sesuai untuk potongan segar, jus, atau masakan.', '多汁香甜的本地黄梨。非常适合鲜切、榨汁或烹饪。'),
    image: '/images/pineapple.png'
  },

  // --- 4. VEGETABLES & OTHERS ---
  
  {
    id: 'v2',
    name: t('Pumpkin', 'Labu', '南瓜'),
    category: cat('VEGETABLES') as any,
    description: t('Fresh, high-quality pumpkins perfect for cooking and baking.', 'Labu segar berkualiti tinggi sesuai untuk memasak.', '新鲜优质南瓜，适合烹饪和烘焙。'),
    image: '/images/pumpkin.png'
  },
  {
    id: 'v3',
    name: t('Winter Melon', 'Buah Kundur', '冬瓜'),
    category: cat('VEGETABLES') as any,
    description: t('Ideal for soups, herbal drinks, and fillings.', 'Sesuai untuk sup, minuman herba, dan inti.', '适合用于汤、凉茶和馅料。'),
    image: '/images/wintermelon.png'
  },
  {
    id: 'v4',
    name: t('Chili Kulai (Cili Merah)', 'Cili Kulai (Cili Merah)', '古来红辣椒 (Cili Merah)'),
    category: cat('VEGETABLES') as any,
    description: t('Premium grade Chili Kulai. Known for its thick flesh, vibrant red color, and medium heat—the top choice for making superior sambal.', 'Cili Kulai gred premium. Terkenal dengan isinya yang tebal, warna merah terang, dan kepedasan sederhana—pilihan utama untuk membuat sambal yang unggul.', '优质古来辣椒。以肉厚、色泽鲜红、辣度适中而闻名——制作上等叁巴的首选。'),
    image: '/images/chili-kulai.png'
  },
  {
    id: 'v5',
    name: t('Fresh Peanuts', 'Kacang Tanah', '新鲜花生'),
    category: cat('VEGETABLES') as any,
    description: t('Raw groundnuts in shell. Perfect for boiling (rebus) or roasting.', 'Kacang tanah mentah dalam kulit. Sesuai untuk direbus atau dipanggang.', '带壳生花生。非常适合水煮或烘烤。'),
    image: '/images/fresh-peanuts.png'
  },
  {
    id: 'v6',
    name: t('Chickpeas (Behdao)', 'Kacang Kuda', '鹰嘴豆 (Behdao)'),
    category: cat('VEGETABLES') as any,
    description: t('Wholesome and nutritious. A local favorite for boiling and traditional snacks.', 'Berkhasiat dan bernutrisi. Kegemaran tempatan untuk direbus dan snek tradisional.', '健康营养。本地喜爱的水煮和传统零食。'),
    image: '/images/chickpeas.png'
  }
];
};

export const getFAQs = (lang: Language): FAQItem[] => {
  const t = (en: React.ReactNode, bm: React.ReactNode, cn: React.ReactNode) => {
    if (lang === 'bm') return bm;
    if (lang === 'cn') return cn;
    return en;
  };

  return [
    {
      question: lang === 'bm' ? 'Bagaimana cara membuat pesanan?' : lang === 'cn' ? '我该如何下订单？' : "How do I make an order?",
      answer: t(
        <ol className="list-decimal pl-5 space-y-1">
          <li>Choose the vegetables or fruits (must be more than our minimum order quantity).</li>
          <li>WhatsApp <strong>012-492 9882</strong> or Email: <strong>sales@wonderfulvf.com</strong>.</li>
          <li>A final quotation will be given based on the quantity and type selected.</li>
          <li>After payment is cleared, we will proceed with packaging and arrange delivery.</li>
        </ol>,
        <ol className="list-decimal pl-5 space-y-1">
          <li>Pilih sayur-sayuran atau buah-buahan (mesti melebihi kuantiti pesanan minimum kami).</li>
          <li>WhatsApp <strong>012-492 9882</strong> atau Emel: <strong>sales@wonderfulvf.com</strong>.</li>
          <li>Sebut harga akhir akan diberikan berdasarkan kuantiti dan jenis yang dipilih.</li>
          <li>Selepas bayaran dijelaskan, kami akan meneruskan pembungkusan dan mengatur penghantaran.</li>
        </ol>,
        <ol className="list-decimal pl-5 space-y-1">
          <li>选择蔬菜或水果（必须超过我们的最低订购量）。</li>
          <li>WhatsApp <strong>012-492 9882</strong> 或电邮：<strong>sales@wonderfulvf.com</strong>。</li>
          <li>我们将根据选择的数量和类型提供最终报价。</li>
          <li>付款结清后，我们将进行包装并安排送货。</li>
        </ol>
      )
    },
    {
      question: lang === 'bm' ? 'Apakah polisi pembatalan anda?' : lang === 'cn' ? '你们的取消政策是什么？' : "What is your cancellation policy?",
      answer: lang === 'bm' ? "Selepas penempatan dan pengesahan pesanan, kami tidak akan dapat membatalkan pesanan anda." 
             : lang === 'cn' ? "下单并确认订单后，我们将无法取消您的订单。"
             : "After placement and order confirmation, we will not be able to cancel your order."
    },
    {
      question: lang === 'bm' ? 'Bolehkah saya memulangkan pesanan yang tidak saya mahu?' : lang === 'cn' ? '我可以退回我不想要的订单吗？' : "Can I return an order that I do not want?",
      answer: t(
        <div>
          <p>Although orders cannot be canceled, we allow the return of merchandise on valid grounds as follows:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>The delivered product does not follow the order confirmation.</li>
            <li>The product is spoiled/broken when it arrives.</li>
          </ul>
        </div>,
        <div>
          <p>Walaupun pesanan tidak boleh dibatalkan, kami membenarkan pemulangan barangan atas alasan sah seperti berikut:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Produk yang dihantar tidak mengikut pengesahan pesanan.</li>
            <li>Produk rosak/pecah apabila sampai.</li>
          </ul>
        </div>,
        <div>
          <p>虽然订单无法取消，但我们允许基于以下有效理由退货：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>交付的产品不符合订单确认。</li>
            <li>产品送达时已变质/损坏。</li>
          </ul>
        </div>
      )
    },
    {
      question: lang === 'bm' ? 'Bolehkah anda membekalkan produk yang tiada dalam senarai anda?' : lang === 'cn' ? '你们能提供不在清单上的产品吗？' : "Can you supply a product that is not on your list?",
      answer: lang === 'bm' ? "Ya. Jika tiada dalam senarai produk kami, anda boleh menghubungi kami dan kami mungkin mendapatkannya untuk keperluan perniagaan anda."
             : lang === 'cn' ? "可以。如果不在我们的产品清单上，您可以联系我们，我们可以为您的业务需求寻找它。"
             : "Yes. If it is not on our product list, you can contact us and we may get it for your business needs."
    },
    {
      question: lang === 'bm' ? 'Adakah sayur-sayuran anda segar untuk keperluan perniagaan saya?' : lang === 'cn' ? '你们的蔬菜对我的生意来说新鲜吗？' : "Are your vegetables fresh for my business needs?",
      answer: lang === 'bm' ? "Pasti. Pilihan segar meningkatkan keyakinan anda terhadap kami. Kami bersedia menawarkan perkhidmatan yang lebih baik kepada anda."
             : lang === 'cn' ? "当然。新鲜的选择增强了您对我们的信心。我们准备为您提供更好的服务。"
             : "Definitely. Fresh selection boosts your confidence in us. We are ready to offer you a better service."
    }
  ];
};

export const getTimeline = (lang: Language): TimelineEvent[] => {
  const t = (en: string, bm: string, cn: string) => {
    if (lang === 'bm') return bm;
    if (lang === 'cn') return cn;
    return en;
  };

  return [
    {
      year: '2001',
      title: t('Founding', 'Penubuhan', '成立'),
      description: t(
        'Humble beginnings as a family enterprise founded by Mr. Quah KS, specializing in local fresh produce distribution.',
        'Permulaan sederhana sebagai perusahaan keluarga yang diasaskan oleh Encik Quah KS, pakar dalam pengedaran hasil segar tempatan.',
        '由Quah KS先生创立的家族企业起步，专注于当地新鲜农产品分销。'
      )
    },
    {
      year: '2011',
      title: t('Rebranding to D Wonderful', 'Penjenamaan semula ke D Wonderful', '更名为 D Wonderful'),
      description: t(
        'Increased supplier network by 3X and expanded our dedicated delivery fleet.',
        'Meningkatkan rangkaian pembekal sebanyak 3X dan mengembangkan armada penghantaran khusus kami.',
        '供应商网络增加了3倍，并扩大了我们的专属配送车队。'
      )
    },
    {
      year: '2019',
      title: t('Wonderful V&F Sdn. Bhd.', 'Wonderful V&F Sdn. Bhd.', 'Wonderful V&F Sdn. Bhd.'),
      description: t(
        'Incorporated as Wonderful V&F Sdn. Bhd. Modernized our operations and successfully expanded our daily distribution network across 7 states.',
        'Diperbadankan sebagai Wonderful V&F Sdn. Bhd. Memodenkan operasi kami dan berjaya mengembangkan rangkaian pengedaran harian kami di 7 negeri.',
        '注册为 Wonderful V&F Sdn. Bhd.。现代化我们的运营，并成功将我们的日常分销网络扩展到7个州。'
      )
    }
  ];
};