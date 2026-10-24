import { Product, Category, Article } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "all",
    name: "All Products",
    slug: "all",
    count: 8,
    description: "Consciously curated essentials for daily living"
  },
  {
    id: "skincare",
    name: "Skincare",
    slug: "skincare",
    count: 2,
    description: "Pure plant oils and natural body care"
  },
  {
    id: "home",
    name: "Home",
    slug: "home",
    count: 3,
    description: "Timeless sustainable wares for quiet spaces"
  },
  {
    id: "bath",
    name: "Bath",
    slug: "bath",
    count: 3,
    description: "Gentle natural brushes and calming rituals"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    slug: "lifestyle",
    count: 4,
    description: "Reusable companions for mindful moments"
  },
  {
    id: "kitchen",
    name: "Kitchen",
    slug: "kitchen",
    count: 2,
    description: "Zero plastic tools for conscious cooking"
  },
  {
    id: "new",
    name: "New",
    slug: "new",
    count: 3,
    description: "Our freshest arrivals for conscious routines"
  },
  {
    id: "onthego",
    name: "On the Go",
    slug: "onthego",
    count: 2,
    description: "Lightweight essentials crafted for travel"
  },
  {
    id: "sale",
    name: "Sale",
    slug: "sale",
    count: 2,
    description: "Selected archive treasures at special value"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod_1",
    name: "Organic Cotton Mesh Bags",
    slug: "organic_cotton_mesh_bags",
    price: 5.0,
    originalPrice: 7.0,
    currency: "€",
    category: "home",
    description: "Breathable raw organic cotton produce sacks crafted to replace single use plastic packaging during farmers market visits and grocery runs.",
    shortDescription: "Reusable certified organic produce bags",
    image: "/assets/prod-mesh-bags.jpg",
    gallery: ["/assets/prod-mesh-bags.jpg"],
    inStock: true,
    rating: 4.9,
    reviewsCount: 38,
    details: [
      "100 percent GOTS certified unbleached cotton",
      "Sturdy drawstring closure with wooden bead",
      "Machine washable on gentle cold cycle",
      "Biodegradable at end of life cycle"
    ],
    materials: "Organic Cotton",
    dimensions: "30 cm by 20 cm"
  },
  {
    id: "prod_2",
    name: "Bamboo Toothbrush",
    slug: "bamboo_toothbrush",
    price: 5.5,
    originalPrice: 6.5,
    currency: "€",
    category: "bath",
    badge: "Best Seller",
    description: "Sustainably harvested moso bamboo handle paired with soft castor bean oil bristles for gentle enamel safe oral care.",
    shortDescription: "Plant based compostable handle brush",
    image: "/assets/prod-bamboo-toothbrush.jpg",
    gallery: ["/assets/prod-bamboo-toothbrush.jpg", "/assets/sec-4.jpe"],
    inStock: true,
    rating: 5.0,
    reviewsCount: 94,
    details: [
      "Ergonomic handle carved from organic bamboo",
      "BPA free castor oil nylon bristles",
      "Water resistant heat treated finish",
      "Individually boxed in recyclable paper"
    ],
    materials: "Moso Bamboo and Castor Bristles",
    dimensions: "19 cm length"
  },
  {
    id: "prod_3",
    name: "Wood Brush",
    slug: "wood_brush",
    price: 7.0,
    originalPrice: 9.0,
    currency: "€",
    category: "bath",
    description: "Ergonomic palm held exfoliating body brush crafted from untreated FSC beech wood with medium tampico plant fiber bristles.",
    shortDescription: "Ergonomic dry brush for gentle skin renewal",
    image: "/assets/prod-wood-brush.png",
    gallery: ["/assets/prod-wood-brush.png"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 42,
    details: [
      "Sustainably sourced German beech wood",
      "Natural sisal and tampico fiber bristles",
      "Stimulates lymphatic circulation and smooths skin",
      "Dries quickly when kept in ventilated areas"
    ],
    materials: "FSC Beech Wood and Tampico",
    dimensions: "8 cm diameter"
  },
  {
    id: "prod_4",
    name: "Natural Pumice Stone",
    slug: "natural_pumice_stone",
    price: 6.0,
    currency: "€",
    category: "bath",
    description: "Authentic porous volcanic pumice stone fitted with a natural wooden handle for gentle callused skin softening in warm baths.",
    shortDescription: "Pure volcanic rock with ergonomic timber handle",
    image: "/assets/prod-pumice-stone.jpg",
    gallery: ["/assets/prod-pumice-stone.jpg"],
    inStock: true,
    rating: 4.7,
    reviewsCount: 26,
    details: [
      "Formed from natural cooling volcanic lava",
      "Smooth wooden protective rim and grip",
      "Gentle natural abrasion without microplastics",
      "Long lasting durable natural bathroom essential"
    ],
    materials: "Volcanic Pumice and Wood",
    dimensions: "12 cm length"
  },
  {
    id: "prod_5",
    name: "Compostable Kitchen Sponges",
    slug: "compostable_kitchen_sponges",
    price: 7.0,
    currency: "€",
    category: "kitchen",
    description: "Plant cellulose kitchen sponge with gentle wavy contour designed for zero plastic dishwashing and household wiping.",
    shortDescription: "Completely compostable plant scrub sponge",
    image: "/assets/prod-kitchen-sponges.jpg",
    gallery: ["/assets/prod-kitchen-sponges.jpg"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 51,
    details: [
      "Grown naturally without pesticides",
      "Softens pleasantly in warm water",
      "Completely home compostable after months of use",
      "Natural gentle foaming texture"
    ],
    materials: "100 percent Luffa Plant",
    dimensions: "10 cm by 7 cm"
  },
  {
    id: "prod_6",
    name: "Stainless Steel Water Flask",
    slug: "stainless_steel_water_flask",
    price: 18.0,
    originalPrice: 22.0,
    currency: "€",
    category: "onthego",
    description: "Single wall food grade stainless steel drink vessel with loop cap and leak proof silicone seal for active hydration anywhere.",
    shortDescription: "Timeless leak proof everyday carry flask",
    image: "/assets/prod-steel-flask.jpg",
    gallery: ["/assets/prod-steel-flask.jpg"],
    inStock: true,
    rating: 4.9,
    reviewsCount: 67,
    details: [
      "Premium 18 8 food safe stainless steel",
      "No internal coating or plastic lining",
      "Carrying loop fits standard carabiners",
      "Dishwasher safe body with easy rinse cap"
    ],
    materials: "18 8 Food Grade Steel",
    dimensions: "750 ml capacity"
  },
  {
    id: "prod_7",
    name: "Ceramic Bath Dish",
    slug: "ceramic_bath_dish",
    price: 14.0,
    currency: "€",
    category: "home",
    description: "Hand thrown stoneware tray with matte speckle glaze designed to keep solid shampoo bars and cleansing soaps aerated.",
    shortDescription: "Studio ceramic soap draining rest",
    image: "/assets/prod-ceramic-dish.jpg",
    gallery: ["/assets/prod-ceramic-dish.jpg"],
    inStock: true,
    rating: 5.0,
    reviewsCount: 19,
    details: [
      "Stoneware clay fired at high temperature",
      "Lead free matte reactive glaze",
      "Water drainage ridges prevent soggy bars",
      "Handmade in small studio batches"
    ],
    materials: "Glazed Stoneware Clay",
    dimensions: "11 cm by 8 cm"
  },
  {
    id: "prod_8",
    name: "Natural Loofah Bath Pouch",
    slug: "natural_loofah_bath_pouch",
    price: 6.5,
    currency: "€",
    category: "bath",
    badge: "New",
    description: "Sustainably cultivated natural luffa plant fiber pouch designed for gentle body exfoliation and foaming bar soap aeration in warm water.",
    shortDescription: "Organic plant fiber body exfoliating pouch",
    image: "/assets/prod-loofah-pouch.jpg",
    gallery: ["/assets/prod-loofah-pouch.jpg"],
    inStock: true,
    rating: 4.9,
    reviewsCount: 31,
    details: [
      "100 percent natural biodegradable plant fiber",
      "Built-in cotton loop for hanging and drying",
      "Softens pleasantly in warm shower water",
      "Stimulates skin circulation naturally"
    ],
    materials: "100 percent Natural Luffa Plant",
    dimensions: "14 cm by 10 cm"
  }
];

export const FEATURED_HERO_PRODUCT: Product = {
  id: "prod_featured",
  name: "Bamboo Toothbrush Set",
  slug: "bamboo_toothbrush_set",
  price: 12.0,
  originalPrice: 15.0,
  currency: "$",
  category: "bath",
  badge: "eco friendly",
  description: "A cleaner planet, one brush at a time. Crafted with sustainably harvested bamboo and soft plant based bristles for your daily ritual.",
  shortDescription: "A cleaner planet, one brush at a time.",
  image: "/assets/sec-4.jpe",
  gallery: ["/assets/sec-4.jpe", "/assets/prod-bamboo-toothbrush.jpg"],
  inStock: true,
  rating: 5.0,
  reviewsCount: 112,
  details: [
    "Four individually numbered bamboo toothbrushes",
    "Soft wave bristles infused with white charcoal",
    "Fully biodegradable packaging and handles",
    "Designed for three months of daily oral care each"
  ],
  materials: "Moso Bamboo and Castor Oil Fibers",
  dimensions: "Box of 4 brushes"
};

export const ARTICLES: Article[] = [
  {
    id: "art_1",
    title: "Morning Rituals for Grounded Days",
    slug: "morning_rituals_for_grounded_days",
    excerpt: "How small intentional steps in the first hour of waking can transform your calm throughout the day.",
    content: "When dawn breaks gently into your room, resist the impulse to check glowing screens. Instead, drink cool water from a ceramic vessel and step outside. Taking five deliberate breaths of fresh air settles the nervous system. By creating tactile, analog routines with natural materials, your home turns into a sanctuary of sustained peace.",
    category: "Mindfulness",
    readTime: "4 min read",
    date: "October 18 2025",
    image: "/assets/journal-1.jpg"
  },
  {
    id: "art_2",
    title: "The Art of Living with Less Waste",
    slug: "the_art_of_living_with_less_waste",
    excerpt: "Practical philosophies for swapping disposable consumer plastics with durable natural alternatives.",
    content: "Transitioning toward minimal footprint living is not about absolute perfection. It is about steady conscious choices. Swapping single use grocery wrapping for woven organic cotton sacks, choosing wood bristled cleaning brushes, and storing liquids in reusable steel containers are quiet actions that cumulatively reshape our planet.",
    category: "Sustainability",
    readTime: "6 min read",
    date: "October 02 2025",
    image: "/assets/journal-2.jpg"
  },
  {
    id: "art_3",
    title: "Caring for Natural Timber and Bamboo",
    slug: "caring_for_natural_timber_and_bamboo",
    excerpt: "Simple methods to clean, maintain and lengthen the lifespan of your wooden bath essentials.",
    content: "Natural plant fibers and timbers age with grace when treated with consideration. After using your body brush or bamboo toothbrush, shake off excess water and place it upright in a dry ventilated space. A drop of organic linseed or olive oil rubbed onto dry handles once every season protects against moisture and highlights natural grain.",
    category: "Rituals",
    readTime: "3 min read",
    date: "September 24 2025",
    image: "/assets/journal-3.jpg"
  }
];

export async function getProducts(category?: string, query?: string): Promise<Product[]> {
  let list = [...PRODUCTS];
  if (category && category !== "all") {
    list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }
  return list;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  if (id === FEATURED_HERO_PRODUCT.id || id === FEATURED_HERO_PRODUCT.slug) {
    return FEATURED_HERO_PRODUCT;
  }
  return PRODUCTS.find((p) => p.id === id || p.slug === id);
}

export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

export async function getArticles(): Promise<Article[]> {
  return ARTICLES;
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  return ARTICLES.find((a) => a.id === id || a.slug === id);
}
