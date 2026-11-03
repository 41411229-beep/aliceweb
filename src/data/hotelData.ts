/**
 * PIYAN Luxury Design Hotel & Residences - Taipei
 * Blending Mandarin Oriental's meticulous bespoke butler service
 * with W Hotel's electrifying lifestyle, magnetic nightlife, and avant-garde design.
 */

export interface RoomItem {
  id: string;
  nameZh: string;
  nameEn: string;
  taglineZh: string;
  taglineEn: string;
  sizeSqm: number;
  sizeSqft: number;
  bedZh: string;
  bedEn: string;
  viewZh: string;
  viewEn: string;
  priceTwd: number;
  image: string;
  featured: boolean;
  featuresZh: string[];
  featuresEn: string[];
  bathZh: string;
  bathEn: string;
  descriptionZh: string;
  descriptionEn: string;
  floorPlanZh: string;
  floorPlanEn: string;
}

export interface DiningItem {
  id: string;
  name: string;
  nameZh: string;
  typeZh: string;
  typeEn: string;
  hoursZh: string;
  hoursEn: string;
  dressCodeZh: string;
  dressCodeEn: string;
  descriptionZh: string;
  descriptionEn: string;
  highlightsZh: string[];
  highlightsEn: string[];
  image: string;
  signatureDishZh: string;
  signatureDishEn: string;
}

export interface SpaTreatment {
  id: string;
  nameZh: string;
  nameEn: string;
  durationMin: number;
  priceTwd: number;
  descriptionZh: string;
  descriptionEn: string;
  benefitsZh: string;
  benefitsEn: string;
}

export interface BespokeService {
  id: string;
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
  descriptionZh: string;
  descriptionEn: string;
  icon: string;
}

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'wonderful-skyline',
    nameZh: '奇妙天際客房',
    nameEn: 'Wonderful Skyline King',
    taglineZh: '城市天際線的高空靈感私域',
    taglineEn: 'An elevated sanctuary above the Taipei skyline',
    sizeSqm: 56,
    sizeSqft: 603,
    bedZh: '特大雙人床 (King Bed)',
    bedEn: 'Signature King Bed with 400-thread Egyptian linen',
    viewZh: '台北市景與遠眺陽明山巒',
    viewEn: 'Panoramic City & Mountain View',
    priceTwd: 16800,
    image: '/src/assets/images/piyan_suite_luxury_1793675795382.jpg',
    featured: false,
    featuresZh: ['Bang & Olufsen 360° 環繞音響系統', '客製化情境氛圍智慧調光', 'Nespresso 尊榮膠囊咖啡座', 'illy 特調大師系列', '極速 Wi-Fi 6E 與無線投影'],
    featuresEn: ['Bang & Olufsen 360° sound system', 'Bespoke ambient mood lighting system', 'Nespresso Grand Cru capsule station', 'Fast Wi-Fi 6E & smart streaming'],
    bathZh: '義大利進口大理石雙洗手台、獨立景觀深浸泡澡浴缸、Diptyque 頂級沐浴備品、Dyson 吹風機',
    bathEn: 'Italian marble double vanity, deep soaking skyline tub, Diptyque luxury amenities, Dyson Supersonic hair care',
    descriptionZh: '融合俐落的前衛當代線條與溫潤質地，大片落地玻璃窗將台北絢麗晨曦與璀璨夜色盡收眼底。配備專屬調製香氛與沉浸式音場，成就愜意摩登的下榻體驗。',
    descriptionEn: 'Combining sleek contemporary lines with warm architectural textures. Floor-to-ceiling panoramic windows capture the vibrant Taipei skyline, complemented by bespoke ambient scent and immersive acoustic acoustics.',
    floorPlanZh: '開放式臥室空間 · 獨立起居沙發區 · 步入式景觀衛浴',
    floorPlanEn: 'Open-concept bedroom · Private lounge area · Walk-in skyline bathroom'
  },
  {
    id: 'marvelous-suite',
    nameZh: '驚喜綠洲套房',
    nameEn: 'Marvelous Oasis Suite',
    taglineZh: '雙面環景與獨立私享調酒吧台',
    taglineEn: 'Dual-aspect panoramic vistas with private cocktail bar',
    sizeSqm: 88,
    sizeSqft: 947,
    bedZh: '超大特製名床 (Signature Super King)',
    bedEn: 'Custom Signature Super King with goose down topper',
    viewZh: '台北101景觀與松山林蔭大道',
    viewEn: 'Iconic Taipei 101 & Songshan Boulevard View',
    priceTwd: 28800,
    image: '/src/assets/images/piyan_suite_luxury_1793675795382.jpg',
    featured: true,
    featuresZh: ['獨立寬敞起居會客室', '大理石私人調酒吧台 (含精選烈酒組)', '24小時專屬管家客製化服務', '6款舒眠香氛枕頭菜單自由挑選', '專屬行李拆包與衣物整燙服務'],
    featuresEn: ['Spacious separate living salon', 'Custom marble mixology bar with artisan spirits', '24/7 Dedicated Butler Service', 'Curated 6-option sleep aroma pillow menu', 'Complimentary garment steaming and unpacking'],
    bathZh: '全獨立圓形景觀水療浴缸、雨淋花灑蒸氣室、Le Labo Santal 33 特製大瓶裝備品',
    bathEn: 'Freestanding circular hydrotherapy soaking tub, sensory steam rain shower, bespoke Le Labo Santal 33 amenities',
    descriptionZh: '為品味非凡的旅人打造。客廳配備專屬大理石調酒吧台，隨時由調酒師進駐調製迎賓特調。寬敞的起居格局與臥房完全獨立，完美兼顧社交熱力與深邃靜謐。',
    descriptionEn: 'Crafted for discerning connoisseurs. Features an expansive separate living room with a private marble mixology bar where in-suite mixology can be requested, seamlessly bridging lively entertainment and serene privacy.',
    floorPlanZh: '獨立會客沙發區 · 私人酒吧與中島 · 主臥室套房 · 獨立更衣化妝間',
    floorPlanEn: 'Separate salon lounge · Private bar island · Master bedroom suite · Walk-in dressing room'
  },
  {
    id: 'wow-panoramic-suite',
    nameZh: '頂級驚艷全景套房',
    nameEn: 'WOW Extreme Panoramic Suite',
    taglineZh: '270度天際雲端視界與私人恆溫水療泡池',
    taglineEn: '270-degree skyline summit with private heated vitality spa',
    sizeSqm: 142,
    sizeSqft: 1528,
    bedZh: '客製化雲端巨型特大床',
    bedEn: 'Custom Cloud-Pillow Super King Suite',
    viewZh: '270度台北天際線與璀璨101全視角',
    viewEn: '270° Unobstructed Taipei 101 & Urban Skyline',
    priceTwd: 68000,
    image: '/src/assets/images/piyan_suite_luxury_1793675795382.jpg',
    featured: false,
    featuresZh: ['私人高空景觀恆溫水療泡池', '8人座宴客用餐區與專屬備餐間', '雙專屬管家 24 小時駐點待命', '專屬私人直達電梯通道', '台北米其林星級主廚客房私廚客製晚宴'],
    featuresEn: ['Private heated panoramic skyline vitality spa', '8-guest private dining room & butler pantry', 'Dual 24/7 dedicated master butlers', 'Private express VIP elevator access', 'In-suite private Michelin tasting menu service'],
    bathZh: '雙人景觀極致水療浴池、全套熱帶雨林蒸氣水療套間、頂級奢華香氛備品',
    bathEn: 'Dual-guest panoramic hydro-massage tub, private rainforest steam retreat, bespoke ultra-luxury amenities',
    descriptionZh: '凌駕都市繁華之巔。擁有壯麗270度全景落地窗，將整座台北的動感脈搏納入私藏。配備尊榮宴客餐廳、恆溫水療池與頂級專屬管家團隊，展現登峰造極的當代奢華典範。',
    descriptionEn: 'Perched at the pinnacle of metropolitan splendor. Revel in sweeping 270-degree floor-to-ceiling windows, a private heated vitality spa, grand entertaining dining salon, and elite butler service.',
    floorPlanZh: '玄關廊道 · 尊榮客廳與8人宴會廳 · 私人天際水療露台 · 奢華主臥套房 · 主廚備餐廚房',
    floorPlanEn: 'Grand foyer · Salon & 8-seat banquet dining · Skyline spa terrace · Master suite · Service galley'
  },
  {
    id: 'presidential-villa',
    nameZh: 'PIYAN 尊爵天際總統閣樓',
    nameEn: 'PIYAN Extreme Presidential Villa',
    taglineZh: '全台僅此一間：頂層私人空中泳池與無上限管家款待',
    taglineEn: 'The definitive pinnacle: private rooftop pool & limitless butler hospitality',
    sizeSqm: 260,
    sizeSqft: 2798,
    bedZh: '皇家手工定製奢華大床 (Royal Bespoke King)',
    bedEn: 'Royal Bespoke Handcrafted King with cashmere bedding',
    viewZh: '頂層360度環繞全景',
    viewEn: '360° Master Panoramic Skyline & Horizon View',
    priceTwd: 188000,
    image: '/src/assets/images/piyan_suite_luxury_1793675795382.jpg',
    featured: false,
    featuresZh: ['頂層私人戶外恆溫無邊際泳池與日光露台', '私人典藏恆溫珍稀酒窖 (含珍稀香檳與威士忌)', 'Rolls-Royce Phantom 專屬全天候司機隨行', '私人專屬安保通道與隱密登記入住', 'Whatever/Whenever® 無限制客製專屬管家服務'],
    featuresEn: ['Private rooftop heated infinity pool and sun lounge deck', 'Curated walk-in wine cellar with rare vintages', 'Rolls-Royce Phantom with 24-hour private chauffeur', 'Discreet private VIP security corridor and check-in', 'Limitless Whatever/Whenever® personalized concierge'],
    bathZh: '純金金屬細節雕飾獨立大理石巨型浴池、私人桑拿房與低溫冰水冷療池',
    bathEn: 'Sculpted marble master tub with gilded brass hardware, private Finnish sauna & cold plunge pool',
    descriptionZh: 'PIYAN 的終極傳奇之作。佔據酒店最高雙層樓面，坐擁私人戶外無邊際泳池與星空甲板。專屬頂級管家團隊以文華東方級的極致嚴謹與W飯店的無限熱情，締造全球頂奢旅人夢寐以求的非凡禮遇。',
    descriptionEn: 'The ultimate masterpiece of PIYAN. Spanning the hotel’s top dual levels with a private outdoor heated infinity pool and starry sky deck. Delivered with uncompromising perfection by master butlers.',
    floorPlanZh: '雙層挑高複式 · 私人露天泳池 · 劇院級娛樂沙龍 · 私人健身與理療室 · 總統主臥室',
    floorPlanEn: 'Duplex penthouse layout · Rooftop infinity pool · Cinema salon · Private wellness suite · Master villa'
  }
];

export const DINING_DATA: DiningItem[] = [
  {
    id: 'yan-restaurant',
    name: 'YÀN (嚴)',
    nameZh: 'YÀN 現代精緻粵法米其林料理',
    typeZh: '當代粵菜 × 前衛法式技法',
    typeEn: 'Contemporary Cantonese × French Haute Cuisine',
    hoursZh: '午餐 12:00 - 14:30 | 晚餐 18:00 - 22:00',
    hoursEn: 'Lunch 12:00 - 14:30 | Dinner 18:00 - 22:00',
    dressCodeZh: '優雅時尚 (Smart Elegant)',
    dressCodeEn: 'Smart Elegant',
    descriptionZh: '由米其林星級主廚親自主理，傳承文華東方對珍稀食材與火候掌控的極致苛求，大膽融入前衛當代法式醬汁與分子美學。在深色胡桃木與璀璨黃銅打造的私密光影中，品味極致舌尖交響。',
    descriptionEn: 'Helmed by a two Michelin-starred maestro, honoring centuries of culinary mastery alongside modern French culinary alchemy in an intimately lit, dramatic dining salon.',
    highlightsZh: ['脆皮乳鴿配黑松露黑蒜濃汁', '低溫慢熬花膠雞蓉金湯', '碳烤伊比利乳豬佐青檸柚子凝膠', '極致葡萄酒窖 1,200 款世界頂級酒莊收藏'],
    highlightsEn: ['Crisp pigeon with black truffle and fermented garlic jus', 'Slow-simmered fish maw broth with golden chicken emulsion', 'Charred Iberico suckling pork with citrus yuzu gel', '1,200-label curated global reserve wine cellar'],
    image: '/src/assets/images/piyan_fine_dining_1793675796993.jpg',
    signatureDishZh: '黑松露極品脆皮乳鴿配花膠魚子金湯',
    signatureDishEn: 'Black Truffle Roast Pigeon & Imperial Fish Maw Caviar Broth'
  },
  {
    id: 'neon-woo-bar',
    name: 'NEON WOO & TERRACE',
    nameZh: 'NEON WOO 高空景觀酒吧與露台',
    typeZh: '潮流調酒實驗室 × 頂層露天音樂酒吧',
    typeEn: 'Mixology Laboratory × Skyline Lounge & DJ Sessions',
    hoursZh: '每日 17:00 - 02:00 (週五週六營業至 03:00)',
    hoursEn: 'Daily 17:00 - 02:00 (Fri & Sat until 03:00)',
    dressCodeZh: '俐落時髦 (Smart Casual & Chic)',
    dressCodeEn: 'Smart Casual & Chic',
    descriptionZh: 'W 靈魂的心臟地帶。坐擁松山與信義區璀璨無瑕的天際夜景，世界頂尖調酒師帶來客製化微醺配方，每晚由國際駐場 DJ 演繹深邃浩室 (Deep House) 與迷幻節拍，引領台北夜生活的風尚新浪潮。',
    descriptionEn: 'The beating pulse of PIYAN. Perched high above Taipei with panoramic city views, cutting-edge molecular mixology, and electrifying live sets curated by resident international DJs.',
    highlightsZh: ['台灣高山烏龍蒸餾琴酒特調「Taipei Neon」', '煙燻紫羅蘭香檳調飲「Electric Violet」', '露天星空沙發卡座與專屬香檳服務', '每週五六專屬頂級電子音樂演出'],
    highlightsEn: ['High mountain Oolong distilled gin signature "Taipei Neon"', 'Smoked violet champagne creation "Electric Violet"', 'VIP open-air starlight cabanas with champagne service', 'Live international DJ residencies every weekend'],
    image: '/src/assets/images/piyan_rooftop_pool_1793675796529.jpg',
    signatureDishZh: 'Taipei Neon (特製高山茶香琴酒 / 荔枝果香 / 佛手柑煙霧)',
    signatureDishEn: 'Taipei Neon (Artisan Tea-Infused Gin / Lychee Nectar / Bergamot Vapor)'
  },
  {
    id: 'the-living-room',
    name: 'THE LIVING ROOM & PATISSERIE',
    nameZh: 'THE LIVING ROOM 奢華客廳與頂級甜品沙龍',
    typeZh: '高級時裝下午茶 × 頂級莊園茶品與香檳',
    typeEn: 'Haute Pâtisserie & High Fashion Afternoon Tea',
    hoursZh: '每日 10:00 - 19:00',
    hoursEn: 'Daily 10:00 - 19:00',
    dressCodeZh: '休閒雅緻 (Casual Elegant)',
    dressCodeEn: 'Casual Elegant',
    descriptionZh: '向文華東方的經典英式午茶致敬，注入當代摩登設計美感。以高級訂製服 (Haute Couture) 為靈感的手工甜點、精選魚子醬小品、搭配產地直送的大吉嶺初摘茶與香檳，是午後極致社交的首選。',
    descriptionEn: 'A couture twist on the grand afternoon tea tradition. Artisanal sweet creations inspired by runway fashion, Imperial caviar canapés, and rare first-flush teas served in an airy, artistic lounge.',
    highlightsZh: ['珠寶盒雙人奢華下午茶饗宴', '手工現作香草千層酥配百香果凝霜', '特級鱘魚子醬佐法式小薄餅', '嚴選世界頂級莊園單品冷萃手沖咖啡'],
    highlightsEn: ['Jewelry Box Couture Afternoon Tea for two', 'Freshly baked mille-feuille with Tahitian vanilla', 'Imperial Sturia Caviar with warm buckwheat blinis', 'Single-origin rare cold brews & vintage champagnes'],
    image: '/src/assets/images/piyan_fine_dining_1793675796993.jpg',
    signatureDishZh: 'PIYAN 經典時裝珠寶雙人下午茶塔',
    signatureDishEn: 'PIYAN Couture Jewelry High Tea Ensemble'
  },
  {
    id: 'wet-bar',
    name: 'WET® BAR & CABANAS',
    nameZh: 'WET® BAR 天際池畔綠洲與私享涼亭',
    typeZh: '戶外池畔休閒餐飲 × 陽光特調',
    typeEn: 'Sun-drenched poolside dining & botanical cocktails',
    hoursZh: '每日 09:00 - 21:00',
    hoursEn: 'Daily 09:00 - 21:00',
    dressCodeZh: '時髦度假休閒 (Resort Chic)',
    dressCodeEn: 'Resort Chic',
    descriptionZh: '毗鄰戶外恆溫無邊際天際泳池。在專屬日光遮陽涼亭內，品嚐現點現作的地中海生魚片薄切 (Crudo)、冷壓熱帶果物冰品與無酒精植萃雞尾酒，白日陽光灑落，夜晚化身為池畔微醺派對。',
    descriptionEn: 'Flanking our outdoor heated skyline infinity pool. Retreat to private cabanas to enjoy fresh crudo, cold-pressed botanical mocktails, and sunset chilled rosés as day transitions to twilight.',
    highlightsZh: ['紅魽生魚薄切佐松露柚子油醋', '純天然冷壓鮮果椰子雪酪雞尾酒', '私人日光遮陽涼亭配備專屬服務鈴', '夕陽香檳金光歡飲時段 (Sunset Golden Hour)'],
    highlightsEn: ['Hamachi crudo with truffle citrus vinaigrette', 'Cold-pressed coconut sorbet cocktail bowls', 'Private daybed cabanas with dedicated call-button service', 'Daily Sunset Golden Hour champagne specials'],
    image: '/src/assets/images/piyan_rooftop_pool_1793675796529.jpg',
    signatureDishZh: '黃鰭鮪魚松露塔塔與池畔特製冷壓椰子調酒',
    signatureDishEn: 'Yellowfin Tuna Truffle Tartare & Chilled Coconut Elixir'
  }
];

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'spa-metropolitan-glow',
    nameZh: '都會排毒煥彩深層芳療 (Metropolitan Detox & Glow)',
    nameEn: 'Metropolitan Detox & Glow Ritual',
    durationMin: 90,
    priceTwd: 8200,
    descriptionZh: '針對都會旅人量身定制。結合天然火山黑石深層溫熱療法與頂級大馬士革玫瑰精油，舒緩肌肉深層緊繃，由內而外喚醒肌膚的光彩與身心活力。',
    descriptionEn: 'Customized for modern urban travelers. Combines heated black volcanic basalt therapy with organic Bulgarian rose essence to release deep-tissue tension and restore radiant vitality.',
    benefitsZh: '深層排毒、舒緩筋膜緊繃、促進血液循環、恢復肌膚透亮光澤',
    benefitsEn: 'Deep detoxification, myofascial release, improved lymphatic drainage, and luminous skin glow'
  },
  {
    id: 'spa-sound-bath',
    nameZh: '天籟水晶頌缽與多維聲波沉浸 (Sound Frequency Healing)',
    nameEn: 'Multidimensional Crystal Sound Bath',
    durationMin: 75,
    priceTwd: 6800,
    descriptionZh: '透過純水晶頌缽與特定 432Hz 諧波共振，撫平大腦 Alpha 腦波，深層釋放長期壓力與焦慮，重拾身心極致的和諧平靜。',
    descriptionEn: 'Through acoustic quartz crystal bowls attuned to 432Hz harmonic frequencies, effortlessly recalibrating brainwave states to eliminate lingering fatigue and mental anxiety.',
    benefitsZh: '深度平靜心智、調理中樞自律神經、提升深度睡眠品質',
    benefitsEn: 'Mental tranquility, parasympathetic realignment, and profound deep restorative sleep'
  },
  {
    id: 'spa-jetlag-recovery',
    nameZh: '時差修復與極致水療循環 (Jet-Lag Recovery Thermal Journey)',
    nameEn: 'Jet-Lag Recovery & Cryo-Thermal Journey',
    durationMin: 120,
    priceTwd: 11800,
    descriptionZh: '專為長途飛行旅客設計。包含高溫草本蒸氣、低溫水療冰池冷熱交替循環，隨後進行 60 分鐘深層釋壓背部與頭部穴位舒壓指壓。',
    descriptionEn: 'Designed for international globetrotters. Features alternating herbal sauna and ice-bath thermal hydrotherapy circuits, followed by a targeted 60-minute acupressure head and spinal massage.',
    benefitsZh: '即刻消除長途飛行疲憊、調節體內生理時鐘、迅速恢復充沛活力',
    benefitsEn: 'Rapid jet-lag recovery, circadian rhythm balancing, and immediate muscular revitalization'
  }
];

export const BESPOKE_SERVICES: BespokeService[] = [
  {
    id: 'service-butler',
    titleZh: '24/7 WHATEVER/WHENEVER® 專屬管家',
    titleEn: '24/7 Whatever/Whenever® Master Butler',
    categoryZh: '頂級專屬款待',
    categoryEn: 'Signature Hospitality',
    descriptionZh: '傳承文華東方的細緻入微與W飯店的無限創意。從清晨手沖咖啡到深夜客房即時調酒，只要合理合法，您的任何渴望皆被悉心實現。',
    descriptionEn: 'Fusing Mandarin Oriental’s unmatched discretion with W’s limitless creative ingenuity. From dawn pourovers to midnight in-suite mixology, your desires are flawlessly fulfilled.',
    icon: 'Sparkles'
  },
  {
    id: 'service-maybach',
    titleZh: 'Rolls-Royce & Maybach 奢華專車接送',
    titleEn: 'Rolls-Royce & Maybach Fleet Transfers',
    categoryZh: '貴賓尊榮交通',
    categoryEn: 'Elite Mobility',
    descriptionZh: '提供桃園機場 (TPE) 與台北松山機場 (TSA) 尊榮停機坪或航廈快速禮遇通關，配備迎賓冷壓香氛毛巾與依雲氣泡水。',
    descriptionEn: 'Seamless tarmac VIP curbside transfers from Taoyuan (TPE) or Songshan (TSA) airports with bespoke chilled scented towels and premium refreshments.',
    icon: 'Car'
  },
  {
    id: 'service-pillow',
    titleZh: '頂級舒眠香氛與 6 款客製枕頭菜單',
    titleEn: 'Bespoke Pillow & Aromatherapy Sleep Menu',
    categoryZh: '深度睡眠修復',
    categoryEn: 'Sleep Styling',
    descriptionZh: '備有瑞士羽絨枕、人體工學凝膠記憶枕、天然有機薰衣草蕎麥枕、抗過敏蠶絲枕等，並由芳療師預先調配客房專屬舒眠芳香精油。',
    descriptionEn: 'Choose from Swiss goose down, ergonomic cooling memory gel, organic lavender buckwheat, or hypoallergenic mulberry silk, tailored with bedtime sleep mists.',
    icon: 'Moon'
  },
  {
    id: 'service-mixologist',
    titleZh: '客房私人調酒師進駐調飲',
    titleEn: 'In-Suite Private Mixologist Experience',
    categoryZh: '微醺私享盛宴',
    categoryEn: 'Private Entertainment',
    descriptionZh: '預約首席調酒師攜帶全套手工調酒推車進入您的套房，現場搖製 3 款以台灣風土與珍稀基酒為基底的訂製雞尾酒。',
    descriptionEn: 'Summon our head mixologist with a mobile artisan cocktail cart directly to your suite salon to craft three customized cocktails using rare local botanicals.',
    icon: 'Wine'
  },
  {
    id: 'service-insider',
    titleZh: 'W Insider 台北隱密藝術與夜行導覽',
    titleEn: 'PIYAN Insider Curated Secret Access',
    categoryZh: '專屬在地探索',
    categoryEn: 'Curated Discovery',
    descriptionZh: '解鎖常人無法進入的當代私人藝術收藏庫、隱藏式私人俱樂部，以及夜間VIP專屬免排隊尊享特權。',
    descriptionEn: 'Unlock door-kept private contemporary art archives, undisclosed speakeasy clubs, and skip-the-line VIP table access throughout Taipei’s nightlife.',
    icon: 'Compass'
  },
  {
    id: 'service-wardrobe',
    titleZh: '行李精緻開箱整理與高級衣物護理',
    titleEn: 'Unpacking Ritual & Couture Garment Care',
    categoryZh: '細緻尊榮打理',
    categoryEn: 'Master Valet',
    descriptionZh: '抵達時由管家小心懸掛整燙晚禮服與西裝，離開時以無酸防塵紙與香氛袋完美收納行李，讓您全心享受假期。',
    descriptionEn: 'Arrive with your evening attire steamed and hand-hung; depart with every garment folded in acid-free tissue paper infused with signature PIYAN cedar scent.',
    icon: 'Shirt'
  }
];

export const EVENTS_DATA = [
  {
    id: 'great-room',
    nameZh: 'THE GREAT ROOM 盛宴大廳',
    nameEn: 'The Great Room Grand Ballroom',
    areaSqm: 880,
    heightM: 7.8,
    capacityCocktail: 650,
    capacityBanquet: 480,
    descriptionZh: '台北市極為罕見的全無柱挑高 7.8 米超奢華空間，配備全彩 360 度環場 LED 沉浸式巨幕與頂級劇院級聲光系統，是名流盛會、高級時尚發表與奢華婚禮的唯一首選。',
    descriptionEn: 'A rare 7.8-meter pillarless ballroom with dynamic 360-degree immersive architectural LED canvases and concert-grade acoustics, designed for prestigious galas and couture weddings.'
  },
  {
    id: 'penthouse-deck',
    nameZh: 'PENTHOUSE SKY DECK 星空天際露台',
    nameEn: 'Penthouse Sky Deck & Terrace',
    areaSqm: 380,
    heightM: 4.5,
    capacityCocktail: 200,
    capacityBanquet: 120,
    descriptionZh: '位於酒店最高樓層，俯瞰整個信義區與台北 101 的壯觀夜景。適合舉辦高階品牌貴賓派對、私人雞尾酒晚宴及浪漫星空證婚典禮。',
    descriptionEn: 'Perched on our highest terrace with unmatched views of the Taipei 101 skyline. The ultimate open-air setting for VIP brand reveals, sunset cocktail galas, and starry wedding ceremonies.'
  },
  {
    id: 'studio-salons',
    nameZh: 'STUDIO 創思沙龍會議中心',
    nameEn: 'The Studio Boardroom Salons',
    areaSqm: 180,
    heightM: 4.0,
    capacityCocktail: 80,
    capacityBanquet: 50,
    descriptionZh: '打破傳統枯燥會議室框架，融合當代藝術陳設、自然天光與無縫多方智能視訊科技，讓商業創見與戰略決策在愉悅與奢華中碰撞迸發。',
    descriptionEn: 'Reinventing boardroom conventions with natural daylight, bespoke modern artworks, and seamless interactive audiovisual systems for executive leadership summits.'
  }
];
