/**
 * Sree Radha Beauty Parlour - Central Configuration
 * Easy future editing for all business details, service menus, gallery items, and contact links.
 */

export const BUSINESS_CONFIG = {
  name: 'Sree Radha Beauty Parlour',
  shortName: 'Sree Radha',
  tagline: 'Your Beauty, Our Passion',
  subTagline:
    'Discover your glow with personalized beauty care, elegant styling, and a touch of timeless grace.',
  beautician: 'D. Sunitha',
  beauticianIntro: 'Beauty care by D. Sunitha',
  phone: '+91 77029 56873',
  phoneRaw: '+917702956873',
  whatsappRaw: '917702956873',
  googleMapsUrl: 'https://maps.app.goo.gl/VjjDqwagJC9UVhPd6',
  badgeText: 'BEAUTY • CARE • CONFIDENCE',
}

// 10 Proposed Service Categories (Customizable Menu)
export const SERVICES_DATA = [
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'Occasion & Bridal',
    description:
      'Exquisite, camera-ready bridal makeup curated to celebrate your natural elegance on your most memorable day.',
    details: 'Complete consultation, long-lasting high-definition finish, and personalized bridal styling.',
    image:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature Service',
  },
  {
    id: 'party-makeup',
    name: 'Party Makeup',
    category: 'Occasion & Glamour',
    description:
      'Luminous and radiant makeup looks designed for receptions, sangeets, festive gatherings, and special evenings.',
    details: 'Custom glow, harmonious eye artistry, and refined lip contouring.',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular Choice',
  },
  {
    id: 'facial-skincare',
    name: 'Facial & Skincare',
    category: 'Skincare Wellness',
    description:
      'Deeply nourishing facials and gentle skincare treatments that restore hydration, clarity, and a healthy natural glow.',
    details: 'Gentle cleansing, skin rejuvenation, relaxing facial touch, and tailored mask therapies.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    tag: 'Relaxing Care',
  },
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'Hair Artistry',
    description:
      'From romantic bridal braids and elegant updos to sleek blowouts and festive hairstyles that complete your look.',
    details: 'Customized hair placement, floral accents, traditional buns, and modern texture styling.',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    tag: 'Elegant Finishes',
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    category: 'Hair Wellness',
    description:
      'Revitalizing hair spa therapies, conditioning rituals, and scalp care treatments for soft, glossy, and healthy tresses.',
    details: 'Intensive moisture therapy, scalp massage, and restorative shine treatments.',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    tag: 'Nourishing',
  },
  {
    id: 'eyebrow-threading',
    name: 'Eyebrow & Threading',
    category: 'Precision Grooming',
    description:
      'Gentle and precise eyebrow shaping, upper lip, and facial threading to naturally define and frame your features.',
    details: 'Meticulous symmetry, gentle soothing technique, and clean brow definition.',
    image:
      'https://images.unsplash.com/photo-1588514912908-72782b992151?auto=format&fit=crop&w=800&q=80',
    tag: 'Essential Grooming',
  },
  {
    id: 'waxing',
    name: 'Waxing',
    category: 'Smooth Skin',
    description:
      'Hygienic, smooth, and gentle waxing treatments that leave your skin feeling silky, refreshed, and soft.',
    details: 'Full arms, legs, underarms, and sensitive skin care with soothing post-care application.',
    image:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    tag: 'Hygienic & Smooth',
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    category: 'Nail & Hand Care',
    description:
      'Pampering hand and foot care rituals including nail shaping, gentle exfoliation, and relaxing massage.',
    details: 'Clean cuticle care, aromatic soak, hydrating scrub, and neat polish finish.',
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    tag: 'Pampering Spa',
  },
  {
    id: 'saree-draping',
    name: 'Saree Draping',
    category: 'Traditional Styling',
    description:
      'Flawless traditional and contemporary saree draping styles ensuring graceful pleats, comfort, and all-day hold.',
    details: 'Classic South Indian bridal drape, pleated perfection, festive draping, and secure pin-up.',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    tag: 'Graceful Drapes',
  },
  {
    id: 'beauty-packages',
    name: 'Beauty Packages',
    category: 'Curated Combinations',
    description:
      'Tailored beauty and bridal combination packages designed to prepare you completely for your special milestones.',
    details: 'Custom combinations of facials, grooming, styling, and makeup suited to your schedule.',
    image:
      'https://images.unsplash.com/photo-1512290900672-1f41d9c15852?auto=format&fit=crop&w=800&q=80',
    tag: 'Comprehensive Care',
  },
]

// Gallery Items with Categories
export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Graceful Bridal Artistry',
    category: 'Bridal Looks',
    image:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80',
    caption: 'Luminous bridal finish with timeless elegance and traditional grace.',
  },
  {
    id: 2,
    title: 'Festive Glow & Eye Artistry',
    category: 'Party Makeup',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Radiant occasion makeup crafted for celebrations and receptions.',
  },
  {
    id: 3,
    title: 'Intricate Floral Bridal Braid',
    category: 'Hair Styling',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    caption: 'Delicate hair styling with soft textures and floral framing.',
  },
  {
    id: 4,
    title: 'Dewy Skin & Hydration Ritual',
    category: 'Skincare',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    caption: 'Gentle facial care restoring moisture balance and natural skin clarity.',
  },
  {
    id: 5,
    title: 'Classic South Indian Saree Drape',
    category: 'Bridal Looks',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Crisp pleating and flawless drape for bridal and festive occasions.',
  },
  {
    id: 6,
    title: 'Refined Evening Glamour',
    category: 'Beauty Transformations',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
    caption: 'Subtle contouring and defined eyes that highlight your natural beauty.',
  },
  {
    id: 7,
    title: 'Silky Texture Hair Spa',
    category: 'Hair Styling',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80',
    caption: 'Deep conditioning treatments providing natural gloss and softness.',
  },
  {
    id: 8,
    title: 'Soft Blush Day Styling',
    category: 'Party Makeup',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Lightweight daytime beauty styling with a gentle, breathable finish.',
  },
]

// 4 Core Pillars for "Why Choose Us"
export const PILLARS_DATA = [
  {
    id: 'personal',
    title: 'Personalized Beauty Care',
    description:
      'Every face and occasion is unique. We take the time to understand your personal style and comfort.',
    icon: 'Sparkles',
  },
  {
    id: 'detail',
    title: 'Attention to Detail',
    description:
      'From precise eyebrow shaping to seamless makeup blending, fine craftsmanship is in every touch.',
    icon: 'HeartHandshake',
  },
  {
    id: 'welcoming',
    title: 'A Welcoming Experience',
    description:
      'A calm, warm, and relaxing parlour setting where you can unwind and feel genuinely pampered.',
    icon: 'Smile',
  },
  {
    id: 'occasion',
    title: 'Beauty for Every Occasion',
    description:
      'Thoughtful care suited for your daily self-care rituals, festivals, family functions, and weddings.',
    icon: 'Crown',
  },
]
