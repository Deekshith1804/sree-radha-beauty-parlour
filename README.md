# Sree Radha Beauty Parlour — Luxury Beauty & Bridal Website

A bespoke, responsive, luxury beauty parlour website for **Sree Radha Beauty Parlour**, featuring beauty care and bridal styling by **D. Sunitha**.

## Business Information
- **Business Name:** Sree Radha Beauty Parlour
- **Beautician:** D. Sunitha
- **Direct Phone:** +91 77029 56873 (tel:+917702956873)
- **WhatsApp:** 917702956873
- **Google Maps Location:** [https://maps.app.goo.gl/VjjDqwagJC9UVhPd6](https://maps.app.goo.gl/VjjDqwagJC9UVhPd6)

## Visual Design Palette
- **Warm Ivory:** `#FFF9F4`
- **Blush Pink:** `#F4DCE1`
- **Dusty Rose:** `#C98791`
- **Deep Wine:** `#6F3546`
- **Champagne Gold:** `#C6A46A`
- **Soft Beige:** `#EDE2D6`

## Typography & Aesthetic
- **Serif Headings:** Cormorant Garamond & Playfair Display with italicized editorial accents.
- **Clean Body Text:** Plus Jakarta Sans with refined line heights and tracking.
- **Ornaments:** Custom SVG floral flourishes, gold foil gradients, arched frames, and delicate corner accents.

## Implemented Sections
1. **Animated Navigation Bar**: Sticky header with brand monogram, responsive navigation links, quick call button, standout appointment CTA, and animated mobile menu drawer.
2. **Editorial Hero Section**: Full-screen layout with word-by-word headline reveal (*"Your Beauty, Our Passion."*), supporting text, beautician badge, dual CTAs, and scroll indicator.
3. **About the Parlour**: *"Beauty That Celebrates You"*, introducing D. Sunitha with thoughtful, client-centered copy, two-column layout, and arched portrait framing.
4. **Curated Beauty Services**: 10 proposed service categories (Bridal Makeup, Party Makeup, Facial & Skincare, Hair Styling, Hair Care, Eyebrow & Threading, Waxing, Manicure & Pedicure, Saree Draping, Beauty Packages), with category filters, hover zoom, and "Enquire Now" auto-selection.
5. **Signature Beauty Experience**: Editorial full-bleed banner (*"Every Occasion Deserves a Beautiful You."*) with WhatsApp consultation action.
6. **Gallery & Lookbook**: Responsive portfolio grid with category filter tabs and interactive modal Lightbox featuring Next/Previous navigation and keyboard controls.
7. **Why Choose Us**: 4 core pillars (*Personalized Beauty Care*, *Attention to Detail*, *A Welcoming Experience*, *Beauty for Every Occasion*) with staggered reveals and champagne gold icons.
8. **Appointment Booking**: Validated booking form that generates a formatted message and launches WhatsApp for direct confirmation, with complete privacy disclosure and telephone fallback.
9. **Contact & Location**: Click-to-call links, direct WhatsApp chat, and Google Maps direction button linked to `https://maps.app.goo.gl/VjjDqwagJC9UVhPd6`.
10. **Luxury Footer & Floating WhatsApp**: Complete navigation, copyright, floral motif, and persistent pulsing WhatsApp button.

## Central Configuration
All business details, services, gallery images, and contact links are stored in:
`src/config/parlour.js` for instant, non-technical editing.

## Local Development

```bash
# Navigate to the project directory
cd ~/Projects/sree-radha-beauty-parlour

# Start live development server
npm run dev
```

Open `http://localhost:3001` (or the port indicated in terminal) in your browser.

## Production Build

```bash
npm run build
```
Production assets are generated in `dist/`.

To test the production build locally:
```bash
npm run preview
```
